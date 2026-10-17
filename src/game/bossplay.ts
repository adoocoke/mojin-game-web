// ====================== 极星守望·扮演德穆兰 ======================
// 对应官方：烽火地带身份扮演玩法「极星守望」（2026-10-16 ~ 2027-01-21）。
// 名称/规则框架引用官方事实（德穆兰档案五选三、安全总监工卡 25 万、身份牌×5、
// 15 分钟解锁专属撤离点）；任务内容、数值与实现均为原创。

const KEY = 'mojin_bossplay_v1'

export const CARD_PRICE = 250000        // 安全总监工卡：军需处 25 万（对齐官方 25 万哈夫币）
export const CARD_MAX = 8               // 工卡存储上限（对齐官方）
export const QUOTA_INIT = 4             // 初始购买次数（对齐官方）
export const QUOTA_MAX = 8              // 购买次数存储上限（对齐官方）
export const QUOTA_REGEN_MS = 21 * 3600 * 1000  // 每 21 小时恢复 1 次购买资格（对齐官方）
export const TAGS_NEED = 5              // 集齐 5 份干员身份牌（对齐官方）
export const EXTRACT_UNLOCK_SEC = 900   // 开局 15 分钟后解锁专属撤离点（对齐官方）
export const DOSSIER_NEED = 3           // 档案 5 条支线完成 3 条解锁（对齐官方）

export interface BossPlaySave {
  dossierProg: number[]   // 5 条支线进度
  dossierDone: boolean[]  // 5 条支线完成状态
  unlocked: boolean       // 扮演权限已解锁
  cards: number           // 安全总监工卡库存
  quota: number           // 剩余购买次数
  quotaAt: number         // 上次购买次数恢复时间戳
  plays: number           // 扮演入场次数
  wins: number            // 扮演撤离成功次数
}

function def(): BossPlaySave {
  return { dossierProg: [0, 0, 0, 0, 0], dossierDone: [false, false, false, false, false], unlocked: false, cards: 0, quota: QUOTA_INIT, quotaAt: Date.now(), plays: 0, wins: 0 }
}

export function loadBossPlay(): BossPlaySave {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...def(), ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return def()
}

export function saveBossPlay(s: BossPlaySave) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

/** 购买次数随时间恢复（21 小时 1 次，上限 8） */
export function regenQuota(s: BossPlaySave): BossPlaySave {
  const now = Date.now()
  if (s.quota >= QUOTA_MAX) { s.quotaAt = now; return s }
  const elapsed = now - s.quotaAt
  const gained = Math.floor(elapsed / QUOTA_REGEN_MS)
  if (gained > 0) {
    s.quota = Math.min(QUOTA_MAX, s.quota + gained)
    s.quotaAt = s.quota >= QUOTA_MAX ? now : s.quotaAt + gained * QUOTA_REGEN_MS
    saveBossPlay(s)
  }
  return s
}

/** 距离下一次购买次数恢复的毫秒数（已满返回 0） */
export function quotaRegenLeft(s: BossPlaySave): number {
  if (s.quota >= QUOTA_MAX) return 0
  return Math.max(0, s.quotaAt + QUOTA_REGEN_MS - Date.now())
}

// —— 德穆兰档案：5 条支线（完成任意 3 条解锁扮演权限） ——
export interface DossierTask {
  icon: string
  name: string
  desc: string
  goal: number
}

export const DOSSIER_TASKS: DossierTask[] = [
  { icon: '🔍', name: '星轨偏移', desc: '在航天基地完成 2 处剧情调查点', goal: 2 },
  { icon: '🎯', name: '安全总监的铁腕', desc: '在航天基地累计击败 10 名敌人', goal: 10 },
  { icon: '👑', name: '哈德森的影子', desc: '击败航天基地的首领 1 次', goal: 1 },
  { icon: '💰', name: '总监的门面', desc: '单局带出价值 150,000 以上成功撤离', goal: 1 },
  { icon: '🚁', name: '老兵之路', desc: '任意地图累计成功撤离 3 次', goal: 3 },
]

/** 档案进度上报：prog 增加 n（默认 1），返回是否刚完成该支线 */
export function reportDossier(idx: number, n = 1): { done: boolean; unlockedNow: boolean } {
  const s = loadBossPlay()
  if (s.dossierDone[idx]) return { done: false, unlockedNow: false }
  s.dossierProg[idx] = Math.min(DOSSIER_TASKS[idx].goal, (s.dossierProg[idx] ?? 0) + n)
  let done = false
  if (s.dossierProg[idx] >= DOSSIER_TASKS[idx].goal) { s.dossierDone[idx] = true; done = true }
  const before = s.unlocked
  if (!s.unlocked && s.dossierDone.filter(Boolean).length >= DOSSIER_NEED) s.unlocked = true
  saveBossPlay(s)
  return { done, unlockedNow: s.unlocked && !before }
}

export function dossierDoneCount(s: BossPlaySave): number {
  return s.dossierDone.filter(Boolean).length
}

/** 购买安全总监工卡：返回错误消息或 null（成功） */
export function buyDirectorCard(money: number): { err?: string; cost?: number } {
  const s = regenQuota(loadBossPlay())
  if (s.cards >= CARD_MAX) return { err: `工卡已达存储上限（${CARD_MAX} 张）` }
  if (s.quota <= 0) return { err: '购买次数已用完，等待恢复（21 小时/次）' }
  if (money < CARD_PRICE) return { err: '金币不足（250,000）' }
  s.cards++
  s.quota--
  if (s.quotaAt === 0) s.quotaAt = Date.now()
  saveBossPlay(s)
  return { cost: CARD_PRICE }
}

/** 扮演入场：扣 1 张工卡 */
export function consumeDirectorCard(): boolean {
  const s = loadBossPlay()
  if (!s.unlocked || s.cards <= 0) return false
  s.cards--
  s.plays++
  saveBossPlay(s)
  return true
}

/** 扮演撤离成功结算 */
export function recordBossPlayWin() {
  const s = loadBossPlay()
  s.wins++
  saveBossPlay(s)
}
