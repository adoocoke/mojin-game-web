// ====================== 枪皮系统 ======================
// 皮肤改变第一人称视模的配色/发光，永久拥有、按枪装备，存档在本地（不随赛季重置）。
// 来源：商店金币购买 / 官方活动镜像发放（如「登录领皮肤」类活动）/ 后续可接成就、掉落等。
// 注：皮肤名可引用官方活动名（事实信息），但配色设计均为原创，不复制官方皮肤美术。

import type { Rarity } from './types'

export interface SkinDef {
  id: string
  name: string
  icon: string
  rarity: Rarity
  /** 适用枪械 gunId；'any' = 全武器通用 */
  gun: string | 'any'
  /** 主色（枪身/刀身） */
  main: number
  /** 配件色（枪管/弹匣/握把等深色件），缺省保持原色 */
  accent?: number
  /** 自发光 */
  emissive?: number
  emissiveIntensity?: number
  /** 面板展示与获取途径说明 */
  desc: string
  /** 商店售价（金币）；无价签 = 仅活动发放 */
  price?: number
}

export const SKINS: SkinDef[] = [
  // ---------- 常驻商店 ----------
  { id: 'sk_sand',    name: '战术沙色',   icon: '🏜️', rarity: 'green',  gun: 'any',  main: 0xb09a6a, accent: 0x6b5f45, price: 800,
    desc: '经典沙漠迷彩涂装，低调耐脏' },
  { id: 'sk_forest',  name: '丛林猎手',   icon: '🌲', rarity: 'green',  gun: 'any',  main: 0x4a5d3a, accent: 0x2c3624, price: 800,
    desc: '深绿丛林涂装，草丛里更难被察觉（心理作用）' },
  { id: 'sk_arctic',  name: '极地白',     icon: '❄️', rarity: 'blue',   gun: 'any',  main: 0xdde4ea, accent: 0x8a98a5, price: 2000,
    desc: '雪原极地涂装，雪地图限定气质' },
  { id: 'sk_crimson', name: '猩红突袭',   icon: '🩸', rarity: 'purple', gun: 'any',  main: 0x8a1f2b, accent: 0x2a0d10, emissive: 0x5a0d16, emissiveIntensity: 0.25, price: 4500,
    desc: '猩红涂装，枪身泛着不祥的暗光' },
  { id: 'sk_aurora',  name: '极光',       icon: '🌌', rarity: 'cyan',   gun: 'any',  main: 0x1f4a5a, accent: 0x0d2230, emissive: 0x2ad6c8, emissiveIntensity: 0.4, price: 9000,
    desc: '深蓝枪身上流转着极光般的青光' },
  // ---------- 官方活动镜像发放（无价签，仅活动获取） ----------
  { id: 'sk_aug_congee', name: '金粥年',  icon: '🎖️', rarity: 'red',    gun: 'aug',  main: 0xd8c88a, accent: 0x6a5a30, emissive: 0xffd94d, emissiveIntensity: 0.3,
    desc: '二周年庆「传说外观登录领」活动发放（对应官方：AUG-金粥年）' },
  { id: 'sk_daniel',  name: '彦祖同行',   icon: '🕶️', rarity: 'cyan',   gun: 'any',  main: 0x16181d, accent: 0xb8923a, emissive: 0xd8a83a, emissiveIntensity: 0.2,
    desc: '「彦祖回归联动」活动发放的黑金涂装' },
  { id: 'sk_zhouyear', name: '洲年限定',  icon: '🏎️', rarity: 'purple', gun: 'any',  main: 0x7a1622, accent: 0xd8c88a, emissive: 0xff5a3c, emissiveIntensity: 0.22,
    desc: '「洲年限定」活动发放的红金纪念涂装' },
]

// ====================== 存档（永久，不随赛季重置） ======================
const KEY = 'mojin_skins_v1'

export interface SkinSave {
  owned: string[]                  // 已拥有皮肤 id
  equipped: Record<string, string> // gunId -> skinId（每把枪独立装备位，含 knife）
}

export function loadSkins(): SkinSave {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = JSON.parse(raw) as SkinSave
      if (Array.isArray(s.owned) && s.equipped) return s
    }
  } catch { /* 忽略 */ }
  return { owned: [], equipped: {} }
}

export function saveSkins(s: SkinSave) {
  try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* 忽略 */ }
}

export function skinDef(id: string): SkinDef | undefined {
  return SKINS.find(s => s.id === id)
}

export function hasSkin(save: SkinSave, id: string): boolean {
  return save.owned.includes(id)
}

/** 发放皮肤；返回是否为新获得 */
export function grantSkin(save: SkinSave, id: string): boolean {
  if (hasSkin(save, id) || !skinDef(id)) return false
  save.owned.push(id)
  saveSkins(save)
  return true
}

/** 购买皮肤；返回 null 成功，否则失败原因 */
export function buySkin(save: SkinSave, id: string, money: number): { ok: true; cost: number } | { ok: false; reason: string } {
  const d = skinDef(id)
  if (!d) return { ok: false, reason: '皮肤不存在' }
  if (!d.price) return { ok: false, reason: '该皮肤仅活动发放' }
  if (hasSkin(save, id)) return { ok: false, reason: '已拥有' }
  if (money < d.price) return { ok: false, reason: '金币不足' }
  save.owned.push(id)
  saveSkins(save)
  return { ok: true, cost: d.price }
}

/** 装备皮肤到指定枪（皮肤须已拥有且适用该枪） */
export function equipSkin(save: SkinSave, gunId: string, skinId: string): boolean {
  const d = skinDef(skinId)
  if (!d || !hasSkin(save, skinId)) return false
  if (d.gun !== 'any' && d.gun !== gunId) return false
  save.equipped[gunId] = skinId
  saveSkins(save)
  return true
}

export function unequipSkin(save: SkinSave, gunId: string) {
  delete save.equipped[gunId]
  saveSkins(save)
}

/** 某把枪当前装备的皮肤（无则 null） */
export function equippedSkin(gunId: string): SkinDef | null {
  const save = loadSkins()
  const id = save.equipped[gunId]
  if (!id) return null
  const d = skinDef(id)
  if (!d || !hasSkin(save, id)) return null
  return d
}
