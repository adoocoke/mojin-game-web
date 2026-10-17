// ====================== 火锅对决（周年庆小游戏镜像） ======================
// 对应官方：二周年庆「火锅对决」夹菜小游戏（2026-09-30 开启）。
// 规则框架引用官方事实（单格菜 +5 / 两格菜 +10 / 生姜扣分 / 夹取冷却 /
// 干员技能 / 1 分钟对局 / 按排名得积分 / 每日积分上限 / 累计积分赢捆绑包）；
// 具体数值、AI 对手与美术实现均为原创。

const KEY = 'mojin_hotpot_v1'

export const HOTPOT_DAILY_CAP = 10      // 每日积分上限（对齐官方）
export const HOTPOT_BUNDLE_NEED = 70    // 累计 70 积分换捆绑包（对齐官方"7 天拿满"节奏）
export const HOTPOT_WINDOW = { start: '2026-09-30T00:00:00+08:00', end: '2026-10-22T23:59:59+08:00' }

export interface HotpotSave {
  day: string        // 当日日期 YYYY-MM-DD
  dayPts: number     // 当日已获积分
  totalPts: number   // 累计积分
  games: number      // 累计对局
  bundleClaimed: boolean  // 猛火强攻捆绑包已领取
}

function def(): HotpotSave {
  return { day: '', dayPts: 0, totalPts: 0, games: 0, bundleClaimed: false }
}

export function loadHotpot(): HotpotSave {
  const today = new Date().toISOString().slice(0, 10)
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = { ...def(), ...JSON.parse(raw) }
      if (s.day !== today) { s.day = today; s.dayPts = 0; saveHotpot(s) }
      return s
    }
  } catch { /* 忽略 */ }
  const s = def()
  s.day = today
  return s
}

export function saveHotpot(s: HotpotSave) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

export function hotpotActive(now = Date.now()): boolean {
  return now >= Date.parse(HOTPOT_WINDOW.start) && now <= Date.parse(HOTPOT_WINDOW.end)
}

/** 对局结束：按排名（1~6）入账积分，返回实际入账（受每日上限截断） */
export function reportHotpotGame(rank: number): { gained: number; total: number } {
  const s = loadHotpot()
  const pts = Math.max(1, 6 - rank)  // 第1名5分，依次递减，保底1分（对齐官方）
  const gained = Math.min(pts, Math.max(0, HOTPOT_DAILY_CAP - s.dayPts))
  s.dayPts += gained
  s.totalPts += gained
  s.games++
  saveHotpot(s)
  return { gained, total: s.totalPts }
}

/** 领取猛火强攻捆绑包 */
export function claimHotpotBundle(): boolean {
  const s = loadHotpot()
  if (s.bundleClaimed || s.totalPts < HOTPOT_BUNDLE_NEED) return false
  s.bundleClaimed = true
  saveHotpot(s)
  return true
}

// —— 干员技能（名称引用官方，效果数值原创微调） ——
export interface HotpotOp {
  id: 'wuming' | 'die' | 'honglang'
  name: string
  icon: string
  desc: string
}

export const HOTPOT_OPS: HotpotOp[] = [
  { id: 'wuming', name: '无名', icon: '🥢', desc: '技能：5 秒内夹取无冷却，疯狂输出' },
  { id: 'die', name: '蝶', icon: '🦋', desc: '技能：8 秒内得分翻倍，夹到生姜不扣分' },
  { id: 'honglang', name: '红狼', icon: '🐺', desc: '被动：生姜提前高亮警示，全程有效' },
]

// —— 食材定义（分值对齐官方：单格 +5 / 两格 +10 / 生姜扣分） ——
export interface HotpotFood {
  icon: string
  name: string
  pts: number
  big: boolean      // 两格菜
  ginger?: boolean  // 生姜（扣分）
}

export const HOTPOT_FOODS: HotpotFood[] = [
  { icon: '🥬', name: '青菜', pts: 5, big: false },
  { icon: '🍄', name: '菌菇', pts: 5, big: false },
  { icon: '🥔', name: '土豆片', pts: 5, big: false },
  { icon: '🌽', name: '玉米', pts: 5, big: false },
  { icon: '🥩', name: '肥牛卷', pts: 10, big: true },
  { icon: '🦐', name: '鲜虾', pts: 10, big: true },
  { icon: '🍡', name: '牛肉丸', pts: 10, big: true },
  { icon: '🫚', name: '生姜', pts: -8, big: false, ginger: true },
]
