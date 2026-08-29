import { z } from "zod";
import { eq, sql } from "drizzle-orm";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { players } from "@db/schema";
import { env } from "./lib/env";

type Row = { firstSeen: number; lastSeen: number; visits: number };

/** 无数据库时的进程内兜底（开发环境 / DB 未配） */
const mem = new Map<string, Row>();

function dbReady() {
  return Boolean(env.databaseUrl);
}

async function upsertPlayer(id: string): Promise<boolean> {
  const now = Date.now();
  if (!dbReady()) {
    const existed = mem.has(id);
    const prev = mem.get(id);
    mem.set(id, {
      firstSeen: prev?.firstSeen ?? now,
      lastSeen: now,
      visits: (prev?.visits ?? 0) + 1,
    });
    return !existed;
  }

  const db = getDb();
  const existing = await db.select({ id: players.id }).from(players).where(eq(players.id, id)).limit(1);
  const isNew = existing.length === 0;
  if (isNew) {
    await db.insert(players).values({ id, visits: 1 });
  } else {
    await db
      .update(players)
      .set({ lastSeen: new Date(), visits: sql`${players.visits} + 1` })
      .where(eq(players.id, id));
  }
  return isNew;
}

async function countPlayers(): Promise<number> {
  if (!dbReady()) return mem.size;
  const db = getDb();
  const rows = await db.select({ c: sql<number>`count(*)` }).from(players);
  const raw = rows[0]?.c ?? 0;
  return typeof raw === "number" ? raw : Number(raw) || 0;
}

export const statsRouter = createRouter({
  /** 大厅上报：登记匿名玩家并返回累计人数 */
  ping: publicQuery
    .input(z.object({ playerId: z.string().min(8).max(64) }))
    .mutation(async ({ input }) => {
      try {
        const isNew = await upsertPlayer(input.playerId);
        const totalPlayers = await countPlayers();
        return { totalPlayers, isNew };
      } catch (err) {
        console.error("[stats.ping]", err);
        // DB 故障时退回内存，保证大厅不崩
        const existed = mem.has(input.playerId);
        const prev = mem.get(input.playerId);
        const now = Date.now();
        mem.set(input.playerId, {
          firstSeen: prev?.firstSeen ?? now,
          lastSeen: now,
          visits: (prev?.visits ?? 0) + 1,
        });
        return { totalPlayers: mem.size, isNew: !existed };
      }
    }),

  /** 只读：当前累计玩过人数 */
  total: publicQuery.query(async () => {
    try {
      return { totalPlayers: await countPlayers() };
    } catch (err) {
      console.error("[stats.total]", err);
      return { totalPlayers: mem.size };
    }
  }),
});
