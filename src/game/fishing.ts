// ===================== 常驻活动：冰湖垂钓 & 守夜人的口风琴 =====================
// 对应官方 S11 长弓溪谷的钓鱼玩法与佐拉口琴任务线（名称引用官方，玩法与内容均为原创实现）。
// 两个活动都落在 snow（长弓溪谷）地图，进度存 localStorage，永久保留。

// ---------- 钓点与NPC点位（与 world.ts 雪图视觉一致） ----------
export const FISHING_SPOTS = [
  { x: -3, z: 5, name: '冰湖东岸钓点' },
  { x: -47, z: 5, name: '冰湖西岸钓点' },
]
export const HUT = { x: -25, z: 32, name: '守夜人的木屋' }
// 乐谱残页拾取点（雷达楼南门 / 营地中央 / 机库南侧 / 西哨塔）
export const PAGE_SPOTS = [
  { x: 0, z: -56 }, { x: -60, z: 40 }, { x: 60, z: 16 }, { x: -85, z: -31 },
]
// 雷达站肃清判定区域（雷达楼 + 南侧广场）
export const RADAR_ZONE = { x: 0, z: -70, r: 30 }

export const FISH_TASK_KILLS = 5   // 领钓竿委托：清理湖边敌人
export const PAGE_NEED = 4         // 口风琴阶段2：乐谱残页数量
export const PURGE_NEED = 6        // 口风琴阶段3：雷达站肃清人数
export const RAID_CATCH_CAP = 10   // 每局渔获上限

// ---------- 渔获稀有度表 ----------
export const FISH_TABLE: { defId: string; weight: number }[] = [
  { defId: 'v_fish1', weight: 45 },
  { defId: 'v_fish2', weight: 27 },
  { defId: 'v_fish3', weight: 15 },
  { defId: 'v_fish4', weight: 9 },
  { defId: 'v_fish5', weight: 4 },
]

export function rollFish(rng: () => number = Math.random): string {
  const total = FISH_TABLE.reduce((s, f) => s + f.weight, 0)
  let r = rng() * total
  for (const f of FISH_TABLE) { r -= f.weight; if (r <= 0) return f.defId }
  return FISH_TABLE[0].defId
}

// ---------- 钓鱼存档 ----------
export interface FishingSave {
  rod: boolean                    // 是否已领到钓竿（永久解锁）
  acc: boolean                    // 是否已接领竿委托
  kills: number                   // 委托击杀进度
  total: number                   // 累计渔获
  dex: Record<string, number>     // 图鉴：defId → 累计条数
}

const FISH_KEY = 'mojin_fishing_v1'

export function loadFishing(): FishingSave {
  try {
    const raw = localStorage.getItem(FISH_KEY)
    if (raw) return { rod: false, acc: false, kills: 0, total: 0, dex: {}, ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return { rod: false, acc: false, kills: 0, total: 0, dex: {} }
}

export function saveFishing(s: FishingSave) {
  try { localStorage.setItem(FISH_KEY, JSON.stringify(s)) } catch { /* 忽略 */ }
}

// ---------- 口风琴任务线存档 ----------
// stage: 0 未开始 → 1 夺回头盔 → 2 收集残页 → 3 肃清雷达站 → 4 已完成（获得口风琴）
export interface HarpSave {
  stage: number
  helmet: boolean  // 阶段1：已拾取遗落的英雄头盔
  pages: number    // 阶段2：已收集残页数（跨局累积）
  pageIds: number[] // 已拾取的残页点位下标（防止跨局重复拾取同一处）
  purge: number    // 阶段3：雷达站肃清进度（跨局累积）
}

const HARP_KEY = 'mojin_harmonica_v1'

export function loadHarp(): HarpSave {
  try {
    const raw = localStorage.getItem(HARP_KEY)
    if (raw) return { stage: 0, helmet: false, pages: 0, pageIds: [], purge: 0, ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return { stage: 0, helmet: false, pages: 0, pageIds: [], purge: 0 }
}

export function saveHarp(s: HarpSave) {
  try { localStorage.setItem(HARP_KEY, JSON.stringify(s)) } catch { /* 忽略 */ }
}

/** 口风琴任务线的阶段描述（木屋对话/活动面板用） */
export function harpStageText(s: HarpSave): string {
  switch (s.stage) {
    case 0: return '去湖畔木屋拜访守夜人佐拉，听听她的故事'
    case 1: return s.helmet ? '已拾取英雄头盔，回去交给佐拉' : '阶段一：击败「雪盲」·白狼，夺回遗落的英雄头盔'
    case 2: return s.pages >= PAGE_NEED ? '残页集齐了，回去交给佐拉' : `阶段二：收集散落的乐谱残页（${s.pages}/${PAGE_NEED}）`
    case 3: return s.purge >= PURGE_NEED ? '雷达站已肃清，回去告诉佐拉' : `阶段三：肃清雷达站的敌人（${s.purge}/${PURGE_NEED}）`
    default: return '已完成——守夜人口风琴可在局内按 H 吹奏'
  }
}
