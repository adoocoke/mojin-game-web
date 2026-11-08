// ===================== 官方 2026-10-22 更新公告活动镜像 =====================
// 覆盖：惊喜渡鸦（烽火地带）/ 捣蛋鬼商店（烽火地带·黑潮爆破）/ 花小蝶返场 /
//       畅玩月系列代币（畅玩加码）/ 黑潮挑战 / 赛季通行证冲刺。
// 活动名称与档期引用官方公告事实；玩法数值、判定概率、文案与实现均为本游戏原创。

const KEY = 'mojin_trickster_v1'

// —— 活动窗口（对齐官方档期，北京时间） ——
export const TRICK_WINDOWS = {
  raven:     { start: '2026-10-23T00:00:00+08:00', end: '2026-10-29T23:59:59+08:00' }, // 惊喜渡鸦
  shop:      { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 捣蛋鬼商店（烽火地带/黑潮爆破共用）
  butterfly: { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 花小蝶返场
  play:      { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 畅玩月系列（狂欢加码Ⅰ/Ⅱ、超载焕新、钢铁洪流再临、畅玩加码）
  juedi:     { start: '2026-10-23T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 群星行动：绝地反击
  heichao:   { start: '2026-10-23T00:00:00+08:00', end: '2026-10-29T23:59:59+08:00' }, // 黑潮挑战
  bprush:    { start: '2026-10-26T10:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 赛季通行证冲刺（10/26 上午 10 点开启）
  // ===== 2026-10-29 公告批次 =====
  glimmer:   { start: '2026-10-30T00:00:00+08:00', end: '2026-11-08T23:59:59+08:00' }, // 微光时刻将至（登录任务）
  sprint:    { start: '2026-10-30T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 赛季冲刺（排位双倍/BP 经验加码）
  airdrop:   { start: '2026-10-30T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00' }, // 空投夺宝（烽火地带）
  // ===== 2026-11-06 公告批次 =====
  sprint2:   { start: '2026-11-07T00:00:00+08:00', end: '2026-11-12T23:59:59+08:00' }, // 赛季冲刺第二弹（排位双倍/BP 无上限）
  invite:    { start: '2026-11-07T00:00:00+08:00', end: '2026-11-16T23:59:59+08:00' }, // 阿萨拉邀约（登录任务）
  landeng:   { start: '2026-11-07T00:00:00+08:00', end: '2026-11-12T23:59:59+08:00' }, // 兰小登返场（烽火地带）
  flash:     { start: '2026-11-07T00:00:00+08:00', end: '2026-11-12T23:59:59+08:00' }, // 限时闪购（烽火地带）
  zhoumo:    { start: '2026-11-07T00:00:00+08:00', end: '2026-11-09T23:59:59+08:00' }, // 洲末周末五连（红运当头/有米/畅玩/上分/品枪）
} as const

export type TrickWindowId = keyof typeof TRICK_WINDOWS

export function trickActive(id: TrickWindowId, now = Date.now()): boolean {
  const w = TRICK_WINDOWS[id]
  return now >= Date.parse(w.start) && now <= Date.parse(w.end)
}

// ===================== 存档 =====================
export interface TricksterSave {
  tokens: number        // 捣蛋代币（捣蛋鬼商店货币）
  playTokens: number    // 畅玩代币（畅玩加码商店货币）
  logiVouchers: number  // 物流凭证（花小蝶返场奖励货币）
  butterflies: number   // 累计带出花小蝶数
  ravenTotal: number    // 惊喜渡鸦：累计提交次数
  cosmetics: string[]   // 已拥有的挂饰/军牌/头像/喷漆 id（本游戏无对应槽位，作收藏记录）
  shopClaimed: string[] // 已兑换的限购商品 id
  glimmerDays: string[]    // 微光时刻将至：累计登录日（YYYY-MM-DD）
  glimmerClaimed: string[] // 微光时刻将至：已领取的奖励 id
  inviteDays: string[]     // 阿萨拉邀约：累计登录日
  inviteClaimed: string[]  // 阿萨拉邀约：已领取的奖励 id
  zmRaids: number          // 洲末周末：窗口内完成烽火对局
  zmPgKills: number        // 洲末品枪：窗口内 mini14 击杀（全模式）
  zmClaimed: string[]      // 洲末周末：已领取的奖励 id
}

function def(): TricksterSave {
  return { tokens: 0, playTokens: 0, logiVouchers: 0, butterflies: 0, ravenTotal: 0, cosmetics: [], shopClaimed: [], glimmerDays: [], glimmerClaimed: [], inviteDays: [], inviteClaimed: [], zmRaids: 0, zmPgKills: 0, zmClaimed: [] }
}

export function loadTrickster(): TricksterSave {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...def(), ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return def()
}

export function saveTrickster(s: TricksterSave) {
  try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* 忽略 */ }
}

export function addTrickTokens(n: number) { const s = loadTrickster(); s.tokens += n; saveTrickster(s) }
export function addPlayTokens(n: number) { const s = loadTrickster(); s.playTokens += n; saveTrickster(s) }

/** 花小蝶带出结算：每只 +1 物流凭证，返回累计凭证数（0 = 本局无花小蝶） */
export function addLogiVouchers(n: number): number {
  if (n <= 0) return 0
  const s = loadTrickster()
  s.logiVouchers += n
  s.butterflies += n
  saveTrickster(s)
  return s.logiVouchers
}

/** 发放收藏外观（挂饰/军牌/头像/喷漆）；返回是否为新获得 */
export function grantCosmetic(id: string): boolean {
  const s = loadTrickster()
  if (s.cosmetics.includes(id)) return false
  s.cosmetics.push(id)
  saveTrickster(s)
  return true
}

export const COSMETIC_NAMES: Record<string, string> = {
  cos_charm_trickster: '挂饰「捣蛋鬼」',
  cos_dogtag_raven: '军牌「渡鸦」',
  cos_avatar_trick: '头像「捣蛋夜」',
  cos_spray_gaga: '喷漆「嘎嘎吓人」',
  cos_badge_heichao: '纪念徽章「黑潮 D0」',
  cos_action_clap: '动作「鼓掌」',
}

// ===================== 捣蛋鬼商店（捣蛋代币兑换） =====================
// 官方奖励清单：P90冲锋枪-阿萨拉恶灵外观 / 挂饰-捣蛋鬼 / 军牌 / 头像 / 喷漆-嘎嘎吓人。
// 本游戏无 P90（等价镜像为全武器通用涂装）、无挂件/军牌/头像/喷漆槽位（等价镜像为收藏记录）。
export interface TrickShopItem {
  id: string
  icon: string
  name: string
  cost: number
  kind: 'skin' | 'cosmetic' | 'gold' | 'item'
  payload: string | number
  repeat?: boolean   // 可重复兑换
  desc: string
}

export const TRICK_SHOP: TrickShopItem[] = [
  { id: 'ts_asara', icon: '🐍', name: '武器外观「阿萨拉恶灵」', cost: 40, kind: 'skin', payload: 'sk_asara',
    desc: '对应官方：P90冲锋枪-阿萨拉恶灵（本游戏为全武器通用涂装，配色原创）' },
  { id: 'ts_charm', icon: '🎃', name: '挂饰「捣蛋鬼」', cost: 12, kind: 'cosmetic', payload: 'cos_charm_trickster', desc: '南瓜小鬼挂饰（收藏）' },
  { id: 'ts_dogtag', icon: '🪪', name: '军牌「渡鸦」', cost: 8, kind: 'cosmetic', payload: 'cos_dogtag_raven', desc: '渡鸦衔羽军牌（收藏）' },
  { id: 'ts_avatar', icon: '🦇', name: '头像「捣蛋夜」', cost: 8, kind: 'cosmetic', payload: 'cos_avatar_trick', desc: '捣蛋夜头像（收藏）' },
  { id: 'ts_spray', icon: '🎨', name: '喷漆「嘎嘎吓人」', cost: 6, kind: 'cosmetic', payload: 'cos_spray_gaga', desc: '嘎嘎吓人喷漆（收藏）' },
  { id: 'ts_gold', icon: '💰', name: '6,000 金币', cost: 5, kind: 'gold', payload: 6000, repeat: true, desc: '代币变现' },
]

/** 兑换捣蛋鬼商店商品；返回发放内容（由调用方入账），失败返回 null */
export function redeemTrick(id: string): { kind: TrickShopItem['kind']; payload: string | number; name: string } | null {
  if (!trickActive('shop')) return null
  const item = TRICK_SHOP.find(t => t.id === id)
  if (!item) return null
  const s = loadTrickster()
  if (!item.repeat && s.shopClaimed.includes(id)) return null
  if (s.tokens < item.cost) return null
  s.tokens -= item.cost
  if (!item.repeat) s.shopClaimed.push(id)
  saveTrickster(s)
  return { kind: item.kind, payload: item.payload, name: item.name }
}

// ===================== 畅玩加码（畅玩代币兑换，全面战场） =====================
export const PLAY_SHOP: TrickShopItem[] = [
  { id: 'ps_asara', icon: '🐍', name: '武器外观「阿萨拉恶灵」', cost: 30, kind: 'skin', payload: 'sk_asara',
    desc: '对应官方：P90冲锋枪-阿萨拉恶灵（本游戏为全武器通用涂装，配色原创）' },
  { id: 'ps_actionbox', icon: '🎁', name: '行动补给箱 ×1', cost: 12, kind: 'item', payload: 'ev_actionbox', repeat: true,
    desc: '开启随机获得图灵砖/军功卡（等价镜像）' },
  { id: 'ps_gold', icon: '💰', name: '5,000 金币', cost: 4, kind: 'gold', payload: 5000, repeat: true, desc: '代币变现' },
]

export function redeemPlay(id: string): { kind: TrickShopItem['kind']; payload: string | number; name: string } | null {
  if (!trickActive('play')) return null
  const item = PLAY_SHOP.find(t => t.id === id)
  if (!item) return null
  const s = loadTrickster()
  if (!item.repeat && s.shopClaimed.includes(id)) return null
  if (s.playTokens < item.cost) return null
  s.playTokens -= item.cost
  if (!item.repeat) s.shopClaimed.push(id)
  saveTrickster(s)
  return { kind: item.kind, payload: item.payload, name: item.name }
}

// ===================== 物流凭证兑换（花小蝶返场） =====================
export const LOGI_SHOP: TrickShopItem[] = [
  { id: 'lg_gold', icon: '💰', name: '4,000 金币', cost: 1, kind: 'gold', payload: 4000, repeat: true, desc: '凭证变现' },
  { id: 'lg_brick', icon: '🧱', name: '猩红曼德尔砖 ×1', cost: 5, kind: 'item', payload: 'ev_mandelbrick', repeat: true, desc: '破译保底红色物资' },
]

export function logiShopActive(now = Date.now()): boolean {
  return trickActive('butterfly', now) || trickActive('landeng', now) || trickActive('invite', now)
}

export function redeemLogi(id: string): { kind: TrickShopItem['kind']; payload: string | number; name: string } | null {
  if (!logiShopActive()) return null
  const item = LOGI_SHOP.find(t => t.id === id)
  if (!item) return null
  const s = loadTrickster()
  if (s.logiVouchers < item.cost) return null
  s.logiVouchers -= item.cost
  saveTrickster(s)
  return { kind: item.kind, payload: item.payload, name: item.name }
}

// ===================== 惊喜渡鸦：判定（纯函数，便于测试） =====================
// 官方规则：前往渡鸦路灯提交当局搜索到的收藏品，获得惊喜或整蛊；提交次数越多收益越高、风险越大。
// 每盏灯蜡烛烧尽（提交 6 次）后渡鸦飞走，路灯作废。
export const RAVEN_CANDLES = 6
export type RavenOutcome = 'surprise' | 'equal' | 'down' | 'trick'

/** lampUsed = 该路灯已提交次数（0 起）。惊喜概率随次数上升，整蛊概率同步上升 */
export function rollRavenOutcome(lampUsed: number, rand: () => number = Math.random): RavenOutcome {
  const surprise = Math.min(0.12 + lampUsed * 0.05, 0.35)
  const trick = Math.min(0.08 + lampUsed * 0.06, 0.40)
  const down = 0.26
  const r = rand()
  if (r < surprise) return 'surprise'
  if (r < surprise + trick) return 'trick'
  if (r < surprise + trick + down) return 'down'
  return 'equal'
}

/** 各结果发放的捣蛋代币（惊喜最多，整蛊保底 1 枚） */
export const RAVEN_TOKENS: Record<RavenOutcome, number> = { surprise: 6, equal: 3, down: 2, trick: 1 }

// ===================== 赛季通行证冲刺 & 赛季冲刺 =====================
/** 通行证经验倍率：通行证冲刺窗口 ×1.5；赛季冲刺窗口（官方：排位赛和晋升之路获胜双倍积分、通行证周经验无上限）
 *  等价镜像为行动档案（通行证）经验 ×2。两窗口重叠取较高倍率。 */
export function bpRushMul(now = Date.now()): number {
  if (trickActive('sprint', now) || trickActive('sprint2', now)) return 2
  return trickActive('bprush', now) ? 1.5 : 1
}

// ===================== 微光时刻将至（2026-10-29 公告批次，登录任务） =====================
// 官方规则：全新赛季「微光」即将来临，完成登录任务领取 ASh-12战斗步枪-哈夫克卫队、物流凭证十连抽。
// 本游戏无 ASh-12（等价镜像为全武器通用涂装）；物流凭证十连抽等价镜像为累计登录 3 天共发 10 张物流凭证。
export interface GlimmerReward {
  id: string
  day: number          // 需要累计登录天数
  icon: string
  name: string
  vouchers?: number    // 物流凭证
  skin?: string        // 皮肤 id
}

export const GLIMMER_REWARDS: GlimmerReward[] = [
  { id: 'gl_d1', day: 1, icon: '🎟️', name: '微光登录 · 第 1 天', vouchers: 3 },
  { id: 'gl_d2', day: 2, icon: '🎟️', name: '微光登录 · 第 2 天', vouchers: 3 },
  { id: 'gl_d3', day: 3, icon: '🛡️', name: '微光登录 · 第 3 天', vouchers: 4, skin: 'sk_ash12_hvk' },
]

/** 记录今日登录（窗口期内每日一次） */
export function markGlimmerLogin() {
  if (!trickActive('glimmer')) return
  const s = loadTrickster()
  const today = new Date().toISOString().slice(0, 10)
  if (!s.glimmerDays.includes(today)) {
    s.glimmerDays.push(today)
    saveTrickster(s)
  }
}

/** 领取微光登录奖励；返回奖励内容（由调用方入账），失败返回 null */
export function claimGlimmer(id: string): { vouchers?: number; skin?: string; name: string } | null {
  if (!trickActive('glimmer')) return null
  const r = GLIMMER_REWARDS.find(g => g.id === id)
  if (!r) return null
  const s = loadTrickster()
  if (s.glimmerClaimed.includes(id)) return null
  if (s.glimmerDays.length < r.day) return null
  s.glimmerClaimed.push(id)
  if (r.vouchers) s.logiVouchers += r.vouchers
  saveTrickster(s)
  return { vouchers: r.vouchers, skin: r.skin, name: r.name }
}

// ===================== 阿萨拉邀约（2026-11-06 公告批次，登录任务） =====================
// 官方规则：接受来自阿萨拉的邀请（全新赛季即将来临），奖励物流凭证、亚特兰蒂斯-UZI冲锋枪。
export interface InviteReward {
  id: string
  day: number
  icon: string
  name: string
  vouchers?: number
  skin?: string
}

export const INVITE_REWARDS: InviteReward[] = [
  { id: 'iv_d1', day: 1, icon: '🎟️', name: '阿萨拉邀约 · 第 1 天', vouchers: 2 },
  { id: 'iv_d2', day: 2, icon: '🌊', name: '阿萨拉邀约 · 第 2 天', vouchers: 2, skin: 'sk_uzi_atlantis' },
]

export function markInviteLogin() {
  if (!trickActive('invite')) return
  const s = loadTrickster()
  const today = new Date().toISOString().slice(0, 10)
  if (!s.inviteDays.includes(today)) {
    s.inviteDays.push(today)
    saveTrickster(s)
  }
}

export function claimInvite(id: string): { vouchers?: number; skin?: string; name: string } | null {
  if (!trickActive('invite')) return null
  const r = INVITE_REWARDS.find(g => g.id === id)
  if (!r) return null
  const s = loadTrickster()
  if (s.inviteClaimed.includes(id)) return null
  if (s.inviteDays.length < r.day) return null
  s.inviteClaimed.push(id)
  if (r.vouchers) s.logiVouchers += r.vouchers
  saveTrickster(s)
  return { vouchers: r.vouchers, skin: r.skin, name: r.name }
}

// ===================== 洲末周末五连·烽火侧（2026-11-06 公告批次） =====================
// 官方：红运当头（登录领仿制钥匙补给自选包、参与对局领工艺藏品进阶红运当头补给包）、
// 洲末有米（累计登录领标准/精锐制式装备券）、洲末品枪（本周品鉴 M14——本游戏无 M14，等价镜像为 Mini14）。
export interface ZmReward {
  id: string
  icon: string
  name: string
  need: number
  progress: (s: TricksterSave) => number
  rewardText: string
}

export const ZM_REWARDS: ZmReward[] = [
  { id: 'zm_hy_login', icon: '🗝️', name: '红运当头 · 周末登录', need: 1, progress: s => Math.min(s.inviteDays.length + 1, 1), rewardText: '仿制钥匙补给自选包 ×1（随机房卡）' },
  { id: 'zm_hy_raid', icon: '🧰', name: '红运当头 · 完成 1 局烽火', need: 1, progress: s => s.zmRaids, rewardText: '工艺藏品进阶红运当头补给包 ×1' },
  { id: 'zm_ym_d1', icon: '🥋', name: '洲末有米 · 累计登录 1 天', need: 1, progress: s => s.inviteDays.length, rewardText: '标准制式装备包（战术防弹衣+战术头盔）' },
  { id: 'zm_ym_d2', icon: '🪖', name: '洲末有米 · 累计登录 2 天', need: 2, progress: s => s.inviteDays.length, rewardText: '精锐制式装备包（重型防弹衣+重装头盔）' },
  { id: 'zm_pg', icon: '🔭', name: '洲末品枪 · Mini14 击杀 5', need: 5, progress: s => s.zmPgKills, rewardText: 'Mini14 射手步枪 ×1 + 5,000 金币' },
]

/** 窗口内完成烽火对局计数（红运当头参与任务） */
export function reportZmRaid() {
  if (!trickActive('zhoumo')) return
  const s = loadTrickster()
  s.zmRaids++
  saveTrickster(s)
}

/** 窗口内 Mini14 击杀计数（洲末品枪，全模式） */
export function reportZmPgKill() {
  if (!trickActive('zhoumo')) return
  const s = loadTrickster()
  s.zmPgKills++
  saveTrickster(s)
}

/** 领取洲末周末（烽火侧）奖励；返回发放内容（由调用方入账），失败返回 null */
export function claimZm(id: string): { items?: string[]; gold?: number; name: string; rewardText: string } | null {
  if (!trickActive('zhoumo')) return null
  const r = ZM_REWARDS.find(z => z.id === id)
  if (!r) return null
  const s = loadTrickster()
  if (s.zmClaimed.includes(id)) return null
  if (r.progress(s) < r.need) return null
  s.zmClaimed.push(id)
  saveTrickster(s)
  switch (id) {
    case 'zm_hy_login': {
      const cards = ['k_w_shed', 'k_d_oasis', 'k_t_dorm', 'k_w_cave', 'k_d_crypt']
      return { items: [cards[Math.floor(Math.random() * cards.length)]], name: r.name, rewardText: r.rewardText }
    }
    case 'zm_hy_raid': return { items: ['ev_hongyun'], name: r.name, rewardText: r.rewardText }
    case 'zm_ym_d1': return { items: ['armor2', 'helmet2'], name: r.name, rewardText: r.rewardText }
    case 'zm_ym_d2': return { items: ['armor3', 'helmet3'], name: r.name, rewardText: r.rewardText }
    case 'zm_pg': return { items: ['w_mini14'], gold: 5000, name: r.name, rewardText: r.rewardText }
    default: return null
  }
}
