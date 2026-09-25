// ===================== 定期轮换活动系统 =====================
import { loadSkins, grantSkin } from './skins'

// 每 2 小时轮换一个活动（按时间窗口确定性选取，所有玩家同一时段看到同一个）
// 空档窗口由系统自动生成一个随机活动填补（随机效果 × 随机名字 × 随机强度），无需人工维护

export interface GameEvent {
  id: 'lucky' | 'goldrush' | 'airdrop' | 'bounty' | 'gunsale' | 'cards' | 'nests' | 'elite' | 'medic' | 'official'
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
  official: ['官方活动'], // 中性 id：仅官方镜像使用，不参与自动生成
}
// 自动活动的强度档位描述
const POWER_LABEL: Record<number, string> = { 0.8: '小幅', 1.15: '中幅', 1.5: '大幅' }

// ===================== 三角洲行动官方活动镜像 =====================
// 官方无活动数据接口，此表人工维护：官方活动更新后同步修改本表即可，引擎零改动。
// 处于官方活动窗口时，当期官方活动按 2 小时轮换上阵（名称与官方一致，效果等价映射到本游戏系统）；
// 官方活动空档期回退到上方的常驻轮换。道具掉落类活动（lootTag）在窗口期内全程生效，数值效果类仍按轮换。
export interface OfficialEvent {
  id: GameEvent['id'] // 复用现有效果挂钩
  icon: string
  name: string        // 官方活动名
  desc: string        // 本游戏内的等价效果说明
  start: string       // 活动窗口（北京时间，ISO 格式）
  end: string
  skin?: string       // 「登录领皮肤」类活动：窗口期内首次开局发放该皮肤（skins.ts 中的皮肤 id）
  lootTag?: 'drinkMat' | 'luckybag' | 'mandelbrick'  // 局内道具掉落注入（窗口期内所有此类活动同时生效）
}

