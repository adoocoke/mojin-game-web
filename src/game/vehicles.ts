// ====================== 载具系统（大战场） ======================
// 对应官方：三角洲行动全面战场载具（LAV-G1 步战车 / M1A2 主战坦克 / AH-64 武装直升机 / 突击车）。
// 载具名称为现实装备名（事实引用）；数值、操控手感、模型与配色均为本游戏原创实现。

const KEY = 'mojin_vehicles_v1'

export interface VehicleWeapon {
  name: string
  dmg: number       // 单发伤害（对人员）
  interval: number  // 射击间隔（毫秒）
  splash: number    // 溅射半径（0 = 纯直射）
  range: number
}

export interface VehicleDef {
  id: string
  name: string
  icon: string
  hp: number
  speed: number     // 极速 m/s
  turn: number      // 转向速度 rad/s
  weapon: VehicleWeapon
  bulletResist: number // 枪械伤害减免（爆炸物不受减免）
  fly?: boolean     // 直升机
  minY?: number
  maxY?: number
}

export const VEHICLES: Record<string, VehicleDef> = {
  buggy: {
    id: 'buggy', name: '突击车', icon: '🛻', hp: 420, speed: 14, turn: 2.2, bulletResist: 0.35,
    weapon: { name: '车载机枪', dmg: 14, interval: 110, splash: 0, range: 130 },
  },
  lav: {
    id: 'lav', name: 'LAV-G1 步战车', icon: '🚙', hp: 950, speed: 9, turn: 1.5, bulletResist: 0.7,
    weapon: { name: '25mm 机炮', dmg: 32, interval: 300, splash: 1.6, range: 170 },
  },
  tank: {
    id: 'tank', name: 'M1A2 主战坦克', icon: '🛡️', hp: 1900, speed: 5.5, turn: 0.9, bulletResist: 0.88,
    weapon: { name: '125mm 滑膛炮', dmg: 260, interval: 3200, splash: 4.5, range: 230 },
  },
  heli: {
    id: 'heli', name: 'AH-64 武装直升机', icon: '🚁', hp: 1200, speed: 17, turn: 1.6, bulletResist: 0.55,
    fly: true, minY: 5, maxY: 30,
    weapon: { name: '火箭巢', dmg: 130, interval: 850, splash: 3.2, range: 270 },
  },
}

// 各模式/地图的友方载具配置（出生点附近停放）
export const WAR_VEHICLE_LOADOUT: Record<string, string[]> = {
  tdm: ['buggy', 'lav', 'heli'],
  ad: ['buggy', 'lav', 'tank', 'heli'],
}

// ====================== 载具涂装 ======================
export interface VehicleSkin {
  id: string
  name: string
  icon: string
  main: number
  accent: number
  desc: string
}

export const VEHICLE_SKINS: VehicleSkin[] = [
  { id: 'vt_default', name: '丛林涂装', icon: '🌲', main: 0x4a5240, accent: 0x2c3128, desc: '制式丛林绿涂装' },
  { id: 'vt_zhouyear', name: '洲年赤金', icon: '🏎️', main: 0x7a1622, accent: 0xd8c88a, desc: '「洲年载具登录领」活动涂装（对应官方：洲年限定载具造型，配色原创）' },
  { id: 'vt_trickster', name: '捣蛋鬼', icon: '🎃', main: 0x8a4a12, accent: 0x5a2a7a, desc: '「战场畅玩月」LAV-G1 载具涂装（对应官方：LAV-G1-捣蛋鬼，配色原创）' },
]

export interface VehicleSave {
  ownedSkins: string[]
  skin: string        // 当前装备的涂装
  destroyed: number   // 累计击毁敌方载具
}

function def(): VehicleSave {
  return { ownedSkins: ['vt_default'], skin: 'vt_default', destroyed: 0 }
}

export function loadVehicles(): VehicleSave {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...def(), ...JSON.parse(raw) }
  } catch { /* 忽略 */ }
  return def()
}

export function saveVehicles(s: VehicleSave) {
  try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* 忽略 */ }
}

/** 发放载具涂装；返回是否为新获得 */
export function grantVehicleSkin(id: string): boolean {
  const s = loadVehicles()
  if (s.ownedSkins.includes(id) || !VEHICLE_SKINS.some(v => v.id === id)) return false
  s.ownedSkins.push(id)
  saveVehicles(s)
  return true
}

export function vehicleSkinDef(id: string): VehicleSkin | undefined {
  return VEHICLE_SKINS.find(v => v.id === id)
}
