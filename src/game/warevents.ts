// ====================== 大战场官方活动镜像 ======================
// 对应官方 S11 季中全面战场活动群：群星行动「贯穿封锁」挑战、战场畅玩月、
// 空地突袭、逐命十字、畅玩月保分、洲末军火库；
// 以及 2026-10-22 公告批次：畅玩月「狂欢加码Ⅰ/Ⅱ」「超载焕新」「钢铁洪流再临」、
// 群星行动：绝地反击、黑潮挑战（等价镜像为全模式爆炸物击杀）。
// 名称/窗口引用官方事实；任务数值、奖励与实现均为原创。

import { addPlayTokens, loadTrickster, saveTrickster } from './trickster'

const KEY = 'mojin_warevents_v1'

export interface WarEventsSave {
  games: number            // 畅玩月：累计完成对局
  wins: number             // 贯穿封锁：累计胜场
  kills: number            // 贯穿封锁：累计击杀
  sniperWins: number       // 逐命十字：狙击对抗胜场
  loginDays: string[]      // 洲末军火库：累计登录日（YYYY-MM-DD）
  claimed: string[]        // 已领取的奖励 id
  closeKills: number       // 狂欢加码Ⅰ：近距离武器击杀（冲锋枪/霰弹枪/手枪/近战）
  farKills: number         // 狂欢加码Ⅱ：远程武器击杀（射手步枪/狙击枪）
  vehKills: number         // 钢铁洪流再临：驾驶载具击杀
  vehDestroyed: number     // 钢铁洪流再临：击毁敌方载具
  adGames: number          // 超载焕新：攻防战（超载等价镜像）完成对局
  exKills: number          // 黑潮挑战：爆炸物击杀（全模式）
  jdDone: string[]         // 群星行动：绝地反击——已完成任务 id
  exKills2: number         // 黑潮挑战Ⅱ：爆炸物击杀（窗口期内计数）
  zwGames: number          // 群星行动：战线未止——窗口期内完成对局
  zwKills: number          // 战线未止：窗口期内击杀
  zwWins: number           // 战线未止：窗口期内胜场
  zwFarKills: number       // 战线未止：窗口期内远程击杀
  zwVehKills: number       // 战线未止：窗口期内载具击杀
  zwVehDestroyed: number   // 战线未止：窗口期内击毁载具
  zwDone: string[]         // 战线未止：已完成任务 id
  d0Games: number          // 黑潮赛季补给：窗口期内累计对局（全模式等价镜像）
  d0Claimed: string[]      // 黑潮赛季补给：已领取档位 id
}

