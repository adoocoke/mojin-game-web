import { describe, it, expect } from "vitest";
import { generatePlayerId } from "./playerId";

describe("generatePlayerId", () => {
  it("returns uuid-like 36-char id", () => {
    const id = generatePlayerId();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  });

  it("generates unique ids", () => {
    const set = new Set(Array.from({ length: 50 }, () => generatePlayerId()));
    expect(set.size).toBe(50);
  });
});
