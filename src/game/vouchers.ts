// ===================== 限时三角券（官方「限时三角券狂欢」活动镜像） =====================
// 官方机制：9月26日登录领 500、10月1日登录再领 1000、做任务保底 2400，合计 3900；
// 券为限时货币，可购买皮肤外观，活动结束过期清零。本游戏按 1 券 = 1 金币当量购买皮肤。

const KEY = 'mojin_vouchers_v1'

export const VOUCHER_START = '2026-09-26T00:00:00+08:00'
export const VOUCHER_END = '2026-10-15T23:59:59+08:00'
export const VOUCHER_LOGIN1 = 500   // 9/26 起登录即领
export const VOUCHER_LOGIN2 = 1000  // 10/1 起登录再领
export const VOUCHER_LOGIN2_AT = '2026-10-01T00:00:00+08:00'
export const VOUCHER_RAID_DAILY = 150 // 每日首次成功撤离
export const VOUCHER_TASK_CAP = 2400  // 任务类累计上限（保底 500+1000+2400 = 3900）

export interface VoucherSave {
  total: number       // 当前余额
  login1: boolean     // 9/26 登录奖励已领
  login2: boolean     // 10/1 登录奖励已领
  taskEarned: number  // 任务类累计已得（上限 2400）
  lastRaidDate: string // 最近一次撤离领券日期（YYYY-MM-DD，每日限 1 次）
}

const ZERO: VoucherSave = { total: 0, login1: false, login2: false, taskEarned: 0, lastRaidDate: '' }

export function voucherEventActive(now = Date.now()): boolean {
  return now >= Date.parse(VOUCHER_START) && now <= Date.parse(VOUCHER_END)
}

/** 读取券存档；活动窗口外视为过期清零（限时券规则） */
export function loadVouchers(now = Date.now()): VoucherSave {
  if (!voucherEventActive(now)) return { ...ZERO }
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...ZERO }
    return { ...ZERO, ...(JSON.parse(raw) as Partial<VoucherSave>) }
  } catch {
    return { ...ZERO }
  }
}

export function saveVouchers(s: VoucherSave) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

/** 登录奖励（幂等）：9/26 起 +500，10/1 起 +1000。返回本次新领到的总额 */
export function claimVoucherLogins(now = Date.now()): number {
  if (!voucherEventActive(now)) return 0
  const s = loadVouchers(now)
  let got = 0
  if (!s.login1) { s.login1 = true; s.total += VOUCHER_LOGIN1; got += VOUCHER_LOGIN1 }
  if (now >= Date.parse(VOUCHER_LOGIN2_AT) && !s.login2) { s.login2 = true; s.total += VOUCHER_LOGIN2; got += VOUCHER_LOGIN2 }
  if (got > 0) saveVouchers(s)
  return got
}

/** 每日首次成功撤离 +150（任务类累计上限 2400）。返回本次获得（0 = 今日已领/已达上限） */
export function claimVoucherRaid(now = Date.now()): number {
  if (!voucherEventActive(now)) return 0
  const s = loadVouchers(now)
  const today = new Date(now).toISOString().slice(0, 10)
  if (s.lastRaidDate === today) return 0
  if (s.taskEarned >= VOUCHER_TASK_CAP) return 0
  const got = Math.min(VOUCHER_RAID_DAILY, VOUCHER_TASK_CAP - s.taskEarned)
  s.lastRaidDate = today
  s.taskEarned += got
  s.total += got
  saveVouchers(s)
  return got
}

/** 消费券（余额不足返回 false） */
export function spendVouchers(n: number, now = Date.now()): boolean {
  const s = loadVouchers(now)
  if (s.total < n) return false
  s.total -= n
  saveVouchers(s)
  return true
}

/** 皮肤券价：金币价的 1/2（官方 3900 券≈一套捆绑包的购买力对标） */
export function skinVoucherPrice(goldPrice: number): number {
  return Math.ceil(goldPrice / 2)
}
