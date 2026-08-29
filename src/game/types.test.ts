import { describe, it, expect } from "vitest";
import {
  RARITY_ORDER,
  RARITY_INFO,
  itemValue,
  itemWeight,
  type ItemDef,
  type Rarity,
} from "./types";

function mockDef(partial: Partial<ItemDef> & Pick<ItemDef, "id" | "name" | "kind" | "rarity" | "w" | "h" | "baseValue" | "icon">): ItemDef {
  return partial as ItemDef;
}

describe("RARITY_ORDER", () => {
  it("has 6 rarities from white to red", () => {
    expect(RARITY_ORDER).toEqual(["white", "green", "blue", "purple", "cyan", "red"]);
  });

  it("RARITY_INFO covers every rarity with increasing mult", () => {
    const mults = RARITY_ORDER.map((r) => RARITY_INFO[r].mult);
    for (let i = 1; i < mults.length; i++) {
      expect(mults[i]).toBeGreaterThan(mults[i - 1]);
    }
  });
});

describe("itemValue", () => {
  it("returns baseValue regardless of rarity argument", () => {
    const def = mockDef({
      id: "t1",
      name: "测试",
      kind: "valuable",
      rarity: "red",
      w: 1,
      h: 1,
      baseValue: 500,
      icon: "◆",
    });
    expect(itemValue(def)).toBe(500);
    expect(itemValue(def, "white" as Rarity)).toBe(500);
  });
});

describe("itemWeight", () => {
  it("uses explicit weight when provided", () => {
    const def = mockDef({
      id: "heavy",
      name: "重物",
      kind: "valuable",
      rarity: "red",
      w: 3,
      h: 3,
      baseValue: 1000,
      icon: "■",
      weight: 25,
    });
    expect(itemWeight(def)).toBe(25);
  });

  it("estimates weight from grid size when weight is omitted", () => {
    const def = mockDef({
      id: "small",
      name: "小件",
      kind: "valuable",
      rarity: "white",
      w: 2,
      h: 1,
      baseValue: 100,
      icon: "·",
    });
    // 2 * 1 * 0.4 = 0.8
    expect(itemWeight(def)).toBeCloseTo(0.8);
  });
});
