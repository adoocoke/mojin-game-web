import { vsClient } from "./net";
import { getPlayerId } from "./playerId";

export interface PlayerStats {
  totalPlayers: number;
  isNew?: boolean;
}

/** 大厅加载时登记一次，返回全站累计玩过人数 */
export async function pingPlayerStats(): Promise<PlayerStats> {
  const playerId = getPlayerId();
  const res = await vsClient.stats.ping.mutate({ playerId });
  return res;
}

export async function fetchPlayerTotal(): Promise<number> {
  const res = await vsClient.stats.total.query();
  return res.totalPlayers;
}
