// ===================== 定期轮换活动系统 =====================
import { loadSkins, grantSkin } from './skins'

// 每 2 小时轮换一个活动（按时间窗口确定性选取，所有玩家同一时段看到同一个）
// 空档窗口由系统自动生成一个随机活动填补（随机效果 × 随机名字 × 随机强度），无需人工维护

export interface GameEvent {
  id: 'lucky' | 'goldrush' | 'airdrop' | 'bounty' | 'gunsale' | 'cards' | 'nests' | 'elite' | 'medic'
  icon: string
  name: string
  desc: string       // 主页面展示的效果说明
  power?: number     // 自动生成活动的强度倍率（0.8 / 1.15 / 1.5，手工活动为 1）
  official?: boolean // true = 三角洲行动官方活动镜像（名称与官方一致，效果按本游戏系统等价映射）
}

export const EVENTS: GameEvent[] = [
  { id: 'lucky',    icon: '🎉', name: '狂欢爆率', desc: '所有容器爆率大幅提升，高价值物资触手可得' },
  { id: 'goldrush', icon: '💰', name: '金市上涨', desc: '仓库出售物资获得双倍金币' },
  { id: 'airdrop',  icon: '✈️', name: '空投补给', desc: '每张地图额外出现一批航空箱' },
  { id: 'bounty',   icon: '👑', name: '首领悬赏', desc: '击杀 Boss 额外奖励 1500 金币' },
  { id: 'gunsale',  icon: '🔫', name: '军火倾销', desc: '交易行全场半价，囤枪的绝佳时机' },
  { id: 'cards',    icon: '💳', name: '门禁解禁', desc: '房卡掉落概率翻倍以上，锁房宝藏等你来开' },
  { id: 'nests',    icon: '🥚', name: '百鸟朝凤', desc: '鸟窝大丰收，黄金鸟蛋出现概率大幅提升' },
  { id: 'elite',    icon: '☠️', name: '精英出没', desc: '更强的精英敌人入场，击杀掉落也更加丰厚' },
  { id: 'medic',    icon: '💊', name: '战地医疗', desc: '医疗物资效果提升 50%，战场续航更持久' },
]

// 自动生成活动的名字库（每种效果多个备选名字，组合出“新活动”）
const GEN_NAMES: Record<GameEvent['id'], string[]> = {
  lucky:    ['好运狂潮', '天赐良机', '福星高照', '宝藏时刻'],
  goldrush: ['黄金风暴', '收购狂潮', '金商云集', '溢价时刻'],
  airdrop:  ['补给空投', '军援抵达', '天降补给', '运输航线'],
  bounty:   ['通缉令', '猎首行动', '悬赏翻倍', '围剿令'],
  gunsale:  ['军火大促', '枪械特卖', '清仓甩卖', '军购狂欢'],
  cards:    ['门禁泄露', '钥匙流通', '卡贩出没', '解禁时刻'],
  nests:    ['候鸟迁徙', '金蛋时节', '鸟巢繁盛', '百鸟归林'],
  elite:    ['强敌压境', '精英集结', '猎手对决', '硬核战区'],
  medic:    ['医疗驰援', '战地医院', '特效药剂', '生命线'],
}
// 自动活动的强度档位描述
const POWER_LABEL: Record<number, string> = { 0.8: '小幅', 1.15: '中幅', 1.5: '大幅' }

// ===================== 三角洲行动官方活动镜像 =====================
// 官方无活动数据接口，此表人工维护：官方活动更新后同步修改本表即可，引擎零改动。
// 处于官方活动窗口时，当期官方活动按 2 小时轮换上阵（名称与官方一致，效果等价映射到本游戏系统）；
// 官方活动空档期回退到上方的常驻轮换。皮肤/外观/点券类官方活动（本游戏无对应系统）不收录。
interface OfficialEvent {
  id: GameEvent['id'] // 复用现有效果挂钩
  icon: string
  name: string        // 官方活动名
  desc: string        // 本游戏内的等价效果说明
  start: string       // 活动窗口（北京时间，ISO 格式）
  end: string
  skin?: string       // 「登录领皮肤」类活动：窗口期内首次开局发放该皮肤（skins.ts 中的皮肤 id）
}

