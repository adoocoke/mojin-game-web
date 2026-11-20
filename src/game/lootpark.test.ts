import { describe, expect, it } from 'vitest'
import { ITEMS } from './data'
import { canPlace } from './inventory'
import { PARK_CONTAINERS, openParkContainer } from './lootpark'

describe('摸金乐园页面直选容器', () => {
  it('每种容器都能开出不越界、不重叠的物资', () => {
    for (const def of PARK_CONTAINERS) {
      for (let i = 0; i < 30; i++) {
        const r = openParkContainer(def)
        expect(r.grid.cols).toBe(def.gridW)
        expect(r.grid.rows).toBe(def.gridH)
        expect(r.grid.placed.length).toBeGreaterThan(0)
        for (const p of r.grid.placed) {
          const item = ITEMS[p.item.defId]
          expect(item.w).toBeLessThanOrEqual(def.gridW)
          expect(item.h).toBeLessThanOrEqual(def.gridH)
          expect(canPlace(r.grid, item.w, item.h, p.x, p.y, p.item.uid)).toBe(true)
        }
      }
    }
  })
})
