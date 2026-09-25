// 废弃矿区地下矿井可达性回归测试：
// 曾有的 bug——坡道与主巷道地板 0.5m 断层 + 巷道延伸到坡道正下方被「就近面优先」吸回地表，
// 导致地下部分根本进不去。入口已迁至主巷道南端（z=-50），坡道与巷道仅交界不重叠。
import { describe, it, expect } from 'vitest'
import { buildWorld } from './world'

const w = buildWorld('wild', false, false)

// 复刻 engine.groundHeightAt
function ground(x: number, z: number, feet: number): number {
  let best = 0, local = -Infinity
  const limit = feet + 0.55
  for (const wl of w.walkables) {
    if (x < wl.minX || x > wl.maxX || z < wl.minZ || z > wl.maxZ) continue
    let y: number
    if (!wl.axis || wl.y0 === wl.y1) y = wl.y0
    else {
      const t = wl.axis === 'x' ? (x - wl.minX) / (wl.maxX - wl.minX) : (z - wl.minZ) / (wl.maxZ - wl.minZ)
      y = wl.y0 + Math.max(0, Math.min(1, t)) * (wl.y1 - wl.y0)
    }
    if (y > limit) continue
    if (y > best) best = y
    if (y >= feet - 0.55 && y > local) local = y
  }
  return local > -Infinity ? local : best
}

function walk(x0: number, z0: number, x1: number, z1: number, feet0: number): number {
  let f = feet0
  for (let i = 1; i <= 300; i++) {
    const x = x0 + (x1 - x0) * i / 300, z = z0 + (z1 - z0) * i / 300
    const g = ground(x, z, f)
    if (Math.abs(g - f) > 0.55) throw new Error(`(${x.toFixed(1)},${z.toFixed(1)}) 地面 ${f.toFixed(2)}→${g.toFixed(2)} 断裂`)
    f = g
  }
  return f
}

describe('废弃矿区地下矿井可达性', () => {
  it('坡道可下行到地下 -4', () => {
    const f = walk(24, -38, 24, -57.3, 0)
    expect(f).toBeLessThan(-3.8)
  })
  it('主巷道全程保持 -4（不被坡道吸回地表）', () => {
    expect(walk(24, -58, 24, -108, -4)).toBe(-4)
  })
  it('支巷与矿室可走通', () => {
    expect(walk(24, -84, 45, -84, -4)).toBe(-4)   // 东支巷
    expect(walk(46, -84, 54, -84, -4)).toBe(-4)   // 东矿室
    expect(walk(22, -68, 5, -68, -4)).toBe(-4)    // 西支巷
    expect(walk(4, -68, -5, -68, -4)).toBe(-4)    // 西矿室
  })
  it('返程可回到地表', () => {
    const f = walk(24, -100, 24, -58.5, -4)
    expect(f).toBe(-4)
    const f2 = walk(24, -57.3, 24, -38, f)
    expect(Math.abs(f2)).toBeLessThan(0.45)
  })
  it('地下容器位置均可站立', () => {
    for (const [x, z] of [[24, -107], [23, -61], [36, -84], [55, -90], [-5, -59]]) {
      expect(ground(x, z, -4)).toBe(-4)
    }
  })
})
