import { describe, it, expect } from "vitest";
import {
  makeGrid,
  canPlace,
  findSpot,
  mergeStacks,
  autoPlace,
  placeAt,
  removeItem,
  hitTest,
  gridValue,
  cloneGrid,
} from "./inventory";
import type { ItemInstance } from "./types";
import { ITEMS } from "./data";

function makeItem(defId: string, count = 1, uid = `uid-${defId}-${count}`): ItemInstance {
  const def = ITEMS[defId];
  if (!def) throw new Error(`unknown item ${defId}`);
  return { uid, defId, rarity: def.rarity, count };
}

describe("makeGrid", () => {
  it("creates empty grid with given size", () => {
    const g = makeGrid(5, 4);
    expect(g.cols).toBe(5);
    expect(g.rows).toBe(4);
    expect(g.placed).toEqual([]);
  });
});

describe("canPlace / findSpot", () => {
  it("rejects out-of-bounds placement", () => {
    const g = makeGrid(3, 3);
    expect(canPlace(g, 2, 2, 2, 0)).toBe(false);
    expect(canPlace(g, 1, 1, -1, 0)).toBe(false);
  });

  it("allows placement on empty grid", () => {
    const g = makeGrid(4, 4);
    expect(canPlace(g, 2, 2, 0, 0)).toBe(true);
    expect(findSpot(g, 2, 2)).toEqual({ x: 0, y: 0 });
  });

  it("detects overlap with existing item", () => {
    const g = makeGrid(4, 4);
    const coin = makeItem("v_coin");
    placeAt(g, coin, 0, 0);
    const def = ITEMS.v_coin;
    // same cell should be blocked
    expect(canPlace(g, def.w, def.h, 0, 0)).toBe(false);
    // ignore own uid allows move
    expect(canPlace(g, def.w, def.h, 0, 0, coin.uid)).toBe(true);
  });
});

describe("placeAt / removeItem / hitTest", () => {
  it("places, hits and removes item", () => {
    const g = makeGrid(6, 6);
    const item = makeItem("w_p92");
    expect(placeAt(g, item, 1, 1)).toBe(true);
    expect(g.placed).toHaveLength(1);

    const hit = hitTest(g, 1, 1);
    expect(hit?.item.uid).toBe(item.uid);

    const removed = removeItem(g, item.uid);
    expect(removed?.item.uid).toBe(item.uid);
    expect(g.placed).toHaveLength(0);
    expect(hitTest(g, 1, 1)).toBeNull();
  });
});

describe("mergeStacks / autoPlace", () => {
  it("merges stackable items up to stack limit", () => {
    const g = makeGrid(6, 6);
    const a = makeItem("v_coin", 3, "c1");
    const b = makeItem("v_coin", 3, "c2");
    expect(autoPlace(g, a)).toBe(true);
    expect(autoPlace(g, b)).toBe(true);

    const total = g.placed
      .filter((p) => p.item.defId === "v_coin")
      .reduce((s, p) => s + p.item.count, 0);
    expect(total).toBe(6);

    // stack limit is 5 → should be one full stack + remainder
    const stacks = g.placed.filter((p) => p.item.defId === "v_coin");
    expect(stacks.some((p) => p.item.count === 5)).toBe(true);
  });

  it("fails autoPlace when grid has no free cell for non-stackable item", () => {
    // w_p92 is 2x1 — fill a 2x1 grid then second gun must fail
    const g = makeGrid(2, 1);
    const gun1 = makeItem("w_p92", 1, "g1");
    const gun2 = makeItem("w_p92", 1, "g2");
    expect(autoPlace(g, gun1)).toBe(true);
    expect(autoPlace(g, gun2)).toBe(false);
  });
});

describe("gridValue / cloneGrid", () => {
  it("sums item values by count", () => {
    const g = makeGrid(8, 8);
    const bandage = makeItem("m_bandage", 2, "b1");
    autoPlace(g, bandage);
    const expected = ITEMS.m_bandage.baseValue * 2;
    expect(gridValue(g)).toBe(expected);
  });

  it("cloneGrid is a shallow-deep copy of placed items", () => {
    const g = makeGrid(4, 4);
    autoPlace(g, makeItem("v_coin", 1, "x1"));
    const c = cloneGrid(g);
    expect(c.placed).toHaveLength(1);
    expect(c.placed[0].item).not.toBe(g.placed[0].item); // different object
    expect(c.placed[0].item.uid).toBe(g.placed[0].item.uid);
    c.placed[0].item.count = 99;
    expect(g.placed[0].item.count).toBe(1); // original unchanged
  });
});
