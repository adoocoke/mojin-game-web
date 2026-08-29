import {
  mysqlTable,
  varchar,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";

/** 匿名玩家（浏览器生成的 playerId，用于统计「玩过网站的人数」） */
export const players = mysqlTable("players", {
  id: varchar("id", { length: 64 }).primaryKey(),
  firstSeen: timestamp("first_seen").notNull().defaultNow(),
  lastSeen: timestamp("last_seen").notNull().defaultNow(),
  visits: int("visits").notNull().default(1),
});
