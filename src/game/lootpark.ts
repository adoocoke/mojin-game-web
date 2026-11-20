// ===================== 摸金乐园：官方容器体系与品类爆率 =====================
// 容器类型与品类专属规则对齐三角洲行动官方（保险柜只出工艺藏品、服务器/电脑只出电子、医疗堆只出医疗、
// 大武器箱出军工、实验服出房卡、杂物类全品类）；爆率分层对齐官方机密档社区实测感知
//（高爆率容器红 1.5% / 中 0.5% / 低 0.12% / 垃圾 0.03%）；物资池随官方公告赛季更新。
import { ITEMS, makeItem } from './data'
import type { ItemDef, ItemInstance } from './types'

/** 爆率档位（对齐官方：机密档为基准） */
export type ParkTier = 0 | 1 | 2 | 3 | 4 // 0=空投 1=高爆率 2=中 3=低 4=垃圾
/** 品类（对齐官方容器品类专属规则） */
export type ParkCat = 'craft' | 'electronic' | 'medical' | 'military' | 'cards' | 'mixed'

export interface ParkContainerDef {
  title: string        // 官方容器名
  icon: string
  tier: ParkTier
  cat: ParkCat
  gridW: number
  gridH: number
  slots: [number, number] // 出货件数范围
  color: number        // 展台 3D 颜色
}

/** 官方 28 类容器全量（名称/品类/爆率档对齐官方；垃圾容器也能出红——官方"任何容器都有概率出大红"） */
export const PARK_CONTAINERS: ParkContainerDef[] = [
  // —— 高爆率（官方必吃榜） ——
  { title: '保险柜',     icon: '🏦', tier: 1, cat: 'craft',      gridW: 4, gridH: 4, slots: [2, 4], color: 0x8a6d2f },
  { title: '小保险箱',   icon: '🔐', tier: 1, cat: 'craft',      gridW: 2, gridH: 2, slots: [1, 1], color: 0x9a7d3f },
  { title: '航空储物箱', icon: '✈️', tier: 1, cat: 'mixed',      gridW: 5, gridH: 4, slots: [2, 4], color: 0x4a6d8a },
  { title: '空投补给箱', icon: '🎁', tier: 0, cat: 'mixed',      gridW: 6, gridH: 4, slots: [3, 5], color: 0xb03a2e },
  // —— 中爆率 ——
  { title: '服务器',     icon: '🗄️', tier: 2, cat: 'electronic', gridW: 4, gridH: 4, slots: [1, 3], color: 0x2f4f4f },
  { title: '电脑',       icon: '💻', tier: 2, cat: 'electronic', gridW: 4, gridH: 3, slots: [1, 3], color: 0x3a4a5a },
  { title: '医疗物资堆', icon: '🏥', tier: 2, cat: 'medical',    gridW: 4, gridH: 3, slots: [1, 3], color: 0x7a3a3a },
  { title: '大武器箱',   icon: '🗃️', tier: 2, cat: 'military',   gridW: 5, gridH: 3, slots: [1, 3], color: 0x4a5a3a },
  { title: '实验服',     icon: '🥼', tier: 2, cat: 'cards',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x8a8a7a },
  // —— 低爆率 ——
  { title: '高级储物箱', icon: '📦', tier: 3, cat: 'mixed',      gridW: 4, gridH: 4, slots: [1, 3], color: 0x6d5a3f },
  { title: '高级旅行箱', icon: '🧳', tier: 3, cat: 'mixed',      gridW: 4, gridH: 3, slots: [1, 3], color: 0x7a5a4a },
  { title: '登山包',     icon: '🎒', tier: 3, cat: 'mixed',      gridW: 3, gridH: 4, slots: [1, 2], color: 0x5a6d4a },
  { title: '手提箱',     icon: '💼', tier: 3, cat: 'mixed',      gridW: 4, gridH: 2, slots: [1, 2], color: 0x5a4a3a },
  { title: '鸟窝',       icon: '🪹', tier: 3, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x6d4a2f },
  { title: '武器箱',     icon: '🔫', tier: 3, cat: 'military',   gridW: 4, gridH: 3, slots: [1, 2], color: 0x3f4a3a },
  { title: '弹药箱',     icon: '🎯', tier: 3, cat: 'military',   gridW: 3, gridH: 3, slots: [1, 2], color: 0x4a4a2f },
  { title: '电脑机箱',   icon: '🖥️', tier: 3, cat: 'electronic', gridW: 3, gridH: 3, slots: [1, 2], color: 0x3a3f4a },
  { title: '医疗包',     icon: '⛑️', tier: 3, cat: 'medical',    gridW: 3, gridH: 2, slots: [1, 2], color: 0x7a4a4a },
  { title: '藏匿物',     icon: '🕳️', tier: 3, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x4a3f35 },
  // —— 垃圾容器（官方：狗都嫌，但欧皇仍能出红） ——
  { title: '收纳盒',     icon: '🗳️', tier: 4, cat: 'mixed',      gridW: 3, gridH: 2, slots: [1, 2], color: 0x5a5a5a },
  { title: '抽屉柜',     icon: '🗄️', tier: 4, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x6d6d5a },
  { title: '工具柜',     icon: '🧰', tier: 4, cat: 'military',   gridW: 3, gridH: 3, slots: [1, 2], color: 0x5a5a4a },
  { title: '大工具盒',   icon: '⚒️', tier: 4, cat: 'military',   gridW: 4, gridH: 3, slots: [1, 2], color: 0x4f4f3f },
  { title: '快递箱',     icon: '📫', tier: 4, cat: 'mixed',      gridW: 3, gridH: 2, slots: [1, 2], color: 0x7a6d4a },
  { title: '旅行袋',     icon: '👝', tier: 4, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x5f5a4a },
  { title: '衣服',       icon: '👕', tier: 4, cat: 'mixed',      gridW: 2, gridH: 3, slots: [1, 2], color: 0x5a6a7a },
  { title: '电脑包',     icon: '💻', tier: 4, cat: 'electronic', gridW: 2, gridH: 2, slots: [1, 1], color: 0x3a3a4a },
  { title: '储物柜',     icon: '🚪', tier: 4, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x4a5a6a },
  { title: '野外物资箱', icon: '📦', tier: 4, cat: 'mixed',      gridW: 4, gridH: 3, slots: [1, 2], color: 0x5d6d4a },
  { title: '井盖',       icon: '🕳️', tier: 4, cat: 'mixed',      gridW: 3, gridH: 3, slots: [1, 2], color: 0x3f3f3f },
  { title: '垃圾箱',     icon: '🗑️', tier: 4, cat: 'mixed',      gridW: 2, gridH: 2, slots: [1, 1], color: 0x4a4a42 },
  { title: '搅拌车',     icon: '🚚', tier: 4, cat: 'mixed',      gridW: 4, gridH: 3, slots: [1, 2], color: 0x7a7a6a },
]

