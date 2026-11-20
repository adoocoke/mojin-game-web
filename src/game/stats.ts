import { vsClient } from "./net";
import { getPlayerId } from "./playerId";

export interface PlayerStats {
  totalPlayers: number;
  isNew?: boolean;
}

/** 大厅加载时登记一次，返回全站累计玩过人数 */
export async function pingPlayerStats(): Promise<PlayerStats> {
  // GitHub Pages / 本地静态预览没有后端统计接口：直接走本地单机展示，避免无意义 POST 报错
  if (typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.endsWith('github.io'))) {
    throw new Error('static deployment')
  }
  const playerId = getPlayerId();
  const res = await vsClient.stats.ping.mutate({ playerId });
  return res;
}

export async function fetchPlayerTotal(): Promise<number> {
  const res = await vsClient.stats.total.query();
  return res.totalPlayers;
}
