import type { GunDef, ItemDef, ItemInstance, Rarity } from './types'
import { RARITY_ORDER } from './types'

// ===================== 枪械库（种类丰富） =====================
export const GUNS: Record<string, GunDef> = {
  p92:    { id: 'p92',    name: 'P92 手枪',       type: '手枪',     damage: 18, headMult: 2.0, fireInterval: 220, mag: 15, reloadTime: 1100, auto: false, spread: 0.012, range: 60,  pellets: 1, zoom: 1.15, recoil: 0.011, color: 0x3a3f44, barrelLen: 0.28, bulky: 0.05 },
  deagle: { id: 'deagle', name: '沙漠之鹰',       type: '手枪',     damage: 38, headMult: 2.2, fireInterval: 330, mag: 7,  reloadTime: 1400, auto: false, spread: 0.014, range: 70,  pellets: 1, zoom: 1.15, recoil: 0.026, color: 0x8a8f96, barrelLen: 0.32, bulky: 0.055 },
  uzi:    { id: 'uzi',    name: 'UZI 冲锋枪',     type: '冲锋枪',   damage: 15, headMult: 1.8, fireInterval: 70,  mag: 32, reloadTime: 1500, auto: true,  spread: 0.030, range: 55,  pellets: 1, zoom: 1.2,  recoil: 0.008, color: 0x2f3438, barrelLen: 0.34, bulky: 0.06 },
  mp5:    { id: 'mp5',    name: 'MP5 冲锋枪',     type: '冲锋枪',   damage: 19, headMult: 1.8, fireInterval: 85,  mag: 30, reloadTime: 1600, auto: true,  spread: 0.024, range: 65,  pellets: 1, zoom: 1.25, recoil: 0.007, color: 0x23272b, barrelLen: 0.42, bulky: 0.06 },
  vector: { id: 'vector', name: 'Vector 冲锋枪',  type: '冲锋枪',   damage: 17, headMult: 1.8, fireInterval: 58,  mag: 33, reloadTime: 1700, auto: true,  spread: 0.027, range: 60,  pellets: 1, zoom: 1.25, recoil: 0.006, color: 0x4b4f35, barrelLen: 0.38, bulky: 0.065 },
  m870:   { id: 'm870',   name: 'M870 霰弹枪',    type: '霰弹枪',   damage: 11, headMult: 1.6, fireInterval: 780, mag: 6,  reloadTime: 2400, auto: false, spread: 0.055, range: 30,  pellets: 8, zoom: 1.15, recoil: 0.045, color: 0x5a4632, barrelLen: 0.62, bulky: 0.065 },
  s12k:   { id: 's12k',   name: 'S12K 霰弹枪',    type: '霰弹枪',   damage: 9,  headMult: 1.6, fireInterval: 260, mag: 8,  reloadTime: 2100, auto: false, spread: 0.065, range: 26,  pellets: 7, zoom: 1.15, recoil: 0.032, color: 0x3c3f43, barrelLen: 0.55, bulky: 0.065 },
  akm:    { id: 'akm',    name: 'AKM 突击步枪',   type: '突击步枪', damage: 30, headMult: 2.0, fireInterval: 108, mag: 30, reloadTime: 1900, auto: true,  spread: 0.020, range: 110, pellets: 1, zoom: 1.35, recoil: 0.018, color: 0x6b4a2f, barrelLen: 0.62, bulky: 0.06 },
  m4a1:   { id: 'm4a1',   name: 'M4A1 突击步枪',  type: '突击步枪', damage: 26, headMult: 2.0, fireInterval: 92,  mag: 30, reloadTime: 1700, auto: true,  spread: 0.016, range: 115, pellets: 1, zoom: 1.35, recoil: 0.012, color: 0x2b2e33, barrelLen: 0.60, bulky: 0.058 },
  scar:   { id: 'scar',   name: 'SCAR-L 突击步枪',type: '突击步枪', damage: 27, headMult: 2.0, fireInterval: 100, mag: 25, reloadTime: 1800, auto: true,  spread: 0.015, range: 120, pellets: 1, zoom: 1.4,  recoil: 0.013, color: 0x8f7a55, barrelLen: 0.60, bulky: 0.06 },
  aug:    { id: 'aug',    name: 'AUG 突击步枪',   type: '突击步枪', damage: 28, headMult: 2.0, fireInterval: 96,  mag: 30, reloadTime: 2000, auto: true,  spread: 0.014, range: 125, pellets: 1, zoom: 1.6,  recoil: 0.013, color: 0x46523f, barrelLen: 0.58, bulky: 0.07 },
  sks:    { id: 'sks',    name: 'SKS 射手步枪',   type: '射手步枪', damage: 42, headMult: 2.3, fireInterval: 240, mag: 20, reloadTime: 1900, auto: false, spread: 0.009, range: 160, pellets: 1, zoom: 2.2,  recoil: 0.024, color: 0x5d4527, barrelLen: 0.72, bulky: 0.055 },
  mini14: { id: 'mini14', name: 'Mini14 射手步枪',type: '射手步枪', damage: 36, headMult: 2.3, fireInterval: 190, mag: 20, reloadTime: 1800, auto: false, spread: 0.008, range: 150, pellets: 1, zoom: 2.0,  recoil: 0.018, color: 0x35383d, barrelLen: 0.68, bulky: 0.055 },
  m24:    { id: 'm24',    name: 'M24 狙击枪',     type: '狙击枪',   damage: 82, headMult: 2.6, fireInterval: 1400,mag: 5,  reloadTime: 2600, auto: false, spread: 0.002, range: 300, pellets: 1, zoom: 4.0,  recoil: 0.055, color: 0x2e3330, barrelLen: 0.85, bulky: 0.06 },
  awm:    { id: 'awm',    name: 'AWM 狙击枪',     type: '狙击枪',   damage: 118,headMult: 2.8, fireInterval: 1700,mag: 5,  reloadTime: 3000, auto: false, spread: 0.001, range: 400, pellets: 1, zoom: 6.0,  recoil: 0.075, color: 0x3d4a3a, barrelLen: 0.92, bulky: 0.062 },
  m249:   { id: 'm249',   name: 'M249 轻机枪',    type: '轻机枪',   damage: 24, headMult: 1.9, fireInterval: 80,  mag: 100,reloadTime: 3600, auto: true,  spread: 0.034, range: 130, pellets: 1, zoom: 1.3,  recoil: 0.015, color: 0x3f4436, barrelLen: 0.70, bulky: 0.085 },
  // 官方「极星守望」同步枪型：M700 栓动狙击（定位介于 M24 与 AWM 之间，数值为本游戏平衡原创）
  m700:   { id: 'm700',   name: 'M700 狙击枪',    type: '狙击枪',   damage: 96, headMult: 2.7, fireInterval: 1500,mag: 5,  reloadTime: 2700, auto: false, spread: 0.0015,range: 350, pellets: 1, zoom: 5.0,  recoil: 0.068, color: 0x37414d, barrelLen: 0.88, bulky: 0.062 },
  // 官方 S12「微光」同步枪型：AN94 突击步枪（5.45×39mm，对应官方：前两发射速极快且后坐力小、爆发力强；数值为本游戏平衡原创）
  an94:   { id: 'an94',   name: 'AN94 突击步枪',  type: '突击步枪', damage: 26, headMult: 2.0, fireInterval: 82,  mag: 30, reloadTime: 1850, auto: true,  spread: 0.017, range: 112, pellets: 1, zoom: 1.35, recoil: 0.011, color: 0x3d3a33, barrelLen: 0.60, bulky: 0.058 },
}

/** 初始近战武器：战术匕首（永久装备，不掉落、不用弹药；捡到枪后按 1 随时切回） */
export const KNIFE: GunDef = {
  id: 'knife', name: '战术匕首', type: '近战武器', damage: 45, headMult: 1.5,
  fireInterval: 480, mag: 0, reloadTime: 0, auto: true, spread: 0,
  range: 2.9, pellets: 1, zoom: 1, recoil: 0, color: 0xa8b0ba, barrelLen: 0.42, bulky: 0.02,
  melee: true,
}