const OFFICIAL_EVENTS: OfficialEvent[] = [
  // —— 二周年庆（洲年庆）周期：2026-09 ——
  { id: 'airdrop', icon: '🪂', name: '洲年空投', start: '2026-09-17T00:00:00+08:00', end: '2026-09-30T23:59:59+08:00',
    desc: '每张地图额外掉落空投航空箱（对应官方：局内空投舱 ×2）' },
  { id: 'lucky', icon: '🧱', name: '猩红曼德尔砖返场', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '所有容器爆率大幅提升（对应官方：全图刷新大红曼德尔砖，破译出高价值物资）' },
  { id: 'gunsale', icon: '🏷️', name: '周年神秘折扣商店', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '交易行全场半价（对应官方：神秘折扣商店，每人专属折扣最低 5 折）' },
  { id: 'lucky', icon: '🧧', name: '红运福袋', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '容器出货率提升，大金概率大增（对应官方：搜刮容器概率掉落红运福袋）' },
  { id: 'elite', icon: '🛡️', name: '哈夫克保险小队', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '更强的精英敌人入场，击杀掉落更加丰厚（对应官方：盾兵+机枪兵保险小队，大保险级爆率）' },
  { id: 'goldrush', icon: '🎟️', name: '限时三角券狂欢', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '仓库出售物资获得双倍金币（对应官方：保底 3900 限时三角券）' },
  { id: 'medic', icon: '🍹', name: '饮品特调返场', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '医疗物资效果提升 50%（对应官方：调配对局增益特调饮品）' },
  // —— 外观/皮肤类：窗口期内首次开局直接发放对应皮肤（皮肤系统见 skins.ts） ——
  { id: 'goldrush', icon: '🕶️', name: '彦祖回归联动', start: '2026-09-10T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_daniel',
    desc: '首次开局发放皮肤「彦祖同行」，期间仓库出售双倍金币（对应官方：登录领彦祖联动头像/喷漆/军牌）' },
  { id: 'goldrush', icon: '🎖️', name: '传说外观登录领', start: '2026-09-04T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_aug_congee',
    desc: '首次开局发放 AUG 皮肤「金粥年」，期间仓库出售双倍金币（对应官方：登录领传说外观 AUG-金粥年）' },
  { id: 'goldrush', icon: '🏎️', name: '洲年限定载具造型', start: '2026-09-24T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_zhouyear',
    desc: '首次开局发放皮肤「洲年限定」，期间仓库出售双倍金币（对应官方：洲年限定载具造型上架）' },
]

/** 官方「登录领皮肤」类活动：窗口期内首次开局发放对应皮肤（已拥有则跳过），返回新获得的皮肤 id 与来源活动名 */
export function claimOfficialSkinRewards(now = Date.now()): { skinId: string; from: string }[] {
  const act = OFFICIAL_EVENTS.filter(e => e.skin && now >= Date.parse(e.start) && now <= Date.parse(e.end))
  if (!act.length) return []
  const save = loadSkins()
  const out: { skinId: string; from: string }[] = []
  for (const e of act) {
    if (grantSkin(save, e.skin!)) out.push({ skinId: e.skin!, from: e.name })
  }
  return out
}

export const EVENT_WINDOW_MS = 2 * 60 * 60 * 1000 // 2 小时一轮

