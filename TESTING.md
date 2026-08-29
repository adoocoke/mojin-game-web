# 测试规范（Testing Standards）

本项目使用 **Vitest** 做单元 / 逻辑测试。CI 在每次 push / PR 到 `main` 时会执行 `npm run test`。

## 目录与命名

| 类型 | 位置 | 命名 |
|------|------|------|
| 游戏逻辑单元测试 | `src/game/**/*.test.ts` | 与源文件同名 + `.test.ts` |
| API / 服务端测试 | `api/**/*.test.ts` | 同上 |
| 临时脚本（不进 CI） | 根目录或 `scripts/` | 不要用 `.test.ts` 后缀 |

示例：
- `src/game/inventory.ts` → `src/game/inventory.test.ts`
- `src/game/types.ts` → `src/game/types.test.ts`

## 写测试的原则

1. **优先测纯函数**：无 DOM、无 Three.js、无 localStorage 的逻辑（背包、价值、稀有度、任务进度计算等）。
2. **一个 `describe` 对应一个功能点**，`it` 描述行为（中文或英文均可，保持清晰）。
3. **不要依赖真实网络 / 真实时间**：需要时用 mock。
4. **断言要明确**：优先 `toBe` / `toEqual` / `toBeCloseTo`，避免过宽的 `toBeTruthy`。
5. **测试要稳定、可重复**：不依赖执行顺序、随机数要固定种子或 mock。

## 推荐覆盖的模块（优先级）

| 优先级 | 模块 | 说明 |
|--------|------|------|
| P0 | `types.ts` / `inventory.ts` | 格子、堆叠、重量、价值（已有基础用例） |
| P0 | 纯计算：伤害、负重档位、任务完成判定 | 规则一旦写错影响全游戏 |
| P1 | `achievements.ts`（需 mock localStorage） | 成就进度与领奖 |
| P1 | `quests.ts` / `missions.ts` 中的纯逻辑 | 进度、奖励结算 |
| P2 | `engine` / `world` | 需要更多 mock，适合后续补 |

## 本地命令

```bash
# 跑全部测试
npm run test

# 与 CI 一致的完整检查
npm run ci

# 监听模式（开发时）
npx vitest

# 只跑某个文件
npx vitest src/game/inventory.test.ts
```

## CI 中的行为

`.github/workflows/ci.yml` 中的步骤：

1. TypeScript 类型检查
2. ESLint
3. Prettier 格式检查
4. **Vitest 单元测试** ← 必须通过

任一失败都会让 CI 变红。

## 新增测试检查清单

- [ ] 文件名符合 `*.test.ts`
- [ ] 放在与源码对应的目录
- [ ] 不依赖浏览器全局（或已正确 mock）
- [ ] 本地 `npm run test` 通过
- [ ] 无 flaky（偶发失败）断言

## 当前已有基础测试

- `src/game/types.test.ts` — 稀有度顺序、itemValue、itemWeight
- `src/game/inventory.test.ts` — 网格创建、放置、重叠、堆叠、价值、克隆

后续请在改核心规则时同步补测试。
