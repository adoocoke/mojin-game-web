// ====================== 大战场官方活动镜像 ======================
// 对应官方 S11 季中全面战场活动群：群星行动「贯穿封锁」挑战、战场畅玩月、
// 空地突袭、逐命十字、畅玩月保分、洲末军火库。
// 名称/窗口引用官方事实；任务数值、奖励与实现均为原创。

const KEY = 'mojin_warevents_v1'

export interface WarEventsSave {
  games: number            // 畅玩月：累计完成对局
  wins: number             // 贯穿封锁：累计胜场
  kills: number            // 贯穿封锁：累计击杀
  sniperWins: number       // 逐命十字：狙击对抗胜场
  loginDays: string[]      // 洲末军火库：累计登录日（YYYY-MM-DD）
  claimed: string[]        // 已领取的奖励 id
}

function def(): WarEventsSave {
  return { games: 0, wins: 0, kills: 0, sniperWins: 0, loginDays: [], claimed: [] }
}

export function loadWarEvents(): WarEventsSave {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...def(), ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return def()
}

export function saveWarEvents(s: WarEventsSave) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

// —— 各活动窗口（对齐官方档期） ——
export const WAR_EVENT_WINDOWS = {
  fengchuan: { start: '2026-10-16T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },  // 群星行动·贯穿封锁
  changwanyue: { start: '2026-10-10T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 战场畅玩月
  kongdi: { start: '2026-10-10T00:00:00+08:00', end: '2026-10-22T23:59:59+08:00' },      // 空地突袭
  zhumling: { start: '2026-10-10T00:00:00+08:00', end: '2026-10-22T23:59:59+08:00' },    // 逐命十字
  baofen: { start: '2026-10-16T00:00:00+08:00', end: '2026-10-18T23:59:59+08:00' },      // 畅玩月保分（周末）
  junhuoku: { start: '2026-10-16T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },    // 洲末军火库
} as const

export type WarEventId = keyof typeof WAR_EVENT_WINDOWS

export function warEventActive(id: WarEventId, now = Date.now()): boolean {
  const w = WAR_EVENT_WINDOWS[id]
  return now >= Date.parse(w.start) && now <= Date.parse(w.end)
}

// —— 奖励档位定义 ——
export interface WarReward {
  id: string
  event: WarEventId
  icon: string
  name: string
  need: number
  progress: (s: WarEventsSave) => number
  rewardText: string
}

export const WAR_REWARDS: WarReward[] = [
  // 群星行动「贯穿封锁」：胜场 + 击杀双任务，奖励哈夫克军工新配件（对齐官方奖励性质）
  { id: 'fc_win', event: 'fengchuan', icon: '🏆', name: '贯穿封锁 · 胜利 3 场', need: 3, progress: s => s.wins, rewardText: 'HVK旋风枪身系统 ×1' },
  { id: 'fc_kill', event: 'fengchuan', icon: '🎯', name: '贯穿封锁 · 累计 40 杀', need: 40, progress: s => s.kills, rewardText: 'HVK旋风强化导气 ×1' },
  // 战场畅玩月：累计完成对局（官方奖励为 LAV-G1 捣蛋鬼载具外观，本游戏镜像为同名枪皮，配色原创）
  { id: 'cw_3', event: 'changwanyue', icon: '🎮', name: '畅玩月 · 完成 3 场', need: 3, progress: s => s.games, rewardText: '10,000 金币' },
  { id: 'cw_6', event: 'changwanyue', icon: '🎮', name: '畅玩月 · 完成 6 场', need: 6, progress: s => s.games, rewardText: '20,000 金币' },
  { id: 'cw_10', event: 'changwanyue', icon: '🚜', name: '畅玩月 · 完成 10 场', need: 10, progress: s => s.games, rewardText: '枪皮「捣蛋鬼」' },
  // 逐命十字：狙击对抗模式胜场
  { id: 'zj_win', event: 'zhumling', icon: '🔭', name: '逐命十字 · 狙击对抗胜 2 场', need: 2, progress: s => s.sniperWins, rewardText: '15,000 金币' },
  // 洲末军火库：累计登录天数
  { id: 'jh_d1', event: 'junhuoku', icon: '📦', name: '洲末军火库 · 登录 1 天', need: 1, progress: s => s.loginDays.length, rewardText: '洲末畅玩自选包 ×1' },
  { id: 'jh_d2', event: 'junhuoku', icon: '📦', name: '洲末军火库 · 登录 2 天', need: 2, progress: s => s.loginDays.length, rewardText: '洲末上分自选包 ×1' },
  { id: 'jh_d3', event: 'junhuoku', icon: '📦', name: '洲末军火库 · 登录 3 天', need: 3, progress: s => s.loginDays.length, rewardText: '洲末畅玩自选包 ×1 + 8,000 金币' },
]

/** 大战场每日登录记录（进入大战场页面即记） */
export function markWarLogin() {
  const s = loadWarEvents()
  const today = new Date().toISOString().slice(0, 10)
  if (!s.loginDays.includes(today)) {
    s.loginDays.push(today)
    saveWarEvents(s)
  }
}

/** 大战场对局结束进度上报 */
export function reportWarGame(result: 'win' | 'lose' | 'draw', kills: number, sniperMode: boolean) {
  const s = loadWarEvents()
  s.games++
  s.kills += kills
  if (result === 'win') {
    s.wins++
    if (sniperMode) s.sniperWins++
  }
  saveWarEvents(s)
}

/** 领取奖励：返回奖励发放描述，未完成/已领返回 null */
export function claimWarReward(id: string): { items?: string[]; gold?: number; skin?: string; vehicleSkin?: string } | null {
  const r = WAR_REWARDS.find(w => w.id === id)
  if (!r) return null
  const s = loadWarEvents()
  if (s.claimed.includes(id)) return null
  if (r.progress(s) < r.need) return null
  s.claimed.push(id)
  saveWarEvents(s)
  switch (id) {
    case 'fc_win': return { items: ['at_hvk_body'] }
    case 'fc_kill': return { items: ['at_hvk_gas'] }
    case 'cw_3': return { gold: 10000 }
    case 'cw_6': return { gold: 20000 }
    case 'cw_10': return { skin: 'sk_trickster', vehicleSkin: 'vt_trickster' }
    case 'zj_win': return { gold: 15000 }
    case 'jh_d1': return { items: ['ev_warpack'] }
    case 'jh_d2': return { items: ['ev_warpack'] }
    case 'jh_d3': return { items: ['ev_warpack'], gold: 8000 }
    default: return null
  }
}
