import { describe, it, expect, beforeEach } from 'vitest'
import { rollRavenOutcome, redeemTrick, TRICK_SHOP, RAVEN_CANDLES, loadTrickster } from './trickster'

// localStorage shim（node 环境）
const store: Record<string, string> = {}
;(globalThis as any).localStorage = {
  getItem: (k: string) => store[k] ?? null,
  setItem: (k: string, v: string) => { store[k] = v },
  removeItem: (k: string) => { delete store[k] },
}

describe('惊喜渡鸦判定', () => {
  it('首次提交：整蛊概率低', () => {
    // lampUsed=0: surprise 0.12, trick 0.08, down 0.26, equal 0.54
    expect(rollRavenOutcome(0, () => 0.05)).toBe('surprise')
    expect(rollRavenOutcome(0, () => 0.15)).toBe('trick')
    expect(rollRavenOutcome(0, () => 0.3)).toBe('down')
    expect(rollRavenOutcome(0, () => 0.9)).toBe('equal')
  })
  it('蜡烛将尽：惊喜与整蛊概率同步抬升', () => {
    const u = RAVEN_CANDLES - 1 // surprise 0.37→cap 0.35, trick 0.38
    expect(rollRavenOutcome(u, () => 0.3)).toBe('surprise')   // 首次同概率落在 trick 段
    expect(rollRavenOutcome(u, () => 0.5)).toBe('trick')
  })
})

describe('捣蛋鬼商店', () => {
  beforeEach(() => { for (const k of Object.keys(store)) delete store[k] })
  it('兑换喷漆：扣代币并入收藏', () => {
    const s = loadTrickster(); s.tokens = 10
    ;(globalThis as any).localStorage.setItem('mojin_trickster_v1', JSON.stringify(s))
    const r = redeemTrick('ts_spray')
    expect(r?.payload).toBe('cos_spray_gaga')
    expect(loadTrickster().tokens).toBe(4)
  })
  it('代币不足拒绝兑换', () => {
    expect(redeemTrick('ts_asara')).toBeNull()
  })
})