const OFFICIAL_EVENTS: OfficialEvent[] = [
  // —— 二周年庆（洲年庆）周期：2026-09 ——
  { id: 'airdrop', icon: '🪂', name: '洲年空投', start: '2026-09-17T00:00:00+08:00', end: '2026-09-30T23:59:59+08:00',
    desc: '局内空投舱加倍：每张地图额外掉落空投航空箱' },
  { id: 'official', icon: '🧱', name: '猩红曼德尔砖返场', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', lootTag: 'mandelbrick',
    desc: '全图容器概率刷出猩红曼德尔砖，带出到仓库破译开启，保底出红色物资' },
  { id: 'official', icon: '🏷️', name: '周年神秘折扣商店', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '皮肤商店全场 5 折，支持限时三角券购买（🎨 皮肤页）' },
  { id: 'official', icon: '🧧', name: '红运福袋', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', lootTag: 'luckybag',
    desc: '击杀 Boss、搜刮容器概率掉落红运福袋（1 格），带出到仓库开启：金币、物资好礼' },
  { id: 'elite', icon: '🛡️', name: '哈夫克保险小队', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '精英保险小队入场（盾兵+机枪兵组合），击杀掉落大保险级物资' },
  { id: 'official', icon: '🎟️', name: '限时三角券狂欢', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00',
    desc: '登录领 500 券、10月1日再领 1000 券，每日首次撤离 +150 券（保底 3900）；券可购皮肤，活动结束清零' },
  { id: 'official', icon: '🍹', name: '饮品特调返场', start: '2026-09-26T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', lootTag: 'drinkMat',
    desc: '容器掉落调酒材料，按配方+摇晃时间调制 12 种增益饮品（调错会喝醉），局内饮用获得增益' },
  // —— 外观/皮肤类：窗口期内首次开局直接发放对应皮肤（皮肤系统见 skins.ts） ——
  { id: 'official', icon: '🕶️', name: '彦祖回归联动', start: '2026-09-10T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_daniel',
    desc: '登录即领联动皮肤「彦祖同行」（对应官方：登录领彦祖联动头像/喷漆/军牌）' },
  { id: 'official', icon: '🎖️', name: '传说外观登录领', start: '2026-09-04T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_aug_congee',
    desc: '登录即领 AUG 传说皮肤「金粥年」（对应官方：登录领传说外观 AUG-金粥年）' },
  { id: 'official', icon: '🏎️', name: '洲年限定载具造型', start: '2026-09-24T00:00:00+08:00', end: '2026-10-15T23:59:59+08:00', skin: 'sk_zhouyear',
    desc: '登录即领皮肤「洲年限定」（对应官方：洲年限定载具造型上架）' },
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

/** 当前处于窗口期的全部官方道具掉落标签（引擎注入用：窗口内全程生效，不随轮换） */
export function activeOfficialLoot(now = Date.now()): Set<string> {
  const s = new Set<string>()
  for (const e of OFFICIAL_EVENTS) {
    if (e.lootTag && now >= Date.parse(e.start) && now <= Date.parse(e.end)) s.add(e.lootTag)
  }
  return s
}

/** 指定名称的官方活动当前是否处于窗口期 */
export function officialEventActive(name: string, now = Date.now()): boolean {
  return OFFICIAL_EVENTS.some(e => e.name === name && now >= Date.parse(e.start) && now <= Date.parse(e.end))
}

export type OfficialEventStatus = 'active' | 'upcoming' | 'ended'
export interface OfficialEventInfo extends OfficialEvent {
  status: OfficialEventStatus
  startAt: number
  endAt: number
}

/** 全部官方活动镜像及当前状态（活动中心页面用）：进行中 → 即将开启 → 已结束 */
export function officialEventsList(now = Date.now()): OfficialEventInfo[] {
  const rank: Record<OfficialEventStatus, number> = { active: 0, upcoming: 1, ended: 2 }
  return OFFICIAL_EVENTS.map(e => {
    const startAt = Date.parse(e.start)
    const endAt = Date.parse(e.end)
    const status: OfficialEventStatus = now < startAt ? 'upcoming' : now > endAt ? 'ended' : 'active'
    return { ...e, status, startAt, endAt }
  }).sort((a, b) => rank[a.status] - rank[b.status] || a.startAt - b.startAt)
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

// ============ 赛季主题（与三角洲行动官方赛季同步）============
// 官方赛季每季约 2-3 个月，本表人工维护：官方新赛季上线后同步追加一行即可，引擎零改动。
// 赛季主题效果（mods）按官方赛季内容做等价映射（如 S4 黑夜之子=全季夜战、S10 裂变=辐射感染）；
// 超出已知赛季档期时由组合生成器兜底，直到下次同步。赛季名引用官方名称（事实信息），效果说明为原创。

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

interface OfficialSeason {
  num: number            // 官方赛季序号
  icon: string
  name: string           // 官方赛季名
  desc: string           // 本游戏内的主题效果说明
  start: string          // 赛季窗口（北京时间，ISO 格式）
  end: string
  mods: SeasonThemeMods
  quest: SeasonThemeQuest
}

// —— 三角洲行动官方赛季编年史（国服） ——
const OFFICIAL_SEASONS: OfficialSeason[] = [
  { num: 1, icon: '🌱', name: '起源', start: '2024-09-26T00:00:00+08:00', end: '2024-11-20T23:59:59+08:00',
    desc: '梦开始的地方：原汁原味的摸金战场，无额外修正',
    mods: {}, quest: { name: '初入烽火', desc: '成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { num: 2, icon: '⚛️', name: '聚变', start: '2024-11-21T00:00:00+08:00', end: '2025-01-14T23:59:59+08:00',
    desc: '聚变之力：爆炸物伤害提升 20%',
    mods: { explosiveMul: 1.2 }, quest: { name: '聚变打击', desc: '用爆炸物击杀 3 个敌人', target: 3, tag: 'explosive' } },
  { num: 3, icon: '🎆', name: '焰火', start: '2025-01-15T00:00:00+08:00', end: '2025-04-16T23:59:59+08:00',
    desc: '焰火漫天：爆炸物伤害提升 30%，空投雨更频繁',
    mods: { explosiveMul: 1.3, extraEvents: ['supplyRain'] }, quest: { name: '焰火齐射', desc: '用爆炸物击杀 3 个敌人', target: 3, tag: 'explosive' } },
  { num: 4, icon: '🌑', name: '黑夜之子', start: '2025-04-17T00:00:00+08:00', end: '2025-07-03T23:59:59+08:00',
    desc: '永夜降临：全赛季固定夜战，配电室可恢复局部照明',
    mods: { night: true }, quest: { name: '暗夜猎手', desc: '于黑夜中成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { num: 5, icon: '🔨', name: '破壁', start: '2025-07-04T00:00:00+08:00', end: '2025-09-16T23:59:59+08:00',
    desc: '破壁突入：敌人数量提升 20%，撤离读条加快 10%',
    mods: { enemyCountMul: 1.2, extractMul: 1.1 }, quest: { name: '破壁而出', desc: '成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { num: 6, icon: '🔥', name: '烈火冲天', start: '2025-09-17T00:00:00+08:00', end: '2025-11-13T23:59:59+08:00',
    desc: '烈火燎原：爆炸物伤害提升 30%，毒气泄漏频发',
    mods: { explosiveMul: 1.3, extraEvents: ['gasLeak'] }, quest: { name: '纵火犯', desc: '用爆炸物击杀 3 个敌人', target: 3, tag: 'explosive' } },
  { num: 7, icon: '🛡️', name: '阿萨拉', start: '2025-11-14T00:00:00+08:00', end: '2026-01-28T23:59:59+08:00',
    desc: '阿萨拉卫队压境：敌人阶级 +1、数量提升 15%',
    mods: { enemyTierPlus: 1, enemyCountMul: 1.15 }, quest: { name: '卫队猎手', desc: '拾取 2 个精英掉落实力箱', target: 2, tag: 'eliteDrop' } },
  { num: 8, icon: '🦋', name: '蝶变时刻', start: '2026-01-29T00:00:00+08:00', end: '2026-04-15T23:59:59+08:00',
    desc: '破茧蝶变：全员移速提升 8%，撤离读条加快 20%',
    mods: { speedMul: 1.08, extractMul: 1.2 }, quest: { name: '蝶变新生', desc: '成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { num: 9, icon: '📡', name: '回声', start: '2026-04-16T00:00:00+08:00', end: '2026-06-25T23:59:59+08:00',
    desc: '声波迷雾：雾浓度提升 50%，精英巡逻队频繁入场',
    mods: { fogMul: 1.5, extraEvents: ['elitePatrol'] }, quest: { name: '回声定位', desc: '在迷雾中开启 4 个战利品容器', target: 4, tag: '*' } },
  { num: 10, icon: '☢️', name: '裂变', start: '2026-06-26T00:00:00+08:00', end: '2026-09-03T23:59:59+08:00',
    desc: '核子裂变：25% 容器被辐射污染（开箱需净化），毒气泄漏频发，爆率提升 20%',
    mods: { infect: 0.25, extraEvents: ['gasLeak', 'gasLeak'], luck: 0.2 }, quest: { name: '辐射净化', desc: '净化并开启 3 个被污染的容器', target: 3, tag: 'infected' } },
  { num: 11, icon: '🌟', name: '群星', start: '2026-09-04T00:00:00+08:00', end: '2026-11-04T23:59:59+08:00',
    desc: '二周年群星：空投雨连绵（每次 4 个），爆率提升 30%',
    mods: { extraEvents: ['supplyRain', 'supplyRain'], supplyRainCount: 4, luck: 0.3 }, quest: { name: '群星馈赠', desc: '开启 3 个空投补给箱', target: 3, tag: 'airdrop' } },
]

// —— 组合生成器：已知赛季档期之外的兜底（官方新赛季上线后同步上表即被取代） ——
const COMBO_FOCUS: { id: string; icon: string; name: string; desc: string; mods: SeasonThemeMods; quest: SeasonThemeQuest }[] = [
  { id: 'airdrop', icon: '🪂', name: '空投季', desc: '空投雨连绵不断，全图补给箱密度翻倍', mods: { extraEvents: ['supplyRain', 'supplyRain'], supplyRainCount: 5 },
    quest: { name: '捡到手软', desc: '开启 3 个空投补给箱', target: 3, tag: 'airdrop' } },
  { id: 'ace', icon: '🎖️', name: '王牌猎手', desc: '精英巡逻队倾巢而出，猎杀与反猎杀', mods: { extraEvents: ['elitePatrol', 'elitePatrol'] },
    quest: { name: '以强者为饵', desc: '拾取 2 个精英掉落实力箱', target: 2, tag: 'eliteDrop' } },
  { id: 'demolition', icon: '🧨', name: '爆破月', desc: '爆炸物伤害提升 40%，艺术就是爆炸', mods: { explosiveMul: 1.4 },
    quest: { name: '艺术就是爆炸', desc: '用爆炸物击杀 3 个敌人', target: 3, tag: 'explosive' } },
  { id: 'gold', icon: '💰', name: '淘金热', desc: '变卖物价值飙升，但人人都想分一杯羹', mods: { luck: 0.5, enemyCountMul: 1.25 },
    quest: { name: '满载而归', desc: '单局累计开启 5 个战利品容器', target: 5, tag: '*' } },
  { id: 'iron', icon: '🪖', name: '钢铁洪流', desc: '敌人数量与阶级全面提升，硬碰硬', mods: { enemyCountMul: 1.35, enemyTierPlus: 1, luck: 0.2 },
    quest: { name: '硬碰硬', desc: '成功撤离 1 次', target: 1, tag: '*', stat: 'extracts' } },
  { id: 'gas', icon: '☣️', name: '毒雾蔓延', desc: '毒雾泄漏频发，防毒面具就是第二条命', mods: { extraEvents: ['gasLeak', 'gasLeak'], luck: 0.2 },
    quest: { name: '毒区清道夫', desc: '在毒雾区域内击杀 4 个敌人', target: 4, tag: 'gas' } },
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

/** 当前所处的官方赛季（无匹配 = 超出已知档期） */
export function currentOfficialSeason(d = new Date()): OfficialSeason | null {
  const now = d.getTime()
  for (const s of OFFICIAL_SEASONS) {
    if (now >= Date.parse(s.start) && now <= Date.parse(s.end)) return s
  }
  return null
}

/** 当前赛季主题：优先与官方赛季同步；超出已知档期用组合生成器兜底（逐月不重复） */
export function currentSeasonTheme(d = new Date()): SeasonTheme {
  const s = currentOfficialSeason(d)
  if (s) return { id: `s${s.num}`, icon: s.icon, name: `S${s.num} · ${s.name}`, desc: s.desc, mods: s.mods, quest: s.quest }
  // 兜底：S1 之前的日期按 S1 计；之后的按月份组合生成
  const first = OFFICIAL_SEASONS[0]
  if (d.getTime() < Date.parse(first.start)) {
    return { id: 's1', icon: first.icon, name: `S1 · ${first.name}`, desc: first.desc, mods: first.mods, quest: first.quest }
  }
  const last = OFFICIAL_SEASONS[OFFICIAL_SEASONS.length - 1]
  const months = Math.max(0, (d.getFullYear() * 12 + d.getMonth())
    - (Number(last.end.slice(0, 4)) * 12 + Number(last.end.slice(5, 7)) - 1))
  return comboTheme(months)
}