/** 品质概率（对齐官方机密档感知：红/金/紫；其余为蓝绿白填充） */
const TIER_ODDS: Record<ParkTier, { red: number; gold: number; purple: number }> = {
  0: { red: 0.03,  gold: 0.25, purple: 0.45 }, // 空投（官方新版必吃榜第一）
  1: { red: 0.015, gold: 0.18, purple: 0.40 }, // 高爆率容器
  2: { red: 0.005, gold: 0.08, purple: 0.25 }, // 中爆率
  3: { red: 0.0012, gold: 0.03, purple: 0.12 }, // 低爆率
  4: { red: 0.0003, gold: 0.008, purple: 0.04 }, // 垃圾容器（官方：任何容器都能出大红）
}

/** 品类物资池（大红对齐官方图鉴；金紫填充复用本游戏现有藏品；随官方公告赛季更新） */
const PARK_POOLS: Record<ParkCat, { red: string[]; gold: string[]; purple: string[]; filler: string[] }> = {
  craft: {
    red: ['v_lp_african', 'v_lp_ifv', 'v_lp_gramo', 'v_lp_gazelle', 'v_lp_musket', 'v_lp_bust'],
    gold: ['v_crown', 'v_vase', 'v_painting', 'v_jade', 'v_diamond', 'v_relic'],
    purple: ['v_necklace', 'v_goldbar', 'v_ring', 'v_watch', 'v_medal'],
    filler: ['v_coin', 'v_cigar', 'v_cigs', 'v_bottle', 'v_perfume'],
  },
  electronic: {
    red: ['v_lp_topsec', 'v_lp_radar', 'v_lp_cloud', 'v_lp_disk', 'v_lp_blade', 'v_lp_blackbox', 'v_lp_laptop', 'v_lp_terminal', 'v_lp_radio', 'v_lp_array', 'v_lp_ctrl', 'v_super'],
    gold: ['v_gpu', 'v_intel', 'v_chip'],
    purple: ['v_scope', 'v_camera', 'v_compass'],
    filler: ['v_coin', 'v_cigs', 'a_ammo'],
  },
  medical: {
    red: ['v_lp_vent', 'v_lp_ecmo', 'v_lp_aed', 'v_lp_breath'],
    gold: ['v_medal', 'v_watch'],
    purple: ['m_medkit', 'm_spray'],
    filler: ['m_bandage', 'v_bottle', 'v_coin'],
  },
  military: {
    red: ['v_lp_carbon', 'v_lp_shell'],
    gold: ['w_m700', 'w_m24', 'at_scope4', 'at_supp'],
    purple: ['w_sks', 'w_akm', 'at_rdot', 'at_comp', 'a_ammo3'],
    filler: ['a_ammo', 'a_ammo2', 'm_bandage'],
  },
  cards: {
    red: ['k_t_dorm', 'k_d_crypt'],
    gold: ['k_w_cave', 'k_d_oasis'],
    purple: ['k_w_shed'],
    filler: ['v_coin', 'v_intel'],
  },
  mixed: {
    // 杂物类全品类（官方：高级旅行箱能出半身像/电脑，鸟窝能出非洲之心）
    red: ['v_lp_robo', 'v_lp_vacuum', 'v_lp_african', 'v_lp_laptop', 'v_lp_bust', 'v_lp_drone', 'v_lp_camera2', 'v_super'],
    gold: ['v_crown', 'v_vase', 'v_diamond', 'v_jade', 'v_piano', 'v_gpu'],
    purple: ['v_goldbar', 'v_necklace', 'v_watch', 'v_ring', 'v_camera', 'v_perfume'],
    filler: ['v_coin', 'v_cigar', 'v_cigs', 'v_bottle', 'v_scope', 'm_bandage'],
  },
}

