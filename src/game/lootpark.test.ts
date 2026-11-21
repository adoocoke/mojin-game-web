import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { ItemArt } from '@/components/game/ItemArt'
import {
  AIR_LOOT_POOL,
  DF_COLLECTIBLE_IDS,
  ENEMY_LOOT_POOL,
  ITEMS,
  LOOT_POOL,
  NEST_LOOT_POOL,
  VAULT_LOOT_POOL,
  VENDOR_LOOT_POOL,
} from './data'
import { FISH_TABLE } from './fishing'
import { canPlace } from './inventory'
import { PARK_CONTAINERS, PARK_POOLS, openParkContainer } from './lootpark'

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

describe('三角洲官方变卖物全量库', () => {
  it('收录 735 件官方收集品，ID、分组、稀有度与占格完整', () => {
    const official = Object.values(ITEMS).filter(def => def.officialGroup)
    expect(official).toHaveLength(735)
    expect(DF_COLLECTIBLE_IDS).toHaveLength(735)
    expect(new Set(DF_COLLECTIBLE_IDS).size).toBe(735)
    for (const def of official) {
      expect(def.kind).toBe('valuable')
      expect(def.officialId).toMatch(/^\d+$/)
      expect(def.officialGroup).toMatch(/^dfg_/)
      expect(def.w).toBeGreaterThanOrEqual(1)
      expect(def.h).toBeGreaterThanOrEqual(1)
      expect(def.w).toBeLessThanOrEqual(4)
      expect(def.h).toBeLessThanOrEqual(4)
      expect(def.baseValue).toBeGreaterThan(0)
    }
  })

  it('普通/保险柜/敌人/鸟窝/航空箱/售货机战利品引用均存在，变卖物不再回退旧池', () => {
    const pools = {
      LOOT_POOL,
      VAULT_LOOT_POOL,
      ENEMY_LOOT_POOL,
      NEST_LOOT_POOL,
      AIR_LOOT_POOL,
      VENDOR_LOOT_POOL,
    }
    for (const [name, pool] of Object.entries(pools)) {
      expect(pool.length, name).toBeGreaterThan(0)
      for (const entry of pool) {
        const def = ITEMS[entry.defId]
        expect(def, `${name}:${entry.defId}`).toBeDefined()
        if (def.kind === 'valuable') expect(def.officialGroup, `${name}:${entry.defId}`).toBeDefined()
      }
    }
    expect(LOOT_POOL.filter(e => ITEMS[e.defId].officialGroup)).toHaveLength(735)
  })

  it('摸金乐园各品类池非空且引用均存在', () => {
    for (const [cat, pool] of Object.entries(PARK_POOLS)) {
      for (const [rarity, ids] of Object.entries(pool)) {
        expect(ids.length, `${cat}.${rarity}`).toBeGreaterThan(0)
        for (const id of ids) expect(ITEMS[id], `${cat}.${rarity}:${id}`).toBeDefined()
      }
    }
  })

  it('钓鱼池为官方 12 种普通鱼 + 15 种稀有鱼', () => {
    expect(FISH_TABLE).toHaveLength(27)
    expect(FISH_TABLE.filter(f => ITEMS[f.defId].officialGroup === 'dfg_102091')).toHaveLength(12)
    expect(FISH_TABLE.filter(f => ITEMS[f.defId].officialGroup === 'dfg_102092')).toHaveLength(15)
    for (const f of FISH_TABLE) expect(ITEMS[f.defId].officialId).toBeDefined()
  })

  it('735 件官方收集品全部渲染原创 SVG 图标，不走 emoji 兜底', () => {
    for (const id of DF_COLLECTIBLE_IDS) {
      const html = renderToStaticMarkup(createElement(ItemArt, { defId: id, width: 40, height: 40 }))
      expect(html, id).toContain('<svg')
      expect(html, id).toContain('<path')
      expect(html, id).not.toContain('❔')
      expect(html, id).not.toContain(ITEMS[id].icon)
    }
  })
})