function mulberry(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** 当前活动 + 结束时间戳。空档窗口自动生成一个活动填补，永远不断档 */
export function currentEvent(now = Date.now()): { event: GameEvent | null; endsAt: number; nextAt: number } {
  const win = Math.floor(now / EVENT_WINDOW_MS)
  const endsAt = (win + 1) * EVENT_WINDOW_MS
  // 官方活动镜像优先：当前处于官方活动窗口时，当期官方活动按 2 小时轮换上阵
  const act = OFFICIAL_EVENTS.filter(e => now >= Date.parse(e.start) && now <= Date.parse(e.end))
  if (act.length) {
    const pick = act[win % act.length]
    return { event: { id: pick.id, icon: pick.icon, name: pick.name, desc: pick.desc, official: true }, endsAt, nextAt: endsAt }
  }
  // 约 70% 的窗口排手工活动，其余为「空档」→ 自动生成填补
  const handcrafted = mulberry(win * 7919)() < 0.7
  if (handcrafted) {
    const pick = Math.floor(mulberry(win * 104729 + 7)() * EVENTS.length)
    return { event: EVENTS[pick], endsAt, nextAt: endsAt }
  }
  // 自动生成：随机效果 × 随机名字 × 随机强度
  const g = mulberry(win * 524287 + 13)
  const tpl = EVENTS[Math.floor(g() * EVENTS.length)]
  const names = GEN_NAMES[tpl.id]
  const name = names[Math.floor(g() * names.length)]
  const power = [0.8, 1.15, 1.5][Math.floor(g() * 3)]
  return {
    event: {
      ...tpl,
      name,
      power,
      desc: `${tpl.desc}（${POWER_LABEL[power]}强化档）`,
    },
    endsAt, nextAt: endsAt,
  }
}

export function fmtCountdown(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const ss = s % 60
  return h > 0 ? `${h}时${m}分${ss}秒` : `${m}分${String(ss).padStart(2, '0')}秒`
}

// ============ 赛季主题（每月一个全新主题，永不重复）============
// 规则：一个主题在某个月登场之后就永久退役，之后每个月都是玩家没见过的新主题。
// 实现：手工排期表（每月一格，写完即用尽）+ 排期用尽后由「焦点 × 环境」组合生成器
// 产出全新组合主题（组合本身随月份递增，亦不复用）；两个来源互不重叠，天然不重复。

export interface SeasonThemeMods {
  night?: boolean          // 强制夜战
  luck?: number            // 全局容器加成（fillContainer luck 加值）
  infect?: number          // 容器被感染概率（开箱需净化，计入赛季任务）
  fogMul?: number          // 雾浓度倍率
  raidTimeMul?: number     // 对局时长倍率
  speedMul?: number        // 玩家移速倍率
  extractMul?: number      // 撤离读条速率倍率
  enemyTierPlus?: number   // 敌人阶级整体提升
  enemyCountMul?: number   // 敌人数量倍率
  explosiveMul?: number    // 玩家手雷/炸药伤害倍率（用爆炸物击杀计入赛季任务）
  extraEvents?: RaidEventId[] // 额外触发的局内事件（如连续空投雨）
  supplyRainCount?: number // 空投雨每次空投数量（默认 3）
}

export interface SeasonThemeQuest {
  name: string
  desc: string
  target: number
  /** 计入进度的触发标签：infected 开感染箱 / convoy 截停押运 / power 合闸送电 /
   *  airdrop 开空投 / eliteDrop 精英掉落实力箱 / gas 毒雾里杀怪 / explosive 爆炸物击杀 / * 开任意战利品容器 */
  tag: 'infected' | 'convoy' | 'power' | 'airdrop' | 'eliteDrop' | 'gas' | 'explosive' | '*'
  /** 进度统计口径：默认 themeActions（按 tag 计数）；extracts = 成功撤离次数 */
  stat?: 'themeActions' | 'extracts'
}

export interface SeasonTheme {
  id: string
  icon: string
  name: string
  desc: string
  mods: SeasonThemeMods
  quest: SeasonThemeQuest
}

export type RaidEventId = 'supplyRain' | 'elitePatrol' | 'gasLeak' | 'convoy'

// —— 旧主题（2026-09 之前的档期由这套 3 主题轮换服务，之后全部永久退役）——
const LEGACY_THEMES: SeasonTheme[] = [
  { id: 'infection', icon: '☣️', name: '感染狂潮', desc: '容器被感染，开启需净化（+变异体出没）',
    mods: { infect: 0.3 }, quest: { name: '净化源头', desc: '净化并开启 3 个被感染的容器', target: 3, tag: 'infected' } },
  { id: 'convoy', icon: '🚚', name: '武装押运', desc: '押运队巡行全图，截停可夺军备箱',
    mods: { extraEvents: ['convoy'] }, quest: { name: '拦路劫案', desc: '截停武装押运并开启押运箱', target: 1, tag: 'convoy' } },
  { id: 'blackout', icon: '🌃', name: '停电夜', desc: '全图强制夜战，物资出率提升',
    mods: { night: true, luck: 0.3 }, quest: { name: '暗夜猎手', desc: '于黑夜中成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
]

// —— 排期起点：2026-09（key = year*12 + monthIndex）——
export const SCHEDULE_START = 2026 * 12 + 8

// —— 手工排期：每月一个全新主题，永不复用 ——
const SEASON_SCHEDULE: SeasonTheme[] = [
  { id: 'airdrop-carnival', icon: '🪂', name: '空投季', desc: '空投雨连绵不断，全图补给箱密度翻倍',
    mods: { extraEvents: ['supplyRain', 'supplyRain'], supplyRainCount: 5 },
    quest: { name: '捡到手软', desc: '开启 3 个空投补给箱', target: 3, tag: 'airdrop' } },
  { id: 'ace-hunt', icon: '🎖️', name: '王牌猎手', desc: '精英巡逻队倾巢而出，猎杀精英掉落实力箱',
    mods: { extraEvents: ['elitePatrol', 'elitePatrol'] },
    quest: { name: '以强者为饵', desc: '拾取 2 个精英巡逻兵的掉落实力箱', target: 2, tag: 'eliteDrop' } },
  { id: 'fog-zone', icon: '🌫️', name: '迷雾禁区', desc: '浓雾锁图视野骤降，但物资出率提升',
    mods: { fogMul: 1.8, luck: 0.3 },
    quest: { name: '雾中寻宝', desc: '在迷雾中开启 4 个战利品容器', target: 4, tag: '*' } },
  { id: 'gas-plague', icon: '☣️', name: '毒雾蔓延', desc: '毒雾泄漏频发，毒区里的击杀都有悬赏',
    mods: { extraEvents: ['gasLeak', 'gasLeak'], luck: 0.2 },
    quest: { name: '毒区清道夫', desc: '在毒雾区域内击杀 4 个敌人', target: 4, tag: 'gas' } },
  { id: 'demolition', icon: '🧨', name: '爆破月', desc: '爆炸物补给充足，手雷与炸药伤害提升 40%',
    mods: { explosiveMul: 1.4 },
    quest: { name: '艺术就是爆炸', desc: '用爆炸物击杀 3 个敌人', target: 3, tag: 'explosive' } },
  { id: 'gold-rush', icon: '💰', name: '淘金热', desc: '矿脉暴走：变卖物价值飙升，但敌人也更多',
    mods: { luck: 0.5, enemyCountMul: 1.25 },
    quest: { name: '满载而归', desc: '单局累计开启 5 个战利品容器', target: 5, tag: '*' } },
  { id: 'blitz', icon: '⚡', name: '闪电战', desc: '对局缩短至 7 分钟，全员移速提升，撤离更快',
    mods: { raidTimeMul: 0.7, speedMul: 1.12, extractMul: 1.4 },
    quest: { name: '快进快出', desc: '在闪电战节奏下成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { id: 'iron-tide', icon: '🪖', name: '钢铁洪流', desc: '敌方精锐换装上阵：数量与阶级全面提升',
    mods: { enemyCountMul: 1.35, enemyTierPlus: 1, luck: 0.2 },
    quest: { name: '硬碰硬', desc: '在钢铁洪流中成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { id: 'night-hunt', icon: '🌙', name: '暗夜猎场', desc: '永夜降临：全程夜战，精英队夜间巡猎',
    mods: { night: true, extraEvents: ['elitePatrol'], luck: 0.2 },
    quest: { name: '夜行动物', desc: '于黑夜中成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { id: 'supply-storm', icon: '🚁', name: '补给风暴', desc: '空投与毒气同时来袭：补给密度翻倍、毒雾频发',
    mods: { extraEvents: ['supplyRain', 'supplyRain', 'gasLeak'], supplyRainCount: 4, luck: 0.2 },
    quest: { name: '风暴中心', desc: '开启 3 个空投补给箱', target: 3, tag: 'airdrop' } },
  { id: 'lull', icon: '🕊️', name: '休整月', desc: '敌方偃旗息鼓：敌人减少，安稳发育的一月',
    mods: { enemyCountMul: 0.7, luck: 0.3, extractMul: 1.2 },
    quest: { name: '全身而退', desc: '在休整月成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { id: 'black-market', icon: '🏴‍☠️', name: '黑市横财', desc: '黑市泛滥：高价值容器出率大增，押运队倾巢而出',
    mods: { luck: 0.4, extraEvents: ['convoy'] },
    quest: { name: '黑吃黑', desc: '截停武装押运并开启押运箱', target: 1, tag: 'convoy' } },
]

// —— 组合生成器：排期用尽后，焦点×环境逐月产出全新组合（亦不重复）——
const COMBO_FOCUS: SeasonTheme[] = [
  SEASON_SCHEDULE[0], SEASON_SCHEDULE[1], SEASON_SCHEDULE[4],
  SEASON_SCHEDULE[5], SEASON_SCHEDULE[7], SEASON_SCHEDULE[3],
]
const COMBO_ENV: { id: string; icon: string; name: string; mods: SeasonThemeMods }[] = [
  { id: 'night', icon: '🌙', name: '永夜', mods: { night: true } },
  { id: 'fog', icon: '🌫️', name: '迷雾', mods: { fogMul: 1.8 } },
  { id: 'blitz', icon: '⚡', name: '疾风', mods: { raidTimeMul: 0.85, speedMul: 1.08 } },
  { id: 'rich', icon: '💰', name: '富矿', mods: { luck: 0.3 } },
  { id: 'war', icon: '🪖', name: '战区', mods: { enemyCountMul: 1.25 } },
]

function comboTheme(n: number): SeasonTheme {
  const cycle = Math.floor(n / (COMBO_FOCUS.length * COMBO_ENV.length))
  const jj = n % (COMBO_FOCUS.length * COMBO_ENV.length)
  const A = COMBO_FOCUS[jj % COMBO_FOCUS.length]
  const B = COMBO_ENV[Math.floor(jj / COMBO_FOCUS.length) % COMBO_ENV.length]
  const suf = cycle > 0 ? `S${cycle + 1}` : ''
  const mods: SeasonThemeMods = { ...A.mods, ...B.mods,
    extraEvents: [...(A.mods.extraEvents ?? []), ...(B.mods.extraEvents ?? [])] }
  // 焦点与环境都提供同一数值词条时取较强者，避免环境把焦点的效果压掉
  for (const k of ['luck', 'enemyCountMul', 'speedMul', 'extractMul', 'explosiveMul', 'supplyRainCount'] as const) {
    if (A.mods[k] != null && B.mods[k] != null) mods[k] = Math.max(A.mods[k]!, B.mods[k]!)
  }
  if (!mods.extraEvents || mods.extraEvents.length === 0) delete mods.extraEvents
  return { id: `${A.id}-x-${B.id}${suf}`, icon: `${A.icon}${B.icon}`,
    name: `${A.name}·${B.name}${suf}`, desc: `${A.desc}；叠加环境：${B.name}`,
    mods, quest: { ...A.quest, name: `${A.quest.name}${suf}` } }
}

/** 当前赛季主题：历史档期用旧轮换，之后每月一个全新主题且永不重复 */
export function currentSeasonTheme(d = new Date()): SeasonTheme {
  const key = d.getFullYear() * 12 + d.getMonth()
  if (key < SCHEDULE_START) return LEGACY_THEMES[key % LEGACY_THEMES.length]
  const i = key - SCHEDULE_START
  return i < SEASON_SCHEDULE.length ? SEASON_SCHEDULE[i] : comboTheme(i - SEASON_SCHEDULE.length)
}