/** 摸金乐园容器出货：先按容器档位定品质，再从品类池抽取；全容器 0.02% 欧皇位出「海洋之泪」 */
export function rollParkLoot(def: ParkContainerDef): ItemInstance[] {
  const n = def.slots[0] + Math.floor(Math.random() * (def.slots[1] - def.slots[0] + 1))
  const odds = TIER_ODDS[def.tier]
  const pool = PARK_POOLS[def.cat]
  const out: ItemInstance[] = []
  // 小容器不生成放不下的物资（如电脑包不出 2×3 服务器），避免出货丢失
  const pick = (ids: string[]) => {
    const fit = ids.filter(id => ITEMS[id].w <= def.gridW && ITEMS[id].h <= def.gridH)
    const src = fit.length ? fit : pool.filler.filter(id => ITEMS[id].w <= def.gridW && ITEMS[id].h <= def.gridH)
    return src[Math.floor(Math.random() * src.length)]
  }
  for (let i = 0; i < n; i++) {
    if (Math.random() < 0.0002) { out.push(makeItem('v_lp_tear', 1)); continue } // 欧皇检测位
    const r = Math.random()
    let defId: string
    if (r < odds.red) defId = pick(pool.red)
    else if (r < odds.red + odds.gold) defId = pick(pool.gold)
    else if (r < odds.red + odds.gold + odds.purple) defId = pick(pool.purple)
    else defId = pick(pool.filler)
    out.push(makeItem(defId, 1))
  }
  return out
}

/** 出红播报（青色高价值也提示；本游戏品级表使用 cyan 表示传说档） */
export function parkJackpot(item: ItemInstance): 'red' | 'cyan' | null {
  const def: ItemDef = ITEMS[item.defId]
  if (def.rarity === 'red') return 'red'
  if (item.rarity === 'cyan' || def.rarity === 'cyan') return 'cyan'
  return null
}
