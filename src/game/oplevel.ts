// ===================== 干员技能升级系统 =====================
// 通过对局获得干员经验，提升干员等级（1-5 级），强化主动技能（减冷却/加效果/加时长）。
import type { OperatorDef, SkillDef } from './data'
import type { RaidStats } from './quests'

const KEY = 'mojin_op_xp'
export const MAX_OP_LV = 5
// 升到 2/3/4/5 级所需的累计经验
export const XP_THRESH = [100, 250, 500, 900]

export function loadOpXp(): Record<string, number> {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as Record<string, number>
  } catch { /* 忽略 */ }
  return {}
}

export function saveOpXp(xp: Record<string, number>) {
  try { localStorage.setItem(KEY, JSON.stringify(xp)) } catch { /* 忽略 */ }
}

/** 累计经验 → 等级（1-5） */
export function opLevel(xp: number): number {
  let lv = 1
  for (const t of XP_THRESH) if (xp >= t) lv++
  return Math.min(MAX_OP_LV, lv)
}

/** 等级进度：当前等级、级内进度、到下一级还差多少（满级 next=0） */
export function lvProgress(xp: number): { lv: number; cur: number; next: number } {
  const lv = opLevel(xp)
  if (lv >= MAX_OP_LV) return { lv, cur: 1, next: 0 }
  const base = lv === 1 ? 0 : XP_THRESH[lv - 2]
  const top = XP_THRESH[lv - 1]
  return { lv, cur: (xp - base) / (top - base), next: top - xp }
}

/** 按等级计算技能实际数值（cd 最少 12 秒，减伤类上限 85%；对 V/G/X 三技能统一成长） */
export function effSkill(op: OperatorDef, slot: 'v' | 'g' | 'x', lv: number): SkillDef {
  const base = op.skills[slot]
  const g = op.growth ?? {}
  const k = lv - 1
  const cd = Math.max(12, base.cd + (g.cd ?? 0) * k)
  let power = base.power == null ? undefined : base.power + (g.power ?? 0) * k
  if (power != null && (base.mech === 'armor' || base.mech === 'shield')) power = Math.min(0.85, power)
  if (power != null && base.mech === 'overdrive') power = Math.min(0.6, power)
  const dur = base.dur == null ? undefined : base.dur + (g.dur ?? 0) * k
  return {
    ...base,
    cd: Math.round(cd),
    power: power == null ? undefined : Math.round(power * 100) / 100,
    dur: dur == null ? undefined : Math.round(dur * 10) / 10,
  }
}

/** 单局经验：击杀 +10，Boss +50，成功撤离 +40，带出价值每 1000 +2 */
export function xpForRaid(s: RaidStats): number {
  return s.kills * 10 + s.bossKills * 50 + (s.extracted ? 40 : 0) + Math.floor(s.raidValue / 1000) * 2
}

/** 技能描述（带等级成长后的冷却，用于界面预览） */
export function effDesc(op: OperatorDef, slot: 'v' | 'g' | 'x', lv: number): string {
  const a = effSkill(op, slot, lv)
  return `${a.desc} · 冷却 ${a.cd}s`
}
