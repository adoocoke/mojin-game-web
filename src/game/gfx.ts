import * as THREE from 'three'
import type { AABB, MapId } from './world'

/**
 * 程序化画质增强模块：地面/墙面贴图、天空穹顶、云、太阳、植被岩石散布、浮尘。
 * 全部由 Canvas/几何体实时生成，原创实现，不使用任何外部素材。
 */

function makeCanvas(size: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas')
  c.width = c.height = size
  return [c, c.getContext('2d')!]
}

function tex(c: HTMLCanvasElement, repeat = 1): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat, repeat)
  t.anisotropy = 4
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

/** 随机斑块铺色 */
function blotch(ctx: CanvasRenderingContext2D, size: number, colors: string[], n: number, rMin: number, rMax: number, alpha: number) {
  for (let i = 0; i < n; i++) {
    const r = rMin + Math.random() * (rMax - rMin)
    ctx.globalAlpha = alpha * (0.5 + Math.random() * 0.5)
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.beginPath()
    ctx.ellipse(Math.random() * size, Math.random() * size, r, r * (0.5 + Math.random() * 0.8), Math.random() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

/** 细小噪点 */
function speckle(ctx: CanvasRenderingContext2D, size: number, colors: string[], n: number, alpha: number) {
  for (let i = 0; i < n; i++) {
    ctx.globalAlpha = alpha * (0.4 + Math.random() * 0.6)
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 2, 1 + Math.random() * 2)
  }
  ctx.globalAlpha = 1
}

export type GroundKind = 'grass' | 'snow' | 'sand' | 'concrete' | 'mud' | 'rock'

const GROUND_PALETTES: Record<GroundKind, { base: string; blot: string[]; speck: string[] }> = {
  grass:    { base: '#66794f', blot: ['#5a6d45', '#71855a', '#4f6240', '#7d8f62'], speck: ['#3f5033', '#8a9c6b', '#55663f'] },
  snow:     { base: '#dde6ef', blot: ['#cfdbe8', '#e8f0f8', '#c2d0de'], speck: ['#b8c8d8', '#ffffff', '#aabbcc'] },
  sand:     { base: '#d8b878', blot: ['#cbaa66', '#e2c88c', '#bfa05e'], speck: ['#a88850', '#eed9a0', '#987848'] },
  concrete: { base: '#787b72', blot: ['#6d7068', '#84887e', '#62655d'], speck: ['#54574e', '#94988e', '#3f423c'] },
  mud:      { base: '#8a7a5a', blot: ['#7d6e50', '#97876a', '#6e6046'], speck: ['#5d5040', '#a89878', '#4e4434'] },
  rock:     { base: '#8b8d90', blot: ['#7e8083', '#989a9d', '#71737a'], speck: ['#606268', '#a8aaad', '#4e5056'] },
}

/** 地面贴图：底色 + 大块色斑 + 噪点，平铺 */
export function groundTexture(kind: GroundKind, repeat: number): THREE.CanvasTexture {
  const S = 512
  const [c, ctx] = makeCanvas(S)
  const p = GROUND_PALETTES[kind]
  ctx.fillStyle = p.base
  ctx.fillRect(0, 0, S, S)
  blotch(ctx, S, p.blot, 90, 20, 90, 0.35)
  blotch(ctx, S, p.blot, 160, 6, 26, 0.3)
  speckle(ctx, S, p.speck, 2600, 0.5)
  return tex(c, repeat)
}

/** 混凝土/墙体贴图：底色 + 竖向水渍 + 水平接缝 + 噪点 */
export function concreteTexture(base: string, repeat = 1): THREE.CanvasTexture {
  const S = 256
  const [c, ctx] = makeCanvas(S)
  ctx.fillStyle = base
  ctx.fillRect(0, 0, S, S)
  blotch(ctx, S, ['#00000022', '#ffffff18', '#00000015'], 60, 14, 60, 0.5)
  // 竖向水渍
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * S
    const w = 3 + Math.random() * 10
    const h = 40 + Math.random() * 140
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, 'rgba(0,0,0,0.16)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.save()
    ctx.translate(x, Math.random() * S * 0.5)
    ctx.fillRect(-w / 2, 0, w, h)
    ctx.restore()
  }
  // 水平接缝
  ctx.strokeStyle = 'rgba(0,0,0,0.22)'
  ctx.lineWidth = 1.5
  for (let y = 0; y < S; y += 42 + Math.floor(Math.random() * 10)) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(S, y); ctx.stroke()
  }
  speckle(ctx, S, ['#00000030', '#ffffff22'], 1500, 0.5)
  return tex(c, repeat)
}