function def(): WarEventsSave {
  return { games: 0, wins: 0, kills: 0, sniperWins: 0, loginDays: [], claimed: [],
    closeKills: 0, farKills: 0, vehKills: 0, vehDestroyed: 0, adGames: 0, exKills: 0, jdDone: [],
    exKills2: 0, zwGames: 0, zwKills: 0, zwWins: 0, zwFarKills: 0, zwVehKills: 0, zwVehDestroyed: 0,
    zwDone: [], d0Games: 0, d0Claimed: [] }
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
  kuanghuan1: { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },  // 畅玩月：狂欢加码（近距离作战）
  kuanghuan2: { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },  // 畅玩月：狂欢加码Ⅱ（远程作战）
  overload: { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },    // 畅玩月：超载焕新（攻防战+新图摩格旧城区）
  steel: { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },       // 畅玩月：钢铁洪流再临（载具战）
  heichao: { start: '2026-10-23T00:00:00+08:00', end: '2026-10-29T23:59:59+08:00' },     // 黑潮挑战（黑潮爆破，等价镜像）
  // ===== 2026-10-29 公告批次 =====
  heichao2: { start: '2026-10-30T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },    // 黑潮挑战Ⅱ（黑潮爆破，等价镜像）
  zhanxian: { start: '2026-10-30T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' },    // 群星行动：战线未止（全面战场）
  heichaoS: { start: '2026-09-27T09:00:00+08:00', end: '2026-11-25T23:59:59+08:00' },    // 黑潮赛季补给（D0 赛季累计，全模式等价镜像）
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
  // ===== 2026-10-22 公告批次 =====
  // 畅玩月：狂欢加码——近距离作战挑战（冲锋枪/霰弹枪/手枪/近战击杀）
  { id: 'kh1_15', event: 'kuanghuan1', icon: '🔪', name: '狂欢加码 · 近战系 15 杀', need: 15, progress: s => s.closeKills, rewardText: '畅玩代币 ×8' },
  { id: 'kh1_40', event: 'kuanghuan1', icon: '🔪', name: '狂欢加码 · 近战系 40 杀', need: 40, progress: s => s.closeKills, rewardText: '畅玩代币 ×16' },
  // 畅玩月：狂欢加码Ⅱ——远程作战挑战（射手步枪/狙击枪击杀）
  { id: 'kh2_10', event: 'kuanghuan2', icon: '🎯', name: '狂欢加码Ⅱ · 远程 10 杀', need: 10, progress: s => s.farKills, rewardText: '畅玩代币 ×8' },
  { id: 'kh2_30', event: 'kuanghuan2', icon: '🎯', name: '狂欢加码Ⅱ · 远程 30 杀', need: 30, progress: s => s.farKills, rewardText: '畅玩代币 ×16' },
  // 畅玩月：超载焕新——攻防战（超载等价镜像）完成对局
  { id: 'ol_3', event: 'overload', icon: '🔁', name: '超载焕新 · 攻防战 3 场', need: 3, progress: s => s.adGames, rewardText: '畅玩代币 ×10' },
  // 畅玩月：钢铁洪流再临——载具战
  { id: 'st_kill', event: 'steel', icon: '🛡️', name: '钢铁洪流 · 载具击杀 10', need: 10, progress: s => s.vehKills, rewardText: '畅玩代币 ×8' },
  { id: 'st_des', event: 'steel', icon: '💥', name: '钢铁洪流 · 击毁载具 3', need: 3, progress: s => s.vehDestroyed, rewardText: '畅玩代币 ×16' },
  // 黑潮挑战（黑潮爆破等价镜像：全模式爆炸物击杀）
  { id: 'hc_5', event: 'heichao', icon: '💣', name: '黑潮挑战 · 爆炸物 5 杀', need: 5, progress: s => s.exKills, rewardText: '捣蛋代币 ×6' },
  { id: 'hc_15', event: 'heichao', icon: '💣', name: '黑潮挑战 · 爆炸物 15 杀', need: 15, progress: s => s.exKills, rewardText: '捣蛋代币 ×12' },
  // ===== 2026-10-29 公告批次 =====
  // 黑潮挑战Ⅱ：爆炸物击杀（官方奖励为糖果代币，等价镜像为捣蛋代币，与捣蛋鬼商店共用）
  { id: 'hc2_8', event: 'heichao2', icon: '💣', name: '黑潮挑战Ⅱ · 爆炸物 8 杀', need: 8, progress: s => s.exKills2, rewardText: '捣蛋代币 ×8' },
  { id: 'hc2_20', event: 'heichao2', icon: '💣', name: '黑潮挑战Ⅱ · 爆炸物 20 杀', need: 20, progress: s => s.exKills2, rewardText: '捣蛋代币 ×16' },
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
export function reportWarGame(result: 'win' | 'lose' | 'draw', kills: number, sniperMode: boolean, warMode: 'tdm' | 'ad' = 'tdm') {
  const s = loadWarEvents()
  s.games++
  s.kills += kills
  if (warMode === 'ad') s.adGames++ // 超载焕新：攻防战场次
  if (result === 'win') {
    s.wins++
    if (sniperMode) s.sniperWins++
  }
  if (warEventActive('zhanxian')) { // 群星行动：战线未止——窗口期内独立计数
    s.zwGames++
    s.zwKills += kills
    if (result === 'win') s.zwWins++
  }
  saveWarEvents(s)
}

/** 击杀分类上报（大战场）：近距离/远程/载具击杀/击毁载具；爆炸物击杀全模式计入黑潮挑战 */
export type WarKillKind = 'close' | 'far' | 'vehicle' | 'vehDestroy' | 'explosive'
export function reportWarKill(kind: WarKillKind) {
  const s = loadWarEvents()
  if (kind === 'close') s.closeKills++
  else if (kind === 'far') { s.farKills++; if (warEventActive('zhanxian')) s.zwFarKills++ }
  else if (kind === 'vehicle') { s.vehKills++; if (warEventActive('zhanxian')) s.zwVehKills++ }
  else if (kind === 'vehDestroy') { s.vehDestroyed++; if (warEventActive('zhanxian')) s.zwVehDestroyed++ }
  else { s.exKills++; if (warEventActive('heichao2')) s.exKills2++ }
  saveWarEvents(s)
}

/** 黑潮赛季补给：窗口期内每完成一局（烽火/大战场等价镜像黑潮爆破对局）累计 +1 */
export function reportD0Game() {
  if (!warEventActive('heichaoS')) return
  const s = loadWarEvents()
  s.d0Games++
  saveWarEvents(s)
}

/** 领取奖励：返回奖励发放描述，未完成/已领返回 null */
export function claimWarReward(id: string): { items?: string[]; gold?: number; skin?: string; vehicleSkin?: string; trickTokens?: number; playTokens?: number } | null {
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
    case 'kh1_15': return { playTokens: 8 }
    case 'kh1_40': return { playTokens: 16 }
    case 'kh2_10': return { playTokens: 8 }
    case 'kh2_30': return { playTokens: 16 }
    case 'ol_3': return { playTokens: 10 }
    case 'st_kill': return { playTokens: 8 }
    case 'st_des': return { playTokens: 16 }
    case 'hc_5': return { trickTokens: 6 }
    case 'hc_15': return { trickTokens: 12 }
    case 'hc2_8': return { trickTokens: 8 }
    case 'hc2_20': return { trickTokens: 16 }
    default: return null
  }
}

// ===================== 群星行动：绝地反击（阶段任务线） =====================
// 官方规则：按作战风格选择任务线突破，完成上阶段至少 1 个核心任务解锁下阶段；
// 完成本周核心任务得 全地形车-绿沙（载具涂装）、图灵砖；累计完成一定数量任务得【行动补给箱】。
export interface JdTask {
  id: string
  stage: number          // 0/1/2
  icon: string
  name: string
  need: number
  progress: (s: WarEventsSave) => number
  rewardText: string
}

export const JD_TASKS: JdTask[] = [
  // 第一阶段
  { id: 'jd1a', stage: 0, icon: '🎮', name: '绝地反击Ⅰ · 完成 2 场大战场', need: 2, progress: s => s.games, rewardText: '畅玩代币 ×8' },
  { id: 'jd1b', stage: 0, icon: '🎯', name: '绝地反击Ⅰ · 累计 10 杀', need: 10, progress: s => s.kills, rewardText: '畅玩代币 ×8' },
  // 第二阶段
  { id: 'jd2a', stage: 1, icon: '🏆', name: '绝地反击Ⅱ · 胜利 1 场', need: 1, progress: s => s.wins, rewardText: '畅玩代币 ×10' },
  { id: 'jd2b', stage: 1, icon: '🚙', name: '绝地反击Ⅱ · 载具击杀 5', need: 5, progress: s => s.vehKills, rewardText: '畅玩代币 ×10' },
  // 第三阶段（本周核心任务）
  { id: 'jd3a', stage: 2, icon: '🔭', name: '绝地反击Ⅲ · 远程 15 杀', need: 15, progress: s => s.farKills, rewardText: '载具涂装「绿沙」+ 图灵砖 ×1' },
  { id: 'jd3b', stage: 2, icon: '💥', name: '绝地反击Ⅲ · 击毁载具 2', need: 2, progress: s => s.vehDestroyed, rewardText: '载具涂装「绿沙」+ 图灵砖 ×1' },
]

/** 累计完成 4 个任务额外发放【行动补给箱】（官方：累计完成任务可得行动补给箱） */
export const JD_BOX_NEED = 4

/** 阶段是否已解锁：第一阶段始终解锁；其余阶段需上阶段至少完成 1 个任务 */
export function jdStageUnlocked(stage: number, s: WarEventsSave): boolean {
  if (stage <= 0) return true
  return JD_TASKS.some(t => t.stage === stage - 1 && s.jdDone.includes(t.id))
}

/** 领取绝地反击任务奖励并直接入账；返回发放描述文本，失败返回 null */
export function claimJdTask(id: string): { text: string; vehicleSkin?: string; items?: string[]; box?: boolean } | null {
  const t = JD_TASKS.find(x => x.id === id)
  if (!t) return null
  const s = loadWarEvents()
  if (s.jdDone.includes(id)) return null
  if (!jdStageUnlocked(t.stage, s)) return null
  if (t.progress(s) < t.need) return null
  s.jdDone.push(id)
  saveWarEvents(s)
  let box = false
  if (t.stage === 2) {
    // 本周核心任务：载具涂装「绿沙」+ 图灵砖（对应官方：全地形车-绿沙、图灵砖）
    return { text: t.rewardText, vehicleSkin: 'vt_greensand', items: ['ev_turingbrick'], box: jdBoxUnlocked(s.jdDone.length) }
  }
  addPlayTokens(t.stage === 0 ? 8 : 10)
  box = jdBoxUnlocked(s.jdDone.length)
  return { text: t.rewardText, box }
}

/** 行动补给箱是否随本次领取解锁（恰好第 JD_BOX_NEED 个任务完成时发放一次） */
function jdBoxUnlocked(doneCount: number): boolean {
  return doneCount === JD_BOX_NEED
}

// ===================== 群星行动：战线未止（2026-10-29 公告批次，阶段任务线） =====================
// 官方规则：全面战场赛季挑战持续上新，按作战风格选择任务线突破，完成上阶段至少 1 个核心任务解锁下阶段；
// 完成本周核心任务可得图灵砖，累计完成一定数量任务可得【行动补给箱】。与「绝地反击」同规则、新一周独立计数。
export const ZW_TASKS: JdTask[] = [
  // 第一阶段
  { id: 'zw1a', stage: 0, icon: '🎮', name: '战线未止Ⅰ · 完成 2 场大战场', need: 2, progress: s => s.zwGames, rewardText: '畅玩代币 ×8' },
  { id: 'zw1b', stage: 0, icon: '🎯', name: '战线未止Ⅰ · 累计 10 杀', need: 10, progress: s => s.zwKills, rewardText: '畅玩代币 ×8' },
  // 第二阶段
  { id: 'zw2a', stage: 1, icon: '🏆', name: '战线未止Ⅱ · 胜利 1 场', need: 1, progress: s => s.zwWins, rewardText: '畅玩代币 ×10' },
  { id: 'zw2b', stage: 1, icon: '🚙', name: '战线未止Ⅱ · 载具击杀 5', need: 5, progress: s => s.zwVehKills, rewardText: '畅玩代币 ×10' },
  // 第三阶段（本周核心任务：图灵砖）
  { id: 'zw3a', stage: 2, icon: '🔭', name: '战线未止Ⅲ · 远程 15 杀', need: 15, progress: s => s.zwFarKills, rewardText: '图灵砖 ×1' },
  { id: 'zw3b', stage: 2, icon: '💥', name: '战线未止Ⅲ · 击毁载具 2', need: 2, progress: s => s.zwVehDestroyed, rewardText: '图灵砖 ×1' },
]

/** 累计完成 4 个任务额外发放【行动补给箱】 */
export const ZW_BOX_NEED = 4

export function zwStageUnlocked(stage: number, s: WarEventsSave): boolean {
  if (stage <= 0) return true
  return ZW_TASKS.some(t => t.stage === stage - 1 && s.zwDone.includes(t.id))
}

/** 领取战线未止任务奖励并直接入账；返回发放描述，失败返回 null */
export function claimZwTask(id: string): { text: string; items?: string[]; box?: boolean } | null {
  if (!warEventActive('zhanxian')) return null
  const t = ZW_TASKS.find(x => x.id === id)
  if (!t) return null
  const s = loadWarEvents()
  if (s.zwDone.includes(id)) return null
  if (!zwStageUnlocked(t.stage, s)) return null
  if (t.progress(s) < t.need) return null
  s.zwDone.push(id)
  saveWarEvents(s)
  const box = s.zwDone.length === ZW_BOX_NEED
  if (t.stage === 2) return { text: t.rewardText, items: ['ev_turingbrick'], box }
  addPlayTokens(t.stage === 0 ? 8 : 10)
  return { text: t.rewardText, box }
}

// ===================== 黑潮赛季补给（2026-10-29 公告批次，D0 赛季累计） =====================
// 官方规则：黑潮爆破 D0 赛季（9/27-11/25），参与对局完成每日任务累计解锁
// 纪念徽章、M4A1突击步枪-散失、赛季图灵砖套装包 ×10、物流凭证 10 连抽。
// 本游戏无黑潮爆破模式，等价镜像为全模式对局累计；奖励规模按本游戏经济折算。
export interface D0Reward {
  id: string
  need: number        // 累计对局数
  icon: string
  name: string
  rewardText: string
}

export const D0_REWARDS: D0Reward[] = [
  { id: 'd0_3', need: 3, icon: '🎟️', name: '黑潮补给 · 累计 3 局', rewardText: '物流凭证 ×3' },
  { id: 'd0_8', need: 8, icon: '🎟️', name: '黑潮补给 · 累计 8 局', rewardText: '物流凭证 ×3' },
  { id: 'd0_15', need: 15, icon: '🎖️', name: '黑潮补给 · 累计 15 局', rewardText: '纪念徽章「黑潮 D0」+ 图灵砖 ×2' },
  { id: 'd0_25', need: 25, icon: '🌫️', name: '黑潮补给 · 累计 25 局', rewardText: 'M4A1 皮肤「散失」+ 图灵砖 ×1 + 物流凭证 ×4' },
]

/** 领取黑潮赛季补给档位；返回发放内容（由调用方入账），失败返回 null */
export function claimD0(id: string): { logi?: number; items?: string[]; skin?: string; cosmetic?: string; name: string; rewardText: string } | null {
  if (!warEventActive('heichaoS')) return null
  const r = D0_REWARDS.find(d => d.id === id)
  if (!r) return null
  const s = loadWarEvents()
  if (s.d0Claimed.includes(id)) return null
  if (s.d0Games < r.need) return null
  s.d0Claimed.push(id)
  saveWarEvents(s)
  const giveLogi = (n: number) => { const t = loadTrickster(); t.logiVouchers += n; saveTrickster(t) }
  switch (id) {
    case 'd0_3': giveLogi(3); return { logi: 3, name: r.name, rewardText: r.rewardText }
    case 'd0_8': giveLogi(3); return { logi: 3, name: r.name, rewardText: r.rewardText }
    case 'd0_15': return { cosmetic: 'cos_badge_heichao', items: ['ev_turingbrick', 'ev_turingbrick'], name: r.name, rewardText: r.rewardText }
    case 'd0_25': giveLogi(4); return { skin: 'sk_m4a1_sanshi', items: ['ev_turingbrick'], logi: 4, name: r.name, rewardText: r.rewardText }
    default: return null
  }
}