// ===================== 物品库（每种物品固定一个稀有度） =====================
export const ITEMS: Record<string, ItemDef> = {
  // ---- 白 ----
  w_p92:    { id: 'w_p92',    name: 'P92 手枪',     kind: 'weapon', rarity: 'white', w: 2, h: 1, baseValue: 180,  icon: '🔫', gunId: 'p92' },
  w_uzi:    { id: 'w_uzi',    name: 'UZI 冲锋枪',   kind: 'weapon', rarity: 'white', w: 2, h: 2, baseValue: 380,  icon: '🔫', gunId: 'uzi' },
  w_m870:   { id: 'w_m870',   name: 'M870 霰弹枪',  kind: 'weapon', rarity: 'white', w: 4, h: 1, baseValue: 460,  icon: '🔫', gunId: 'm870' },
  v_coin:   { id: 'v_coin',   name: '金币',         kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 90,  icon: '🪙', stack: 5 },
  v_cigar:  { id: 'v_cigar',  name: '雪茄盒',       kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 220, icon: '📦' },
  m_bandage:{ id: 'm_bandage',name: '绷带',         kind: 'med', rarity: 'white', w: 1, h: 1, baseValue: 40, icon: '🩹', heal: 25, stack: 5 },
  // ===== 战术装备（P3 #22）：战前配装 1 件带入局内，T 键使用，用掉就没 =====
  t_drone: { id: 't_drone', name: '侦察无人机', kind: 'tactical', rarity: 'blue',  w: 2, h: 1, baseValue: 900, icon: '🛰️' },
  m_spray: { id: 'm_spray', name: '消毒喷雾',   kind: 'med',      rarity: 'green', w: 1, h: 1, baseValue: 260, icon: '🧴', stack: 3 }, // 感染爆发主题：使用后 60 秒免疫感染容器伤害
  // ===== 战役章节专属纪念变卖物（P3 #23）：只此一家，战役通关奖励 =====
  // ===== 战役关卡夺取目标（P3 #23）：只此一家，仅对应关卡的剧情盒子产出 =====
  g_c1l1: { id: 'g_c1l1', name: '铁爪的布防图',     kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 1600, icon: '🗺️' },
  g_c1l2: { id: 'g_c1l2', name: '井下爆破记录',     kind: 'valuable', rarity: 'cyan',   w: 1, h: 2, baseValue: 3200, icon: '📋' },
  g_c1l3: { id: 'g_c1l3', name: '铁爪的随身信物',   kind: 'valuable', rarity: 'red',    w: 1, h: 1, baseValue: 6800, icon: '⛏️' },
  g_c2l1: { id: 'g_c2l1', name: '总控官巡逻日志',   kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 1800, icon: '📔' },
  g_c2l2: { id: 'g_c2l2', name: '封存的发射档案',   kind: 'valuable', rarity: 'cyan',   w: 2, h: 2, baseValue: 3500, icon: '🗃️' },
  g_c2l3: { id: 'g_c2l3', name: '旧秩序勋章',       kind: 'valuable', rarity: 'red',    w: 1, h: 1, baseValue: 7200, icon: '🎖️' },
  g_c3l1: { id: 'g_c3l1', name: '雷达站情报芯片',   kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 1900, icon: '💾' },
  g_c3l2: { id: 'g_c3l2', name: '雪原狙击记录',     kind: 'valuable', rarity: 'cyan',   w: 1, h: 2, baseValue: 3800, icon: '🎯' },
  g_c3l3: { id: 'g_c3l3', name: '白狼的测距仪',     kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 7600, icon: '🔭' },
  g_c4l1: { id: 'g_c4l1', name: '法老的金色圣物',   kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2200, icon: '🏺' },
  g_c4l2: { id: 'g_c4l2', name: '陪葬宝石面具',     kind: 'valuable', rarity: 'cyan',   w: 2, h: 2, baseValue: 4200, icon: '🎭' },
  g_c4l3: { id: 'g_c4l3', name: '伊姆霍特的祭司杖', kind: 'valuable', rarity: 'red',    w: 1, h: 3, baseValue: 8800, icon: '🪄' },
  c_claw:   { id: 'c_claw',   name: '铁爪徽记',         kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 8000,  icon: '🪝' },
  c_keys:   { id: 'c_keys',   name: '总控官的钥匙串',   kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 9600,  icon: '🗝️' },
  c_wolf:   { id: 'c_wolf',   name: '白狼之瞳',         kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 11200, icon: '👁️' },
  c_scarab: { id: 'c_scarab', name: '伊姆霍特的圣甲虫', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 13600, icon: '🪲' },
  t_mine:  { id: 't_mine',  name: '绊雷',       kind: 'tactical', rarity: 'blue',  w: 1, h: 1, baseValue: 700, icon: '🪤' },
  t_smoke: { id: 't_smoke', name: '烟雾弹',     kind: 'tactical', rarity: 'green', w: 1, h: 1, baseValue: 400, icon: '💨' },
  a_ammo:   { id: 'a_ammo',   name: '1级·普通弹',   kind: 'ammo', rarity: 'white',  w: 1, h: 1, baseValue: 30,   icon: '📦', stack: 4, pen: 1, dmgMul: 1,     weight: 0.3 },
  a_ammo2:  { id: 'a_ammo2',  name: '2级·加强弹',   kind: 'ammo', rarity: 'green',  w: 1, h: 1, baseValue: 80,   icon: '🟢', stack: 4, pen: 2, dmgMul: 1.05,  weight: 0.3 },
  a_ammo3:  { id: 'a_ammo3',  name: '3级·穿甲弹',   kind: 'ammo', rarity: 'blue',   w: 1, h: 1, baseValue: 200,  icon: '🔵', stack: 4, pen: 3, dmgMul: 1.1,   weight: 0.3 },
  a_ammo4:  { id: 'a_ammo4',  name: '4级·高速穿甲弹', kind: 'ammo', rarity: 'purple', w: 1, h: 1, baseValue: 480,  icon: '🟣', stack: 4, pen: 4, dmgMul: 1.16,  weight: 0.3 },
  a_ammo5:  { id: 'a_ammo5',  name: '5级·钨芯弹',   kind: 'ammo', rarity: 'cyan',   w: 1, h: 1, baseValue: 1100, icon: '🩵', stack: 4, pen: 5, dmgMul: 1.23,  weight: 0.3 },
  a_ammo6:  { id: 'a_ammo6',  name: '6级·毁灭者弹', kind: 'ammo', rarity: 'red',    w: 1, h: 1, baseValue: 2600, icon: '🔴', stack: 4, pen: 6, dmgMul: 1.32,  weight: 0.3 },

  // ===== 护甲 / 头盔（3 级，有耐久） =====
  armor1:   { id: 'armor1',   name: '轻型防弹衣',   kind: 'vest',   rarity: 'green',  w: 2, h: 2, baseValue: 900,  icon: '🦺', armorLv: 1, durability: 50,  weight: 4 },
  armor2:   { id: 'armor2',   name: '战术防弹衣',   kind: 'vest',   rarity: 'blue',   w: 2, h: 2, baseValue: 2600, icon: '🛡️', armorLv: 2, durability: 75,  weight: 6 },
  armor3:   { id: 'armor3',   name: '重型防弹衣',   kind: 'vest',   rarity: 'purple', w: 2, h: 3, baseValue: 6200, icon: '⚜️', armorLv: 3, durability: 100, weight: 9 },
  helmet1:  { id: 'helmet1',  name: '摩托头盔',     kind: 'helmet', rarity: 'green',  w: 2, h: 2, baseValue: 700,  icon: '🪖', armorLv: 1, durability: 40,  weight: 2 },
  helmet2:  { id: 'helmet2',  name: '战术头盔',     kind: 'helmet', rarity: 'blue',   w: 2, h: 2, baseValue: 2000, icon: '🎖️', armorLv: 2, durability: 60,  weight: 2.6 },
  helmet3:  { id: 'helmet3',  name: '重装头盔',     kind: 'helmet', rarity: 'purple', w: 2, h: 2, baseValue: 4800, icon: '👑', armorLv: 3, durability: 80,  weight: 3.2 },
  // ---- 绿 ----
  w_s12k:   { id: 'w_s12k',   name: 'S12K 霰弹枪',  kind: 'weapon', rarity: 'green', w: 3, h: 2, baseValue: 560,  icon: '🔫', gunId: 's12k' },
  w_sks:    { id: 'w_sks',    name: 'SKS 射手步枪', kind: 'weapon', rarity: 'green', w: 4, h: 2, baseValue: 700,  icon: '🔫', gunId: 'sks' },
  v_watch:  { id: 'v_watch',  name: '古董怀表',     kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 260, icon: '⌚' },
  v_scope:  { id: 'v_scope',  name: '军用望远镜',   kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 320, icon: '🔭' },
  m_medkit: { id: 'm_medkit', name: '急救包',       kind: 'med', rarity: 'green', w: 2, h: 2, baseValue: 150, icon: '💊', heal: 75 },
  // ---- 蓝 ----
  w_deagle: { id: 'w_deagle', name: '沙漠之鹰',     kind: 'weapon', rarity: 'blue', w: 2, h: 1, baseValue: 420,  icon: '🔫', gunId: 'deagle' },
  w_mp5:    { id: 'w_mp5',    name: 'MP5 冲锋枪',   kind: 'weapon', rarity: 'blue', w: 3, h: 2, baseValue: 560,  icon: '🔫', gunId: 'mp5' },
  w_mini14: { id: 'w_mini14', name: 'Mini14 射手步枪', kind: 'weapon', rarity: 'blue', w: 4, h: 2, baseValue: 720, icon: '🔫', gunId: 'mini14' },
  v_ring:   { id: 'v_ring',   name: '钻戒',         kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 600, icon: '💍' },
  v_chip:   { id: 'v_chip',   name: '军用芯片',     kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 780, icon: '💾' },
  // ---- 紫 ----
  w_vector: { id: 'w_vector', name: 'Vector 冲锋枪',kind: 'weapon', rarity: 'purple', w: 3, h: 2, baseValue: 1100, icon: '🔫', gunId: 'vector' },
  w_akm:    { id: 'w_akm',    name: 'AKM 突击步枪', kind: 'weapon', rarity: 'purple', w: 4, h: 2, baseValue: 1300, icon: '🔫', gunId: 'akm' },
  w_m4a1:   { id: 'w_m4a1',   name: 'M4A1 突击步枪',kind: 'weapon', rarity: 'purple', w: 4, h: 2, baseValue: 1400, icon: '🔫', gunId: 'm4a1' },
  w_scar:   { id: 'w_scar',   name: 'SCAR-L 突击步枪', kind: 'weapon', rarity: 'purple', w: 4, h: 2, baseValue: 1350, icon: '🔫', gunId: 'scar' },
  v_goldbar:{ id: 'v_goldbar',name: '金条',         kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 1500, icon: '🥇' },
  v_intel:  { id: 'v_intel',  name: '机密情报',     kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 1300, icon: '📄' },
  // ---- 青 ----
  w_aug:    { id: 'w_aug',    name: 'AUG 突击步枪', kind: 'weapon', rarity: 'cyan', w: 4, h: 2, baseValue: 2200, icon: '🔫', gunId: 'aug' },
  w_m24:    { id: 'w_m24',    name: 'M24 狙击枪',   kind: 'weapon', rarity: 'cyan', w: 5, h: 2, baseValue: 3000, icon: '🔫', gunId: 'm24' },
  w_m249:   { id: 'w_m249',   name: 'M249 轻机枪',  kind: 'weapon', rarity: 'cyan', w: 5, h: 2, baseValue: 3400, icon: '🔫', gunId: 'm249' },
  v_jade:   { id: 'v_jade',   name: '翡翠雕像',     kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 2800, icon: '🗿' },
  v_vase:   { id: 'v_vase',   name: '古董花瓶',     kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 3200, icon: '🏺' },
  // ---- 红 ----
  w_awm:    { id: 'w_awm',    name: 'AWM 狙击枪',   kind: 'weapon', rarity: 'red', w: 5, h: 2, baseValue: 8000,  icon: '🔫', gunId: 'awm' },
  w_m700:   { id: 'w_m700',   name: 'M700 狙击枪',  kind: 'weapon', rarity: 'red', w: 5, h: 2, baseValue: 6500,  icon: '🔫', gunId: 'm700' },
  v_crown:  { id: 'v_crown',  name: '黄金王冠',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 6000, icon: '👑' },
  v_super:  { id: 'v_super',  name: '曼德尔超算单元', kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 9000, icon: '🖥️' },
  // ===== 摸金乐园·官方大红图鉴（对齐三角洲行动官方物资；价值按官方物价约 1% 映射；图标全部 ItemArt 原创手绘） =====
  // —— 工艺藏品（官方规则：保险柜/小保险箱专属品类） ——
  v_lp_african: { id: 'v_lp_african', name: '非洲之心',       kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 131400, icon: '❤️' },
  v_lp_gazelle: { id: 'v_lp_gazelle', name: '黄金瞪羚',       kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 8800,  icon: '🦌' },
  v_lp_musket:  { id: 'v_lp_musket',  name: '滑膛枪展品',     kind: 'valuable', rarity: 'red', w: 3, h: 1, baseValue: 8200,  icon: '🔫' },
  v_lp_bust:    { id: 'v_lp_bust',    name: '克劳狄乌斯半身像', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 8000, icon: '🗿' },
  v_lp_gramo:   { id: 'v_lp_gramo',   name: '雷斯的留声机',   kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 8600,  icon: '📻' },
  v_lp_ifv:     { id: 'v_lp_ifv',     name: '步战车模型',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 10000, icon: '🚜' },
  // —— 电子物品（官方规则：服务器/电脑/电脑机箱专属品类） ——
  v_lp_radar:   { id: 'v_lp_radar',   name: '便携军用雷达',   kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 52000, icon: '📡' },
  v_lp_topsec:  { id: 'v_lp_topsec',  name: '绝密服务器',     kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 55000, icon: '🗄️' },
  v_lp_disk:    { id: 'v_lp_disk',    name: '高速磁盘阵列',   kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 20000, icon: '💽' },
  v_lp_cloud:   { id: 'v_lp_cloud',   name: '云存储阵列',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 21000, icon: '☁️' },
  v_lp_blade:   { id: 'v_lp_blade',   name: '刀片服务器',     kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 9500,  icon: '🖥️' },
  v_lp_blackbox:{ id: 'v_lp_blackbox',name: '飞行记录仪',     kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 9000,  icon: '🟧' },
  v_lp_laptop:  { id: 'v_lp_laptop',  name: '笔记本电脑',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 8000,  icon: '💻' },
  v_lp_terminal:{ id: 'v_lp_terminal',name: '军用信息终端',   kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 7800,  icon: '📟' },
  v_lp_radio:   { id: 'v_lp_radio',   name: '军用电台',       kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 7500,  icon: '📻' },
  v_lp_array:   { id: 'v_lp_array',   name: '阵列服务器',     kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 7600,  icon: '🗄️' },
  v_lp_ctrl:    { id: 'v_lp_ctrl',    name: '军用控制终端',   kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 7400,  icon: '🎛️' },
  // —— 医疗物资（官方规则：医疗包/医疗物资堆专属品类） ——
  v_lp_vent:    { id: 'v_lp_vent',    name: '复苏呼吸机',     kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 60000, icon: '🫁' },
  v_lp_ecmo:    { id: 'v_lp_ecmo',    name: 'ECMO 体外膜肺',  kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 48000, icon: '🏥' },
  v_lp_aed:     { id: 'v_lp_aed',     name: '自动体外除颤器', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 9000,  icon: '⚡' },
  v_lp_breath:  { id: 'v_lp_breath',  name: '呼吸机',         kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 6800,  icon: '😷' },
  // —— 军工材料（官方规则：大武器箱/弹药箱专属品类） ——
  v_lp_shell:   { id: 'v_lp_shell',   name: '军用炮弹',       kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 8500,  icon: '🚀' },
  v_lp_carbon:  { id: 'v_lp_carbon',  name: '强化碳纤维板',   kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 20000, icon: '⬛' },
  // —— 家具家电（官方规则：高级旅行箱/高级储物箱等杂物容器品类） ——
  v_lp_robo:    { id: 'v_lp_robo',    name: '扫拖一体机器人', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 50000, icon: '🤖' },
  v_lp_vacuum:  { id: 'v_lp_vacuum',  name: '强力吸尘器',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 18000, icon: '🌀' },
  v_lp_camera2: { id: 'v_lp_camera2', name: '摄影机',         kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 7000,  icon: '📷' },
  v_lp_drone:   { id: 'v_lp_drone',   name: '军用无人机',     kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 7200,  icon: '🛸' },
  // —— 隐藏终极大红（官方：海洋之泪，潮汐监狱露天极低概率刷新；本模式全容器欧皇检测位 0.02%） ——
  v_lp_tear:    { id: 'v_lp_tear',    name: '海洋之泪',       kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 220000, icon: '💧' },

  // ===== 房卡：对局内任何容器都可能出，用于开对应地图的专属锁房 =====
  k_w_shed:   { id: 'k_w_shed',   name: '水泥厂房卡',   kind: 'key', rarity: 'green',  w: 1, h: 1, baseValue: 800,   icon: '💳' },
  k_w_cave:   { id: 'k_w_cave',   name: '变电站房卡',   kind: 'key', rarity: 'blue',   w: 1, h: 1, baseValue: 2000,  icon: '💳' },
  k_w_store:  { id: 'k_w_store',  name: '游客中心卡',   kind: 'key', rarity: 'purple', w: 1, h: 1, baseValue: 5000,  icon: '💳' },
  k_w_core:   { id: 'k_w_core',   name: '行政楼房卡', kind: 'key', rarity: 'red',    w: 1, h: 1, baseValue: 12000, icon: '💳' },
  k_t_dorm:   { id: 'k_t_dorm',   name: '宿舍房卡',   kind: 'key', rarity: 'green',  w: 1, h: 1, baseValue: 800,   icon: '💳' },
  k_t_arch:   { id: 'k_t_arch',   name: '档案室房卡', kind: 'key', rarity: 'blue',   w: 1, h: 1, baseValue: 2000,  icon: '💳' },
  k_t_arm:    { id: 'k_t_arm',    name: '军械库房卡', kind: 'key', rarity: 'purple', w: 1, h: 1, baseValue: 5000,  icon: '💳' },
  k_t_warden: { id: 'k_t_warden', name: '主控官密卡', kind: 'key', rarity: 'red',    w: 1, h: 1, baseValue: 12000, icon: '💳' },
  k_d_gate:   { id: 'k_d_gate',   name: '陵寝外门卡', kind: 'key', rarity: 'purple', w: 1, h: 1, baseValue: 9000,  icon: '💳' },
  k_d_tomb:   { id: 'k_d_tomb',   name: '法老金卡',   kind: 'key', rarity: 'red',    w: 1, h: 1, baseValue: 13000, icon: '💳' },
  k_d_crypt:  { id: 'k_d_crypt',  name: '侧墓室房卡', kind: 'key', rarity: 'blue',   w: 1, h: 1, baseValue: 4000,  icon: '💳' },
  k_d_oasis:  { id: 'k_d_oasis',  name: '驿站库房卡', kind: 'key', rarity: 'green',  w: 1, h: 1, baseValue: 1800,  icon: '💳' },
  v_scarab:   { id: 'v_scarab',   name: '圣甲虫护符', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 9800, icon: '🪲' },
  v_egg:    { id: 'v_egg',   name: '黄金鸟蛋',       kind: 'valuable', rarity: 'red',    w: 1, h: 1, baseValue: 5000,  icon: '🥚' },
  v_safe:   { id: 'v_safe',   name: '小型保险箱',   kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 12000, icon: '🧰' },
  // ===== 各品级新增变卖物 =====
  v_cigs:    { id: 'v_cigs',    name: '进口香烟',   kind: 'valuable', rarity: 'white',  w: 1, h: 1, baseValue: 130,  icon: '🚬' },
  v_bottle:  { id: 'v_bottle',  name: '陈年红酒',   kind: 'valuable', rarity: 'white',  w: 1, h: 2, baseValue: 260,  icon: '🍾' },
  v_camera:  { id: 'v_camera',  name: '老式相机',   kind: 'valuable', rarity: 'green',  w: 2, h: 1, baseValue: 380,  icon: '📷' },
  v_perfume: { id: 'v_perfume', name: '名贵香水',   kind: 'valuable', rarity: 'green',  w: 1, h: 1, baseValue: 310,  icon: '🧴' },
  v_gpu:     { id: 'v_gpu',     name: '显卡',       kind: 'valuable', rarity: 'blue',   w: 2, h: 1, baseValue: 950,  icon: '🎛️' },
  v_medal:   { id: 'v_medal',   name: '金质勋章',   kind: 'valuable', rarity: 'blue',   w: 1, h: 1, baseValue: 700,  icon: '🎖️' },
  v_necklace:{ id: 'v_necklace',name: '珍珠项链',   kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 1600, icon: '📿' },
  v_relic:   { id: 'v_relic',   name: '青铜礼器',   kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 1900, icon: '⚱️' },
  v_diamond: { id: 'v_diamond', name: '裸钻',       kind: 'valuable', rarity: 'cyan',   w: 1, h: 1, baseValue: 3600, icon: '💎' },
  v_painting:{ id: 'v_painting',name: '传世名画',   kind: 'valuable', rarity: 'cyan',   w: 2, h: 2, baseValue: 4200, icon: '🖼️' },
  v_dragon:  { id: 'v_dragon',  name: '金龙雕像',   kind: 'valuable', rarity: 'red',    w: 2, h: 2, baseValue: 7800, icon: '🐉' },
  // ===== 更多红色变卖物（绝世） =====
  v_phoenix:  { id: 'v_phoenix',  name: '火凤凰羽冠',   kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 8600,  icon: '🪶' },
  v_amber:    { id: 'v_amber',    name: '史前虫珀',     kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 6600,  icon: '🟠' },
  v_scroll:   { id: 'v_scroll',   name: '千年古卷',     kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 9200,  icon: '📜' },
  v_cup:      { id: 'v_cup',      name: '金瓯永固杯',   kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 10800, icon: '🏆' },
  v_meteor:   { id: 'v_meteor',   name: '陨铁核心',     kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 7300,  icon: '☄️' },
  v_pearl:    { id: 'v_pearl',    name: '东海夜明珠',   kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 11800, icon: '🔮' },
  // ===== 口袋红货（格数小、价值密度高，好塞保险箱） =====
  v_ruby:     { id: 'v_ruby',     name: '鸽血红宝石',   kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 7400,  icon: '♦️' },
  v_fang:     { id: 'v_fang',     name: '血珀狼牙',     kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 6500,  icon: '🦷' },
  v_compass:  { id: 'v_compass',  name: '黄金罗盘',     kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 6900,  icon: '🧭' },
  v_seal:     { id: 'v_seal',     name: '暗河金印',     kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 13200, icon: '🏵️' },
  v_flute:    { id: 'v_flute',    name: '金丝玉箫',     kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 8800,  icon: '🎵' },
  v_mask:     { id: 'v_mask',     name: '法老金面',     kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 9400,  icon: '✨' },
  // ===== 巨型红货（占格很大，搬运本身就是挑战） =====
  v_tank:     { id: 'v_tank',     name: '黄金坦克模型', kind: 'valuable', rarity: 'red', w: 4, h: 2, baseValue: 12800, icon: '🚜', weight: 14 },
  v_engine:   { id: 'v_engine',   name: '航天发动机',   kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 15800, icon: '🚀', weight: 22 },
  v_reactor:  { id: 'v_reactor',  name: '微型核反应堆', kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 16800, icon: '☢️', weight: 18 }, // 保险柜专属
  v_bell:     { id: 'v_bell',     name: '青铜朝钟',     kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 14600, icon: '🔔', weight: 16 },
  v_warrior:  { id: 'v_warrior',  name: '青铜武士俑',   kind: 'valuable', rarity: 'red', w: 2, h: 4, baseValue: 13900, icon: '💂', weight: 15 },
  v_cannon:   { id: 'v_cannon',   name: '锈蚀舰炮',     kind: 'valuable', rarity: 'red', w: 5, h: 2, baseValue: 15400, icon: '🧨', weight: 19 },
  v_piano:    { id: 'v_piano',    name: '鎏金三角钢琴', kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 16400, icon: '🎹', weight: 24 },
  v_sarc:     { id: 'v_sarc',     name: '黄金石棺',     kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 18600, icon: '⚰️', weight: 26 }, // 保险柜专属
  v_sat:      { id: 'v_sat',      name: '军用卫星组件', kind: 'valuable', rarity: 'red', w: 3, h: 4, baseValue: 17800, icon: '📡', weight: 21 }, // 航空箱专属
  // ===== Boss 专属掉落（仅对应 Boss 低概率掉落，不在普通容器池中） =====
  v_core:      { id: 'v_core',      name: '铁爪的动力核心', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 15000, icon: '⚙️' },
  v_blueprint: { id: 'v_blueprint', name: '发射塔蓝图',     kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 18000, icon: '🗼' },
  v_scepter:   { id: 'v_scepter',   name: '典狱长的权杖',   kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 16000, icon: '👑' },
  v_sharktooth:{ id: 'v_sharktooth',name: '狂鲨的牙齿项链', kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 13000, icon: '🦈' },
  v_wolfcamo:  { id: 'v_wolfcamo',  name: '白狼的雪地迷彩', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 17000, icon: '🐺' },
  // ===== 冰湖垂钓渔获（长弓溪谷钓点产出） =====
  v_fish1:     { id: 'v_fish1',     name: '雪鲫鱼',         kind: 'valuable', rarity: 'white',  w: 1, h: 1, baseValue: 130,  icon: '🐟', stack: 3 },
  v_fish2:     { id: 'v_fish2',     name: '溪谷鳟鱼',       kind: 'valuable', rarity: 'green',  w: 2, h: 1, baseValue: 420,  icon: '🐟', stack: 2 },
  v_fish3:     { id: 'v_fish3',     name: '冰湖鲑鱼',       kind: 'valuable', rarity: 'blue',   w: 2, h: 1, baseValue: 980,  icon: '🐟' },
  v_fish4:     { id: 'v_fish4',     name: '黄金锦鲤',       kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2600, icon: '🐠' },
  v_fish5:     { id: 'v_fish5',     name: '血红龙鱼',       kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 9200, icon: '🐉' },
  // ===== 守夜人的口风琴（佐拉任务线奖励藏品） =====
  v_harmonica: { id: 'v_harmonica', name: '守夜人口风琴',   kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 15800, icon: '🎵' },
  // ===== 武器配件（装到枪上改变手感） =====
  at_rdot:   { id: 'at_rdot',   name: '红点瞄具',   kind: 'attachment', rarity: 'green', w: 1, h: 1, baseValue: 800,  icon: '🔴', slot: 'scope' },
  at_scope4: { id: 'at_scope4', name: '四倍瞄准镜', kind: 'attachment', rarity: 'blue',  w: 1, h: 1, baseValue: 2200, icon: '🔭', slot: 'scope' },
  at_supp:   { id: 'at_supp',   name: '消音器',     kind: 'attachment', rarity: 'blue',  w: 2, h: 1, baseValue: 2600, icon: '🤫', slot: 'muzzle' },
  at_comp:   { id: 'at_comp',   name: '枪口补偿器', kind: 'attachment', rarity: 'green', w: 1, h: 1, baseValue: 900,  icon: '⚙️', slot: 'muzzle' },
  at_qmag:   { id: 'at_qmag',   name: '快速弹匣',   kind: 'attachment', rarity: 'green', w: 1, h: 1, baseValue: 850,  icon: '⚡', slot: 'mag' },
  at_emag:   { id: 'at_emag',   name: '扩容弹匣',   kind: 'attachment', rarity: 'blue',  w: 1, h: 1, baseValue: 2400, icon: '📥', slot: 'mag' },
  at_stock_s:{ id: 'at_stock_s',name: '稳定枪托',   kind: 'attachment', rarity: 'blue',  w: 2, h: 1, baseValue: 2100, icon: '🪵', slot: 'stock' },
  at_stock_l:{ id: 'at_stock_l',name: '轻型枪托',   kind: 'attachment', rarity: 'blue',  w: 2, h: 1, baseValue: 2000, icon: '🪶', slot: 'stock' },
  at_grip_v: { id: 'at_grip_v', name: '垂直握把',   kind: 'attachment', rarity: 'green', w: 1, h: 1, baseValue: 950,  icon: '✊', slot: 'grip' },
  at_grip_l: { id: 'at_grip_l', name: '轻型握把',   kind: 'attachment', rarity: 'green', w: 1, h: 1, baseValue: 900,  icon: '🤏', slot: 'grip' },
  at_laser:  { id: 'at_laser',  name: '战术镭射',   kind: 'attachment', rarity: 'purple', w: 1, h: 1, baseValue: 3200, icon: '🔦', slot: 'laser' },
  at_laser_r:{ id: 'at_laser_r',name: '毁灭镭射',   kind: 'attachment', rarity: 'red',   w: 1, h: 1, baseValue: 8800, icon: '⚡', slot: 'laser' },
  // ===== 官方活动「哈夫克军工配件」：M700 专属限时配件（名称与官方一致，属性为本游戏等价映射） =====
  at_hvk_body:{ id: 'at_hvk_body',name: 'HVK旋风枪身系统', kind: 'attachment', rarity: 'red', w: 2, h: 1, baseValue: 9600, icon: '🌀', slot: 'stock',  guns: ['m700'] },
  at_hvk_gas: { id: 'at_hvk_gas', name: 'HVK旋风强化导气', kind: 'attachment', rarity: 'red', w: 1, h: 1, baseValue: 9200, icon: '💨', slot: 'muzzle', guns: ['m700'] },
  // ===== 潮汐监狱房卡 =====
  k_p_cell:   { id: 'k_p_cell',   name: '禁闭室房卡',     kind: 'key', rarity: 'green',  w: 1, h: 1, baseValue: 800,   icon: '💳' },
  k_p_med:    { id: 'k_p_med',    name: '医务室房卡',     kind: 'key', rarity: 'blue',   w: 1, h: 1, baseValue: 2000,  icon: '💳' },
  k_p_arm:    { id: 'k_p_arm',    name: '狱警军械库房卡', kind: 'key', rarity: 'purple', w: 1, h: 1, baseValue: 5000,  icon: '💳' },
  k_p_warden: { id: 'k_p_warden', name: '典狱长办公室卡', kind: 'key', rarity: 'red',    w: 1, h: 1, baseValue: 12000, icon: '💳' },
  // ===== 长弓溪谷房卡 =====
  k_s_post:   { id: 'k_s_post',   name: '哨所房卡',     kind: 'key', rarity: 'green',  w: 1, h: 1, baseValue: 800,   icon: '💳' },
  k_s_hangar: { id: 'k_s_hangar', name: '机库钥匙',     kind: 'key', rarity: 'blue',   w: 1, h: 1, baseValue: 2000,  icon: '💳' },
  k_s_ctrl:   { id: 'k_s_ctrl',   name: '雷达控制室卡', kind: 'key', rarity: 'purple', w: 1, h: 1, baseValue: 5000,  icon: '💳' },
  k_s_office: { id: 'k_s_office', name: '站长办公室卡', kind: 'key', rarity: 'red',    w: 1, h: 1, baseValue: 12000, icon: '💳' },
  // ===== 官方活动道具：饮品特调（调酒材料，活动期间容器掉落，用于调制特调饮品） =====
  mat_honey:   { id: 'mat_honey',   name: '蜜糖汁',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍯', stack: 5 },
  mat_cola:    { id: 'mat_cola',    name: '可乐',     kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🥤', stack: 5 },
  mat_mint:    { id: 'mat_mint',    name: '薄荷',     kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🌿', stack: 5 },
  mat_lemon:   { id: 'mat_lemon',   name: '柠檬',     kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍋', stack: 5 },
  mat_juniper: { id: 'mat_juniper', name: '杜松灵',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🫒', stack: 5 },
  mat_tonic:   { id: 'mat_tonic',   name: '汤力汁',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🫗', stack: 5 },
  mat_soda:    { id: 'mat_soda',    name: '苏打水',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🧊', stack: 5 },
  mat_breeze:  { id: 'mat_breeze',  name: '清逸饮',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍶', stack: 5 },
  mat_cran:    { id: 'mat_cran',    name: '蔓越莓汁', kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍒', stack: 5 },
  mat_amber:   { id: 'mat_amber',   name: '琥珀露',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🥃', stack: 5 },
  mat_syrup:   { id: 'mat_syrup',   name: '糖浆',     kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍬', stack: 5 },
  mat_lemonj:  { id: 'mat_lemonj',  name: '柠檬汁',   kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 60, icon: '🍋‍🟩', stack: 5 },
  // ===== 官方活动道具：特调饮品成品（局内饮用获得限时增益；配方与官方一致，效果等价映射） =====
  dk_leisi:     { id: 'dk_leisi',     name: '雷斯舞步',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 800,  icon: '🍸', drink: { hot: 1.2, dur: 180 } },
  dk_asara:     { id: 'dk_asara',     name: '阿萨拉风情', kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 800,  icon: '🍹', drink: { hot: 2, dur: 120 } },
  dk_mist:      { id: 'dk_mist',      name: '迷雾晨',     kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 700,  icon: '🥂', drink: { hot: 3, speed: 0.95, dur: 60 } },
  dk_tulip:     { id: 'dk_tulip',     name: '郁金香',     kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '🌷', drink: { speed: 1.1, dur: 300 } },
  dk_rain:      { id: 'dk_rain',      name: '空山灵雨',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '🌧️', drink: { speed: 1.15, dur: 300 } },
  dk_farewell:  { id: 'dk_farewell',  name: '漫长告别',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 700,  icon: '🥾', drink: { speed: 1.25, dur: 60 } },
  dk_skyland:   { id: 'dk_skyland',   name: '空岛',       kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '🏝️', drink: { reload: 0.75, dur: 300 } },
  dk_starlight: { id: 'dk_starlight', name: '星光熠熠',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 800,  icon: '✨', drink: { reload: 0.8, dur: 180 } },
  dk_heart:     { id: 'dk_heart',     name: '怦然心动',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '💗', drink: { reload: 0.7, dur: 300 } },
  dk_rose:      { id: 'dk_rose',      name: '野玫瑰',     kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '🌹', drink: { search: 1.4, reload: 1.1, dur: 300 } },
  dk_guanshan:  { id: 'dk_guanshan',  name: '关山难越',   kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 900,  icon: '⛰️', drink: { search: 1.4, speed: 0.9, dur: 300 } },
  dk_highball:  { id: 'dk_highball',  name: '嗨棒',       kind: 'med', rarity: 'blue', w: 1, h: 1, baseValue: 800,  icon: '🥃', drink: { search: 1.25, speed: 1.05, dur: 300 } },
  dk_dark:      { id: 'dk_dark',      name: '黑暗特调',   kind: 'med', rarity: 'green', w: 1, h: 1, baseValue: 50, icon: '🤢', drink: { dur: 45, drunk: true } },
  // ===== 官方活动道具：红运福袋 / 猩红曼德尔砖（带出到仓库开启） =====
  ev_luckybag:    { id: 'ev_luckybag',    name: '红运福袋',     kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 5000,  icon: '🧧', stack: 3, openable: 'luckybag' },
  ev_warpack:     { id: 'ev_warpack',     name: '洲末畅玩自选包', kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 6000,  icon: '📦', stack: 2, openable: 'warpack' },
  ev_hotpot_bundle: { id: 'ev_hotpot_bundle', name: '猛火强攻捆绑包', kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 20000, icon: '🍲', openable: 'hotpotbundle' },
  v_idtag:        { id: 'v_idtag',        name: '干员身份牌',   kind: 'valuable', rarity: 'green',  w: 1, h: 1, baseValue: 500,   icon: '🪪', stack: 5 },
  ev_mandelbrick: { id: 'ev_mandelbrick', name: '猩红曼德尔砖', kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 20000, icon: '🧱', openable: 'mandelbrick' },
  // ===== 官方 11/12 公告活动道具：大红砖返场（破译保底出红，概率出往季炫彩超稀藏；与曼德尔砖独立刷新） =====
  ev_bigredbrick: { id: 'ev_bigredbrick', name: '大红砖',       kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 30000, icon: '🧱', openable: 'bigredbrick' },
  v_egg_dazzle:     { id: 'v_egg_dazzle',     name: '炫彩麦小蛋', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 16000, icon: '🥚', stack: 3 },
  v_circle_dazzle:  { id: 'v_circle_dazzle',  name: '炫彩克小圈', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 16000, icon: '🍩', stack: 3 },
  v_landeng_dazzle: { id: 'v_landeng_dazzle', name: '炫彩兰小登', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 18000, icon: '🪆', stack: 3 },
  // ===== 官方 11/12「本周活动」补录：烽火寻宝（高级旅行箱概率出佐小娅 / 全图容器低概率出隐藏款炫彩佐小娅 / 航空箱概率出荣耀WIN2手机藏品） =====
  v_zuoxiaoya:        { id: 'v_zuoxiaoya',        name: '佐小娅',         kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 3600,  icon: '🎎', stack: 3 },
  v_zuoxiaoya_dazzle: { id: 'v_zuoxiaoya_dazzle', name: '炫彩佐小娅',     kind: 'valuable', rarity: 'red',    w: 1, h: 1, baseValue: 18000, icon: '🎎', stack: 3 },
  v_honor_win2:       { id: 'v_honor_win2',       name: '荣耀WIN2手机',   kind: 'valuable', rarity: 'red',    w: 1, h: 1, baseValue: 12800, icon: '📱' },
  // ===== 官方 11/16 公告活动道具：烽火世界杯·赛事中心（赛事补给包带出到仓库开启 / 精锐制式装备券为收藏代币） =====
  ev_dfi_pack:  { id: 'ev_dfi_pack',  name: '赛事补给包',     kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 7000, icon: '🏅', stack: 2, openable: 'dfipack' },
  v_dfi_ticket: { id: 'v_dfi_ticket', name: '精锐制式装备券', kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 4200, icon: '🎟️', stack: 5 },
  // 官方 2026-11-19 公告：甄选加码升级新增「随机武器补给包」（可开出 40 种不同改装风格的枪械；本游戏等价镜像为随机整枪）
  ev_randwpn_pack: { id: 'ev_randwpn_pack', name: '随机武器补给包', kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 9000, icon: '🧰', stack: 2, openable: 'randwpn' },
  // ===== 官方活动道具：极星守望（德小兰/灰鲭鲨碎片，集齐各 3 块在仓库合成大红藏品「灰鲭鲨·德小兰」——对应官方首款可组装收集品） =====
  ev_jx_doll:  { id: 'ev_jx_doll',  name: '德小兰碎片',   kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2600,  icon: '🧸', stack: 3 },
  ev_jx_shark: { id: 'ev_jx_shark', name: '灰鲭鲨碎片',   kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2600,  icon: '🦈', stack: 3 },
  // —— 官方 10/22 公告活动道具（惊喜渡鸦/花小蝶返场/群星行动：绝地反击） ——
  v_butterfly_dazzle: { id: 'v_butterfly_dazzle', name: '炫彩花小蝶', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 12000, icon: '🦋', stack: 3 },
  v_butterfly:    { id: 'v_butterfly',    name: '花小蝶',       kind: 'valuable', rarity: 'cyan',   w: 1, h: 1, baseValue: 2400,  icon: '🦋', stack: 3 },
  v_landeng: { id: 'v_landeng', name: '兰小登', kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 3600, icon: '🪆', stack: 3 },
  ev_turingbrick: { id: 'ev_turingbrick', name: '图灵砖',       kind: 'valuable', rarity: 'red',    w: 2, h: 1, baseValue: 16000, icon: '🧩', openable: 'turingbrick' },
  ev_hongyun: { id: 'ev_hongyun', name: '红运当头补给包', kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 9000, icon: '🧰', stack: 2, openable: 'hongyun' },
  ev_actionbox:   { id: 'ev_actionbox',   name: '行动补给箱',   kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 8000,  icon: '🎁', stack: 2, openable: 'actionbox' },
  c_jx_model:  { id: 'c_jx_model',  name: '灰鲭鲨·德小兰', kind: 'valuable', rarity: 'red',    w: 2, h: 2, baseValue: 26000, icon: '🐋' },
  // —— 官方 S12「微光」赛季批次（2026-11-05 上线）——
  w_an94:    { id: 'w_an94',    name: 'AN94 突击步枪', kind: 'weapon', rarity: 'cyan', w: 4, h: 2, baseValue: 2400, icon: '🔫', gunId: 'an94' },
  // 影之刃零联动限定收集品（官方：烽火地带鸟窝概率掉落联动限定收藏品）
  v_yzbl_lion: { id: 'v_yzbl_lion', name: '烈焰狮头', kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2000, icon: '🦁', stack: 3 },
  v_yzbl_coin: { id: 'v_yzbl_coin', name: '破空刃币', kind: 'valuable', rarity: 'cyan',   w: 1, h: 1, baseValue: 3400, icon: '🗡️', stack: 3 },
  // 巴克什阵营对抗顶级信物（对应官方：阿萨拉三级挂坠 / 哈夫克三级工卡，完成阵营专属行动获得）
  v_charm_asara: { id: 'v_charm_asara', name: '阿萨拉三级挂坠', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 9800, icon: '📿' },
  v_charm_havk:  { id: 'v_charm_havk',  name: '哈夫克三级工卡', kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 9800, icon: '🪪' },
  // 图灵砖 S12 换新（对应官方：S12 开启时图灵砖换新、洲年贺礼系列停产、典藏挂饰重组；仍开重组后典藏挂饰）
  ev_turingbrick2: { id: 'ev_turingbrick2', name: '图灵砖·微光', kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 18000, icon: '🧩', openable: 'turingbrick' },
  // S12 新配件（对应官方：PKM无托套件 / M250磐石供弹弹仓 / SR-25双发后托套件；本游戏无对应枪型，等价镜像为通用配件）
  at_pkm_bullpup: { id: 'at_pkm_bullpup', name: '无托改装套件', kind: 'attachment', rarity: 'purple', w: 2, h: 1, baseValue: 4200, icon: '🦾', slot: 'stock' },
  at_m250_drum:   { id: 'at_m250_drum',   name: '磐石供弹弹仓', kind: 'attachment', rarity: 'purple', w: 1, h: 1, baseValue: 4600, icon: '🥁', slot: 'mag' },
  at_sr25_twin:   { id: 'at_sr25_twin',   name: '双发后托套件', kind: 'attachment', rarity: 'cyan',   w: 2, h: 1, baseValue: 6800, icon: '✌️', slot: 'stock' },

  // ===== 三角洲行动官方变卖物全量库（735 件，2026-11-21 全量同步） =====
  // 名称、官方 ID、分组、稀有度、重量、占格与参考价值来自官方收集品数据库；美术由 ItemArt.tsx 原创程序化矢量绘制。
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15010010001: { id: 'df_15010010001', name: "洗衣粉", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.5, officialId: '15010010001', officialGroup: 'dfg_105' },
  df_15010010002: { id: 'df_15010010002', name: "肥皂", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', weight: 0.25, officialId: '15010010002', officialGroup: 'dfg_105' },
  df_15010010003: { id: 'df_15010010003', name: "水杯", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.25, officialId: '15010010003', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15010010004: { id: 'df_15010010004', name: "含氟牙膏", kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 20, icon: '🩹', weight: 0.15, officialId: '15010010004', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15010010005: { id: 'df_15010010005', name: "净澈洗发水", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 35, icon: '🏺', weight: 0.5, officialId: '15010010005', officialGroup: 'dfg_105' },
  df_15010010007: { id: 'df_15010010007', name: "便捷抽纸", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', weight: 0.3, officialId: '15010010007', officialGroup: 'dfg_105' },
  df_15010010008: { id: 'df_15010010008', name: "火柴", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0.01, officialId: '15010010008', officialGroup: 'dfg_105' },
  df_15010010010: { id: 'df_15010010010', name: "蚊香", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.3, officialId: '15010010010', officialGroup: 'dfg_105' },
  df_15010010011: { id: 'df_15010010011', name: "洗洁精", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 12, icon: '🏺', weight: 0.5, officialId: '15010010011', officialGroup: 'dfg_105' },
  df_15010010012: { id: 'df_15010010012', name: "花露水", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 18, icon: '🏺', officialId: '15010010012', officialGroup: 'dfg_105' },
  df_15010010013: { id: 'df_15010010013', name: "电火机", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🏺', weight: 0.1, officialId: '15010010013', officialGroup: 'dfg_105' },
  df_15010010014: { id: 'df_15010010014', name: "不粘平底锅", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 35, icon: '🏺', officialId: '15010010014', officialGroup: 'dfg_105' },
  df_15010010015: { id: 'df_15010010015', name: "迷你氢电池", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '🏺', weight: 0.05, officialId: '15010010015', officialGroup: 'dfg_105' },
  df_15010010017: { id: 'df_15010010017', name: "洁厕剂", kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 23, icon: '🏺', weight: 0.5, officialId: '15010010017', officialGroup: 'dfg_105' },
  df_15010010018: { id: 'df_15010010018', name: "阿甘油", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🏺', officialId: '15010010018', officialGroup: 'dfg_105' },
  df_15010040001: { id: 'df_15010040001', name: "剃须刀", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 36, icon: '🏺', weight: 0.2, officialId: '15010040001', officialGroup: 'dfg_105' },
  df_15010040003: { id: 'df_15010040003', name: "电水壶", kind: 'valuable', rarity: 'white', w: 2, h: 2, baseValue: 8, icon: '🏺', weight: 1, officialId: '15010040003', officialGroup: 'dfg_105' },
  df_15010040004: { id: 'df_15010040004', name: "电动牙刷", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 38, icon: '🏺', weight: 0.25, officialId: '15010040004', officialGroup: 'dfg_105' },
  df_15010040005: { id: 'df_15010040005', name: "电吹风", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 33, icon: '🏺', officialId: '15010040005', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15010050001: { id: 'df_15010050001', name: "黄金瞪羚", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4555, icon: '🏺', weight: 2.9, officialId: '15010050001', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15020010001: { id: 'df_15020010001', name: "精密工具组", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🔧', weight: 1, officialId: '15020010001', officialGroup: 'dfg_103' },
  df_15020010002: { id: 'df_15020010002', name: "防水胶布", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🔧', weight: 0.1, officialId: '15020010002', officialGroup: 'dfg_103' },
  df_15020010003: { id: 'df_15020010003', name: "布基胶带", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 11, icon: '🔧', weight: 0.05, officialId: '15020010003', officialGroup: 'dfg_103' },
  df_15020010004: { id: 'df_15020010004', name: "油漆刷", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 12, icon: '🔧', weight: 0.05, officialId: '15020010004', officialGroup: 'dfg_103' },
  df_15020010005: { id: 'df_15020010005', name: "螺丝刀", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '🔧', weight: 0.15, officialId: '15020010005', officialGroup: 'dfg_103' },
  df_15020010006: { id: 'df_15020010006', name: "工具刀", kind: 'valuable', rarity: 'white', w: 1, h: 2, baseValue: 21, icon: '🔧', weight: 0.2, officialId: '15020010006', officialGroup: 'dfg_103' },
  df_15020010007: { id: 'df_15020010007', name: "电动爆破锤", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 34, icon: '🔧', weight: 2.2, officialId: '15020010007', officialGroup: 'dfg_103' },
  df_15020010008: { id: 'df_15020010008', name: "原木木板", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 35, icon: '🔧', weight: 0.6, officialId: '15020010008', officialGroup: 'dfg_103' },
  df_15020010010: { id: 'df_15020010010', name: "音波测距卷尺", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🔧', weight: 0.15, officialId: '15020010010', officialGroup: 'dfg_103' },
  df_15020010012: { id: 'df_15020010012', name: "电线", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🔧', weight: 0.2, officialId: '15020010012', officialGroup: 'dfg_103' },
  df_15020010014: { id: 'df_15020010014', name: "直角尺", kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 24, icon: '🔧', weight: 0.8, officialId: '15020010014', officialGroup: 'dfg_103' },
  df_15020010015: { id: 'df_15020010015', name: "一包水泥", kind: 'valuable', rarity: 'blue', w: 3, h: 2, baseValue: 392, icon: '🔧', weight: 4.52, officialId: '15020010015', officialGroup: 'dfg_103' },
  df_15020010016: { id: 'df_15020010016', name: "一桶油漆", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 218, icon: '🔧', weight: 4.52, officialId: '15020010016', officialGroup: 'dfg_103' },
  df_15020010017: { id: 'df_15020010017', name: "便携液压扳手", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🔧', weight: 0.5, officialId: '15020010017', officialGroup: 'dfg_103' },
  df_15020010018: { id: 'df_15020010018', name: "机械破障锤", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 200, icon: '🔧', weight: 4.98, officialId: '15020010018', officialGroup: 'dfg_103' },
  df_15020010019: { id: 'df_15020010019', name: "尖嘴钳", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '🔧', weight: 0.2, officialId: '15020010019', officialGroup: 'dfg_103' },
  df_15020010020: { id: 'df_15020010020', name: "电笔", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🔧', weight: 0.1, officialId: '15020010020', officialGroup: 'dfg_103' },
  df_15020010021: { id: 'df_15020010021', name: "角磨机", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 33, icon: '🔧', weight: 2.4, officialId: '15020010021', officialGroup: 'dfg_103' },
  df_15020010023: { id: 'df_15020010023', name: "高精数显卡尺", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 112, icon: '🔧', weight: 0.45, officialId: '15020010023', officialGroup: 'dfg_103' },
  df_15020010024: { id: 'df_15020010024', name: "高出力粉碎钳", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 332, icon: '🔧', weight: 0.9, officialId: '15020010024', officialGroup: 'dfg_103' },
  df_15020010025: { id: 'df_15020010025', name: "高分子布料", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 163, icon: '🔧', weight: 0.08, officialId: '15020010025', officialGroup: 'dfg_103' },
  df_15020010026: { id: 'df_15020010026', name: "波纹软管", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🔧', weight: 0.6, officialId: '15020010026', officialGroup: 'dfg_103' },
  df_15020010027: { id: 'df_15020010027', name: "模拟温度计", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '🔧', weight: 0.3, officialId: '15020010027', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15020010028: { id: 'df_15020010028', name: "燃油", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 229, icon: '🔋', weight: 2.9, officialId: '15020010028', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15020010030: { id: 'df_15020010030', name: "喷漆", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 32, icon: '🔧', weight: 0.4, officialId: '15020010030', officialGroup: 'dfg_103' },
  df_15020010031: { id: 'df_15020010031', name: "强化碳纤维板", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21564, icon: '🔧', weight: 3.73, officialId: '15020010031', officialGroup: 'dfg_103' },
  df_15020010032: { id: 'df_15020010032', name: "LED灯管", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 27, icon: '🔧', weight: 0.45, officialId: '15020010032', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15020010034: { id: 'df_15020010034', name: "低级燃料", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 99, icon: '🔋', weight: 0.45, officialId: '15020010034', officialGroup: 'dfg_108' },
  df_15020010035: { id: 'df_15020010035', name: "高级燃料", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 292, icon: '🔋', weight: 0.45, officialId: '15020010035', officialGroup: 'dfg_108' },
  df_15020010036: { id: 'df_15020010036', name: "燃料电池", kind: 'valuable', rarity: 'cyan', w: 3, h: 2, baseValue: 3895, icon: '🔋', weight: 8.14, officialId: '15020010036', officialGroup: 'dfg_108' },
  df_15020010037: { id: 'df_15020010037', name: "燃气罐", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 222, icon: '🔋', weight: 4.73, officialId: '15020010037', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15020040001: { id: 'df_15020040001', name: "工具箱", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 256, icon: '🔧', weight: 1.45, officialId: '15020040001', officialGroup: 'dfg_103' },
  df_15020040002: { id: 'df_15020040002', name: "芳纶纤维", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 169, icon: '🔧', weight: 1.61, officialId: '15020040002', officialGroup: 'dfg_103' },
  df_15020040003: { id: 'df_15020040003', name: "压力计", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 35, icon: '🔧', weight: 0.8, officialId: '15020040003', officialGroup: 'dfg_103' },
  df_15020040004: { id: 'df_15020040004', name: "水平仪", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 36, icon: '🔧', weight: 1.2, officialId: '15020040004', officialGroup: 'dfg_103' },
  df_15020050001: { id: 'df_15020050001', name: "自旋型手锯", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 586, icon: '🔧', weight: 3.08, officialId: '15020050001', officialGroup: 'dfg_103' },
  df_15020050002: { id: 'df_15020050002', name: "无线便携电钻", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 225, icon: '🔧', weight: 0.86, officialId: '15020050002', officialGroup: 'dfg_103' },
  df_15020050003: { id: 'df_15020050003', name: "聚乙烯纤维", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 146, icon: '🔧', weight: 0.52, officialId: '15020050003', officialGroup: 'dfg_103' },
  df_15020050004: { id: 'df_15020050004', name: "防弹陶瓷", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 366, icon: '🔧', weight: 1.36, officialId: '15020050004', officialGroup: 'dfg_103' },
  df_15020050005: { id: 'df_15020050005', name: "特种钢", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 114, icon: '🔧', weight: 2.49, officialId: '15020050005', officialGroup: 'dfg_103' },
  df_15020050006: { id: 'df_15020050006', name: "钛合金", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 240, icon: '🔧', weight: 2.04, officialId: '15020050006', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15020050007: { id: 'df_15020050007', name: "电容", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '💾', weight: 0.1, officialId: '15020050007', officialGroup: 'dfg_101' },
  df_15020050008: { id: 'df_15020050008', name: "继电器", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 85, icon: '💾', weight: 0.36, officialId: '15020050008', officialGroup: 'dfg_101' },
  df_15030010001: { id: 'df_15030010001', name: "军用移动电源", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 90, icon: '💾', weight: 0.9, officialId: '15030010001', officialGroup: 'dfg_101' },
  df_15030010002: { id: 'df_15030010002', name: "手机电池", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '💾', weight: 0.1, officialId: '15030010002', officialGroup: 'dfg_101' },
  df_15030010003: { id: 'df_15030010003', name: "手环", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '💾', weight: 0.1, officialId: '15030010003', officialGroup: 'dfg_101' },
  df_15030010005: { id: 'df_15030010005', name: "游戏卡带", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 101, icon: '💾', officialId: '15030010005', officialGroup: 'dfg_101' },
  df_15030010006: { id: 'df_15030010006', name: "红白机手柄", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 95, icon: '💾', officialId: '15030010006', officialGroup: 'dfg_101' },
  df_15030010007: { id: 'df_15030010007', name: "DVD光驱", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 33, icon: '💾', weight: 0.6, officialId: '15030010007', officialGroup: 'dfg_101' },
  df_15030010008: { id: 'df_15030010008', name: "音频播放器", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 79, icon: '💾', weight: 0.18, officialId: '15030010008', officialGroup: 'dfg_101' },
  df_15030010009: { id: 'df_15030010009', name: "鼠标", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '💾', weight: 0.08, officialId: '15030010009', officialGroup: 'dfg_101' },
  df_15030010011: { id: 'df_15030010011', name: "电源", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 49, icon: '💾', weight: 2.6, officialId: '15030010011', officialGroup: 'dfg_101' },
  df_15030010012: { id: 'df_15030010012', name: "摄影机", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 6525, icon: '💾', weight: 2.35, officialId: '15030010012', officialGroup: 'dfg_101' },
  df_15030010013: { id: 'df_15030010013', name: "印刷电路板", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '💾', weight: 0.3, officialId: '15030010013', officialGroup: 'dfg_101' },
  df_15030010014: { id: 'df_15030010014', name: "键盘", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 25, icon: '💾', weight: 1.1, officialId: '15030010014', officialGroup: 'dfg_101' },
  df_15030010015: { id: 'df_15030010015', name: "蓝牙耳机", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '💾', weight: 0.1, officialId: '15030010015', officialGroup: 'dfg_101' },
  df_15030010018: { id: 'df_15030010018', name: "风冷散热器", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 24, icon: '💾', weight: 0.4, officialId: '15030010018', officialGroup: 'dfg_101' },
  df_15030010019: { id: 'df_15030010019', name: "机械硬盘", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '💾', weight: 0.25, officialId: '15030010019', officialGroup: 'dfg_101' },
  df_15030010020: { id: 'df_15030010020', name: "喇叭零件", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 12, icon: '💾', weight: 0.2, officialId: '15030010020', officialGroup: 'dfg_101' },
  df_15030040001: { id: 'df_15030040001', name: "镜头", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 1070, icon: '💾', weight: 0.45, officialId: '15030040001', officialGroup: 'dfg_101' },
  df_15030040002: { id: 'df_15030040002', name: "摄像头", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 88, icon: '💾', weight: 0.72, officialId: '15030040002', officialGroup: 'dfg_101' },
  df_15030040003: { id: 'df_15030040003', name: "CPU", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 681, icon: '💾', weight: 0.07, officialId: '15030040003', officialGroup: 'dfg_101' },
  df_15030040004: { id: 'df_15030040004', name: "水冷散热器", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 43, icon: '💾', weight: 0.3, officialId: '15030040004', officialGroup: 'dfg_101' },
  df_15030040005: { id: 'df_15030040005', name: "固态硬盘", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 456, icon: '💾', weight: 0.04, officialId: '15030040005', officialGroup: 'dfg_101' },
  df_15030040006: { id: 'df_15030040006', name: "内存条", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 354, icon: '💾', weight: 0.07, officialId: '15030040006', officialGroup: 'dfg_101' },
  df_15030040007: { id: 'df_15030040007', name: "ASOS电脑主板", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 506, icon: '💾', weight: 2.31, officialId: '15030040007', officialGroup: 'dfg_101' },
  df_15030040008: { id: 'df_15030040008', name: "Obox游戏手柄", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 79, icon: '💾', officialId: '15030040008', officialGroup: 'dfg_101' },
  df_15030040009: { id: 'df_15030040009', name: "调制解调器", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '💾', weight: 0.2, officialId: '15030040009', officialGroup: 'dfg_101' },
  df_15030040010: { id: 'df_15030040010', name: "液晶显示屏", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 195, icon: '💾', weight: 1.81, officialId: '15030040010', officialGroup: 'dfg_101' },
  df_15030040011: { id: 'df_15030040011', name: "超高频读卡器", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 24, icon: '💾', weight: 0.1, officialId: '15030040011', officialGroup: 'dfg_101' },
  df_15030040012: { id: 'df_15030040012', name: "收音机", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 325, icon: '💾', weight: 0.27, officialId: '15030040012', officialGroup: 'dfg_101' },
  df_15030040013: { id: 'df_15030040013', name: "手机", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 650, icon: '💾', weight: 0.02, officialId: '15030040013', officialGroup: 'dfg_101' },
  df_15030040014: { id: 'df_15030040014', name: "电子干扰器", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 162, icon: '💾', weight: 0.27, officialId: '15030040014', officialGroup: 'dfg_101' },
  df_15030050001: { id: 'df_15030050001', name: "显卡", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 3528, icon: '💾', weight: 1.43, officialId: '15030050001', officialGroup: 'dfg_101' },
  df_15030050002: { id: 'df_15030050002', name: "军用无人机", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5512, icon: '💾', weight: 0.87, officialId: '15030050002', officialGroup: 'dfg_101' },
  df_15030050003: { id: 'df_15030050003', name: "可编程处理器", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 722, icon: '💾', weight: 0.27, officialId: '15030050003', officialGroup: 'dfg_101' },
  df_15030050004: { id: 'df_15030050004', name: "军用电台", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 7598, icon: '💾', weight: 5.34, officialId: '15030050004', officialGroup: 'dfg_101' },
  df_15030050005: { id: 'df_15030050005', name: "HIFI声卡", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 339, icon: '💾', weight: 1, officialId: '15030050005', officialGroup: 'dfg_101' },
  df_15030050006: { id: 'df_15030050006', name: "数码相机", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 746, icon: '💾', weight: 0.36, officialId: '15030050006', officialGroup: 'dfg_101' },
  df_15030050007: { id: 'df_15030050007', name: "笔记本电脑", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 11154, icon: '💾', weight: 2.26, officialId: '15030050007', officialGroup: 'dfg_101' },
  df_15030050008: { id: 'df_15030050008', name: "刀片服务器", kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 15160, icon: '💾', weight: 6.56, officialId: '15030050008', officialGroup: 'dfg_101' },
  df_15030050010: { id: 'df_15030050010', name: "GS5 主机", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 8134, icon: '💾', weight: 3.16, officialId: '15030050010', officialGroup: 'dfg_101' },
  df_15030050011: { id: 'df_15030050011', name: "GS5 手柄", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 386, icon: '💾', weight: 0.36, officialId: '15030050011', officialGroup: 'dfg_101' },
  df_15030050012: { id: 'df_15030050012', name: "高速磁盘阵列", kind: 'valuable', rarity: 'red', w: 3, h: 4, baseValue: 15593, icon: '💾', weight: 4.71, officialId: '15030050012', officialGroup: 'dfg_101' },
  df_15030050013: { id: 'df_15030050013', name: "G.T.I卫星通信天线", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4715, icon: '💾', weight: 13.57, officialId: '15030050013', officialGroup: 'dfg_101' },
  df_15030050014: { id: 'df_15030050014', name: "飞行记录仪", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 14562, icon: '💾', weight: 15, officialId: '15030050014', officialGroup: 'dfg_101' },
  df_15030050015: { id: 'df_15030050015', name: "相控阵雷达", kind: 'valuable', rarity: 'red', w: 3, h: 4, baseValue: 17702, icon: '💾', weight: 3.06, officialId: '15030050015', officialGroup: 'dfg_101' },
  df_15030050016: { id: 'df_15030050016', name: "太阳能板", kind: 'valuable', rarity: 'blue', w: 2, h: 4, baseValue: 259, icon: '💾', weight: 2.26, officialId: '15030050016', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15030050017: { id: 'df_15030050017', name: "军用炮弹", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 15359, icon: '🔧', weight: 20.15, officialId: '15030050017', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15030050018: { id: 'df_15030050018', name: "军用控制终端", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 4090, icon: '💾', weight: 0.17, officialId: '15030050018', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15030050019: { id: 'df_15030050019', name: "军用炸药", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1351, icon: '🔧', weight: 0.91, officialId: '15030050019', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15040010002: { id: 'df_15040010002', name: "多功能数据线", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 11, icon: '💾', weight: 0.1, officialId: '15040010002', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15040010003: { id: 'df_15040010003', name: "古老的斯芬克斯像", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 43, icon: '🏺', weight: 3.2, officialId: '15040010003', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15040010004: { id: 'df_15040010004', name: "麻将-幺鸡", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', officialId: '15040010004', officialGroup: 'dfg_105' },
  df_15040010005: { id: 'df_15040010005', name: "麻将-五饼", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', officialId: '15040010005', officialGroup: 'dfg_105' },
  df_15040010006: { id: 'df_15040010006', name: "麻将-八万", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 7, icon: '🏺', officialId: '15040010006', officialGroup: 'dfg_105' },
  df_15040010007: { id: 'df_15040010007', name: "扑克牌-J", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15040010007', officialGroup: 'dfg_105' },
  df_15040010008: { id: 'df_15040010008', name: "扑克牌-Q", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15040010008', officialGroup: 'dfg_105' },
  df_15040010009: { id: 'df_15040010009', name: "扑克牌-K", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15040010009', officialGroup: 'dfg_105' },
  df_15040010010: { id: 'df_15040010010', name: "谷鲜猫粮", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 34, icon: '🏺', officialId: '15040010010', officialGroup: 'dfg_105' },
  df_15040010011: { id: 'df_15040010011', name: "清洁猫砂", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🏺', officialId: '15040010011', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15040010012: { id: 'df_15040010012', name: "插座", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🔧', weight: 0.2, officialId: '15040010012', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15040010013: { id: 'df_15040010013', name: "微积分读本", kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 13, icon: '🏺', officialId: '15040010013', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15040010014: { id: 'df_15040010014', name: "阿萨拉风情水壶", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 434, icon: '🏺', weight: 0.72, officialId: '15040010014', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15040010015: { id: 'df_15040010015', name: "间谍笔", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 284, icon: '💾', weight: 0.5, officialId: '15040010015', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15040010016: { id: 'df_15040010016', name: "网线", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🔧', weight: 0.6, officialId: '15040010016', officialGroup: 'dfg_103' },
  df_15040010017: { id: 'df_15040010017', name: "火药", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 140, icon: '🔧', weight: 0.54, officialId: '15040010017', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15040010018: { id: 'df_15040010018', name: "天线", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 37, icon: '💾', officialId: '15040010018', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15040010019: { id: 'df_15040010019', name: "E型滤毒罐", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 592, icon: '🩹', weight: 0.36, officialId: '15040010019', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15040010020: { id: 'df_15040010020', name: "打印纸", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 33, icon: '🏺', officialId: '15040010020', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15040010021: { id: 'df_15040010021', name: "枪械零件", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 130, icon: '🔧', weight: 0.5, officialId: '15040010021', officialGroup: 'dfg_103' },
  df_15040010022: { id: 'df_15040010022', name: "转换插座", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 96, icon: '🔧', weight: 0.12, officialId: '15040010022', officialGroup: 'dfg_103' },
  df_15040010023: { id: 'df_15040010023', name: "移动电缆", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 539, icon: '🔧', weight: 1.88, officialId: '15040010023', officialGroup: 'dfg_103' },
  df_15040040006: { id: 'df_15040040006', name: "刹车盘", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 68, icon: '🔧', weight: 2, officialId: '15040040006', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15040040007: { id: 'df_15040040007', name: "电动车电池", kind: 'valuable', rarity: 'purple', w: 2, h: 3, baseValue: 900, icon: '🔋', weight: 9.23, officialId: '15040040007', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15040050002: { id: 'df_15040050002', name: "克劳迪乌斯半身像", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 13265, icon: '🏺', weight: 1.09, officialId: '15040050002', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15040050003: { id: 'df_15040050003', name: "已损坏的热像仪", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 636, icon: '💾', weight: 0.83, officialId: '15040050003', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15060010001: { id: 'df_15060010001', name: "盐溶液", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🩹', weight: 0.6, officialId: '15060010001', officialGroup: 'dfg_102' },
  df_15060010002: { id: 'df_15060010002', name: "手术镊子", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '🩹', weight: 0.2, officialId: '15060010002', officialGroup: 'dfg_102' },
  df_15060010003: { id: 'df_15060010003', name: "小药瓶", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🩹', weight: 0.1, officialId: '15060010003', officialGroup: 'dfg_102' },
  df_15060010004: { id: 'df_15060010004', name: "额温枪", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 82, icon: '🩹', weight: 0.58, officialId: '15060010004', officialGroup: 'dfg_102' },
  df_15060010005: { id: 'df_15060010005', name: "体温计", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 6, icon: '🩹', officialId: '15060010005', officialGroup: 'dfg_102' },
  df_15060010006: { id: 'df_15060010006', name: "听诊器", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 118, icon: '🩹', weight: 0.05, officialId: '15060010006', officialGroup: 'dfg_102' },
  df_15060010007: { id: 'df_15060010007', name: "医用酒精", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 91, icon: '🩹', weight: 0.72, officialId: '15060010007', officialGroup: 'dfg_102' },
  df_15060010008: { id: 'df_15060010008', name: "手术剪刀", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🩹', weight: 0.06, officialId: '15060010008', officialGroup: 'dfg_102' },
  df_15060010009: { id: 'df_15060010009', name: "外科手套", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🩹', weight: 0.01, officialId: '15060010009', officialGroup: 'dfg_102' },
  df_15060010010: { id: 'df_15060010010', name: "注射器", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 22, icon: '🩹', weight: 0.05, officialId: '15060010010', officialGroup: 'dfg_102' },
  df_15060010011: { id: 'df_15060010011', name: "口罩", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🩹', officialId: '15060010011', officialGroup: 'dfg_102' },
  df_15060010012: { id: 'df_15060010012', name: "输液工具", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 24, icon: '🩹', weight: 0.25, officialId: '15060010012', officialGroup: 'dfg_102' },
  df_15060040001: { id: 'df_15060040001', name: "静脉定位器", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 828, icon: '🩹', weight: 0.36, officialId: '15060040001', officialGroup: 'dfg_102' },
  df_15060040002: { id: 'df_15060040002', name: "血压仪", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 489, icon: '🩹', weight: 1.27, officialId: '15060040002', officialGroup: 'dfg_102' },
  df_15060040003: { id: 'df_15060040003', name: "血氧仪", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 632, icon: '🩹', weight: 1.46, officialId: '15060040003', officialGroup: 'dfg_102' },
  df_15060040004: { id: 'df_15060040004', name: "呼吸机", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4711, icon: '🩹', weight: 1.09, officialId: '15060040004', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15060080001: { id: 'df_15060080001', name: "苹果", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.4, officialId: '15060080001', officialGroup: 'dfg_105' },
  df_15060080002: { id: 'df_15060080002', name: "酸奶", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', weight: 0.25, officialId: '15060080002', officialGroup: 'dfg_105' },
  df_15060080003: { id: 'df_15060080003', name: "基础蛋白粉", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 2.3, officialId: '15060080003', officialGroup: 'dfg_105' },
  df_15060080004: { id: 'df_15060080004', name: "无糖缓释能量棒", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 18, icon: '🏺', weight: 0.05, officialId: '15060080004', officialGroup: 'dfg_105' },
  df_15060080005: { id: 'df_15060080005', name: "生津柠檬茶", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 201, icon: '🏺', weight: 0.27, officialId: '15060080005', officialGroup: 'dfg_105' },
  df_15060080006: { id: 'df_15060080006', name: "纯净水", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 17, icon: '🏺', weight: 0.6, officialId: '15060080006', officialGroup: 'dfg_105' },
  df_15060080007: { id: 'df_15060080007', name: "昴星干脆面", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '🏺', weight: 0.05, officialId: '15060080007', officialGroup: 'dfg_105' },
  df_15060080008: { id: 'df_15060080008', name: "清新橘味能量凝胶", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 234, icon: '🏺', weight: 0.05, officialId: '15060080008', officialGroup: 'dfg_105' },
  df_15060080009: { id: 'df_15060080009', name: "野外能量棒", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 26, icon: '🏺', weight: 0.1, officialId: '15060080009', officialGroup: 'dfg_105' },
  df_15060080010: { id: 'df_15060080010', name: "香喷喷炒面", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 93, icon: '🏺', weight: 0.27, officialId: '15060080010', officialGroup: 'dfg_105' },
  df_15060080011: { id: 'df_15060080011', name: "可乐", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 94, icon: '🏺', weight: 0.27, officialId: '15060080011', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_106 · 食品饮品 ——
  df_15060080012: { id: 'df_15060080012', name: "果味乳清蛋白粉", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 24, icon: '🥫', officialId: '15060080012', officialGroup: 'dfg_106' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15060080013: { id: 'df_15060080013', name: "军用罐头", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 125, icon: '🏺', weight: 0.31, officialId: '15060080013', officialGroup: 'dfg_105' },
  df_15060080014: { id: 'df_15060080014', name: "咖啡", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 725, icon: '🏺', weight: 0.27, officialId: '15060080014', officialGroup: 'dfg_105' },
  df_15060080015: { id: 'df_15060080015', name: "奥莉薇娅香槟", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 3586, icon: '🏺', weight: 0.8, officialId: '15060080015', officialGroup: 'dfg_105' },
  df_15060080016: { id: 'df_15060080016', name: "大豆蛋白粉包", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 94, icon: '🏺', weight: 0.45, officialId: '15060080016', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15070010001: { id: 'df_15070010001', name: "U盘", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 93, icon: '💾', weight: 0.01, officialId: '15070010001', officialGroup: 'dfg_101' },
  df_15070010002: { id: 'df_15070010002', name: "存储卡", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 79, icon: '💾', weight: 0.01, officialId: '15070010002', officialGroup: 'dfg_101' },
  df_15070010003: { id: 'df_15070010003', name: "外接插卡口", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 27, icon: '💾', officialId: '15070010003', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15070010004: { id: 'df_15070010004', name: "无价值资料", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 21, icon: '📁', officialId: '15070010004', officialGroup: 'dfg_104' },
  df_15070010005: { id: 'df_15070010005', name: "建筑图纸1号", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 27, icon: '📁', weight: 0.01, officialId: '15070010005', officialGroup: 'dfg_104' },
  df_15070010006: { id: 'df_15070010006', name: "建筑图纸2号", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 34, icon: '📁', weight: 0.01, officialId: '15070010006', officialGroup: 'dfg_104' },
  df_15070010007: { id: 'df_15070010007', name: "建筑图纸3号", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 33, icon: '📁', weight: 0.01, officialId: '15070010007', officialGroup: 'dfg_104' },
  df_15070010008: { id: 'df_15070010008', name: "建筑图纸4号", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 34, icon: '📁', weight: 0.01, officialId: '15070010008', officialGroup: 'dfg_104' },
  df_15070010009: { id: 'df_15070010009', name: "建筑图纸5号", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 27, icon: '📁', weight: 0.01, officialId: '15070010009', officialGroup: 'dfg_104' },
  df_15070040001: { id: 'df_15070040001', name: "资料：设计图纸", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 713, icon: '📁', weight: 0.01, officialId: '15070040001', officialGroup: 'dfg_104' },
  df_15070040002: { id: 'df_15070040002', name: "资料：商业文件", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 79, icon: '📁', weight: 0.09, officialId: '15070040002', officialGroup: 'dfg_104' },
  df_15070040003: { id: 'df_15070040003', name: "实验数据", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2402, icon: '📁', weight: 0.04, officialId: '15070040003', officialGroup: 'dfg_104' },
  df_15070050001: { id: 'df_15070050001', name: "量子存储", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2918, icon: '📁', weight: 0.05, officialId: '15070050001', officialGroup: 'dfg_104' },
  df_15070050002: { id: 'df_15070050002', name: "资料：军事情报", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 169, icon: '📁', weight: 0.09, officialId: '15070050002', officialGroup: 'dfg_104' },
  df_15070050003: { id: 'df_15070050003', name: "情报文件", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 114, icon: '📁', weight: 0.22, officialId: '15070050003', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080010003: { id: 'df_15080010003', name: "非洲鼓", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 37, icon: '🏺', weight: 4.5, officialId: '15080010003', officialGroup: 'dfg_107' },
  df_15080010004: { id: 'df_15080010004', name: "太阳碟", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 45, icon: '🏺', weight: 0.2, officialId: '15080010004', officialGroup: 'dfg_107' },
  df_15080040001: { id: 'df_15080040001', name: "棘龙爪化石", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 3684, icon: '🏺', weight: 0.93, officialId: '15080040001', officialGroup: 'dfg_107' },
  df_15080040002: { id: 'df_15080040002', name: "海盗弯刀", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 290, icon: '🏺', weight: 1.7, officialId: '15080040002', officialGroup: 'dfg_107' },
  df_15080040003: { id: 'df_15080040003', name: "犄角墙饰", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 231, icon: '🏺', weight: 0.72, officialId: '15080040003', officialGroup: 'dfg_107' },
  df_15080040004: { id: 'df_15080040004', name: "残弹挂坠", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.01, officialId: '15080040004', officialGroup: 'dfg_107' },
  df_15080040005: { id: 'df_15080040005', name: "非洲木雕", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 36, icon: '🏺', weight: 1.4, officialId: '15080040005', officialGroup: 'dfg_107' },
  df_15080040006: { id: 'df_15080040006', name: "青铜茶壶", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 135, icon: '🏺', weight: 0.2, officialId: '15080040006', officialGroup: 'dfg_107' },
  df_15080050001: { id: 'df_15080050001', name: "后妃耳环", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 178, icon: '🏺', weight: 0.18, officialId: '15080050001', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050002: { id: 'df_15080050002', name: "纯金打火机", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 654, icon: '🏺', weight: 0.41, officialId: '15080050002', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050003: { id: 'df_15080050003', name: "滑膛枪展品", kind: 'valuable', rarity: 'red', w: 1, h: 4, baseValue: 6691, icon: '🏺', weight: 4.11, officialId: '15080050003', officialGroup: 'dfg_107' },
  df_15080050004: { id: 'df_15080050004', name: "功绩勋章", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 865, icon: '🏺', weight: 0.11, officialId: '15080050004', officialGroup: 'dfg_107' },
  df_15080050005: { id: 'df_15080050005', name: "酋长的面具", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 34, icon: '🏺', weight: 0.5, officialId: '15080050005', officialGroup: 'dfg_107' },
  df_15080050006: { id: 'df_15080050006', name: "非洲之心", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 131413, icon: '🏺', weight: 0.62, officialId: '15080050006', officialGroup: 'dfg_107' },
  df_15080050007: { id: 'df_15080050007', name: "锈迹斑斑的海盗铜币", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 23, icon: '🏺', weight: 0.2, officialId: '15080050007', officialGroup: 'dfg_107' },
  df_15080050008: { id: 'df_15080050008', name: "古怪的海盗银币", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 88, icon: '🏺', weight: 0.68, officialId: '15080050008', officialGroup: 'dfg_107' },
  df_15080050009: { id: 'df_15080050009', name: "亮闪闪的海盗金币", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 613, icon: '🏺', weight: 0.71, officialId: '15080050009', officialGroup: 'dfg_107' },
  df_15080050010: { id: 'df_15080050010', name: "万足金条", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 3514, icon: '🏺', weight: 4.25, officialId: '15080050010', officialGroup: 'dfg_107' },
  df_15080050011: { id: 'df_15080050011', name: "古老的海盗望远镜", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 121, icon: '🏺', weight: 0.83, officialId: '15080050011', officialGroup: 'dfg_107' },
  df_15080050012: { id: 'df_15080050012', name: "“起舞的女郎”挂饰", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 113, icon: '🏺', weight: 0.45, officialId: '15080050012', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050013: { id: 'df_15080050013', name: "雷斯的乐谱本", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 866, icon: '📁', weight: 0.22, officialId: '15080050013', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050014: { id: 'df_15080050014', name: "赛伊德的怀表", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2282, icon: '🏺', weight: 0.33, officialId: '15080050014', officialGroup: 'dfg_107' },
  df_15080050015: { id: 'df_15080050015', name: "阿萨拉特色酒杯", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.13, officialId: '15080050015', officialGroup: 'dfg_107' },
  df_15080050016: { id: 'df_15080050016', name: "阿萨拉特色酒壶", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 333, icon: '🏺', weight: 1.27, officialId: '15080050016', officialGroup: 'dfg_107' },
  df_15080050017: { id: 'df_15080050017', name: "阿萨拉特色陶瓷", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 50, icon: '🏺', weight: 3.75, officialId: '15080050017', officialGroup: 'dfg_107' },
  df_15080050018: { id: 'df_15080050018', name: "黄金饰章", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 275, icon: '🏺', weight: 0.73, officialId: '15080050018', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050019: { id: 'df_15080050019', name: "酒店宣传海报", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 41, icon: '🏺', weight: 0.05, officialId: '15080050019', officialGroup: 'dfg_105' },
  df_15080050020: { id: 'df_15080050020', name: "阿萨拉新闻周刊", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 50, icon: '🏺', weight: 0.25, officialId: '15080050020', officialGroup: 'dfg_105' },
  df_15080050021: { id: 'df_15080050021', name: "阿萨拉时尚周刊", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 178, icon: '🏺', weight: 0.23, officialId: '15080050021', officialGroup: 'dfg_105' },
  df_15080050022: { id: 'df_15080050022', name: "阿萨拉娱乐月刊", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 45, icon: '🏺', weight: 0.25, officialId: '15080050022', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050023: { id: 'df_15080050023', name: "初级子弹生产零件", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 143, icon: '🏺', weight: 0.45, officialId: '15080050023', officialGroup: 'dfg_107' },
  df_15080050024: { id: 'df_15080050024', name: "中级子弹生产零件", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 197, icon: '🏺', weight: 1.09, officialId: '15080050024', officialGroup: 'dfg_107' },
  df_15080050025: { id: 'df_15080050025', name: "高级子弹生产零件", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 618, icon: '🏺', weight: 1.52, officialId: '15080050025', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050026: { id: 'df_15080050026', name: "三角洲特种部队：黑鹰坠落-战队之刃", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 83, icon: '🏺', weight: 0.05, officialId: '15080050026', officialGroup: 'dfg_105' },
  df_15080050027: { id: 'df_15080050027', name: "三角洲特种部队：刺刀特遣队", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 121, icon: '🏺', weight: 0.05, officialId: '15080050027', officialGroup: 'dfg_105' },
  df_15080050028: { id: 'df_15080050028', name: "三角洲特种部队：黑鹰坠落", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 613, icon: '🏺', weight: 0.28, officialId: '15080050028', officialGroup: 'dfg_105' },
  df_15080050029: { id: 'df_15080050029', name: "三角洲特种部队：大地勇士", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 186, icon: '🏺', weight: 0.79, officialId: '15080050029', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050030: { id: 'df_15080050030', name: "曼德尔超算单元", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21358, icon: '💾', weight: 4.52, officialId: '15080050030', officialGroup: 'dfg_101' },
  df_15080050031: { id: 'df_15080050031', name: "便携军用雷达", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21547, icon: '💾', weight: 9.5, officialId: '15080050031', officialGroup: 'dfg_101' },
  df_15080050032: { id: 'df_15080050032', name: "军用信息终端", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 9051, icon: '💾', weight: 2.71, officialId: '15080050032', officialGroup: 'dfg_101' },
  df_15080050033: { id: 'df_15080050033', name: "军用卫星通讯仪", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1980, icon: '💾', weight: 1.99, officialId: '15080050033', officialGroup: 'dfg_101' },
  df_15080050034: { id: 'df_15080050034', name: "单反相机", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1323, icon: '💾', weight: 1.09, officialId: '15080050034', officialGroup: 'dfg_101' },
  df_15080050035: { id: 'df_15080050035', name: "军用望远镜", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 995, icon: '💾', weight: 0.46, officialId: '15080050035', officialGroup: 'dfg_101' },
  df_15080050036: { id: 'df_15080050036', name: "军用热像仪", kind: 'valuable', rarity: 'purple', w: 3, h: 2, baseValue: 801, icon: '💾', weight: 1.81, officialId: '15080050036', officialGroup: 'dfg_101' },
  df_15080050037: { id: 'df_15080050037', name: "广角镜头", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 554, icon: '💾', weight: 0.63, officialId: '15080050037', officialGroup: 'dfg_101' },
  df_15080050038: { id: 'df_15080050038', name: "专业声卡", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 412, icon: '💾', weight: 1.21, officialId: '15080050038', officialGroup: 'dfg_101' },
  df_15080050039: { id: 'df_15080050039', name: "电子温度计", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 130, icon: '💾', weight: 0.5, officialId: '15080050039', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050040: { id: 'df_15080050040', name: "主战坦克模型", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22548, icon: '🏺', weight: 3.35, officialId: '15080050040', officialGroup: 'dfg_107' },
  df_15080050041: { id: 'df_15080050041', name: "步战车模型", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 13864, icon: '🏺', weight: 2.35, officialId: '15080050041', officialGroup: 'dfg_107' },
  df_15080050042: { id: 'df_15080050042', name: "名贵机械表", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2236, icon: '🏺', weight: 0.16, officialId: '15080050042', officialGroup: 'dfg_107' },
  df_15080050043: { id: 'df_15080050043', name: "仪典匕首", kind: 'valuable', rarity: 'purple', w: 2, h: 3, baseValue: 1245, icon: '🏺', weight: 0.75, officialId: '15080050043', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15020010033: { id: 'df_15020010033', name: "火箭燃料", kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 14985, icon: '🔋', weight: 21.72, officialId: '15020010033', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050044: { id: 'df_15080050044', name: "绝密服务器", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21898, icon: '📁', weight: 5.52, officialId: '15080050044', officialGroup: 'dfg_104' },
  df_15080050045: { id: 'df_15080050045', name: "加密路由器", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 483, icon: '📁', weight: 2.17, officialId: '15080050045', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050046: { id: 'df_15080050046', name: "扑克牌-10", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050046', officialGroup: 'dfg_105' },
  df_15080050047: { id: 'df_15080050047', name: "扑克牌-9", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050047', officialGroup: 'dfg_105' },
  df_15080050048: { id: 'df_15080050048', name: "扑克牌-8", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050048', officialGroup: 'dfg_105' },
  df_15080050049: { id: 'df_15080050049', name: "扑克牌-7", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050049', officialGroup: 'dfg_105' },
  df_15080050050: { id: 'df_15080050050', name: "扑克牌-6", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050050', officialGroup: 'dfg_105' },
  df_15080050051: { id: 'df_15080050051', name: "扑克牌-5", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050051', officialGroup: 'dfg_105' },
  df_15080050052: { id: 'df_15080050052', name: "扑克牌-4", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050052', officialGroup: 'dfg_105' },
  df_15080050053: { id: 'df_15080050053', name: "扑克牌-3", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050053', officialGroup: 'dfg_105' },
  df_15080050054: { id: 'df_15080050054', name: "扑克牌-2", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050054', officialGroup: 'dfg_105' },
  df_15080050055: { id: 'df_15080050055', name: "扑克牌-A", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050055', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050056: { id: 'df_15080050056', name: "资料残页", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 8, icon: '📁', weight: 0.01, officialId: '15080050056', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050057: { id: 'df_15080050057', name: "无菌敷料包", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 102, icon: '🩹', weight: 0.5, officialId: '15080050057', officialGroup: 'dfg_102' },
  df_15080050058: { id: 'df_15080050058', name: "自动体外除颤器", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 14015, icon: '🩹', weight: 1.36, officialId: '15080050058', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050059: { id: 'df_15080050059', name: "扑克牌-小王", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0, officialId: '15080050059', officialGroup: 'dfg_105' },
  df_15080050060: { id: 'df_15080050060', name: "扑克牌-大王", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0, officialId: '15080050060', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050061: { id: 'df_15080050061', name: "云存储阵列", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 13895, icon: '📁', weight: 4, officialId: '15080050061', officialGroup: 'dfg_104' },
  df_15080050062: { id: 'df_15080050062', name: "阵列服务器", kind: 'valuable', rarity: 'cyan', w: 3, h: 4, baseValue: 5894, icon: '📁', weight: 10, officialId: '15080050062', officialGroup: 'dfg_104' },
  df_15080050096: { id: 'df_15080050096', name: "军情录音", kind: 'valuable', rarity: 'blue', w: 3, h: 1, baseValue: 220, icon: '📁', weight: 1, officialId: '15080050096', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050097: { id: 'df_15080050097', name: "复苏呼吸机", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22054, icon: '🩹', weight: 5, officialId: '15080050097', officialGroup: 'dfg_102' },
  df_15080050065: { id: 'df_15080050065', name: "骨锯", kind: 'valuable', rarity: 'blue', w: 1, h: 3, baseValue: 154, icon: '🩹', weight: 2, officialId: '15080050065', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050066: { id: 'df_15080050066', name: "扫拖一体机器人", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 20354, icon: '🏺', weight: 5.6, officialId: '15080050066', officialGroup: 'dfg_105' },
  df_15080050067: { id: 'df_15080050067', name: "强力吸尘器", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 14523, icon: '🏺', weight: 4.8, officialId: '15080050067', officialGroup: 'dfg_105' },
  df_15080050068: { id: 'df_15080050068', name: "胶囊咖啡机套组", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 521, icon: '🏺', weight: 3.5, officialId: '15080050068', officialGroup: 'dfg_105' },
  df_15080050069: { id: 'df_15080050069', name: "高级咖啡豆", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 1658, icon: '🏺', weight: 0.5, officialId: '15080050069', officialGroup: 'dfg_105' },
  df_15080050070: { id: 'df_15080050070', name: "三角洲特种部队：黑鹰坠落（盒装版）", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 358, icon: '🏺', weight: 0.15, officialId: '15080050070', officialGroup: 'dfg_105' },
  df_15080050071: { id: 'df_15080050071', name: "盒装挂耳咖啡", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 876, icon: '🏺', weight: 0.6, officialId: '15080050071', officialGroup: 'dfg_105' },
  df_15080050072: { id: 'df_15080050072', name: "摩卡咖啡壶", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 132, icon: '🏺', weight: 0.8, officialId: '15080050072', officialGroup: 'dfg_105' },
  df_15080050073: { id: 'df_15080050073', name: "维生素泡腾片", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 105, icon: '🏺', weight: 0.1, officialId: '15080050073', officialGroup: 'dfg_105' },
  df_15080050074: { id: 'df_15080050074', name: "英式袋泡茶", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 102, icon: '🏺', weight: 0.1, officialId: '15080050074', officialGroup: 'dfg_105' },
  df_15080050075: { id: 'df_15080050075', name: "木雕烟斗", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 131, icon: '🏺', weight: 0.2, officialId: '15080050075', officialGroup: 'dfg_105' },
  df_15080050076: { id: 'df_15080050076', name: "糖三角", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 89, icon: '🏺', weight: 0.2, officialId: '15080050076', officialGroup: 'dfg_105' },
  df_15080050077: { id: 'df_15080050077', name: "调料套组", kind: 'valuable', rarity: 'green', w: 2, h: 2, baseValue: 58, icon: '🏺', weight: 0.45, officialId: '15080050077', officialGroup: 'dfg_105' },
  df_15080050078: { id: 'df_15080050078', name: "袋装咖啡豆", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 46, icon: '🏺', weight: 0.35, officialId: '15080050078', officialGroup: 'dfg_105' },
  df_15080050079: { id: 'df_15080050079', name: "当地再制咖啡", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.28, officialId: '15080050079', officialGroup: 'dfg_105' },
  df_15080050080: { id: 'df_15080050080', name: "强力胶", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.25, officialId: '15080050080', officialGroup: 'dfg_105' },
  df_15080050081: { id: 'df_15080050081', name: "胡椒瓶", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 16, icon: '🏺', weight: 0.25, officialId: '15080050081', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050082: { id: 'df_15080050082', name: "本地特色首饰", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 3988, icon: '🏺', weight: 2.5, officialId: '15080050082', officialGroup: 'dfg_107' },
  df_15080050083: { id: 'df_15080050083', name: "座钟", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 2104, icon: '🏺', weight: 3, officialId: '15080050083', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050084: { id: 'df_15080050084', name: "石工锤", kind: 'valuable', rarity: 'green', w: 1, h: 3, baseValue: 112, icon: '🔧', weight: 5, officialId: '15080050084', officialGroup: 'dfg_103' },
  df_15080050085: { id: 'df_15080050085', name: "羊角锤", kind: 'valuable', rarity: 'white', w: 1, h: 2, baseValue: 34, icon: '🔧', weight: 3, officialId: '15080050085', officialGroup: 'dfg_103' },
  df_15080050086: { id: 'df_15080050086', name: "一盒钉子", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 25, icon: '🔧', weight: 0.5, officialId: '15080050086', officialGroup: 'dfg_103' },
  df_15080050087: { id: 'df_15080050087', name: "手锯", kind: 'valuable', rarity: 'green', w: 1, h: 3, baseValue: 105, icon: '🔧', weight: 1.5, officialId: '15080050087', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050088: { id: 'df_15080050088', name: "大型电台", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 4204, icon: '💾', weight: 6.5, officialId: '15080050088', officialGroup: 'dfg_101' },
  df_15080050089: { id: 'df_15080050089', name: "军用弹道计算机", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 971, icon: '💾', weight: 2.5, officialId: '15080050089', officialGroup: 'dfg_101' },
  df_15080050090: { id: 'df_15080050090', name: "高速固态硬盘", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 795, icon: '💾', weight: 0.3, officialId: '15080050090', officialGroup: 'dfg_101' },
  df_15080050091: { id: 'df_15080050091', name: "便携音响", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 364, icon: '💾', weight: 1.6, officialId: '15080050091', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050092: { id: 'df_15080050092', name: "卫队金扳指", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 698, icon: '🏺', weight: 0.05, officialId: '15080050092', officialGroup: 'dfg_107' },
  df_15080050093: { id: 'df_15080050093', name: "优秀雇员奖杯", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 684, icon: '🏺', weight: 0.2, officialId: '15080050093', officialGroup: 'dfg_107' },
  df_15080050094: { id: 'df_15080050094', name: "赛伊德的手弩", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 883, icon: '🏺', weight: 2, officialId: '15080050094', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050095: { id: 'df_15080050095', name: "脑机控制端子", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 599, icon: '💾', weight: 0.08, officialId: '15080050095', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050098: { id: 'df_15080050098', name: "微型反应炉", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22546, icon: '🔋', weight: 10, officialId: '15080050098', officialGroup: 'dfg_108' },
  df_15080050099: { id: 'df_15080050099', name: "装甲车电池", kind: 'valuable', rarity: 'red', w: 2, h: 3, baseValue: 14264, icon: '🔋', weight: 15, officialId: '15080050099', officialGroup: 'dfg_108' },
  df_15080050100: { id: 'df_15080050100', name: "动力电池组", kind: 'valuable', rarity: 'red', w: 3, h: 4, baseValue: 15028, icon: '🔋', weight: 20, officialId: '15080050100', officialGroup: 'dfg_108' },
  df_15080050101: { id: 'df_15080050101', name: "固体燃料", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 725, icon: '🔋', weight: 1.5, officialId: '15080050101', officialGroup: 'dfg_108' },
  df_15080050102: { id: 'df_15080050102', name: "信号棒", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 308, icon: '🔋', weight: 1, officialId: '15080050102', officialGroup: 'dfg_108' },
  df_15080050103: { id: 'df_15080050103', name: "燃气喷灯", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 452, icon: '🔋', weight: 2, officialId: '15080050103', officialGroup: 'dfg_108' },
  df_15080050105: { id: 'df_15080050105', name: "军用露营灯", kind: 'valuable', rarity: 'purple', w: 3, h: 1, baseValue: 609, icon: '🔋', weight: 2.2, officialId: '15080050105', officialGroup: 'dfg_108' },
  df_15080050106: { id: 'df_15080050106', name: "便携生存套组", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 324, icon: '🔋', weight: 2.6, officialId: '15080050106', officialGroup: 'dfg_108' },
  df_15080050107: { id: 'df_15080050107', name: "狩猎火柴", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 95, icon: '🔋', weight: 0.2, officialId: '15080050107', officialGroup: 'dfg_108' },
  df_15080050108: { id: 'df_15080050108', name: "多用途电池", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 94, icon: '🔋', weight: 0.1, officialId: '15080050108', officialGroup: 'dfg_108' },
  df_15080050109: { id: 'df_15080050109', name: "轻型户外炉具", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 243, icon: '🔋', weight: 1.6, officialId: '15080050109', officialGroup: 'dfg_108' },
  df_15080050110: { id: 'df_15080050110', name: "充电电池组", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 35, icon: '🔋', weight: 0.2, officialId: '15080050110', officialGroup: 'dfg_108' },
  df_15080050111: { id: 'df_15080050111', name: "9V电池", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 26, icon: '🔋', weight: 0.1, officialId: '15080050111', officialGroup: 'dfg_108' },
  df_15080050112: { id: 'df_15080050112', name: "盒装蜡烛", kind: 'valuable', rarity: 'white', w: 2, h: 2, baseValue: 21, icon: '🔋', weight: 0.4, officialId: '15080050112', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050113: { id: 'df_15080050113', name: "医疗机械人", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 13316, icon: '🩹', weight: 5, officialId: '15080050113', officialGroup: 'dfg_102' },
  df_15080050114: { id: 'df_15080050114', name: "人工膝关节", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 325, icon: '🩹', weight: 0.5, officialId: '15080050114', officialGroup: 'dfg_102' },
  df_15080050115: { id: 'df_15080050115', name: "体内除颤器", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 615, icon: '🩹', weight: 0.5, officialId: '15080050115', officialGroup: 'dfg_102' },
  df_15080050116: { id: 'df_15080050116', name: "电子显微镜", kind: 'valuable', rarity: 'blue', w: 3, h: 1, baseValue: 153, icon: '🩹', weight: 2, officialId: '15080050116', officialGroup: 'dfg_102' },
  df_15080050117: { id: 'df_15080050117', name: "离心机", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 815, icon: '🩹', weight: 4, officialId: '15080050117', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050118: { id: 'df_15080050118', name: "紫外线灯", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 976, icon: '🔧', weight: 2, officialId: '15080050118', officialGroup: 'dfg_103' },
  df_15080050119: { id: 'df_15080050119', name: "植物样本", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 238, icon: '🔧', weight: 1, officialId: '15080050119', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050120: { id: 'df_15080050120', name: "雷斯的留声机", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 13495, icon: '🏺', weight: 2.5, officialId: '15080050120', officialGroup: 'dfg_107' },
  df_15080050121: { id: 'df_15080050121', name: "万金泪冠", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21964, icon: '🏺', weight: 0.75, officialId: '15080050121', officialGroup: 'dfg_107' },
  df_15080050122: { id: 'df_15080050122', name: "“天圆地方”", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5258, icon: '🏺', weight: 2, officialId: '15080050122', officialGroup: 'dfg_107' },
  df_15080050123: { id: 'df_15080050123', name: "“纵横”", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22165, icon: '🏺', weight: 4.5, officialId: '15080050123', officialGroup: 'dfg_107' },
  df_15080050124: { id: 'df_15080050124', name: "阿萨拉特色提灯", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 486, icon: '🏺', weight: 1.75, officialId: '15080050124', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050125: { id: 'df_15080050125', name: "曼德尔单元", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '💾', weight: 0.7, officialId: '15080050125', officialGroup: 'dfg_101' },
  df_15080050126: { id: 'df_15080050126', name: "卫星电话", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 895, icon: '💾', weight: 0.5, officialId: '15080050126', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050127: { id: 'df_15080050127', name: "生化培养箱", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 758, icon: '🩹', weight: 3, officialId: '15080050127', officialGroup: 'dfg_102' },
  df_15080050128: { id: 'df_15080050128', name: "ECMO", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 21575, icon: '🩹', weight: 6.5, officialId: '15080050128', officialGroup: 'dfg_102' },
  df_15080050129: { id: 'df_15080050129', name: "心脏支架", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 814, icon: '🩹', weight: 0.1, officialId: '15080050129', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050130: { id: 'df_15080050130', name: "电动马达", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 2399, icon: '🔧', weight: 5, officialId: '15080050130', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050131: { id: 'df_15080050131', name: "“钻石”鱼子酱", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1848, icon: '🏺', weight: 0.1, officialId: '15080050131', officialGroup: 'dfg_105' },
  df_15080050132: { id: 'df_15080050132', name: "“蓝宝石”龙舌兰", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 857, icon: '🏺', weight: 0.75, officialId: '15080050132', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050133: { id: 'df_15080050133', name: "珠宝头冠", kind: 'valuable', rarity: 'cyan', w: 1, h: 3, baseValue: 1529, icon: '🏺', weight: 1.5, officialId: '15080050133', officialGroup: 'dfg_107' },
  df_15080050134: { id: 'df_15080050134', name: "马赛克灯台", kind: 'valuable', rarity: 'purple', w: 3, h: 2, baseValue: 1520, icon: '🏺', weight: 3, officialId: '15080050134', officialGroup: 'dfg_107' },
  df_15080050135: { id: 'df_15080050135', name: "荷美尔陶俑", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 963, icon: '🏺', weight: 0.5, officialId: '15080050135', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050136: { id: 'df_15080050136', name: "鳄鱼蛋", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 308, icon: '🏺', weight: 0.2, officialId: '15080050136', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050137: { id: 'df_15080050137', name: "发条八音盒", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 623, icon: '🏺', weight: 1.5, officialId: '15080050137', officialGroup: 'dfg_107' },
  df_15080050138: { id: 'df_15080050138', name: "金枝桂冠", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 903, icon: '🏺', weight: 2, officialId: '15080050138', officialGroup: 'dfg_107' },
  df_15080050139: { id: 'df_15080050139', name: "图腾箭矢", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 197, icon: '🏺', weight: 0.5, officialId: '15080050139', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050140: { id: 'df_15080050140', name: "藏秘筒", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 606, icon: '📁', weight: 0.5, officialId: '15080050140', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050141: { id: 'df_15080050141', name: "高性能火药", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 894, icon: '🔋', weight: 0.75, officialId: '15080050141', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050142: { id: 'df_15080050142', name: "海洋之泪", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 108810, icon: '🏺', weight: 0.05, officialId: '15080050142', officialGroup: 'dfg_107' },
  df_15080050143: { id: 'df_15080050143', name: "三角蚌小珍珠", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 597, icon: '🏺', weight: 0.02, officialId: '15080050143', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050144: { id: 'df_15080050144', name: "浮力补偿设备", kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 15000, icon: '🔧', weight: 5, officialId: '15080050144', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050145: { id: 'df_15080050145', name: "监狱身份卡", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 800, icon: '📁', weight: 0.01, officialId: '15080050145', officialGroup: 'dfg_104' },
  df_15080050146: { id: 'df_15080050146', name: "巴克什工作签证", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 800, icon: '📁', weight: 0.01, officialId: '15080050146', officialGroup: 'dfg_104' },
  df_15080050147: { id: 'df_15080050147', name: "航天基地工卡", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 800, icon: '📁', weight: 0.01, officialId: '15080050147', officialGroup: 'dfg_104' },
  df_15080050148: { id: 'df_15080050148', name: "潮汐监狱地图-1", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 107, icon: '📁', weight: 0.01, officialId: '15080050148', officialGroup: 'dfg_104' },
  df_15080050149: { id: 'df_15080050149', name: "潮汐监狱地图-2", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 318, icon: '📁', weight: 0.01, officialId: '15080050149', officialGroup: 'dfg_104' },
  df_15080050150: { id: 'df_15080050150', name: "潮汐监狱地图-3", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 823, icon: '📁', weight: 0.01, officialId: '15080050150', officialGroup: 'dfg_104' },
  df_15080050151: { id: 'df_15080050151', name: "潮汐监狱地图-4", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 3102, icon: '📁', weight: 0.01, officialId: '15080050151', officialGroup: 'dfg_104' },
  df_15080050152: { id: 'df_15080050152', name: "Relink脑机实验数据-雷恩", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 72, icon: '📁', weight: 0.05, officialId: '15080050152', officialGroup: 'dfg_104' },
  df_15080050153: { id: 'df_15080050153', name: "Relink脑机实验数据-老千", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 99, icon: '📁', weight: 0.05, officialId: '15080050153', officialGroup: 'dfg_104' },
  df_15080050154: { id: 'df_15080050154', name: "Relink脑机实验数据-白老头", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 89, icon: '📁', weight: 0.05, officialId: '15080050154', officialGroup: 'dfg_104' },
  df_15080050155: { id: 'df_15080050155', name: "Relink脑机实验数据-锤哥", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 157, icon: '📁', weight: 0.05, officialId: '15080050155', officialGroup: 'dfg_104' },
  df_15080050156: { id: 'df_15080050156', name: "Relink脑机实验数据-加文", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 154, icon: '📁', weight: 0.05, officialId: '15080050156', officialGroup: 'dfg_104' },
  df_15080050157: { id: 'df_15080050157', name: "Relink脑机实验数据-安迪", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 195, icon: '📁', weight: 0.05, officialId: '15080050157', officialGroup: 'dfg_104' },
  df_15080050158: { id: 'df_15080050158', name: "Relink脑机实验数据-呐喊先生", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 183, icon: '📁', weight: 0.05, officialId: '15080050158', officialGroup: 'dfg_104' },
  df_15080050159: { id: 'df_15080050159', name: "Relink2.0脑机实验数据-阿明长老", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 606, icon: '📁', weight: 0.05, officialId: '15080050159', officialGroup: 'dfg_104' },
  df_15080050160: { id: 'df_15080050160', name: "Relink2.0脑机实验数据-准神", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 552, icon: '📁', weight: 0.05, officialId: '15080050160', officialGroup: 'dfg_104' },
  df_15080050161: { id: 'df_15080050161', name: "Alpha脑机实验数据-渡鸦", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1853, icon: '📁', weight: 0.05, officialId: '15080050161', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050162: { id: 'df_15080050162', name: "营养粥罐头", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 628, icon: '🏺', weight: 0.2, officialId: '15080050162', officialGroup: 'dfg_105' },
  df_15080050163: { id: 'df_15080050163', name: "海鲜粥罐头", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 615, icon: '🏺', weight: 0.2, officialId: '15080050163', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050164: { id: 'df_15080050164', name: "渡鸦项坠", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 634, icon: '🏺', weight: 0.1, officialId: '15080050164', officialGroup: 'dfg_107' },
  df_15080050165: { id: 'df_15080050165', name: "金笔", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 658, icon: '🏺', weight: 0.1, officialId: '15080050165', officialGroup: 'dfg_107' },
  df_15080050166: { id: 'df_15080050166', name: "印象派名画", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22163, icon: '🏺', weight: 5, officialId: '15080050166', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050167: { id: 'df_15080050167', name: "定位接收器", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1948, icon: '💾', weight: 0.3, officialId: '15080050167', officialGroup: 'dfg_101' },
  df_15080050168: { id: 'df_15080050168', name: "军用网络模块", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 635, icon: '💾', weight: 0.35, officialId: '15080050168', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050169: { id: 'df_15080050169', name: "高性能燃油", kind: 'valuable', rarity: 'cyan', w: 1, h: 3, baseValue: 1538, icon: '🔋', weight: 4, officialId: '15080050169', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050170: { id: 'df_15080050170', name: "已封存音源", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5297, icon: '📁', weight: 3.5, officialId: '15080050170', officialGroup: 'dfg_104' },
  df_15080050171: { id: 'df_15080050171', name: "军用地图匣", kind: 'valuable', rarity: 'cyan', w: 3, h: 1, baseValue: 1600, icon: '📁', weight: 2, officialId: '15080050171', officialGroup: 'dfg_104' },
  df_15080050172: { id: 'df_15080050172', name: "袖珍录像带", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 247, icon: '📁', weight: 0.1, officialId: '15080050172', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050173: { id: 'df_15080050173', name: "“雷明顿”打字机", kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 16203, icon: '🏺', weight: 6.5, officialId: '15080050173', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050174: { id: 'df_15080050174', name: "陆军万用表", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 702, icon: '🔧', weight: 0.1, officialId: '15080050174', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050175: { id: 'df_15080050175', name: "电子脚镣", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2076, icon: '💾', weight: 1, officialId: '15080050175', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050176: { id: 'df_15080050176', name: "试制聚变供能单元", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22389, icon: '🔋', weight: 12, officialId: '15080050176', officialGroup: 'dfg_108' },
  df_15080050177: { id: 'df_15080050177', name: "高能瓦斯罐", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5540, icon: '🔋', weight: 10.5, officialId: '15080050177', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050178: { id: 'df_15080050178', name: "超声波切割刀", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2107, icon: '🔧', weight: 0.3, officialId: '15080050178', officialGroup: 'dfg_103' },
  df_15080050179: { id: 'df_15080050179', name: "液压破门器", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 875, icon: '🔧', weight: 4.5, officialId: '15080050179', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050180: { id: 'df_15080050180', name: "飞行员眼镜", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 864, icon: '🏺', weight: 0.2, officialId: '15080050180', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050181: { id: 'df_15080050181', name: "残缺的档案", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 313, icon: '📁', weight: 1, officialId: '15080050181', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050182: { id: 'df_15080050182', name: "典雅咖啡杯", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 201, icon: '🏺', weight: 0.45, officialId: '15080050182', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050183: { id: 'df_15080050183', name: "小糖人姜饼人", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 308, icon: '🏺', weight: 0.05, officialId: '15080050183', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050184: { id: 'df_15080050184', name: "名窑瓷器", kind: 'valuable', rarity: 'red', w: 4, h: 2, baseValue: 15739, icon: '🏺', weight: 6.75, officialId: '15080050184', officialGroup: 'dfg_107' },
  df_15080050185: { id: 'df_15080050185', name: "黄金鳄鱼头雕像", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5486, icon: '🏺', weight: 15, officialId: '15080050185', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050186: { id: 'df_15080050186', name: "恒星敏感器", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1929, icon: '💾', weight: 3, officialId: '15080050186', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050187: { id: 'df_15080050187', name: "便携式生命支持系统", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 6829, icon: '🏺', weight: 7.5, officialId: '15080050187', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050188: { id: 'df_15080050188', name: "航天测试数据", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 790, icon: '📁', weight: 0.5, officialId: '15080050188', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050189: { id: 'df_15080050189', name: "脑机头戴设备", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 2179, icon: '💾', weight: 0.85, officialId: '15080050189', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050190: { id: 'df_15080050190', name: "电子氟化液", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 2256, icon: '🔋', weight: 2, officialId: '15080050190', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050191: { id: 'df_15080050191', name: "A作战计划书", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1059, icon: '📁', weight: 0.8, officialId: '15080050191', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050192: { id: 'df_15080050192', name: "便携氧气筒", kind: 'valuable', rarity: 'cyan', w: 3, h: 1, baseValue: 1673, icon: '🩹', weight: 4.5, officialId: '15080050192', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050193: { id: 'df_15080050193', name: "鸟雕", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 115, icon: '🏺', weight: 0.5, officialId: '15080050193', officialGroup: 'dfg_107' },
  df_15080050194: { id: 'df_15080050194', name: "腕带", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 109, icon: '🏺', weight: 0.6, officialId: '15080050194', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050195: { id: 'df_15080050195', name: "哮喘吸入器", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 750, icon: '🩹', weight: 0.05, officialId: '15080050195', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050196: { id: 'df_15080050196', name: "暗星燃料单元", kind: 'valuable', rarity: 'red', w: 4, h: 3, baseValue: 15000, icon: '🔋', weight: 24, officialId: '15080050196', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050197: { id: 'df_15080050197', name: "勇者之证", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 19614, icon: '📁', weight: 0.05, officialId: '15080050197', officialGroup: 'dfg_104' },
  df_15080050198: { id: 'df_15080050198', name: "赤枭档案", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 2500, icon: '📁', weight: 0.1, officialId: '15080050198', officialGroup: 'dfg_104' },
  df_15080050199: { id: 'df_15080050199', name: "赛伊德模式门票-小兵", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '📁', weight: 1, officialId: '15080050199', officialGroup: 'dfg_104' },
  df_15080050200: { id: 'df_15080050200', name: "赛伊德模式门票-巴克什机密", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '📁', weight: 1, officialId: '15080050200', officialGroup: 'dfg_104' },
  df_15080050202: { id: 'df_15080050202', name: "航天码头boss门票-金色", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '📁', weight: 1, officialId: '15080050202', officialGroup: 'dfg_104' },
  df_15080050203: { id: 'df_15080050203', name: "损坏的A级工卡", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '📁', weight: 0.05, officialId: '15080050203', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050204: { id: 'df_15080050204', name: "空白存储", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 5000, icon: '💾', weight: 0.1, officialId: '15080050204', officialGroup: 'dfg_101' },
  df_15080050205: { id: 'df_15080050205', name: "数据密钥", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 5000, icon: '💾', weight: 0.1, officialId: '15080050205', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050206: { id: 'df_15080050206', name: "磁化的A级工卡", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '📁', weight: 0.05, officialId: '15080050206', officialGroup: 'dfg_104' },
  df_15080050207: { id: 'df_15080050207', name: "断裂的A级工卡", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '📁', weight: 0.05, officialId: '15080050207', officialGroup: 'dfg_104' },
  df_15080050208: { id: 'df_15080050208', name: "磨损的B级工卡", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '📁', weight: 0.05, officialId: '15080050208', officialGroup: 'dfg_104' },
  df_15080050209: { id: 'df_15080050209', name: "划伤的B级工卡", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '📁', weight: 0.05, officialId: '15080050209', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050210: { id: 'df_15080050210', name: "航天冷却剂", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 928, icon: '🔋', weight: 4.5, officialId: '15080050210', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050211: { id: 'df_15080050211', name: "飞秒激光器", kind: 'valuable', rarity: 'red', w: 1, h: 3, baseValue: 5957, icon: '🔧', weight: 2, officialId: '15080050211', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050212: { id: 'df_15080050212', name: "检眼镜", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1183, icon: '🩹', weight: 0.8, officialId: '15080050212', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050213: { id: 'df_15080050213', name: "工牌", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 84, icon: '📁', weight: 0.2, officialId: '15080050213', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050214: { id: 'df_15080050214', name: "急救喷雾", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 205, icon: '🩹', weight: 0.45, officialId: '15080050214', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050216: { id: 'df_15080050216', name: "加密手记", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 268, icon: '📁', weight: 0.6, officialId: '15080050216', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050217: { id: 'df_15080050217', name: "无线耳机", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 98, icon: '💾', weight: 0.25, officialId: '15080050217', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050218: { id: 'df_15080050218', name: "鼻通", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 302, icon: '🏺', weight: 0.2, officialId: '15080050218', officialGroup: 'dfg_105' },
  df_15080050219: { id: 'df_15080050219', name: "爽身粉", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 299, icon: '🏺', weight: 0.8, officialId: '15080050219', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050220: { id: 'df_15080050220', name: "测距仪", kind: 'valuable', rarity: 'red', w: 4, h: 2, baseValue: 15000, icon: '🔧', weight: 3.5, officialId: '15080050220', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050221: { id: 'df_15080050221', name: "反应堆冷却核心", kind: 'valuable', rarity: 'red', w: 3, h: 3, baseValue: 22847, icon: '🔋', weight: 6, officialId: '15080050221', officialGroup: 'dfg_108' },
  df_15080050222: { id: 'df_15080050222', name: "浓缩铀样本", kind: 'valuable', rarity: 'red', w: 4, h: 2, baseValue: 15586, icon: '🔋', weight: 7.5, officialId: '15080050222', officialGroup: 'dfg_108' },
  df_15080050223: { id: 'df_15080050223', name: "微型燃料棒", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 1109, icon: '🔋', weight: 3.5, officialId: '15080050223', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15080050225: { id: 'df_15080050225', name: "便携式同位素识别仪", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1838, icon: '🔧', weight: 2, officialId: '15080050225', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050226: { id: 'df_15080050226', name: "军事通行证", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 750, icon: '📁', weight: 0.4, officialId: '15080050226', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050227: { id: 'df_15080050227', name: "输液加温器", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 295, icon: '🩹', weight: 0.8, officialId: '15080050227', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15080050228: { id: 'df_15080050228', name: "便携燃料瓶", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 99, icon: '🔋', weight: 2.5, officialId: '15080050228', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050229: { id: 'df_15080050229', name: "部队饰章", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 89, icon: '📁', weight: 0.3, officialId: '15080050229', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050230: { id: 'df_15080050230', name: "纵横棋子车", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 4500, icon: '🏺', weight: 0.5, officialId: '15080050230', officialGroup: 'dfg_107' },
  df_15080050231: { id: 'df_15080050231', name: "纵横棋钟", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 12000, icon: '🏺', weight: 2, officialId: '15080050231', officialGroup: 'dfg_107' },
  df_15080050232: { id: 'df_15080050232', name: "纵横棋子马", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 2500, icon: '🏺', weight: 0.5, officialId: '15080050232', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15080050233: { id: 'df_15080050233', name: "哈夫克特工信息装备", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 1283, icon: '💾', weight: 0.3, officialId: '15080050233', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15080050235: { id: 'df_15080050235', name: "阿尤尔咖啡机", kind: 'valuable', rarity: 'red', w: 4, h: 2, baseValue: 13123, icon: '🏺', weight: 6.5, officialId: '15080050235', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15080050238: { id: 'df_15080050238', name: "医用吻合器", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 72, icon: '🩹', weight: 0.3, officialId: '15080050238', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050239: { id: 'df_15080050239', name: "无名氏诗集", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 93, icon: '📁', weight: 0.4, officialId: '15080050239', officialGroup: 'dfg_104' },
  df_15080050240: { id: 'df_15080050240', name: "证物光碟", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 73, icon: '📁', weight: 0.2, officialId: '15080050240', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15080050241: { id: 'df_15080050241', name: "鱼月徽权杖首", kind: 'valuable', rarity: 'red', w: 3, h: 2, baseValue: 12846, icon: '🏺', weight: 2.5, officialId: '15080050241', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15090010020: { id: 'df_15090010020', name: "曼德尔砖设计图纸", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 713, icon: '📁', weight: 0.14, officialId: '15090010020', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15090010022: { id: 'df_15090010022', name: "破损军用电台", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 900, icon: '💾', weight: 3.07, officialId: '15090010022', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15090010040: { id: 'df_15090010040', name: "机械工蜂模型", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 552, icon: '🏺', weight: 2.62, officialId: '15090010040', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15090010041: { id: 'df_15090010041', name: "医疗无人机", kind: 'valuable', rarity: 'blue', w: 2, h: 2, baseValue: 260, icon: '🩹', weight: 1.09, officialId: '15090010041', officialGroup: 'dfg_102' },
  df_15090010077: { id: 'df_15090010077', name: "样本试管", kind: 'valuable', rarity: 'white', w: 2, h: 1, baseValue: 18, icon: '🩹', weight: 0.02, officialId: '15090010077', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15080050063: { id: 'df_15080050063', name: "哈夫克机密档案", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 204, icon: '📁', weight: 0.09, officialId: '15080050063', officialGroup: 'dfg_104' },
  df_15080050064: { id: 'df_15080050064', name: "阿萨拉卫队机密档案", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 286, icon: '📁', weight: 0.09, officialId: '15080050064', officialGroup: 'dfg_104' },
  df_15200000001: { id: 'df_15200000001', name: "商业机密", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 10, icon: '📁', weight: 0.5, officialId: '15200000001', officialGroup: 'dfg_104' },
  df_15200000019: { id: 'df_15200000019', name: "“风暴使者”的指挥手令", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 15, icon: '📁', weight: 0.1, officialId: '15200000019', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000027: { id: 'df_15200000027', name: "银鹭八宝粥", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.36, officialId: '15200000027', officialGroup: 'dfg_105' },
  df_15200000028: { id: 'df_15200000028', name: "银鹭八宝粥（一等奖）", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.36, officialId: '15200000028', officialGroup: 'dfg_105' },
  df_15200000029: { id: 'df_15200000029', name: "银鹭八宝粥（特等奖）", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 500, icon: '🏺', weight: 0.36, officialId: '15200000029', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000031: { id: 'df_15200000031', name: "脑机relink医疗报告", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1431, icon: '📁', weight: 0.36, officialId: '15200000031', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000032: { id: 'df_15200000032', name: "心灵感应.魔方", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 667, icon: '🏺', weight: 0.6, officialId: '15200000032', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000033: { id: 'df_15200000033', name: "圣诞娃娃", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 6800, icon: '🏺', weight: 1, officialId: '15200000033', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000034: { id: 'df_15200000034', name: "乙巳玄武", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 10000, icon: '🏺', weight: 1, officialId: '15200000034', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000035: { id: 'df_15200000035', name: "新春集换卡包", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 20, icon: '📁', weight: 0.05, officialId: '15200000035', officialGroup: 'dfg_104' },
  df_15200000036: { id: 'df_15200000036', name: "哈夫克雇员证件", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 20, icon: '📁', weight: 0.05, officialId: '15200000036', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000037: { id: 'df_15200000037', name: "阿萨拉部族信物", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 1, officialId: '15200000037', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15200000038: { id: 'df_15200000038', name: "激光测绘仪", kind: 'valuable', rarity: 'cyan', w: 3, h: 1, baseValue: 100, icon: '💾', weight: 1, officialId: '15200000038', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000039: { id: 'df_15200000039', name: "袖珍密码盒", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '📁', weight: 0.05, officialId: '15200000039', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000040: { id: 'df_15200000040', name: "军用水壶", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 1, officialId: '15200000040', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000041: { id: 'df_15200000041', name: "蛟龙机密档案", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 20, icon: '📁', weight: 0.1, officialId: '15200000041', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15200000042: { id: 'df_15200000042', name: "声呐定位器", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 20, icon: '💾', weight: 0.05, officialId: '15200000042', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000043: { id: 'df_15200000043', name: "新春红包", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 66, icon: '🏺', weight: 0.05, officialId: '15200000043', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15200000044: { id: 'df_15200000044', name: "OLIGHT WARRIOR 3S联名手电", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 267, icon: '🔧', weight: 1, officialId: '15200000044', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15200000045: { id: 'df_15200000045', name: "\"密涅瓦\"U盘", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2200, icon: '💾', weight: 0.6, officialId: '15200000045', officialGroup: 'dfg_101' },
  df_15200000046: { id: 'df_15200000046', name: "外星人笔电", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 6800, icon: '💾', weight: 1.3, officialId: '15200000046', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15200000047: { id: 'df_15200000047', name: "脑机新特药", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 15, icon: '🩹', weight: 0.6, officialId: '15200000047', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000048: { id: 'df_15200000048', name: "麦小蛋", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000048', officialGroup: 'dfg_107' },
  df_15200000049: { id: 'df_15200000049', name: "炫彩麦小蛋", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000049', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15200000050: { id: 'df_15200000050', name: "夜视仪电池", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 20, icon: '🔋', weight: 0.6, officialId: '15200000050', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000051: { id: 'df_15200000051', name: "阿萨拉勋章", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.1, officialId: '15200000051', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000052: { id: 'df_15200000052', name: "邀请函", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 20, icon: '📁', weight: 0.1, officialId: '15200000052', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000053: { id: 'df_15200000053', name: "好吃的粽子", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 200, icon: '🏺', weight: 0.3, officialId: '15200000053', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000054: { id: 'df_15200000054', name: "会员卡", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 80, icon: '📁', weight: 0.1, officialId: '15200000054', officialGroup: 'dfg_104' },
  df_15200000055: { id: 'df_15200000055', name: "军事行动照片", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 80, icon: '📁', weight: 0.1, officialId: '15200000055', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000056: { id: 'df_15200000056', name: "小猫饰品", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.5, officialId: '15200000056', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000057: { id: 'df_15200000057', name: "丸辣", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.3, officialId: '15200000057', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000059: { id: 'df_15200000059', name: "吴彦祖之镜", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2000, icon: '🏺', weight: 0.6, officialId: '15200000059', officialGroup: 'dfg_107' },
  df_15200000060: { id: 'df_15200000060', name: "鎏金卡牌", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2081, icon: '🏺', weight: 0.1, officialId: '15200000060', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_102 · 医疗道具 ——
  df_15200000061: { id: 'df_15200000061', name: "鳄鱼血样", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 80, icon: '🩹', weight: 0.1, officialId: '15200000061', officialGroup: 'dfg_102' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000062: { id: 'df_15200000062', name: "粗糙的粽子", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.3, officialId: '15200000062', officialGroup: 'dfg_105' },
  df_15200000063: { id: 'df_15200000063', name: "普通的粽子", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 80, icon: '🏺', weight: 0.3, officialId: '15200000063', officialGroup: 'dfg_105' },
  df_15200000064: { id: 'df_15200000064', name: "精品的粽子", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 500, icon: '🏺', weight: 0.3, officialId: '15200000064', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000065: { id: 'df_15200000065', name: "零号大坝藏宝图1号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000065', officialGroup: 'dfg_104' },
  df_15200000066: { id: 'df_15200000066', name: "长弓溪谷藏宝图1号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000066', officialGroup: 'dfg_104' },
  df_15200000067: { id: 'df_15200000067', name: "巴克什藏宝图1号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000067', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000068: { id: 'df_15200000068', name: "克小圈", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000068', officialGroup: 'dfg_107' },
  df_15200000069: { id: 'df_15200000069', name: "炫彩克小圈", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.66, officialId: '15200000069', officialGroup: 'dfg_107' },
  df_15200000070: { id: 'df_15200000070', name: "手办-阿米娅", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000070', officialGroup: 'dfg_107' },
  df_15200000071: { id: 'df_15200000071', name: "手办-阿米娅（近卫）", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000071', officialGroup: 'dfg_107' },
  df_15200000072: { id: 'df_15200000072', name: "至纯源石", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2288, icon: '🏺', weight: 1, officialId: '15200000072', officialGroup: 'dfg_107' },
  df_15200000073: { id: 'df_15200000073', name: "源石碎片", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 5, icon: '🏺', weight: 0.2, officialId: '15200000073', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000074: { id: 'df_15200000074', name: "情报凭证", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 185, icon: '📁', weight: 0.2, officialId: '15200000074', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000075: { id: 'df_15200000075', name: "明日方舟OST1", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.2, officialId: '15200000075', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000079: { id: 'df_15200000079', name: "零号大坝藏宝图2号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000079', officialGroup: 'dfg_104' },
  df_15200000080: { id: 'df_15200000080', name: "零号大坝藏宝图3号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000080', officialGroup: 'dfg_104' },
  df_15200000081: { id: 'df_15200000081', name: "零号大坝藏宝图4号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000081', officialGroup: 'dfg_104' },
  df_15200000082: { id: 'df_15200000082', name: "零号大坝藏宝图5号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000082', officialGroup: 'dfg_104' },
  df_15200000083: { id: 'df_15200000083', name: "零号大坝藏宝图6号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000083', officialGroup: 'dfg_104' },
  df_15200000084: { id: 'df_15200000084', name: "零号大坝藏宝图7号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000084', officialGroup: 'dfg_104' },
  df_15200000085: { id: 'df_15200000085', name: "零号大坝藏宝图8号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000085', officialGroup: 'dfg_104' },
  df_15200000086: { id: 'df_15200000086', name: "零号大坝藏宝图9号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000086', officialGroup: 'dfg_104' },
  df_15200000087: { id: 'df_15200000087', name: "零号大坝藏宝图10号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000087', officialGroup: 'dfg_104' },
  df_15200000088: { id: 'df_15200000088', name: "零号大坝藏宝图11号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000088', officialGroup: 'dfg_104' },
  df_15200000089: { id: 'df_15200000089', name: "零号大坝藏宝图12号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000089', officialGroup: 'dfg_104' },
  df_15200000090: { id: 'df_15200000090', name: "长弓溪谷藏宝图2号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000090', officialGroup: 'dfg_104' },
  df_15200000091: { id: 'df_15200000091', name: "长弓溪谷藏宝图3号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000091', officialGroup: 'dfg_104' },
  df_15200000092: { id: 'df_15200000092', name: "长弓溪谷藏宝图4号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000092', officialGroup: 'dfg_104' },
  df_15200000093: { id: 'df_15200000093', name: "长弓溪谷藏宝图5号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000093', officialGroup: 'dfg_104' },
  df_15200000094: { id: 'df_15200000094', name: "长弓溪谷藏宝图6号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000094', officialGroup: 'dfg_104' },
  df_15200000095: { id: 'df_15200000095', name: "长弓溪谷藏宝图7号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000095', officialGroup: 'dfg_104' },
  df_15200000096: { id: 'df_15200000096', name: "长弓溪谷藏宝图8号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000096', officialGroup: 'dfg_104' },
  df_15200000097: { id: 'df_15200000097', name: "长弓溪谷藏宝图9号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000097', officialGroup: 'dfg_104' },
  df_15200000098: { id: 'df_15200000098', name: "长弓溪谷藏宝图10号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000098', officialGroup: 'dfg_104' },
  df_15200000099: { id: 'df_15200000099', name: "长弓溪谷藏宝图11号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000099', officialGroup: 'dfg_104' },
  df_15200000100: { id: 'df_15200000100', name: "长弓溪谷藏宝图12号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000100', officialGroup: 'dfg_104' },
  df_15200000101: { id: 'df_15200000101', name: "巴克什藏宝图2号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000101', officialGroup: 'dfg_104' },
  df_15200000102: { id: 'df_15200000102', name: "巴克什藏宝图3号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000102', officialGroup: 'dfg_104' },
  df_15200000103: { id: 'df_15200000103', name: "巴克什藏宝图4号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000103', officialGroup: 'dfg_104' },
  df_15200000104: { id: 'df_15200000104', name: "巴克什藏宝图5号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000104', officialGroup: 'dfg_104' },
  df_15200000105: { id: 'df_15200000105', name: "巴克什藏宝图6号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000105', officialGroup: 'dfg_104' },
  df_15200000106: { id: 'df_15200000106', name: "巴克什藏宝图7号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000106', officialGroup: 'dfg_104' },
  df_15200000107: { id: 'df_15200000107', name: "巴克什藏宝图8号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000107', officialGroup: 'dfg_104' },
  df_15200000108: { id: 'df_15200000108', name: "巴克什藏宝图9号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000108', officialGroup: 'dfg_104' },
  df_15200000109: { id: 'df_15200000109', name: "巴克什藏宝图10号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000109', officialGroup: 'dfg_104' },
  df_15200000110: { id: 'df_15200000110', name: "巴克什藏宝图11号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000110', officialGroup: 'dfg_104' },
  df_15200000111: { id: 'df_15200000111', name: "巴克什藏宝图12号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000111', officialGroup: 'dfg_104' },
  df_15200000112: { id: 'df_15200000112', name: "藏宝图线索", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 100, icon: '📁', weight: 0.2, officialId: '15200000112', officialGroup: 'dfg_104' },
  df_15200000113: { id: 'df_15200000113', name: "周年庆邀请函", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 88, icon: '📁', weight: 0.2, officialId: '15200000113', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000114: { id: 'df_15200000114', name: "兰小登", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000114', officialGroup: 'dfg_107' },
  df_15200000115: { id: 'df_15200000115', name: "炫彩兰小登", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000115', officialGroup: 'dfg_107' },
  df_15200000118: { id: 'df_15200000118', name: "格赫罗斯的审判", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 675, icon: '🏺', weight: 0.15, officialId: '15200000118', officialGroup: 'dfg_107' },
  df_15200000119: { id: 'df_15200000119', name: "三角洲圣经手机【周年庆】", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '🏺', weight: 0.25, officialId: '15200000119', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000120: { id: 'df_15200000120', name: "SHE3-藏宝图-航天", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 88, icon: '📁', weight: 0.1, officialId: '15200000120', officialGroup: 'dfg_104' },
  df_15200000121: { id: 'df_15200000121', name: "SHE3-藏宝图-巴克什", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 88, icon: '📁', weight: 0.1, officialId: '15200000121', officialGroup: 'dfg_104' },
  df_15200000122: { id: 'df_15200000122', name: "SHE3-藏宝图-大坝", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 88, icon: '📁', weight: 0.1, officialId: '15200000122', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000123: { id: 'df_15200000123', name: "黄金鸟窝", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 20259, icon: '🏺', weight: 1.5, officialId: '15200000123', officialGroup: 'dfg_107' },
  df_15200000124: { id: 'df_15200000124', name: "黄金鸟蛋", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2888, icon: '🏺', weight: 0.2, officialId: '15200000124', officialGroup: 'dfg_107' },
  df_15200000125: { id: 'df_15200000125', name: "炫彩鸟蛋", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 5888, icon: '🏺', weight: 0.2, officialId: '15200000125', officialGroup: 'dfg_107' },
  df_15200000126: { id: 'df_15200000126', name: "奇怪的蛋", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 288, icon: '🏺', weight: 0.2, officialId: '15200000126', officialGroup: 'dfg_107' },
  df_15200000130: { id: 'df_15200000130', name: "拉小宅", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000130', officialGroup: 'dfg_107' },
  df_15200000131: { id: 'df_15200000131', name: "炫彩拉小宅", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000131', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000134: { id: 'df_15200000134', name: "好粥道-莲子玉米粥", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.25, officialId: '15200000134', officialGroup: 'dfg_105' },
  df_15200000135: { id: 'df_15200000135', name: "阿萨拉平安果", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 128, icon: '🏺', weight: 0.6, officialId: '15200000135', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15200000136: { id: 'df_15200000136', name: "脑机2.0-荷鲁斯之眼护符", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 288, icon: '💾', weight: 1.25, officialId: '15200000136', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000137: { id: 'df_15200000137', name: "烽火世界杯纪念奖杯", kind: 'valuable', rarity: 'red', w: 3, h: 1, baseValue: 20259, icon: '🏺', weight: 1.5, officialId: '15200000137', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000138: { id: 'df_15200000138', name: "好粥道-薏米红豆粥", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.25, officialId: '15200000138', officialGroup: 'dfg_105' },
  df_15200000139: { id: 'df_15200000139', name: "好粥道-紫薯紫米粥", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.25, officialId: '15200000139', officialGroup: 'dfg_105' },
  df_15200000140: { id: 'df_15200000140', name: "好粥道-黑米粥", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 200, icon: '🏺', weight: 0.25, officialId: '15200000140', officialGroup: 'dfg_105' },
  df_15200000141: { id: 'df_15200000141', name: "好粥道-椰奶燕麦粥", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.25, officialId: '15200000141', officialGroup: 'dfg_105' },
  df_15200000142: { id: 'df_15200000142', name: "阿萨拉优品平安果", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 388, icon: '🏺', weight: 0.6, officialId: '15200000142', officialGroup: 'dfg_105' },
  df_15200000143: { id: 'df_15200000143', name: "阿萨拉极品平安果", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1288, icon: '🏺', weight: 0.6, officialId: '15200000143', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000144: { id: 'df_15200000144', name: "渡鸦的录音数据-1", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1987, icon: '📁', weight: 0.15, officialId: '15200000144', officialGroup: 'dfg_104' },
  df_15200000145: { id: 'df_15200000145', name: "渡鸦的录音数据-2", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 678, icon: '📁', weight: 0.15, officialId: '15200000145', officialGroup: 'dfg_104' },
  df_15200000146: { id: 'df_15200000146', name: "渡鸦的录音数据-3", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 678, icon: '📁', weight: 0.15, officialId: '15200000146', officialGroup: 'dfg_104' },
  df_15200000147: { id: 'df_15200000147', name: "渡鸦的录音数据-4", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 678, icon: '📁', weight: 0.15, officialId: '15200000147', officialGroup: 'dfg_104' },
  df_15200000148: { id: 'df_15200000148', name: "渡鸦的录音数据-5", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 234, icon: '📁', weight: 0.15, officialId: '15200000148', officialGroup: 'dfg_104' },
  df_15200000149: { id: 'df_15200000149', name: "渡鸦的录音数据-6", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 234, icon: '📁', weight: 0.15, officialId: '15200000149', officialGroup: 'dfg_104' },
  df_15200000150: { id: 'df_15200000150', name: "渡鸦的密信", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 250, icon: '📁', weight: 0.1, officialId: '15200000150', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000151: { id: 'df_15200000151', name: "幸运圆蛋", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '🏺', weight: 0.1, officialId: '15200000151', officialGroup: 'dfg_107' },
  df_15200000152: { id: 'df_15200000152', name: "马上起飞", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 10000, icon: '🏺', weight: 1.68, officialId: '15200000152', officialGroup: 'dfg_107' },
  df_15200000153: { id: 'df_15200000153', name: "马上转运", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 10000, icon: '🏺', weight: 1.68, officialId: '15200000153', officialGroup: 'dfg_107' },
  df_15200000154: { id: 'df_15200000154', name: "金玫瑰", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 666, icon: '🏺', weight: 0.5, officialId: '15200000154', officialGroup: 'dfg_107' },
  df_15200000155: { id: 'df_15200000155', name: "威小龙", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000155', officialGroup: 'dfg_107' },
  df_15200000156: { id: 'df_15200000156', name: "炫彩威小龙", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000156', officialGroup: 'dfg_107' },
  df_15200000157: { id: 'df_15200000157', name: "赤小枭", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000157', officialGroup: 'dfg_107' },
  df_15200000158: { id: 'df_15200000158', name: "手弩赤小枭", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000158', officialGroup: 'dfg_107' },
  df_15200000159: { id: 'df_15200000159', name: "六套福袋", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 5888, icon: '🏺', weight: 0.5, officialId: '15200000159', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000160: { id: 'df_15200000160', name: "新春红包2.0", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '📁', weight: 0.1, officialId: '15200000160', officialGroup: 'dfg_104' },
  df_15200000161: { id: 'df_15200000161', name: "新春红包2.0（一叠）", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '📁', weight: 0.1, officialId: '15200000161', officialGroup: 'dfg_104' },
  df_15200000162: { id: 'df_15200000162', name: "好运爆红烟花", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '📁', weight: 0.1, officialId: '15200000162', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000163: { id: 'df_15200000163', name: "小河鲤", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 188, icon: '🏺', weight: 0.83, officialId: '15200000163', officialGroup: 'dfg_105' },
  df_15200000164: { id: 'df_15200000164', name: "大肥鲤", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 388, icon: '🏺', weight: 1.33, officialId: '15200000164', officialGroup: 'dfg_105' },
  df_15200000165: { id: 'df_15200000165', name: "黄金鲤", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 888, icon: '🏺', weight: 1.83, officialId: '15200000165', officialGroup: 'dfg_105' },
  df_15200000166: { id: 'df_15200000166', name: "红鲤王", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 2888, icon: '🏺', weight: 3.33, officialId: '15200000166', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000167: { id: 'df_15200000167', name: "乌小蛋", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000167', officialGroup: 'dfg_107' },
  df_15200000168: { id: 'df_15200000168', name: "炫彩乌小蛋", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000168', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000174: { id: 'df_15200000174', name: "待破译的大红砖", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 6666, icon: '📁', weight: 1, officialId: '15200000174', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000175: { id: 'df_15200000175', name: "阿萨拉制式勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4300, icon: '🏺', weight: 2, officialId: '15200000175', officialGroup: 'dfg_107' },
  df_15200000176: { id: 'df_15200000176', name: "哈夫克制式勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4300, icon: '🏺', weight: 2, officialId: '15200000176', officialGroup: 'dfg_107' },
  df_15200000177: { id: 'df_15200000177', name: "G.T.I.制式勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 4300, icon: '🏺', weight: 2, officialId: '15200000177', officialGroup: 'dfg_107' },
  df_15200000178: { id: 'df_15200000178', name: "阿萨拉赤忱勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5140, icon: '🏺', weight: 2, officialId: '15200000178', officialGroup: 'dfg_107' },
  df_15200000179: { id: 'df_15200000179', name: "哈夫克精英勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5140, icon: '🏺', weight: 2, officialId: '15200000179', officialGroup: 'dfg_107' },
  df_15200000180: { id: 'df_15200000180', name: "G.T.I.勇气勋章", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5140, icon: '🏺', weight: 2, officialId: '15200000180', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000181: { id: 'df_15200000181', name: "安保物资凭证", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 88, icon: '🏺', weight: 0.1, officialId: '15200000181', officialGroup: 'dfg_105' },
  df_15200000183: { id: 'df_15200000183', name: "足球", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 88, icon: '🏺', weight: 0.45, officialId: '15200000183', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_109 · Dfg 109 ——
  df_15200000184: { id: 'df_15200000184', name: "黄金足球", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1588, icon: '⚽', weight: 0.45, officialId: '15200000184', officialGroup: 'dfg_109' },
  df_15200000185: { id: 'df_15200000185', name: "炫彩足球", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5888, icon: '⚽', weight: 0.45, officialId: '15200000185', officialGroup: 'dfg_109' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000186: { id: 'df_15200000186', name: "羊名立万", kind: 'valuable', rarity: 'red', w: 2, h: 2, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000186', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000187: { id: 'df_15200000187', name: "红辣椒", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 2000, icon: '🏺', weight: 0.1, officialId: '15200000187', officialGroup: 'dfg_105' },
  df_15200000188: { id: 'df_15200000188', name: "金色花生", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 600, icon: '🏺', weight: 0.66, officialId: '15200000188', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000190: { id: 'df_15200000190', name: "AZ3密钥", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 50, icon: '📁', weight: 0.1, officialId: '15200000190', officialGroup: 'dfg_104' },
  df_15200000279: { id: 'df_15200000279', name: "实验型AZ3密钥", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 200, icon: '📁', weight: 0.1, officialId: '15200000279', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000194: { id: 'df_15200000194', name: "粽子", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 80, icon: '🏺', weight: 0.3, officialId: '15200000194', officialGroup: 'dfg_105' },
  df_15200000195: { id: 'df_15200000195', name: "“永远的下半场”", kind: 'valuable', rarity: 'cyan', w: 2, h: 2, baseValue: 1588, icon: '🏺', weight: 0.45, officialId: '15200000195', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000196: { id: 'df_15200000196', name: "露小娜", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000196', officialGroup: 'dfg_107' },
  df_15200000197: { id: 'df_15200000197', name: "炫彩露小娜", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000197', officialGroup: 'dfg_107' },
  df_15200000212: { id: 'df_15200000212', name: "Deal with it", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 200, icon: '🏺', weight: 0.08, officialId: '15200000212', officialGroup: 'dfg_107' },
  df_15200000213: { id: 'df_15200000213', name: "Absolute Cinema", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 3888, icon: '🏺', weight: 1.2, officialId: '15200000213', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000217: { id: 'df_15200000217', name: "跑酷大师的留言纸条", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 10, icon: '📁', weight: 0.1, officialId: '15200000217', officialGroup: 'dfg_104' },
  df_15200000254: { id: 'df_15200000254', name: "AZ3藏宝图1号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000254', officialGroup: 'dfg_104' },
  df_15200000255: { id: 'df_15200000255', name: "AZ3藏宝图2号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000255', officialGroup: 'dfg_104' },
  df_15200000256: { id: 'df_15200000256', name: "AZ3藏宝图3号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000256', officialGroup: 'dfg_104' },
  df_15200000257: { id: 'df_15200000257', name: "AZ3藏宝图4号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000257', officialGroup: 'dfg_104' },
  df_15200000258: { id: 'df_15200000258', name: "AZ3藏宝图5号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000258', officialGroup: 'dfg_104' },
  df_15200000259: { id: 'df_15200000259', name: "AZ3藏宝图6号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000259', officialGroup: 'dfg_104' },
  df_15200000260: { id: 'df_15200000260', name: "AZ3藏宝图7号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000260', officialGroup: 'dfg_104' },
  df_15200000261: { id: 'df_15200000261', name: "AZ3藏宝图9号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000261', officialGroup: 'dfg_104' },
  df_15200000262: { id: 'df_15200000262', name: "AZ3藏宝图10号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000262', officialGroup: 'dfg_104' },
  df_15200000263: { id: 'df_15200000263', name: "AZ3藏宝图11号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000263', officialGroup: 'dfg_104' },
  df_15200000264: { id: 'df_15200000264', name: "AZ3藏宝图8号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000264', officialGroup: 'dfg_104' },
  df_15200000266: { id: 'df_15200000266', name: "航天基地藏宝图1号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000266', officialGroup: 'dfg_104' },
  df_15200000267: { id: 'df_15200000267', name: "航天基地藏宝图2号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000267', officialGroup: 'dfg_104' },
  df_15200000268: { id: 'df_15200000268', name: "航天基地藏宝图3号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000268', officialGroup: 'dfg_104' },
  df_15200000269: { id: 'df_15200000269', name: "航天基地藏宝图4号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000269', officialGroup: 'dfg_104' },
  df_15200000270: { id: 'df_15200000270', name: "航天基地藏宝图5号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000270', officialGroup: 'dfg_104' },
  df_15200000271: { id: 'df_15200000271', name: "航天基地藏宝图6号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000271', officialGroup: 'dfg_104' },
  df_15200000272: { id: 'df_15200000272', name: "航天基地藏宝图7号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000272', officialGroup: 'dfg_104' },
  df_15200000273: { id: 'df_15200000273', name: "航天基地藏宝图9号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000273', officialGroup: 'dfg_104' },
  df_15200000274: { id: 'df_15200000274', name: "航天基地藏宝图10号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000274', officialGroup: 'dfg_104' },
  df_15200000275: { id: 'df_15200000275', name: "航天基地藏宝图11号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000275', officialGroup: 'dfg_104' },
  df_15200000276: { id: 'df_15200000276', name: "航天基地藏宝图8号", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 188, icon: '📁', weight: 0.1, officialId: '15200000276', officialGroup: 'dfg_104' },
  df_15200000278: { id: 'df_15200000278', name: "破损的脑机", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 58, icon: '📁', weight: 0.1, officialId: '15200000278', officialGroup: 'dfg_104' },
  df_15200000280: { id: 'df_15200000280', name: "《盛世天下》游戏光碟", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 666, icon: '📁', weight: 0.2, officialId: '15200000280', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000281: { id: 'df_15200000281', name: "花小蝶", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000281', officialGroup: 'dfg_107' },
  df_15200000282: { id: 'df_15200000282', name: "炫彩花小蝶", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 5888, icon: '🏺', weight: 0.6, officialId: '15200000282', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000287: { id: 'df_15200000287', name: "安全总监工卡", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 2500, icon: '📁', weight: 0.1, officialId: '15200000287', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000288: { id: 'df_15200000288', name: "阿萨拉兔俑", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 2888, icon: '🏺', weight: 0.6, officialId: '15200000288', officialGroup: 'dfg_107' },
  df_15200000291: { id: 'df_15200000291', name: "纵横棋子兵", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 1000, icon: '🏺', weight: 0.6, officialId: '15200000291', officialGroup: 'dfg_107' },
  df_15200000292: { id: 'df_15200000292', name: "纵横棋子象", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 6888, icon: '🏺', weight: 0.6, officialId: '15200000292', officialGroup: 'dfg_107' },
  df_15200000293: { id: 'df_15200000293', name: "纵横棋子王", kind: 'valuable', rarity: 'red', w: 3, h: 1, baseValue: 6888, icon: '🏺', weight: 0.6, officialId: '15200000293', officialGroup: 'dfg_107' },
  df_15200000295: { id: 'df_15200000295', name: "一根树枝", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0.01, officialId: '15200000295', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_109 · Dfg 109 ——
  df_15200000296: { id: 'df_15200000296', name: "可乐火箭", kind: 'valuable', rarity: 'red', w: 3, h: 1, baseValue: 8888, icon: '⚽', weight: 0.6, officialId: '15200000296', officialGroup: 'dfg_109' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000297: { id: 'df_15200000297', name: "浮木", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 88, icon: '🏺', weight: 0.6, officialId: '15200000297', officialGroup: 'dfg_107' },
  df_15200000298: { id: 'df_15200000298', name: "木雕", kind: 'valuable', rarity: 'green', w: 2, h: 1, baseValue: 88, icon: '🏺', weight: 1.4, officialId: '15200000298', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15200000299: { id: 'df_15200000299', name: "特饮材料包", kind: 'valuable', rarity: 'purple', w: 2, h: 2, baseValue: 88, icon: '🏺', weight: 1.4, officialId: '15200000299', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15200000300: { id: 'df_15200000300', name: "阿萨拉的情报线索", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 100, icon: '📁', weight: 0.1, officialId: '15200000300', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_103 · 工具材料 ——
  df_15200000301: { id: 'df_15200000301', name: "摩托艇钥匙", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 15, icon: '🔧', weight: 0.1, officialId: '15200000301', officialGroup: 'dfg_103' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15200000302: { id: 'df_15200000302', name: "民用版暗星燃料单元", kind: 'valuable', rarity: 'cyan', w: 4, h: 3, baseValue: 1500, icon: '🔋', weight: 24, officialId: '15200000302', officialGroup: 'dfg_108' },
  df_15200000304: { id: 'df_15200000304', name: "“阿萨拉一号”", kind: 'valuable', rarity: 'red', w: 3, h: 1, baseValue: 15000, icon: '🔋', weight: 2, officialId: '15200000304', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15209500001: { id: 'df_15209500001', name: "阿萨拉牌-黑桃A", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 250, icon: '🏺', weight: 0.01, officialId: '15209500001', officialGroup: 'dfg_107' },
  df_15209500002: { id: 'df_15209500002', name: "阿萨拉牌-红桃A", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 250, icon: '🏺', weight: 0.01, officialId: '15209500002', officialGroup: 'dfg_107' },
  df_15209500003: { id: 'df_15209500003', name: "阿萨拉牌-梅花A", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 250, icon: '🏺', weight: 0.01, officialId: '15209500003', officialGroup: 'dfg_107' },
  df_15209500004: { id: 'df_15209500004', name: "阿萨拉牌-方片A", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 250, icon: '🏺', weight: 0.01, officialId: '15209500004', officialGroup: 'dfg_107' },
  df_15209500005: { id: 'df_15209500005', name: "阿萨拉牌-黑桃2", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500005', officialGroup: 'dfg_107' },
  df_15209500006: { id: 'df_15209500006', name: "阿萨拉牌-红桃2", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500006', officialGroup: 'dfg_107' },
  df_15209500007: { id: 'df_15209500007', name: "阿萨拉牌-梅花2", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500007', officialGroup: 'dfg_107' },
  df_15209500008: { id: 'df_15209500008', name: "阿萨拉牌-方片2", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500008', officialGroup: 'dfg_107' },
  df_15209500009: { id: 'df_15209500009', name: "阿萨拉牌-黑桃3", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500009', officialGroup: 'dfg_107' },
  df_15209500010: { id: 'df_15209500010', name: "阿萨拉牌-红桃3", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500010', officialGroup: 'dfg_107' },
  df_15209500011: { id: 'df_15209500011', name: "阿萨拉牌-梅花3", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500011', officialGroup: 'dfg_107' },
  df_15209500012: { id: 'df_15209500012', name: "阿萨拉牌-方片3", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 10, icon: '🏺', weight: 0.01, officialId: '15209500012', officialGroup: 'dfg_107' },
  df_15209500013: { id: 'df_15209500013', name: "阿萨拉牌-黑桃4", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500013', officialGroup: 'dfg_107' },
  df_15209500014: { id: 'df_15209500014', name: "阿萨拉牌-红桃4", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500014', officialGroup: 'dfg_107' },
  df_15209500015: { id: 'df_15209500015', name: "阿萨拉牌-梅花4", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500015', officialGroup: 'dfg_107' },
  df_15209500016: { id: 'df_15209500016', name: "阿萨拉牌-方片4", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500016', officialGroup: 'dfg_107' },
  df_15209500017: { id: 'df_15209500017', name: "阿萨拉牌-黑桃5", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500017', officialGroup: 'dfg_107' },
  df_15209500018: { id: 'df_15209500018', name: "阿萨拉牌-红桃5", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500018', officialGroup: 'dfg_107' },
  df_15209500019: { id: 'df_15209500019', name: "阿萨拉牌-梅花5", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500019', officialGroup: 'dfg_107' },
  df_15209500020: { id: 'df_15209500020', name: "阿萨拉牌-方片5", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 15, icon: '🏺', weight: 0.01, officialId: '15209500020', officialGroup: 'dfg_107' },
  df_15209500021: { id: 'df_15209500021', name: "阿萨拉牌-黑桃6", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.01, officialId: '15209500021', officialGroup: 'dfg_107' },
  df_15209500022: { id: 'df_15209500022', name: "阿萨拉牌-红桃6", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.01, officialId: '15209500022', officialGroup: 'dfg_107' },
  df_15209500023: { id: 'df_15209500023', name: "阿萨拉牌-梅花6", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.01, officialId: '15209500023', officialGroup: 'dfg_107' },
  df_15209500024: { id: 'df_15209500024', name: "阿萨拉牌-方片6", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 20, icon: '🏺', weight: 0.01, officialId: '15209500024', officialGroup: 'dfg_107' },
  df_15209500025: { id: 'df_15209500025', name: "阿萨拉牌-黑桃7", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.01, officialId: '15209500025', officialGroup: 'dfg_107' },
  df_15209500026: { id: 'df_15209500026', name: "阿萨拉牌-红桃7", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.01, officialId: '15209500026', officialGroup: 'dfg_107' },
  df_15209500027: { id: 'df_15209500027', name: "阿萨拉牌-梅花7", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.01, officialId: '15209500027', officialGroup: 'dfg_107' },
  df_15209500028: { id: 'df_15209500028', name: "阿萨拉牌-方片7", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 25, icon: '🏺', weight: 0.01, officialId: '15209500028', officialGroup: 'dfg_107' },
  df_15209500029: { id: 'df_15209500029', name: "阿萨拉牌-黑桃8", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.01, officialId: '15209500029', officialGroup: 'dfg_107' },
  df_15209500030: { id: 'df_15209500030', name: "阿萨拉牌-红桃8", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.01, officialId: '15209500030', officialGroup: 'dfg_107' },
  df_15209500031: { id: 'df_15209500031', name: "阿萨拉牌-梅花8", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.01, officialId: '15209500031', officialGroup: 'dfg_107' },
  df_15209500032: { id: 'df_15209500032', name: "阿萨拉牌-方片8", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 30, icon: '🏺', weight: 0.01, officialId: '15209500032', officialGroup: 'dfg_107' },
  df_15209500033: { id: 'df_15209500033', name: "阿萨拉牌-黑桃9", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 35, icon: '🏺', weight: 0.01, officialId: '15209500033', officialGroup: 'dfg_107' },
  df_15209500034: { id: 'df_15209500034', name: "阿萨拉牌-红桃9", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 35, icon: '🏺', weight: 0.01, officialId: '15209500034', officialGroup: 'dfg_107' },
  df_15209500035: { id: 'df_15209500035', name: "阿萨拉牌-梅花9", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 35, icon: '🏺', weight: 0.01, officialId: '15209500035', officialGroup: 'dfg_107' },
  df_15209500036: { id: 'df_15209500036', name: "阿萨拉牌-方片9", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 35, icon: '🏺', weight: 0.01, officialId: '15209500036', officialGroup: 'dfg_107' },
  df_15209500037: { id: 'df_15209500037', name: "阿萨拉牌-黑桃10", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 40, icon: '🏺', weight: 0.01, officialId: '15209500037', officialGroup: 'dfg_107' },
  df_15209500038: { id: 'df_15209500038', name: "阿萨拉牌-红桃10", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 40, icon: '🏺', weight: 0.01, officialId: '15209500038', officialGroup: 'dfg_107' },
  df_15209500039: { id: 'df_15209500039', name: "阿萨拉牌-梅花10", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 40, icon: '🏺', weight: 0.01, officialId: '15209500039', officialGroup: 'dfg_107' },
  df_15209500040: { id: 'df_15209500040', name: "阿萨拉牌-方片10", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 40, icon: '🏺', weight: 0.01, officialId: '15209500040', officialGroup: 'dfg_107' },
  df_15209500041: { id: 'df_15209500041', name: "阿萨拉牌-黑桃J", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.01, officialId: '15209500041', officialGroup: 'dfg_107' },
  df_15209500042: { id: 'df_15209500042', name: "阿萨拉牌-红桃J", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.01, officialId: '15209500042', officialGroup: 'dfg_107' },
  df_15209500043: { id: 'df_15209500043', name: "阿萨拉牌-梅花J", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.01, officialId: '15209500043', officialGroup: 'dfg_107' },
  df_15209500044: { id: 'df_15209500044', name: "阿萨拉牌-方片J", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 100, icon: '🏺', weight: 0.01, officialId: '15209500044', officialGroup: 'dfg_107' },
  df_15209500045: { id: 'df_15209500045', name: "阿萨拉牌-黑桃Q", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 110, icon: '🏺', weight: 0.01, officialId: '15209500045', officialGroup: 'dfg_107' },
  df_15209500046: { id: 'df_15209500046', name: "阿萨拉牌-红桃Q", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 110, icon: '🏺', weight: 0.01, officialId: '15209500046', officialGroup: 'dfg_107' },
  df_15209500047: { id: 'df_15209500047', name: "阿萨拉牌-梅花Q", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 110, icon: '🏺', weight: 0.01, officialId: '15209500047', officialGroup: 'dfg_107' },
  df_15209500048: { id: 'df_15209500048', name: "阿萨拉牌-方片Q", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 110, icon: '🏺', weight: 0.01, officialId: '15209500048', officialGroup: 'dfg_107' },
  df_15209500049: { id: 'df_15209500049', name: "阿萨拉牌-黑桃K", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 120, icon: '🏺', weight: 0.01, officialId: '15209500049', officialGroup: 'dfg_107' },
  df_15209500050: { id: 'df_15209500050', name: "阿萨拉牌-红桃K", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 120, icon: '🏺', weight: 0.01, officialId: '15209500050', officialGroup: 'dfg_107' },
  df_15209500051: { id: 'df_15209500051', name: "阿萨拉牌-梅花K", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 120, icon: '🏺', weight: 0.01, officialId: '15209500051', officialGroup: 'dfg_107' },
  df_15209500052: { id: 'df_15209500052', name: "阿萨拉牌-方片K", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 120, icon: '🏺', weight: 0.01, officialId: '15209500052', officialGroup: 'dfg_107' },
  df_15209500053: { id: 'df_15209500053', name: "阿萨拉牌-小王", kind: 'valuable', rarity: 'cyan', w: 1, h: 1, baseValue: 1000, icon: '🏺', weight: 0.01, officialId: '15209500053', officialGroup: 'dfg_107' },
  df_15209500054: { id: 'df_15209500054', name: "阿萨拉牌-大王", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 8888, icon: '🏺', weight: 0.01, officialId: '15209500054', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_109 · Dfg 109 ——
  df_15209500055: { id: 'df_15209500055', name: "阿萨拉牌-牌盒", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 1880, icon: '⚽', weight: 0.5, officialId: '15209500055', officialGroup: 'dfg_109' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15209600001: { id: 'df_15209600001', name: "契约之钥", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 200, icon: '🏺', weight: 0.5, officialId: '15209600001', officialGroup: 'dfg_107' },
  df_15209600002: { id: 'df_15209600002', name: "赤诚之钥", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 120, icon: '🏺', weight: 0.5, officialId: '15209600002', officialGroup: 'dfg_107' },
  df_15209600003: { id: 'df_15209600003', name: "勇毅之钥", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 120, icon: '🏺', weight: 0.5, officialId: '15209600003', officialGroup: 'dfg_107' },
  df_15209600004: { id: 'df_15209600004', name: "牺牲之钥", kind: 'valuable', rarity: 'cyan', w: 2, h: 1, baseValue: 120, icon: '🏺', weight: 0.5, officialId: '15209600004', officialGroup: 'dfg_107' },
  df_15209600005: { id: 'df_15209600005', name: "希望之钥", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 80, icon: '🏺', weight: 0.5, officialId: '15209600005', officialGroup: 'dfg_107' },
  df_15209600006: { id: 'df_15209600006', name: "仁悯之钥", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 80, icon: '🏺', weight: 0.5, officialId: '15209600006', officialGroup: 'dfg_107' },
  df_15209600007: { id: 'df_15209600007', name: "智慧之钥", kind: 'valuable', rarity: 'purple', w: 2, h: 1, baseValue: 80, icon: '🏺', weight: 0.5, officialId: '15209600007', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_104 · 资料情报 ——
  df_15209600022: { id: 'df_15209600022', name: "头盔兑换券", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 1000, icon: '📁', weight: 0.05, officialId: '15209600022', officialGroup: 'dfg_104' },
  df_15209600023: { id: 'df_15209600023', name: "护甲兑换券", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 1000, icon: '📁', weight: 0.05, officialId: '15209600023', officialGroup: 'dfg_104' },
  df_15209700001: { id: 'df_15209700001', name: "讯息纸条", kind: 'valuable', rarity: 'red', w: 1, h: 1, baseValue: 10, icon: '📁', weight: 0.05, officialId: '15209700001', officialGroup: 'dfg_104' },
  df_15209900001: { id: 'df_15209900001', name: "拼手气红包", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 2200, icon: '📁', weight: 0.1, officialId: '15209900001', officialGroup: 'dfg_104' },
  df_15209800001: { id: 'df_15209800001', name: "天降红包", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 50, icon: '📁', weight: 0.1, officialId: '15209800001', officialGroup: 'dfg_104' },
  df_15209800006: { id: 'df_15209800006', name: "心意红包", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 80, icon: '📁', weight: 0.1, officialId: '15209800006', officialGroup: 'dfg_104' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15200000058: { id: 'df_15200000058', name: "幸运木雕", kind: 'valuable', rarity: 'red', w: 2, h: 1, baseValue: 16000, icon: '🏺', weight: 1.4, officialId: '15200000058', officialGroup: 'dfg_107' },
  df_45020000001: { id: 'df_45020000001', name: "黑潮爆破武器解锁币", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 80, icon: '🏺', officialId: '45020000001', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_102091 · 鱼 ——
  df_15209311001: { id: 'df_15209311001', name: "罗非鱼", kind: 'valuable', rarity: 'white', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 1, officialId: '15209311001', officialGroup: 'dfg_102091' },
  df_15209411002: { id: 'df_15209411002', name: "白条鱼", kind: 'valuable', rarity: 'white', w: 1, h: 1, baseValue: 40, icon: '🐟', weight: 0.1, officialId: '15209411002', officialGroup: 'dfg_102091' },
  df_15209412003: { id: 'df_15209412003', name: "横纹鱼", kind: 'valuable', rarity: 'green', w: 1, h: 1, baseValue: 40, icon: '🐟', weight: 0.1, officialId: '15209412003', officialGroup: 'dfg_102091' },
  df_15209312004: { id: 'df_15209312004', name: "红尾鱼", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 0.9, officialId: '15209312004', officialGroup: 'dfg_102091' },
  df_15209422005: { id: 'df_15209422005', name: "花鲢鱼", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 3.5, officialId: '15209422005', officialGroup: 'dfg_102091' },
  df_15209222006: { id: 'df_15209222006', name: "青鱼", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 5, officialId: '15209222006', officialGroup: 'dfg_102091' },
  df_15209222007: { id: 'df_15209222007', name: "条纹鲈", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 6, officialId: '15209222007', officialGroup: 'dfg_102091' },
  df_15209222008: { id: 'df_15209222008', name: "鲻鱼", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 2, officialId: '15209222008', officialGroup: 'dfg_102091' },
  df_15209222009: { id: 'df_15209222009', name: "梭鲈", kind: 'valuable', rarity: 'green', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 2.5, officialId: '15209222009', officialGroup: 'dfg_102091' },
  // —— 官方分组 dfg_102092 · 稀有鱼 ——
  df_15209414010: { id: 'df_15209414010', name: "红宝石鱼", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 40, icon: '🐠', weight: 0.1, officialId: '15209414010', officialGroup: 'dfg_102092' },
  // —— 官方分组 dfg_102091 · 鱼 ——
  df_15209313011: { id: 'df_15209313011', name: "短吻多鳍鱼", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 0.7, officialId: '15209313011', officialGroup: 'dfg_102091' },
  // —— 官方分组 dfg_102092 · 稀有鱼 ——
  df_15209414012: { id: 'df_15209414012', name: "长吻象鼻鱼", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 40, icon: '🐠', weight: 0.1, officialId: '15209414012', officialGroup: 'dfg_102092' },
  // —— 官方分组 dfg_102091 · 鱼 ——
  df_15209223013: { id: 'df_15209223013', name: "翘嘴鲌", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 2.5, officialId: '15209223013', officialGroup: 'dfg_102091' },
  df_15209223014: { id: 'df_15209223014', name: "长颈鹿鲶", kind: 'valuable', rarity: 'blue', w: 1, h: 2, baseValue: 40, icon: '🐟', weight: 1.3, officialId: '15209223014', officialGroup: 'dfg_102091' },
  // —— 官方分组 dfg_102092 · 稀有鱼 ——
  df_15209314015: { id: 'df_15209314015', name: "恩氏多鳍鱼", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 0.8, officialId: '15209314015', officialGroup: 'dfg_102092' },
  df_15209224016: { id: 'df_15209224016', name: "镜鲤", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 7.5, officialId: '15209224016', officialGroup: 'dfg_102092' },
  df_15209224017: { id: 'df_15209224017', name: "狗鱼", kind: 'valuable', rarity: 'purple', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 7, officialId: '15209224017', officialGroup: 'dfg_102092' },
  df_15209414018: { id: 'df_15209414018', name: "非洲蝴蝶鱼", kind: 'valuable', rarity: 'purple', w: 1, h: 1, baseValue: 40, icon: '🐠', weight: 0.1, officialId: '15209414018', officialGroup: 'dfg_102092' },
  df_15209234019: { id: 'df_15209234019', name: "北非胡子鲶", kind: 'valuable', rarity: 'purple', w: 1, h: 3, baseValue: 40, icon: '🐠', weight: 6.5, officialId: '15209234019', officialGroup: 'dfg_102092' },
  df_15209234020: { id: 'df_15209234020', name: "辐射石斑鱼", kind: 'valuable', rarity: 'purple', w: 2, h: 3, baseValue: 40, icon: '🐠', weight: 3.5, officialId: '15209234020', officialGroup: 'dfg_102092' },
  df_15209416021: { id: 'df_15209416021', name: "蓝宝石雷龙鱼", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 0.1, officialId: '15209416021', officialGroup: 'dfg_102092' },
  df_15209226022: { id: 'df_15209226022', name: "铂金银龙鱼", kind: 'valuable', rarity: 'red', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 2.5, officialId: '15209226022', officialGroup: 'dfg_102092' },
  df_15209225023: { id: 'df_15209225023', name: "巨型褐鳟", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 1, officialId: '15209225023', officialGroup: 'dfg_102092' },
  df_15209235024: { id: 'df_15209235024', name: "幼鲨", kind: 'valuable', rarity: 'cyan', w: 1, h: 4, baseValue: 40, icon: '🐠', weight: 8, officialId: '15209235024', officialGroup: 'dfg_102092' },
  df_15209235025: { id: 'df_15209235025', name: "大西洋鲑", kind: 'valuable', rarity: 'cyan', w: 2, h: 3, baseValue: 40, icon: '🐠', weight: 8, officialId: '15209235025', officialGroup: 'dfg_102092' },
  df_15209225026: { id: 'df_15209225026', name: "虎鱼", kind: 'valuable', rarity: 'cyan', w: 1, h: 2, baseValue: 40, icon: '🐠', weight: 2, officialId: '15209225026', officialGroup: 'dfg_102092' },
  df_15209236027: { id: 'df_15209236027', name: "大眼海鲢", kind: 'valuable', rarity: 'red', w: 2, h: 4, baseValue: 40, icon: '🐠', weight: 16, officialId: '15209236027', officialGroup: 'dfg_102092' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15090990012: { id: 'df_15090990012', name: "生活物资-食品", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0.31, officialId: '15090990012', officialGroup: 'dfg_105' },
  df_15090990013: { id: 'df_15090990013', name: "生活物资-药品", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0.31, officialId: '15090990013', officialGroup: 'dfg_105' },
  df_15090990014: { id: 'df_15090990014', name: "生活物资-水", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 9, icon: '🏺', weight: 0.31, officialId: '15090990014', officialGroup: 'dfg_105' },
  df_15090990015: { id: 'df_15090990015', name: "阿萨拉战士的遗言", kind: 'valuable', rarity: 'white', w: 1, h: 2, baseValue: 9, icon: '🏺', weight: 0.31, officialId: '15090990015', officialGroup: 'dfg_105' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15090990017: { id: 'df_15090990017', name: "遗落的燃烧瓶", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 6, icon: '🔋', weight: 2.5, officialId: '15090990017', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_107 · 工艺藏品 ——
  df_15090990018: { id: 'df_15090990018', name: "遗落的饰章", kind: 'valuable', rarity: 'blue', w: 2, h: 1, baseValue: 6, icon: '🏺', weight: 0.73, officialId: '15090990018', officialGroup: 'dfg_107' },
  df_15090990019: { id: 'df_15090990019', name: "遗落的挂坠", kind: 'valuable', rarity: 'blue', w: 1, h: 1, baseValue: 6, icon: '🏺', weight: 0.01, officialId: '15090990019', officialGroup: 'dfg_107' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15090990020: { id: 'df_15090990020', name: "特制聚变供能单元", kind: 'valuable', rarity: 'blue', w: 3, h: 3, baseValue: 6, icon: '🔋', weight: 12, officialId: '15090990020', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_101 · 电子物品 ——
  df_15090990021: { id: 'df_15090990021', name: "特制信息终端", kind: 'valuable', rarity: 'blue', w: 2, h: 3, baseValue: 6, icon: '💾', weight: 2.71, officialId: '15090990021', officialGroup: 'dfg_101' },
  // —— 官方分组 dfg_108 · 能源燃料 ——
  df_15090990022: { id: 'df_15090990022', name: "特制火箭燃料", kind: 'valuable', rarity: 'blue', w: 4, h: 3, baseValue: 6, icon: '🔋', weight: 21.72, officialId: '15090990022', officialGroup: 'dfg_108' },
  // —— 官方分组 dfg_105 · 家居物品 ——
  df_15090990023: { id: 'df_15090990023', name: "老乔的钓点手记残页", kind: 'valuable', rarity: 'white', w: 1, h: 2, baseValue: 9, icon: '🏺', weight: 0.31, officialId: '15090990023', officialGroup: 'dfg_105' },
}

// ===== 官方变卖物索引与抽池辅助 =====
export const DF_GROUP_LABELS: Record<string, string> = {
  dfg_101: '电子物品',
  dfg_102: '医疗道具',
  dfg_103: '工具材料',
  dfg_104: '资料情报',
  dfg_105: '家居物品',
  dfg_106: '食品饮品',
  dfg_107: '工艺藏品',
  dfg_108: '能源燃料',
  dfg_109: 'Dfg 109',
  dfg_102091: '鱼',
  dfg_102092: '稀有鱼',
}

export const DF_COLLECTIBLE_IDS = Object.values(ITEMS)
  .filter(def => def.officialGroup)
  .map(def => def.id)

export interface DfLootQuery {
  groups?: readonly string[]
  rarities?: readonly Rarity[]
}

/** 按官方分组/稀有度查询变卖物； groups 使用 TH.GL 官方数据库分组 ID */
export function dfCollectibleIds(query: DfLootQuery = {}): string[] {
  const groups = query.groups ? new Set(query.groups) : null
  const rarities = query.rarities ? new Set(query.rarities) : null
  return DF_COLLECTIBLE_IDS.filter(id => {
    const def = ITEMS[id]
    return (!groups || groups.has(def.officialGroup!)) && (!rarities || rarities.has(def.rarity))
  })
}

export interface LootEntry { defId: string; weight: number }

const DF_DEFAULT_RARITY_WEIGHT: Record<Rarity, number> = {
  white: 18, green: 14, blue: 9, purple: 4.2, cyan: 1.35, red: 0.32,
}

/** 生成官方变卖物战利品条目；稀有度越高权重越低，rollLootItem 的 luck/redBoost 仍按原规则生效 */
export function dfLootEntries(query: DfLootQuery = {}, rarityWeight: Partial<Record<Rarity, number>> = {}): LootEntry[] {
  const weights = { ...DF_DEFAULT_RARITY_WEIGHT, ...rarityWeight }
  return dfCollectibleIds(query).map(defId => ({ defId, weight: weights[ITEMS[defId].rarity] }))
}

/** 极星守望合成配方：德小兰碎片 ×3 + 灰鲭鲨碎片 ×3 → 灰鲭鲨·德小兰 ×1（对应官方碎片组装玩法） */
export const JX_CRAFT = { doll: 'ev_jx_doll', shark: 'ev_jx_shark', need: 3, out: 'c_jx_model' } as const

// ===================== 饮品特调：官方配方表（材料组合 + 摇晃秒数窗 → 成品） =====================
export const DRINK_MATS = ['mat_honey', 'mat_cola', 'mat_mint', 'mat_lemon', 'mat_juniper', 'mat_tonic', 'mat_soda', 'mat_breeze', 'mat_cran', 'mat_amber', 'mat_syrup', 'mat_lemonj'] as const

export interface DrinkRecipe {
  out: string            // 成品饮品 defId
  mats: readonly string[] // 3 种材料（无序）
  shake: [number, number] // 摇晃秒数窗口
  cat: string            // 官方分类
  eff: string            // 官方效果说明
}

export const DRINK_RECIPES: DrinkRecipe[] = [
  { out: 'dk_leisi',     mats: ['mat_honey', 'mat_cola', 'mat_mint'],        shake: [2, 3],      cat: '医疗恢复', eff: '持续治疗 180 秒' },
  { out: 'dk_asara',     mats: ['mat_honey', 'mat_cola', 'mat_lemon'],       shake: [4, 5],      cat: '医疗恢复', eff: '持续治疗 120 秒' },
  { out: 'dk_mist',      mats: ['mat_honey', 'mat_lemonj', 'mat_syrup'],     shake: [2, 3],      cat: '医疗恢复', eff: '持续治疗 60 秒，冲刺略降' },
  { out: 'dk_tulip',     mats: ['mat_juniper', 'mat_tonic', 'mat_lemon'],    shake: [7, 9],      cat: '体力恢复', eff: '负重提升 300 秒' },
  { out: 'dk_rain',      mats: ['mat_juniper', 'mat_soda', 'mat_lemon'],     shake: [6, 8],      cat: '体力恢复', eff: '体力大幅提升 300 秒' },
  { out: 'dk_farewell',  mats: ['mat_juniper', 'mat_lemonj', 'mat_syrup'],   shake: [7, 9],      cat: '体力恢复', eff: '体力快速回复 60 秒' },
  { out: 'dk_skyland',   mats: ['mat_breeze', 'mat_cran', 'mat_mint'],       shake: [8.5, 10.5], cat: '枪械操控', eff: '换弹与消耗品使用加速 300 秒' },
  { out: 'dk_starlight', mats: ['mat_breeze', 'mat_cola', 'mat_mint'],       shake: [8.5, 10.5], cat: '枪械操控', eff: '操控提升 180 秒' },
  { out: 'dk_heart',     mats: ['mat_breeze', 'mat_lemonj', 'mat_mint'],     shake: [8.5, 10.5], cat: '枪械操控', eff: '换弹大幅加速 300 秒' },
  { out: 'dk_rose',      mats: ['mat_amber', 'mat_syrup', 'mat_mint'],       shake: [4, 5],      cat: '搜索',     eff: '搜索速度大幅提升 300 秒' },
  { out: 'dk_guanshan',  mats: ['mat_amber', 'mat_lemonj', 'mat_syrup'],     shake: [4, 5],      cat: '搜索',     eff: '搜索大幅提升，附带虚弱' },
  { out: 'dk_highball',  mats: ['mat_amber', 'mat_soda', 'mat_lemonj'],      shake: [6, 7],      cat: '搜索',     eff: '搜索中幅提升 300 秒' },
]

/** 按材料组合 + 摇晃秒数匹配配方（完全匹配才成功，否则调出黑暗特调） */
export function matchRecipe(mats: string[], shakeSec: number): DrinkRecipe | null {
  if (mats.length !== 3) return null
  const key = [...mats].sort().join('+')
  for (const r of DRINK_RECIPES) {
    if ([...r.mats].sort().join('+') === key && shakeSec >= r.shake[0] && shakeSec <= r.shake[1]) return r
  }
  return null
}

// 通用容器战利品池（weight 为基础权重，luck 会按稀有度档位放大高稀有度权重）
// 注意：枪械不在此池，全游戏只有「武器箱」会出枪
export const LOOT_POOL: LootEntry[] = [
  // 战斗补给保留少量权重；所有普通变卖物已切换为官方 735 件收集品库
  { defId: 'm_bandage', weight: 10 }, { defId: 'm_medkit', weight: 4 }, { defId: 'm_spray', weight: 2.5 },
  { defId: 'a_ammo', weight: 7 }, { defId: 'a_ammo2', weight: 3.2 }, { defId: 'a_ammo3', weight: 0.9 },
  ...dfLootEntries(),
]

// 武器箱专属池：枪的唯一来源（含少量弹药/绷带填充，高级枪权重压得很低）
export const WEAPON_LOOT_POOL: { defId: string; weight: number }[] = [
  { defId: 'a_ammo', weight: 16 }, { defId: 'm_bandage', weight: 6 },
  { defId: 'w_p92', weight: 13 }, { defId: 'w_uzi', weight: 11 }, { defId: 'w_m870', weight: 10 },
  { defId: 'w_s12k', weight: 7.5 }, { defId: 'w_sks', weight: 6.5 },
  { defId: 'w_deagle', weight: 7 }, { defId: 'w_mp5', weight: 6 }, { defId: 'w_mini14', weight: 4.5 },
  { defId: 'w_vector', weight: 3.6 }, { defId: 'w_akm', weight: 4 }, { defId: 'w_m4a1', weight: 3.6 }, { defId: 'w_scar', weight: 3.4 },
  { defId: 'w_aug', weight: 2 }, { defId: 'w_m24', weight: 1.4 }, { defId: 'w_m249', weight: 1.2 },
  { defId: 'w_awm', weight: 0.2 }, { defId: 'w_m700', weight: 0.7 }, { defId: 'w_an94', weight: 1.6 },
  // 配件（武器箱也出）
  { defId: 'at_rdot', weight: 4 }, { defId: 'at_comp', weight: 3.5 }, { defId: 'at_qmag', weight: 3.5 },
  { defId: 'at_scope4', weight: 1.8 }, { defId: 'at_supp', weight: 1.5 }, { defId: 'at_emag', weight: 1.8 },
  { defId: 'at_grip_v', weight: 2.8 }, { defId: 'at_grip_l', weight: 2.6 }, { defId: 'at_stock_s', weight: 1.6 }, { defId: 'at_stock_l', weight: 1.5 }, { defId: 'at_laser', weight: 0.8 },
  { defId: 'a_ammo2', weight: 5 }, { defId: 'a_ammo3', weight: 2 },
  { defId: 'armor1', weight: 2 }, { defId: 'helmet1', weight: 2 },
]

// 保险柜专属池：锁房高价值变卖物（无枪无垃圾）
export const VAULT_LOOT_POOL: LootEntry[] = [
  // 保险柜只出官方工艺藏品与资料情报中的紫/金/红高价值变卖物
  ...dfLootEntries({ groups: ['dfg_107', 'dfg_104'], rarities: ['purple', 'cyan', 'red'] }, { purple: 7, cyan: 2.8, red: 0.72 }),
]

// 弹药箱专属池：六级子弹的主要产出（高级弹权重极低）
export const AMMO_BOX_POOL: { defId: string; weight: number }[] = [
  { defId: 'a_ammo', weight: 30 }, { defId: 'a_ammo2', weight: 22 }, { defId: 'a_ammo3', weight: 12 },
  { defId: 'a_ammo4', weight: 5 }, { defId: 'a_ammo5', weight: 1.8 }, { defId: 'a_ammo6', weight: 0.5 },
  { defId: 'm_bandage', weight: 6 },
]

// 售货机专属池：补给品（投币购买）
export const VENDOR_LOOT_POOL: LootEntry[] = [
  { defId: 'm_bandage', weight: 30 }, { defId: 'a_ammo', weight: 30 }, { defId: 'm_medkit', weight: 22 },
  // 售货机中的食品/日用品也使用官方收集品，不再回退旧金币
  ...dfLootEntries({ groups: ['dfg_106', 'dfg_105'], rarities: ['white', 'green'] }, { white: 5, green: 2.2 }),
]

// 敌人掉落池（不掉枪）
export const ENEMY_LOOT_POOL: LootEntry[] = [
  { defId: 'm_bandage', weight: 18 }, { defId: 'a_ammo', weight: 18 }, { defId: 'm_medkit', weight: 6 },
  // 敌人随身战利品：官方白/绿/蓝低稀有度变卖物
  ...dfLootEntries({ rarities: ['white', 'green', 'blue'] }, { white: 9, green: 5.2, blue: 1.7 }),
]

let uidCounter = 1
/** 创建物品实例，稀有度由物品定义固定 */
export function makeItem(defId: string, count = 1): ItemInstance {
  const def = ITEMS[defId]
  return { uid: `it${uidCounter++}_${Math.random().toString(36).slice(2, 7)}`, defId, rarity: def.rarity, count }
}


// 鸟窝专属池：黄金鸟蛋只在这里出，概率压得很低（约 1%）
export const NEST_LOOT_POOL: LootEntry[] = [
  { defId: 'a_ammo', weight: 10 }, { defId: 'm_bandage', weight: 8 },
  // 官方鸟窝变卖物：黄金鸟蛋仍是稀有惊喜，普通填充为官方低阶工艺/家居小物
  ...dfLootEntries({ groups: ['dfg_107', 'dfg_105'], rarities: ['white', 'green', 'blue'] }, { white: 4.5, green: 2.4, blue: 0.8 }),
  { defId: 'df_15200000124', weight: 0.06 },
]

// 房卡掉落池：每张图 4 种，稀有度越高级权重越低
export const CARD_POOLS: Record<string, { defId: string; weight: number }[]> = {
  wild: [
    { defId: 'k_w_shed', weight: 10 }, { defId: 'k_w_cave', weight: 5 },
    { defId: 'k_w_store', weight: 2 }, { defId: 'k_w_core', weight: 0.24 },
  ],
  desert: [
    { defId: 'k_d_oasis', weight: 10 }, { defId: 'k_d_crypt', weight: 5 },
    { defId: 'k_d_gate', weight: 3.5 }, { defId: 'k_d_tomb', weight: 0.9 },
  ],
  tower: [
    { defId: 'k_t_dorm', weight: 10 }, { defId: 'k_t_arch', weight: 5 },
    { defId: 'k_t_arm', weight: 2 }, { defId: 'k_t_warden', weight: 0.24 },
  ],
  prison: [
    { defId: 'k_p_cell', weight: 10 }, { defId: 'k_p_med', weight: 5 },
    { defId: 'k_p_arm', weight: 2 }, { defId: 'k_p_warden', weight: 0.24 },
  ],
  snow: [
    { defId: 'k_s_post', weight: 10 }, { defId: 'k_s_hangar', weight: 5 },
    { defId: 'k_s_ctrl', weight: 2 }, { defId: 'k_s_office', weight: 0.24 },
  ],
}

// 航空箱专属池：军用物资，中高端枪械 + 高价值变卖物，整体质量高于通用池
export const AIR_LOOT_POOL: LootEntry[] = [
  { defId: 'a_ammo', weight: 12 }, { defId: 'm_medkit', weight: 10 }, { defId: 'm_bandage', weight: 6 },
  { defId: 'w_mp5', weight: 8 }, { defId: 'w_mini14', weight: 6 }, { defId: 'w_vector', weight: 5.5 },
  { defId: 'w_akm', weight: 5 }, { defId: 'w_m4a1', weight: 4.5 }, { defId: 'w_scar', weight: 4.5 },
  { defId: 'w_aug', weight: 2.5 }, { defId: 'w_m24', weight: 1.5 }, { defId: 'w_an94', weight: 2.2 },
  // 航空箱高价值物资：官方电子/工具/能源/工艺藏品（紫/金/红）
  ...dfLootEntries({ groups: ['dfg_101', 'dfg_103', 'dfg_108', 'dfg_107'], rarities: ['purple', 'cyan', 'red'] }, { purple: 4.5, cyan: 1.6, red: 0.34 }),
  { defId: 'a_ammo3', weight: 3 }, { defId: 'a_ammo4', weight: 1.6 }, { defId: 'a_ammo5', weight: 0.5 },
  { defId: 'at_scope4', weight: 1.2 }, { defId: 'at_supp', weight: 1 }, { defId: 'at_emag', weight: 1.2 },
  { defId: 'at_stock_s', weight: 1.4 }, { defId: 'at_grip_v', weight: 1.6 }, { defId: 'at_laser', weight: 0.7 },
  { defId: 'at_pkm_bullpup', weight: 0.6 }, { defId: 'at_m250_drum', weight: 0.55 }, { defId: 'at_sr25_twin', weight: 0.4 },
  { defId: 'armor2', weight: 1.2 }, { defId: 'helmet2', weight: 1.2 }, { defId: 'armor3', weight: 0.4 }, { defId: 'helmet3', weight: 0.4 },
]

// ===================== Boss 专属掉落表（稀有爆率 1%） =====================
export const BOSS_DROP_RATE = 0.01
export const BOSS_DROPS: { boss: string; defId: string }[] = [
  { boss: '大坝霸主·铁爪', defId: 'v_core' },
  { boss: '塔主·总控官', defId: 'v_blueprint' },
  { boss: '监狱长·洛克', defId: 'v_scepter' },
  { boss: '狱警队长·狂鲨', defId: 'v_sharktooth' },
  { boss: '「雪盲」·白狼', defId: 'v_wolfcamo' },
  { boss: '沙之祭司·伊姆霍特', defId: 'v_scarab' },
]
export const BOSS_COLLECT_REWARD = 20000
const BOSS_KEY = 'mojin_boss_drops'
export function loadBossDrops(): Record<string, boolean> {
  try { return JSON.parse(localStorage.getItem(BOSS_KEY) || '{}') as Record<string, boolean> } catch { return {} }
}
export function saveBossDrops(d: Record<string, boolean>) {
  try { localStorage.setItem(BOSS_KEY, JSON.stringify(d)) } catch { /* 忽略 */ }
}

// ===================== 干员系统（V/G/X 三主动技能 + 2 被动，对齐三角洲行动干员技能手感：V 战术技 / G 伤害技 / X 大招） =====================
export interface OpMods {
  speed?: number    // 移速倍率
  reload?: number   // 换弹时间倍率
  search?: number   // 搜索速度倍率
  extract?: number  // 撤离速度倍率
  med?: number      // 医疗效果倍率
  maxHp?: number    // 生命上限加成
  reduce?: number   // 受伤减免（0-1）
  luck?: number     // 容器爆率加成
  seeRange?: number // 敌人发现距离倍率（越小越隐蔽）
}
/** 技能机制类型（engine.ts castSkill 分发实现） */
export type SkillMech =
  | 'dash'        // 位移冲刺：向前猛冲，撞晕路径敌人（power=距离米，radius=撞晕半径，dur=眩晕秒；count>0 则持盾冲锋，撞击范围 count 伤害+击倒，正面减伤 80%）
  | 'overdrive'   // 动力外骨骼：短时移速爆发，击杀回血续时（dur 秒，power=移速加成）
  | 'triShot'     // 三联装手炮：连发 count 枚榴弹（power=单发伤害，radius=爆炸半径）
  | 'healDart'    // 激素手枪：治疗弹落点生成治疗雾（radius 米 dur 秒，每秒回 power）
  | 'healSmoke'   // 疗愈烟幕：投掷治疗烟雾（烟+圈内每秒回 power）
  | 'heal'        // 战地急救：立即回血 power，随后 5 秒持续恢复
  | 'reconArrow'  // 侦察箭：箭落点脉冲扫描，敌人标记在小地图（dur 秒，radius 内敌人受伤加深 power）
  | 'shockArrow'  // 电击箭：落点电场持续伤害+打断（radius 米 dur 秒，每秒 power 伤害）
  | 'reveal'      // 广域骇入：全图敌人标记 dur 秒
  | 'shield'      // 防爆盾：举盾 dur 秒，正面受伤减 power，移速 -25%
  | 'shieldBash'  // 震荡盾击：正前方 radius 米 power 伤害 + 击退眩晕 dur 秒
  | 'armor'       // 重装堡垒：dur 秒全向减伤 power
  | 'blindKnife'  // 数据飞刀/致眩箭：投掷命中 radius 米敌人眩晕 dur 秒
  | 'jam'         // 信号扰乱：radius 米敌人受伤 +power（标记 dur 秒）
  | 'invis'       // 光学迷彩：隐身 dur 秒
  | 'magnetBomb'  // 磁吸炸弹：吸附最近敌人或落点，1.5s 后爆炸 power 伤害 radius 米
  | 'grenade'     // 高爆手雷：投掷 2s 爆炸 power 伤害 radius 米 + 震慑眩晕 dur 秒
  | 'multiCharge' // 连环爆破：连掷 count 个炸药包（power 伤害 radius 米）
  | 'charge'      // 遥控炸药：单发炸药包
  | 'ringSmoke'   // 环形烟幕：自身周围环形烟墙（中空），dur 秒
  | 'smoke'       // 压制烟雾：投掷烟幕 radius 米 dur 秒
  | 'mark'        // 死亡标记：radius 米敌人受伤 +power，dur 秒
  | 'rally'       // 神经振奋剂：dur 秒移速/换弹/射速强化
  | 'stim'        // 决死号令：dur 秒全场敌人受伤加深 + 持续回血
  | 'hunter'      // 猎手时刻：dur 秒全场敌人受伤 +power，击杀回血
export interface SkillDef { icon: string; name: string; desc: string; cd: number; mech: SkillMech; power?: number; dur?: number; radius?: number; count?: number }
export interface OperatorDef {
  id: string
  name: string
  icon: string
  title: string
  desc: string
  /** V 战术技 / G 伤害技 / X 大招（对齐三角洲行动按键体系） */
  skills: Record<'v' | 'g' | 'x', SkillDef>
  /** 每升 1 级的技能成长（cd 负值=减冷却，对三技能统一生效） */
  growth?: { cd?: number; power?: number; dur?: number }
  passives: { icon: string; name: string; desc: string; mods: OpMods }[]
}
export const OPERATORS: OperatorDef[] = [
  {
    id: 'assault', name: '雷枪', icon: '🛡️', title: '突击手', desc: '正面突破的专家，越是交火越兴奋。（原型：三角洲·红狼）',
    skills: {
      v: { icon: '🦿', name: '动力外骨骼', desc: '外骨骼超载：6 秒内移速 +35%，期间击杀敌人回复 15 生命并延长 2 秒', cd: 40, mech: 'overdrive', power: 0.35, dur: 6 },
      g: { icon: '💥', name: '三联装手炮', desc: '食指拉环连发 3 枚爆炸榴弹，每枚 45 伤害（3 米）', cd: 35, mech: 'triShot', power: 45, radius: 3, count: 3 },
      x: { icon: '🛹', name: '战术滑铲', desc: '外骨骼驱动向前猛冲 9 米，撞晕路径 2.5 米内敌人 2.5 秒', cd: 30, mech: 'dash', power: 9, radius: 2.5, dur: 2.5 },
    },
    growth: { cd: -2, power: 2, dur: 0.3 },
    passives: [
      { icon: '⚡', name: '快速装填', desc: '换弹速度提升 30%', mods: { reload: 0.7 } },
      { icon: '🏃', name: '战场机动', desc: '移动速度提升 12%', mods: { speed: 1.12 } },
    ],
  },
  {
    id: 'medic', name: '白鸽', icon: '💉', title: '战地医师', desc: '只要她还站着，队伍就不会倒下。（原型：三角洲·蜂医）',
    skills: {
      v: { icon: '🎯', name: '激素手枪', desc: '发射治疗弹，落点生成 4 米治疗雾 6 秒，雾中每秒回复 10 生命', cd: 30, mech: 'healDart', power: 10, radius: 4, dur: 6 },
      g: { icon: '🌫️', name: '疗愈烟幕', desc: '投掷治疗烟雾：6 米烟幕 10 秒遮蔽视线，烟中每秒回复 4 生命', cd: 40, mech: 'healSmoke', power: 4, radius: 6, dur: 10 },
      x: { icon: '❤️', name: '战地急救', desc: '立即恢复 55 生命，随后 5 秒每秒再恢复 5 生命', cd: 45, mech: 'heal', power: 55 },
    },
    growth: { cd: -2, power: 3, dur: 0.4 },
    passives: [
      { icon: '🧪', name: '药理精通', desc: '医疗物资效果提升 40%', mods: { med: 1.4 } },
      { icon: '💪', name: '坚韧体魄', desc: '生命上限 +25', mods: { maxHp: 25 } },
    ],
  },
  {
    id: 'recon', name: '夜莺', icon: '🦅', title: '侦察兵', desc: '战场对她来说没有迷雾。（原型：三角洲·露娜）',
    skills: {
      v: { icon: '🏹', name: '侦察箭', desc: '射出侦察箭，落点脉冲扫描：6 秒内敌人全部标记在小地图（M），45 米内敌人被打上死亡标记', cd: 35, mech: 'reconArrow', power: 0.15, radius: 45, dur: 6 },
      g: { icon: '⚡', name: '电击箭', desc: '射出电击箭，落点 3 米电场 5 秒：每秒 14 伤害并持续打断敌人', cd: 40, mech: 'shockArrow', power: 14, radius: 3, dur: 5 },
      x: { icon: '📡', name: '广域骇入', desc: '12 秒内小地图（M）显示所有敌人位置', cd: 60, mech: 'reveal', dur: 12 },
    },
    growth: { cd: -3, power: 1, dur: 0.8 },
    passives: [
      { icon: '🔍', name: '敏锐搜索', desc: '搜索容器速度提升 40%', mods: { search: 1.4 } },
      { icon: '🍀', name: '幸运星', desc: '所有容器爆率小幅提升', mods: { luck: 0.2 } },
    ],
  },
  {
    id: 'engineer', name: '铁壁', icon: '🔧', title: '工程兵', desc: '把防御工事穿在身上的人。（原型：三角洲·深蓝）',
    skills: {
      v: { icon: '🛡️', name: '防爆盾', desc: '举起防爆盾 6 秒：正面伤害减免 70%，移速 -25%', cd: 35, mech: 'shield', power: 0.7, dur: 6 },
      g: { icon: '💢', name: '震荡盾击', desc: '盾面向前猛击：正前方 3.5 米内敌人 60 伤害并击退眩晕 1.5 秒', cd: 30, mech: 'shieldBash', power: 60, radius: 3.5, dur: 1.5 },
      x: { icon: '🏰', name: '重装堡垒', desc: '8 秒内全身减伤 60%，免疫眩晕', cd: 55, mech: 'armor', power: 0.6, dur: 8 },
    },
    growth: { cd: -3, power: 0.03, dur: 0.5 },
    passives: [
      { icon: '🦾', name: '重型装甲', desc: '受到伤害降低 15%', mods: { reduce: 0.15 } },
      { icon: '🎒', name: '负重训练', desc: '生命上限 +15', mods: { maxHp: 15 } },
    ],
  },
  {
    id: 'ghost', name: '幽灵', icon: '🥷', title: '潜伏者', desc: '她来无影去无踪，只留下被搜空的容器。（原型：三角洲·骇爪）',
    skills: {
      v: { icon: '🔪', name: '数据飞刀', desc: '掷出数据飞刀，命中区域 4 米内敌人被骇入瘫痪 3 秒', cd: 30, mech: 'blindKnife', radius: 4, dur: 3 },
      g: { icon: '📵', name: '信号扰乱', desc: '干扰 20 米内敌人电子设备：6 秒内被打上死亡标记（受伤 +25%）', cd: 40, mech: 'jam', power: 0.25, radius: 20, dur: 6 },
      x: { icon: '👻', name: '光学迷彩', desc: '8 秒内隐身，敌人无法发现你', cd: 50, mech: 'invis', dur: 8 },
    },
    growth: { cd: -3, dur: 0.8 },
    passives: [
      { icon: '🤫', name: '消音步伐', desc: '敌人发现你的距离缩短 30%', mods: { seeRange: 0.7 } },
      { icon: '🚁', name: '撤离专家', desc: '撤离速度提升 50%', mods: { extract: 1.5 } },
    ],
  },
  {
    id: 'blaster', name: '雷管', icon: '💣', title: '爆破手', desc: '他信奉的真理只有一个：没有什么墙是一包炸药解决不了的。（原型：三角洲·威龙）',
    skills: {
      v: { icon: '🧲', name: '磁吸炸弹', desc: '掷出磁吸炸弹：吸附 8 米内最近的敌人或落点，1.5 秒后爆炸 100 伤害（5 米）', cd: 35, mech: 'magnetBomb', power: 100, radius: 5 },
      g: { icon: '🧨', name: '高爆手雷', desc: '快速投掷高爆手雷，脱手 2 秒后爆炸：85 伤害（4 米）并震慑眩晕 2 秒', cd: 40, mech: 'grenade', power: 85, radius: 4, dur: 2 },
      x: { icon: '☄️', name: '连环爆破', desc: '连续掷出 3 个炸药包，每个 90 伤害（5 米）', cd: 60, mech: 'multiCharge', power: 90, radius: 5, count: 3 },
    },
    growth: { cd: -2, power: 6 },
    passives: [
      { icon: '🦺', name: '防爆服', desc: '受到伤害降低 10%', mods: { reduce: 0.1 } },
      { icon: '⚡', name: '熟练双手', desc: '换弹速度提升 15%', mods: { reload: 0.85 } },
    ],
  },
  {
    id: 'marksman', name: '鹰眼', icon: '🎯', title: '神射手', desc: '被她盯上的人，连影子都会出卖自己。',
    skills: {
      v: { icon: '🔴', name: '死亡标记', desc: '标记 30 米内所有敌人 8 秒，被标记者受伤 +35%', cd: 40, mech: 'mark', power: 0.35, radius: 30, dur: 8 },
      g: { icon: '💫', name: '致眩箭', desc: '射出致眩箭，落点 3 米内敌人眩晕 2 秒', cd: 35, mech: 'blindKnife', radius: 3, dur: 2 },
      x: { icon: '🏹', name: '猎手时刻', desc: '12 秒内锁定全场：所有敌人受伤 +25%，每次击杀回复 10 生命', cd: 55, mech: 'hunter', power: 0.25, dur: 12 },
    },
    growth: { cd: -3, power: 0.03, dur: 0.5 },
    passives: [
      { icon: '🔭', name: '鹰眼视觉', desc: '敌人发现你的距离缩短 20%', mods: { seeRange: 0.8 } },
      { icon: '🎯', name: '稳手', desc: '换弹速度提升 10%', mods: { reload: 0.9 } },
    ],
  },
  {
    id: 'commander', name: '战吼', icon: '🎖️', title: '指挥官', desc: '他的声音就是战场上最可靠的火力支援。（原型：三角洲·蛊）',
    skills: {
      v: { icon: '💉', name: '神经振奋剂', desc: '8 秒内移速 +20%、换弹 +30%、射速 +15%', cd: 40, mech: 'rally', power: 0.2, dur: 8 },
      g: { icon: '🌁', name: '压制烟雾', desc: '投掷 6 米烟幕 10 秒，封锁敌人视野与枪线', cd: 35, mech: 'smoke', radius: 6, dur: 10 },
      x: { icon: '📣', name: '决死号令', desc: '12 秒内全场敌人受伤 +20%，自身每秒回复 3 生命', cd: 60, mech: 'stim', power: 0.2, dur: 12 },
    },
    growth: { cd: -3, dur: 1 },
    passives: [
      { icon: '💪', name: '鼓舞士气', desc: '生命上限 +10', mods: { maxHp: 10 } },
      { icon: '🧭', name: '战场嗅觉', desc: '搜索容器速度提升 20%', mods: { search: 1.2 } },
    ],
  },
  // —— 官方 S12「微光」同步干员：野火（突击型；官方技能：环形烟幕 / 高爆手雷 / 盾式破障器 + 被动愈战愈勇，本游戏按 V/G/X 等价镜像，数值原创） ——
  {
    id: 'wildfire', name: '野火', icon: '🔥', title: '破障突击', desc: '纵是棋子，亦燃微光。她冲锋的路上，没有撞不开的门。（对应官方：野火）',
    skills: {
      v: { icon: '🌀', name: '环形烟幕', desc: '肩载发射器向自身周围发射多枚烟雾弹，展开中空环形烟墙 10 秒：外部看不进来，你看得出去（对应官方：环形烟幕短按模式）', cd: 45, mech: 'ringSmoke', radius: 5.5, dur: 10 },
      g: { icon: '🧨', name: '高爆手雷', desc: '脱手 2.5 秒后爆炸：90 伤害（4.5 米）并震慑眩晕 2 秒（对应官方：延迟引爆高爆手雷）', cd: 45, mech: 'grenade', power: 90, radius: 4.5, dur: 2 },
      x: { icon: '🛡️', name: '盾式破障器', desc: '展开破障盾向前冲锋 12 米：正面受伤减免 80%，撞击后挥盾重击 5 米内 70 伤害并击倒 3 秒（对应官方：冲撞重击造成范围伤害与击倒）', cd: 90, mech: 'dash', power: 12, radius: 2.2, dur: 3, count: 70 },
    },
    growth: { cd: -3, power: 3, dur: 0.3 },
    passives: [
      { icon: '🔥', name: '愈战愈勇', desc: '战意燃烧：移速 +8%、换弹速度 +15%（对应官方：击倒敌人或低血量时短暂提升移速与换弹速度）', mods: { speed: 1.08, reload: 0.85 } },
      { icon: '💨', name: '烟幕随行', desc: '敌人发现你的距离缩短 15%（对应官方：肩载烟幕发射器展开环形烟幕掩护）', mods: { seeRange: 0.85 } },
    ],
  },
]

// ===================== 交易行商品（用金币购买，价格比卖价高不少） =====================
export interface MarketGood { defId: string; price: number }
const gunPrice = (defId: string, mult = 3) => ({ defId, price: Math.round(ITEMS[defId].baseValue * mult / 10) * 10 })
export const MARKET_GOODS: { category: string; icon: string; goods: MarketGood[] }[] = [
  {
    category: '手枪 / 冲锋枪', icon: '🔫',
    goods: [gunPrice('w_p92'), gunPrice('w_deagle'), gunPrice('w_uzi'), gunPrice('w_mp5'), gunPrice('w_vector')],
  },
  {
    category: '霰弹枪 / 步枪', icon: '💥',
    goods: [gunPrice('w_m870'), gunPrice('w_s12k'), gunPrice('w_sks'), gunPrice('w_mini14'), gunPrice('w_akm'), gunPrice('w_m4a1'), gunPrice('w_scar'), gunPrice('w_aug'), gunPrice('w_an94', 3.2)],
  },
  {
    category: '狙击 / 机枪', icon: '🎯',
    goods: [gunPrice('w_m24', 3.5), gunPrice('w_awm', 3.5), gunPrice('w_m700', 3.5), gunPrice('w_m249', 3.5)],
  },
  {
    category: '辅助物资', icon: '🩹',
    goods: [
      { defId: 'm_bandage', price: 150 },
      { defId: 'm_medkit', price: 520 },
      { defId: 'a_ammo', price: 120 },
      { defId: 'a_ammo2', price: 300 },
      { defId: 'a_ammo3', price: 750 },
      { defId: 'm_spray', price: 300 },
    ],
  },
  {
    category: '战术装备', icon: '🛰️',
    goods: [
      { defId: 't_drone', price: 1500 },
      { defId: 't_mine', price: 1200 },
      { defId: 't_smoke', price: 600 },
    ],
  },
  {
    category: '护甲 / 头盔', icon: '🛡️',
    goods: [
      { defId: 'armor1', price: 2700 }, { defId: 'armor2', price: 7800 }, { defId: 'armor3', price: 18600 },
      { defId: 'helmet1', price: 2100 }, { defId: 'helmet2', price: 6000 }, { defId: 'helmet3', price: 14400 },
    ],
  },
  {
    category: '武器配件', icon: '🔧',
    goods: [
      { defId: 'at_rdot', price: 2400 },
      { defId: 'at_comp', price: 2700 },
      { defId: 'at_qmag', price: 2550 },
      { defId: 'at_scope4', price: 6600 },
      { defId: 'at_supp', price: 7800 },
      { defId: 'at_emag', price: 7200 },
      { defId: 'at_grip_v', price: 2850 },
      { defId: 'at_grip_l', price: 2700 },
      { defId: 'at_stock_s', price: 6300 },
      { defId: 'at_stock_l', price: 6000 },
      { defId: 'at_laser', price: 9600 },
      { defId: 'at_pkm_bullpup', price: 12600 },
      { defId: 'at_m250_drum', price: 13800 },
      { defId: 'at_sr25_twin', price: 20400 },
    ],
  },
]

export function rollLootItem(pool: { defId: string; weight: number }[], luck = 0, redBoost = 1) {
  // luck 提升高稀有度物品的权重；redBoost 额外放大红色（高危禁区模式 ×2）
  const weighted = pool.map(e => {
    const idx = RARITY_ORDER.indexOf(ITEMS[e.defId].rarity)
    const rb = ITEMS[e.defId].rarity === 'red' ? redBoost : 1
    return { ...e, w: e.weight * (1 + luck * idx * 1.1) * rb }
  })
  const total = weighted.reduce((s, e) => s + e.w, 0)
  let roll = Math.random() * total
  let picked = weighted[0]
  for (const e of weighted) { roll -= e.w; if (roll <= 0) { picked = e; break } }
  const def = ITEMS[picked.defId]
  const count = def.stack ? 1 + Math.floor(Math.random() * Math.min(3, def.stack)) : 1
  return makeItem(picked.defId, count)
}
