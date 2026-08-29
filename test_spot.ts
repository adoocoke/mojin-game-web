import { buildWorld } from './src/game/world'
import { MAP_MISSIONS } from './src/game/missions'
import type { MapId } from './src/game/world'

// 玩家站立位是否被除道具自身外的碰撞体挡住
const standable = (map: MapId, sx: number, sz: number, floorY: number, props: { x: number; z: number }[]) => {
  const w = buildWorld(map)
  return !w.colliders.some(c => {
    if ((c.top ?? 0) < floorY + 0.8 || (c.base ?? 0) > floorY + 0.8) return false
    const cx = (c.minX + c.maxX) / 2, cz = (c.minZ + c.maxZ) / 2
    if (props.some(p => Math.hypot(p.x - cx, p.z - cz) < 2)) return false // 道具自身
    return sx + 0.8 > c.minX && sx - 0.8 < c.maxX && sz + 0.8 > c.minZ && sz - 0.8 < c.maxZ
  })
}
// 每个点：道具位 + 玩家站位（道具旁）
const cases: [MapId, string, number, number, number, number, number][] = [
  // map, 名称, 道具x, 道具z, floorY, 站位x, 站位z
  ['wild', '终端', 8, -80, 0, 8, -78.2],
  ['wild', '炸药台', -16.6, -32.6, 0, -15, -34.2],
  ['tower', '终端', -95, 6, 0, -95, 7.8],
  ['tower', '发射器', 5, 5, 10.2, 5, 6.8],
  ['prison', '终端', 8, 100, 0, 8, 101.8],
  ['prison', '信标', -52, 24, 0, -52, 25.8],
  ['snow', '终端', 8, 100, 0, 8, 101.8],
  ['snow', '主控台', 2, -74, 3.4, 2, -72.2],
]
let ok = true
for (const [map, name, px, pz, fy, sx, sz] of cases) {
  const free = standable(map, sx, sz, fy, [{ x: px, z: pz }])
  // 站位需在交互半径内
  const m = MAP_MISSIONS[map]
  const tgt = name === '终端' ? m.acceptPos : m.objPos
  const inRange = Math.hypot(tgt.x - sx, tgt.z - sz) < 2.8
  console.log(map, name, free ? '站位OK' : '❌站位被挡', inRange ? '在交互半径' : '❌超出半径')
  if (!free || !inRange) ok = false
}
console.log(ok ? 'ALL PASS' : 'FAIL')
