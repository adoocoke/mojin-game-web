import { createRouter, publicQuery } from "./middleware";
import { versusRouter } from "./versus";
import { statsRouter } from "./stats";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  versus: versusRouter,
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