/** 柏油路面贴图 */
export function asphaltTexture(repeat = 1): THREE.CanvasTexture {
  const S = 256
  const [c, ctx] = makeCanvas(S)
  ctx.fillStyle = '#4c514c'
  ctx.fillRect(0, 0, S, S)
  blotch(ctx, S, ['#454a45', '#535850', '#3e443e'], 70, 10, 50, 0.4)
  speckle(ctx, S, ['#5d625c', '#383d38', '#6a6f68'], 2200, 0.55)
  // 裂缝
  ctx.strokeStyle = 'rgba(20,22,20,0.5)'
  ctx.lineWidth = 1
  for (let i = 0; i < 8; i++) {
    let x = Math.random() * S, y = Math.random() * S
    ctx.beginPath(); ctx.moveTo(x, y)
    for (let j = 0; j < 6; j++) { x += (Math.random() - 0.5) * 40; y += Math.random() * 22; ctx.lineTo(x, y) }
    ctx.stroke()
  }
  return tex(c, repeat)
}

/** 草叶簇 alpha 贴图 */
function grassBladeTexture(): THREE.CanvasTexture {
  const S = 64
  const [c, ctx] = makeCanvas(S)
  ctx.clearRect(0, 0, S, S)
  for (let i = 0; i < 22; i++) {
    const x = 6 + Math.random() * (S - 12)
    const h = 26 + Math.random() * 34
    const g = ctx.createLinearGradient(0, S, 0, S - h)
    g.addColorStop(0, '#3d4f2c')
    g.addColorStop(1, '#7d955c')
    ctx.strokeStyle = g
    ctx.lineWidth = 2 + Math.random() * 2
    ctx.beginPath()
    ctx.moveTo(x, S)
    ctx.quadraticCurveTo(x + (Math.random() - 0.5) * 8, S - h * 0.6, x + (Math.random() - 0.5) * 16, S - h)
    ctx.stroke()
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

/** 云朵贴图：柔和团块 */
export function cloudTexture(): THREE.CanvasTexture {
  const S = 128
  const [c, ctx] = makeCanvas(S)
  ctx.clearRect(0, 0, S, S)
  for (let i = 0; i < 16; i++) {
    const x = S * 0.2 + Math.random() * S * 0.6
    const y = S * 0.35 + Math.random() * S * 0.3
    const r = 12 + Math.random() * 22
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, 'rgba(255,255,255,0.55)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

/** 太阳光晕贴图 */
function sunTexture(): THREE.CanvasTexture {
  const S = 128
  const [c, ctx] = makeCanvas(S)
  const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
  g.addColorStop(0, 'rgba(255,250,230,1)')
  g.addColorStop(0.25, 'rgba(255,240,200,0.9)')
  g.addColorStop(0.6, 'rgba(255,220,160,0.25)')
  g.addColorStop(1, 'rgba(255,210,140,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, S, S)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

/** 天空穹顶 + 太阳 + 云层（白天场景） */
export function buildSky(scene: THREE.Scene, topColor: number, horizonColor: number, sunPos: THREE.Vector3) {
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(330, 28, 18),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color(topColor) },
        bottom: { value: new THREE.Color(horizonColor) },
      },
      vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 top; uniform vec3 bottom; varying vec3 vPos;
        void main(){ float h = clamp(normalize(vPos).y, 0.0, 1.0); float t = pow(h, 0.62);
        gl_FragColor = vec4(mix(bottom, top, t), 1.0); }`,
    }))
  dome.renderOrder = -10
  scene.add(dome)

  // 太阳光晕
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTexture(), transparent: true, depthWrite: false, fog: false }))
  sun.scale.set(90, 90, 1)
  sun.position.copy(sunPos).normalize().multiplyScalar(300)
  scene.add(sun)

  // 云
  const ct = cloudTexture()
  for (let i = 0; i < 9; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ct, transparent: true, opacity: 0.5 + Math.random() * 0.3, depthWrite: false, fog: false }))
    const s = 55 + Math.random() * 70
    sp.scale.set(s, s * 0.42, 1)
    const a = Math.random() * Math.PI * 2
    const r = 120 + Math.random() * 150
    sp.position.set(Math.cos(a) * r, 68 + Math.random() * 60, Math.sin(a) * r)
    scene.add(sp)
  }
}

/** 漂浮尘土（大战场/白天场景氛围） */
export function buildDust(scene: THREE.Scene, size: number): THREE.Points {
  const N = 260
  const pos = new Float32Array(N * 3)
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * size * 1.6
    pos[i * 3 + 1] = 0.4 + Math.random() * 9
    pos[i * 3 + 2] = (Math.random() - 0.5) * size * 1.6
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const [c, ctx] = makeCanvas(32)
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
  g.addColorStop(0, 'rgba(255,245,220,0.5)')
  g.addColorStop(1, 'rgba(255,245,220,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 32, 32)
  const mat = new THREE.PointsMaterial({ size: 0.35, map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.45, depthWrite: false })
  const pts = new THREE.Points(geo, mat)
  scene.add(pts)
  return pts
}

function inColliders(colliders: AABB[], x: number, z: number, pad = 1): boolean {
  for (const c of colliders) {
    if (x > c.minX - pad && x < c.maxX + pad && z > c.minZ - pad && z < c.maxZ + pad) return true
  }
  return false
}

/** 场景散布装饰：岩石 / 草丛 / 灌木 / 仙人掌 / 雪堆（全部 InstancedMesh，零碰撞、纯视觉） */
export function scatterDecor(scene: THREE.Scene, mapId: MapId, size: number, colliders: AABB[]) {
  const rng = (() => { let s = 20261004 + mapId.length; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 } })()
  const half = size - 7
  const rand = () => (rng() - 0.5) * 2 * half
  //  wild 的道路网格（草丛别长在路中间）
  const onRoad = (x: number, z: number) => mapId === 'wild' &&
    ([-80, -40, 0, 40, 80].some(r => Math.abs(z - r) < 4.5) || [-80, -40, 0, 40, 80].some(r => Math.abs(x - r) < 4.5))
  const place = (n: number, pad: number): [number, number][] => {
    const out: [number, number][] = []
    let guard = 0
    while (out.length < n && guard++ < n * 12) {
      const x = rand(), z = rand()
      if (inColliders(colliders, x, z, pad) || onRoad(x, z)) continue
      out.push([x, z])
    }
    return out
  }

  const dummy = new THREE.Object3D()

  // 岩石
  const rockSpec: Record<string, [number, number]> = { // [数量, 基础尺寸]
    wild: [70, 0.9], tower: [55, 0.8], prison: [45, 0.8], snow: [40, 0.9], desert: [90, 1.0],
    blocks: [70, 0.6], pipeline: [55, 0.55], trench: [80, 0.65],
  }
  const [rockN, rockS] = rockSpec[mapId] ?? [50, 0.8]
  {
    const geo = new THREE.IcosahedronGeometry(1, 0)
    const mat = new THREE.MeshStandardMaterial({ color: mapId === 'desert' ? 0xa88858 : mapId === 'snow' ? 0xc8d4e0 : 0x7d7f76, roughness: 0.95, flatShading: true })
    const inst = new THREE.InstancedMesh(geo, mat, rockN)
    place(rockN, 1.2).forEach(([x, z], i) => {
      dummy.position.set(x, rockS * 0.25, z)
      dummy.rotation.set(rng() * 0.6, rng() * Math.PI * 2, rng() * 0.6)
      dummy.scale.set(rockS * (0.5 + rng()), rockS * (0.35 + rng() * 0.7), rockS * (0.5 + rng()))
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.castShadow = true
    inst.receiveShadow = true
    scene.add(inst)
  }

  // 草丛（十字交叉面片 + alpha 草叶贴图）
  const grassSpec: Record<string, number> = { wild: 520, tower: 240, prison: 180, desert: 0, snow: 0, blocks: 240, pipeline: 260, trench: 380 }
  const grassN = grassSpec[mapId] ?? 0
  if (grassN) {
    const p1 = new THREE.PlaneGeometry(1, 0.65)
    const p2 = p1.clone().rotateY(Math.PI / 2)
    const geo = mergeGeos([p1, p2])
    const mat = new THREE.MeshStandardMaterial({ map: grassBladeTexture(), alphaTest: 0.35, side: THREE.DoubleSide, roughness: 1 })
    const inst = new THREE.InstancedMesh(geo, mat, grassN)
    place(grassN, 0.4).forEach(([x, z], i) => {
      dummy.position.set(x, 0.3, z)
      dummy.rotation.set(0, rng() * Math.PI, 0)
      const s = 0.6 + rng() * 0.9
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.receiveShadow = true
    scene.add(inst)
  }

  // 灌木（深绿压扁多面体）
  const bushSpec: Record<string, number> = { wild: 42, tower: 22, prison: 14, desert: 26, snow: 0, blocks: 0, pipeline: 16, trench: 30 }
  const bushN = bushSpec[mapId] ?? 0
  if (bushN) {
    const geo = new THREE.IcosahedronGeometry(1, 1)
    const mat = new THREE.MeshStandardMaterial({ color: mapId === 'desert' ? 0x8a7a44 : 0x44582e, roughness: 1, flatShading: true })
    const inst = new THREE.InstancedMesh(geo, mat, bushN)
    place(bushN, 1).forEach(([x, z], i) => {
      dummy.position.set(x, 0.5, z)
      dummy.rotation.set(0, rng() * Math.PI * 2, 0)
      const s = 0.7 + rng() * 0.9
      dummy.scale.set(s, s * 0.72, s)
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.castShadow = true
    scene.add(inst)
  }

  // 沙漠仙人掌
  if (mapId === 'desert') {
    const geo = mergeGeos([
      new THREE.CylinderGeometry(0.22, 0.28, 2.4, 7).translate(0, 1.2, 0),
      new THREE.CylinderGeometry(0.14, 0.16, 1.1, 6).rotateZ(Math.PI / 2.4).translate(0.55, 1.5, 0),
      new THREE.CylinderGeometry(0.14, 0.16, 0.9, 6).rotateZ(-Math.PI / 2.6).translate(-0.5, 1.1, 0),
    ])
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a7a3a, roughness: 0.9 })
    const inst = new THREE.InstancedMesh(geo, mat, 34)
    place(34, 1).forEach(([x, z], i) => {
      dummy.position.set(x, 0, z)
      dummy.rotation.set(0, rng() * Math.PI * 2, 0)
      const s = 0.7 + rng() * 0.8
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.castShadow = true
    scene.add(inst)
  }

  // 雪地雪堆
  if (mapId === 'snow') {
    const geo = new THREE.SphereGeometry(1, 10, 7)
    const mat = new THREE.MeshStandardMaterial({ color: 0xe8f0f8, roughness: 1 })
    const inst = new THREE.InstancedMesh(geo, mat, 55)
    place(55, 1).forEach(([x, z], i) => {
      dummy.position.set(x, -0.35, z)
      dummy.rotation.set(0, rng() * Math.PI, 0)
      const s = 1 + rng() * 2.2
      dummy.scale.set(s, s * 0.4, s)
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.receiveShadow = true
    scene.add(inst)
  }

  // 烬区/堑壕：瓦砾堆
  if (mapId === 'blocks' || mapId === 'trench') {
    const geo = new THREE.TetrahedronGeometry(0.8, 0)
    const mat = new THREE.MeshStandardMaterial({ color: mapId === 'blocks' ? 0x6a6d66 : 0x8a7a5e, roughness: 1, flatShading: true })
    const inst = new THREE.InstancedMesh(geo, mat, 46)
    place(46, 0.8).forEach(([x, z], i) => {
      dummy.position.set(x, 0.15, z)
      dummy.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI)
      const s = 0.4 + rng() * 0.9
      dummy.scale.set(s, s * 0.7, s)
      dummy.updateMatrix()
      inst.setMatrixAt(i, dummy.matrix)
    })
    inst.castShadow = true
    inst.receiveShadow = true
    scene.add(inst)
  }
}

/** 简易 BufferGeometry 合并（position/normal/uv 属性直接拼接） */
function mergeGeos(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  let vCount = 0, iCount = 0
  for (const g of geos) {
    vCount += g.attributes.position.count
    iCount += g.index ? g.index.count : g.attributes.position.count
  }
  const pos = new Float32Array(vCount * 3)
  const norm = new Float32Array(vCount * 3)
  const uv = new Float32Array(vCount * 2)
  const idx = new Uint16Array(iCount)
  let vOff = 0, iOff = 0
  for (const g of geos) {
    const p = g.attributes.position, n = g.attributes.normal, u = g.attributes.uv
    pos.set(p.array as Float32Array, vOff * 3)
    if (n) norm.set(n.array as Float32Array, vOff * 3)
    if (u) uv.set(u.array as Float32Array, vOff * 2)
    if (g.index) {
      const arr = g.index.array
      for (let i = 0; i < arr.length; i++) idx[iOff + i] = arr[i] + vOff
      iOff += arr.length
    } else {
      for (let i = 0; i < p.count; i++) idx[iOff + i] = vOff + i
      iOff += p.count
    }
    vOff += p.count
  }
  const out = new THREE.BufferGeometry()
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  out.setAttribute('normal', new THREE.BufferAttribute(norm, 3))
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  out.setIndex(new THREE.BufferAttribute(idx, 1))
  return out
}
