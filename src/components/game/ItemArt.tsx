import type { ReactNode } from 'react'
import { ITEMS } from '@/game/data'

/**
 * 变卖物矢量图标库 —— 原创绘制，写实藏品风格。
 * 每个图标 64×64 视窗：材质渐变着色 + 镜面高光 + 落地软阴影，营造体积感与金属/玻璃/宝石质感。
 * 未收录的 defId（武器/护甲/医疗等）回退到 data.ts 里的 emoji。
 */

/** 共享材质渐变：金 / 银 / 钢 / 青铜 / 木 / 皮 / 纸 / 玻璃 / 宝石 / 特种 */
const D = (
  <defs>
    <linearGradient id="iaGoldV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#f8dc7e" /><stop offset="0.5" stopColor="#d9a832" /><stop offset="1" stopColor="#9a6d12" />
    </linearGradient>
    <radialGradient id="iaGoldR" cx="0.38" cy="0.3" r="0.8">
      <stop offset="0" stopColor="#fff6cf" /><stop offset="0.55" stopColor="#ecc255" /><stop offset="1" stopColor="#a3741a" />
    </radialGradient>
    <linearGradient id="iaSilver" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#f7fafc" /><stop offset="0.45" stopColor="#ccd3da" /><stop offset="0.8" stopColor="#98a2ad" /><stop offset="1" stopColor="#6e7883" />
    </linearGradient>
    <linearGradient id="iaSteel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#8d97a2" /><stop offset="0.5" stopColor="#5f6873" /><stop offset="1" stopColor="#3c434c" />
    </linearGradient>
    <linearGradient id="iaIron" x1="0" y1="0" x2="0.25" y2="1">
      <stop offset="0" stopColor="#525a64" /><stop offset="0.55" stopColor="#333940" /><stop offset="1" stopColor="#20242a" />
    </linearGradient>
    <linearGradient id="iaBronze" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#e5b787" /><stop offset="0.5" stopColor="#b37a44" /><stop offset="1" stopColor="#7c4f26" />
    </linearGradient>
    <linearGradient id="iaWood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#9a6b40" /><stop offset="0.5" stopColor="#7a4f2c" /><stop offset="1" stopColor="#57371d" />
    </linearGradient>
    <linearGradient id="iaLeather" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#6b4a34" /><stop offset="1" stopColor="#402a1c" />
    </linearGradient>
    <linearGradient id="iaPaper" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0" stopColor="#f5ecd6" /><stop offset="1" stopColor="#d8c9a4" />
    </linearGradient>
    <radialGradient id="iaLens" cx="0.35" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#d8f2fb" /><stop offset="0.5" stopColor="#5d9fc0" /><stop offset="1" stopColor="#1d4a66" />
    </radialGradient>
    <radialGradient id="iaGemR" cx="0.35" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#ffb3b8" /><stop offset="0.45" stopColor="#d5243c" /><stop offset="1" stopColor="#6e0f1d" />
    </radialGradient>
    <radialGradient id="iaGemB" cx="0.35" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#c2e8ff" /><stop offset="0.45" stopColor="#2b83c6" /><stop offset="1" stopColor="#0f3d68" />
    </radialGradient>
    <radialGradient id="iaGemG" cx="0.35" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#c8f2cd" /><stop offset="0.45" stopColor="#2e9e5b" /><stop offset="1" stopColor="#12512c" />
    </radialGradient>
    <radialGradient id="iaGemC" cx="0.4" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#ffffff" /><stop offset="0.5" stopColor="#bfeaf4" /><stop offset="1" stopColor="#6db4cf" />
    </radialGradient>
    <radialGradient id="iaPearl" cx="0.35" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#ffffff" /><stop offset="0.6" stopColor="#e2e8ee" /><stop offset="1" stopColor="#a9b8c6" />
    </radialGradient>
    <radialGradient id="iaJade" cx="0.4" cy="0.3" r="0.85">
      <stop offset="0" stopColor="#a9e8c4" /><stop offset="0.5" stopColor="#3f9e6b" /><stop offset="1" stopColor="#1d5e3c" />
    </radialGradient>
    <radialGradient id="iaAmber" cx="0.4" cy="0.32" r="0.85">
      <stop offset="0" stopColor="#ffd98f" /><stop offset="0.55" stopColor="#e09a2e" /><stop offset="1" stopColor="#9c5f10" />
    </radialGradient>
    <radialGradient id="iaGlowO" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stopColor="#ffd27a" /><stop offset="0.55" stopColor="#f28c1e" /><stop offset="1" stopColor="#8a3c08" />
    </radialGradient>
    <linearGradient id="iaWine" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stopColor="#7c2a2a" /><stop offset="0.5" stopColor="#521616" /><stop offset="1" stopColor="#330d0d" />
    </linearGradient>
    <linearGradient id="iaRedSilk" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#d0543f" /><stop offset="0.55" stopColor="#a32e22" /><stop offset="1" stopColor="#6e1a12" />
    </linearGradient>
    <linearGradient id="iaPorce" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stopColor="#b99fe0" /><stop offset="0.5" stopColor="#7c5cb0" /><stop offset="1" stopColor="#4e357a" />
    </linearGradient>
    <linearGradient id="iaCamo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#f0f4f7" /><stop offset="1" stopColor="#c3ccd4" />
    </linearGradient>
    <linearGradient id="iaLapis" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#4d8fd1" /><stop offset="0.55" stopColor="#265d96" /><stop offset="1" stopColor="#163a5e" />
    </linearGradient>
    <linearGradient id="iaIvory" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#f7f1e0" /><stop offset="0.6" stopColor="#e3d7ba" /><stop offset="1" stopColor="#bcab85" />
    </linearGradient>
    <linearGradient id="iaRust" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#8a6f52" /><stop offset="0.5" stopColor="#6e5030" /><stop offset="1" stopColor="#4a3319" />
    </linearGradient>
    <linearGradient id="iaObsidian" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stopColor="#3a3f46" /><stop offset="0.6" stopColor="#1c1f24" /><stop offset="1" stopColor="#0e1013" />
    </linearGradient>
    <radialGradient id="iaRock" cx="0.4" cy="0.32" r="0.85">
      <stop offset="0" stopColor="#7d746a" /><stop offset="0.55" stopColor="#544c40" /><stop offset="1" stopColor="#2e2820" />
    </radialGradient>
  </defs>
)

/** 落地软阴影 */
const sh = (rx = 16, cy = 56, ry = 3.4, o = 0.3): ReactNode => (
  <ellipse cx="32" cy={cy} rx={rx} ry={ry} fill="#05070c" opacity={o} />
)

// 每个条目是一段 64×64 视窗内的 SVG 内容；命名即物品 id
const ART: Record<string, ReactNode> = {
  // ===== 白 =====
  v_coin: (<>
    {sh(17, 55)}
    {/* 叠放的两枚 */}
    <ellipse cx="25" cy="47.5" rx="14" ry="5.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1"/>
    <ellipse cx="25" cy="43.6" rx="14" ry="5.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1"/>
    <ellipse cx="25" cy="41" rx="14" ry="5.4" fill="url(#iaGoldR)" stroke="#a3741a" strokeWidth="1"/>
    <ellipse cx="25" cy="41" rx="9.4" ry="3.4" fill="none" stroke="#c99422" strokeWidth="1.1"/>
    {/* 斜立的一枚 */}
    <circle cx="42" cy="32" r="13.4" fill="url(#iaGoldR)" stroke="#8a5f0e" strokeWidth="1.4"/>
    <circle cx="42" cy="32" r="9.4" fill="none" stroke="#f8e29a" strokeWidth="1.3" opacity="0.85"/>
    <path d="M42 25.8l1.7 3.6 3.9.5-2.8 2.8.7 3.9-3.6-1.9-3.6 1.9.7-3.9-2.8-2.8 3.9-.5z" fill="#c99422"/>
    <path d="M35.5 23.5a12 12 0 0 1 7.5-3.4" stroke="#fff6cf" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9"/>
  </>),
  v_cigar: (<>
    {sh(20, 53)}
    {/* 盒身 */}
    <rect x="9" y="26" width="46" height="22" rx="3" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.4"/>
    {/* 木纹 */}
    <path d="M14 34c8-2.5 14 2 22-.5s10 1.5 13-1M14 41c9-2 15 2.5 23 0s8 1 11-1" stroke="#4a2f16" strokeWidth="1" fill="none" opacity="0.5"/>
    {/* 盒盖 */}
    <rect x="9" y="18" width="46" height="10" rx="3" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.4"/>
    <rect x="11" y="19.5" width="42" height="3" rx="1.5" fill="#b98a58" opacity="0.55"/>
    {/* 黄铜铭牌 */}
    <rect x="24" y="31" width="16" height="11" rx="1.6" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1"/>
    <path d="M27 34.5h10M27 37.6h10" stroke="#8a5f0e" strokeWidth="1.1"/>
    <path d="M25.5 32.2h13" stroke="#fff3c2" strokeWidth="1" opacity="0.85"/>
    {/* 金属扣 */}
    <rect x="29" y="15.5" width="6" height="5" rx="1.4" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.8"/>
  </>),
  v_cigs: (<>
    {sh(13, 57)}
    {/* 盒体 */}
    <rect x="21" y="12" width="22" height="42" rx="2.6" fill="url(#iaRedSilk)" stroke="#4a110b" strokeWidth="1.3"/>
    {/* 锡纸盖 */}
    <path d="M21 14.6a2.6 2.6 0 0 1 2.6-2.6h16.8a2.6 2.6 0 0 1 2.6 2.6V24H21z" fill="url(#iaSilver)"/>
    <path d="M22.5 20.5h19" stroke="#f7fafc" strokeWidth="1.1" opacity="0.7"/>
    {/* 竖向光泽 */}
    <rect x="24" y="26" width="4" height="26" rx="2" fill="#ffffff" opacity="0.14"/>
    {/* 税标 */}
    <rect x="24.5" y="30" width="15" height="10" rx="1.2" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="0.7"/>
    <path d="M27 33h10M27 36.2h10" stroke="#8a744a" strokeWidth="1"/>
    {/* 烫金线 */}
    <path d="M24 44h16M24 47h16" stroke="#e8b04a" strokeWidth="1.3" opacity="0.9"/>
  </>),
  v_bottle: (<>
    {sh(13, 57)}
    {/* 瓶塞与瓶封 */}
    <rect x="29" y="5" width="6" height="7" rx="1.4" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="0.8"/>
    <rect x="27.5" y="11" width="9" height="8" rx="1" fill="url(#iaGoldV)" stroke="#8a5f0e" strokeWidth="0.8"/>
    {/* 瓶身 */}
    <path d="M28 19h8l1.5 5 4.5 7v19a7 7 0 0 1-7 7h-6a7 7 0 0 1-7-7V31l4.5-7z" fill="url(#iaWine)" stroke="#240808" strokeWidth="1.3"/>
    {/* 玻璃反光 */}
    <path d="M25.5 32c-1 6-1 12 0 17" stroke="#e9a0a0" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" fill="none"/>
    <path d="M29.5 21.5l1 4" stroke="#e9a0a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
    {/* 酒标 */}
    <rect x="24" y="36" width="16" height="13" rx="1.2" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="0.7"/>
    <path d="M27 39.5h10M27 42.6h10" stroke="#7a2828" strokeWidth="1"/>
    <path d="M27 46h6" stroke="#8a744a" strokeWidth="0.9"/>
  </>),
  // ===== 绿 =====
  v_watch: (<>
    {sh(15, 56)}
    {/* 表冠与吊环 */}
    <rect x="29" y="4.5" width="6" height="6" rx="2" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.9"/>
    <path d="M26.5 12a5.5 5.5 0 0 1 11 0" fill="none" stroke="url(#iaGoldV)" strokeWidth="2.8"/>
    {/* 表壳 */}
    <circle cx="32" cy="35" r="17.5" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    <circle cx="32" cy="35" r="13" fill="url(#iaPaper)" stroke="#c9b888" strokeWidth="1"/>
    {/* 刻度 */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
      <line key={a} x1="32" y1="24.6" x2="32" y2="27" stroke="#6b5636" strokeWidth="1.1" transform={`rotate(${a} 32 35)`} />
    ))}
    {/* 指针 */}
    <line x1="32" y1="35" x2="32" y2="27.2" stroke="#2c2c2c" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="32" y1="35" x2="38.4" y2="38.4" stroke="#2c2c2c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="32" cy="35" r="1.7" fill="url(#iaGoldV)"/>
    {/* 玻璃反光 */}
    <path d="M23.5 28a12 12 0 0 1 8.6-5.4" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.75"/>
  </>),
  v_scope: (<>
    {sh(20, 53)}
    {/* 中轴 */}
    <rect x="27" y="29" width="10" height="10" rx="2" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1"/>
    <rect x="29" y="22" width="6" height="7" rx="1.8" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1"/>
    {/* 镜筒 */}
    <path d="M9 26h17a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5z" fill="url(#iaSteel)" stroke="#14171c" strokeWidth="1.3"/>
    <path d="M38 26h17a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H38a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" fill="url(#iaSteel)" stroke="#14171c" strokeWidth="1.3"/>
    {/* 防滑纹 */}
    <path d="M13 28v12M17 28v12M47 28v12M51 28v12" stroke="#20242a" strokeWidth="1.4" opacity="0.7"/>
    {/* 镀膜镜片 */}
    <circle cx="10.5" cy="34" r="5.2" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1.2"/>
    <circle cx="53.5" cy="34" r="5.2" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1.2"/>
    <circle cx="9" cy="32.2" r="1.6" fill="#eaf8ff" opacity="0.95"/>
    <circle cx="52" cy="32.2" r="1.6" fill="#eaf8ff" opacity="0.95"/>
    {/* 顶部高光 */}
    <path d="M8 27.4h16M40 27.4h16" stroke="#aeb9c4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
  </>),
  v_camera: (<>
    {sh(20, 54)}
    {/* 机身（饰皮） */}
    <rect x="9" y="21" width="46" height="28" rx="4.5" fill="url(#iaLeather)" stroke="#1f130c" strokeWidth="1.4"/>
    {/* 顶部金属板 */}
    <path d="M9 25.5a4.5 4.5 0 0 1 4.5-4.5h37a4.5 4.5 0 0 1 4.5 4.5V28.5H9z" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="1"/>
    {/* 取景器与红标 */}
    <rect x="22" y="15" width="13" height="7" rx="1.8" fill="url(#iaSteel)" stroke="#1f242a" strokeWidth="1"/>
    <rect x="42" y="16.5" width="8" height="5" rx="1.4" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    {/* 饰皮颗粒 */}
    {[15, 20, 46, 51].map((x) => <circle key={x} cx={x} cy="40" r="0.9" fill="#2c1c12" opacity="0.6" />)}
    {/* 镜头 */}
    <circle cx="32" cy="37" r="10.5" fill="url(#iaIron)" stroke="#101318" strokeWidth="1.4"/>
    <circle cx="32" cy="37" r="7.2" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1.2"/>
    <circle cx="32" cy="37" r="3" fill="#0b1c28"/>
    <circle cx="29.4" cy="34.4" r="1.9" fill="#eaf8ff" opacity="0.95"/>
  </>),
  v_perfume: (<>
    {sh(13, 57)}
    {/* 金喷头 */}
    <rect x="27" y="8" width="10" height="6" rx="1.6" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.9"/>
    <rect x="29.5" y="14" width="5" height="5" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    {/* 玻璃瓶身 */}
    <path d="M24 19h16l5.5 9.5V47a8 8 0 0 1-8 8h-11a8 8 0 0 1-8-8V28.5z" fill="#d98bb1" opacity="0.92" stroke="#8a4a68" strokeWidth="1.3"/>
    <path d="M24 19h16l5.5 9.5h-27z" fill="#eab1cb" opacity="0.85"/>
    {/* 液体 */}
    <path d="M20.6 36h22.8v11a6 6 0 0 1-6 6h-10.8a6 6 0 0 1-6-6z" fill="#b85c8a" opacity="0.72"/>
    {/* 高光 */}
    <path d="M23.5 30c-1.2 5-1.2 11 0 16" stroke="#ffe9f3" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" fill="none"/>
    {/* 标牌 */}
    <ellipse cx="32" cy="40" rx="6.5" ry="4.4" fill="url(#iaPaper)" stroke="#c9a24a" strokeWidth="0.8"/>
    <path d="M28.5 40h7" stroke="#a58440" strokeWidth="1"/>
  </>),
  // ===== 蓝 =====
  v_ring: (<>
    {sh(15, 56)}
    {/* 戒圈 */}
    <circle cx="32" cy="40" r="12.5" fill="none" stroke="url(#iaGoldV)" strokeWidth="6"/>
    <circle cx="32" cy="40" r="12.5" fill="none" stroke="#fff3c2" strokeWidth="1.3" opacity="0.6" strokeDasharray="18 62" strokeDashoffset="-6"/>
    {/* 镶托 */}
    <path d="M27 24.5h10l-2 4h-6z" fill="url(#iaSilver)" stroke="#6e7883" strokeWidth="0.8"/>
    {/* 钻石 */}
    <path d="M25 14.5h14l4.5 6.5-11.5 12-11.5-12z" fill="url(#iaGemC)" stroke="#5e97b4" strokeWidth="1"/>
    <path d="M25 14.5l3.5 6.5 3.5-6.5 3.5 6.5 3.5-6.5M20.5 21h23M28.5 21L32 33l3.5-12" fill="none" stroke="#eafcff" strokeWidth="0.9" opacity="0.95"/>
    {/* 星光 */}
    <path d="M46 10l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z" fill="#ffffff"/>
  </>),
  v_chip: (<>
    {sh(17, 56)}
    {/* 针脚 */}
    {[22, 28, 34, 40].map((y) => (<g key={y}>
      <rect x="11" y={y} width="7" height="2.8" rx="1" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.5"/>
      <rect x="46" y={y} width="7" height="2.8" rx="1" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.5"/>
    </g>))}
    {[22, 28, 34, 40].map((x) => (<g key={x}>
      <rect x={x} y="11" width="2.8" height="7" rx="1" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.5"/>
      <rect x={x} y="46" width="2.8" height="7" rx="1" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.5"/>
    </g>))}
    {/* 基板 */}
    <rect x="17" y="17" width="30" height="30" rx="3" fill="#175c3a" stroke="#0b2e1d" strokeWidth="1.4"/>
    {/* 走线 */}
    <path d="M21 21.5h5.5v5.5M43 42.5h-5.5v-5.5M21 42.5v-5h5" stroke="#d8b13c" strokeWidth="0.9" fill="none" opacity="0.85"/>
    {/* 核心 die */}
    <rect x="25" y="25" width="14" height="14" rx="1.6" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.9"/>
    <rect x="25" y="25" width="14" height="4.4" rx="1.6" fill="#ffffff" opacity="0.35"/>
    <path d="M28 32h8M28 34.8h5" stroke="#6e7883" strokeWidth="1"/>
  </>),
  v_gpu: (<>
    {sh(22, 55)}
    {/* 金手指 */}
    <rect x="13" y="46.5" width="28" height="4.4" rx="1" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.7"/>
    {[17, 23, 29, 35].map((x) => <line key={x} x1={x} y1="47" x2={x} y2="50.4" stroke="#7d5410" strokeWidth="0.8" />)}
    {/* 外壳 */}
    <rect x="7" y="19" width="50" height="27" rx="3.5" fill="url(#iaIron)" stroke="#101318" strokeWidth="1.5"/>
    <path d="M7 25.5a3.5 3.5 0 0 1 3.5-3.5h43a3.5 3.5 0 0 1 3.5 3.5V27H7z" fill="#454e59" opacity="0.9"/>
    <path d="M10.5 20.6h28" stroke="#7d8894" strokeWidth="1.2" opacity="0.7" strokeLinecap="round"/>
    {/* 双风扇 */}
    {[22, 42].map((cx) => (<g key={cx}>
      <circle cx={cx} cy="35" r="8" fill="#14171c" stroke="#3c434c" strokeWidth="1.4"/>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path key={a} d={`M${cx} 35l3.6-1.4a5.4 5.4 0 0 0-1.2-4.6z`} fill="#5b6670" transform={`rotate(${a} ${cx} 35)`} />
      ))}
      <circle cx={cx} cy="35" r="2.2" fill="url(#iaSilver)"/>
    </g>))}
    {/* 灯条 */}
    <rect x="10" y="29.5" width="6" height="1.8" rx="0.9" fill="#68d0f0" opacity="0.95"/>
  </>),
  v_medal: (<>
    {sh(14, 57)}
    {/* 绶带 */}
    <path d="M23 6l9 16 9-16 6.5 4-10.5 19h-10L16.5 10z" fill="url(#iaRedSilk)" stroke="#5e150d" strokeWidth="1.1"/>
    <path d="M28 6.5l4 8.5 4-8.5" fill="none" stroke="url(#iaGoldV)" strokeWidth="2.2"/>
    <path d="M21.5 9l8 14.5" stroke="#e88a6a" strokeWidth="1.3" opacity="0.6"/>
    {/* 奖章 */}
    <circle cx="32" cy="39" r="13.5" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    <circle cx="32" cy="39" r="9.6" fill="none" stroke="#f8e29a" strokeWidth="1.2" opacity="0.85"/>
    <path d="M32 32l2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7z" fill="url(#iaGoldV)" stroke="#a3741a" strokeWidth="0.7"/>
    <path d="M24.5 31a12 12 0 0 1 7-4.4" stroke="#fff6cf" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9"/>
  </>),
  // ===== 紫 =====
  v_goldbar: (<>
    {sh(21, 55)}
    {/* 下排两根 */}
    <path d="M9 45l4.5-9h17l4.5 9z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.2"/>
    <path d="M13.5 36h17l2.2 4.4H15.7z" fill="#f8dc7e" opacity="0.85"/>
    <path d="M29 45l4.5-9h17l4.5 9z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.2"/>
    <path d="M33.5 36h17l2.2 4.4H35.7z" fill="#f8dc7e" opacity="0.85"/>
    {/* 顶上一根 */}
    <path d="M19 34l4.5-9h17l4.5 9z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.2"/>
    <path d="M23.5 25h17l2.2 4.4H25.7z" fill="#fdf0b6" opacity="0.95"/>
    <path d="M26.5 29.6h11" stroke="#c99422" strokeWidth="1.1"/>
    <path d="M24 26.6h7" stroke="#fffbe0" strokeWidth="1.6" strokeLinecap="round"/>
  </>),
  v_intel: (<>
    {sh(15, 58)}
    {/* 文件 */}
    <rect x="17" y="8" width="30" height="46" rx="2.2" fill="url(#iaPaper)" stroke="#9a8a64" strokeWidth="1.2"/>
    {/* 折角 */}
    <path d="M40 8l7 7h-7z" fill="#c9b888" stroke="#9a8a64" strokeWidth="0.9"/>
    <path d="M22 16h14M22 21h18M22 26h18M22 31h11" stroke="#a3946e" strokeWidth="1.6"/>
    {/* 密级红条 */}
    <rect x="17" y="37" width="30" height="8" fill="url(#iaRedSilk)"/>
    <text x="32" y="43.2" fontSize="5.6" fill="#f8ecd8" textAnchor="middle" fontWeight="bold" letterSpacing="1">机密</text>
    {/* 火漆印 */}
    <circle cx="41" cy="49" r="5" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.9"/>
    <circle cx="39.4" cy="47.4" r="1.4" fill="#ffb3b8" opacity="0.85"/>
  </>),
  v_necklace: (<>
    {sh(16, 57, 3, 0.22)}
    <path d="M13 12c4.5 24 33.5 24 38 0" fill="none" stroke="#cbbd9b" strokeWidth="1.6"/>
    {[16, 22.5, 29, 35, 41.5, 48].map((x, i) => {
      const ys = [30.4, 33.8, 35.2, 35.2, 33.8, 30.4]
      return (<g key={x}>
        <circle cx={x} cy={ys[i]} r="3.6" fill="url(#iaPearl)" stroke="#9aa8b5" strokeWidth="0.7"/>
        <circle cx={x - 1.2} cy={ys[i] - 1.2} r="1" fill="#ffffff" opacity="0.95"/>
      </g>)
    })}
    {/* 吊坠 */}
    <path d="M32 35.4v2.8" stroke="#cbbd9b" strokeWidth="1.4"/>
    <circle cx="32" cy="43" r="5" fill="url(#iaPearl)" stroke="#9aa8b5" strokeWidth="0.8"/>
    <circle cx="30.3" cy="41.3" r="1.5" fill="#ffffff"/>
  </>),
  v_relic: (<>
    {sh(16, 56)}
    {/* 双耳 */}
    <path d="M22 15v-4a3 3 0 0 1 6 0v4M36 15v-4a3 3 0 0 1 6 0v4" fill="none" stroke="url(#iaBronze)" strokeWidth="3"/>
    {/* 器身 */}
    <path d="M17 17h30l-3.5 24h-23z" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.3"/>
    <path d="M17 17h30l-1.6 8H18.6z" fill="#d9a06a" opacity="0.5"/>
    {/* 纹饰带 */}
    <rect x="21" y="28" width="22" height="4" fill="#5e3a1a" opacity="0.65"/>
    <path d="M23.5 30h3.5M30.2 30h3.5M37 30h3.5" stroke="#c9965e" strokeWidth="1.1"/>
    {/* 铜绿锈斑 */}
    <path d="M20.5 35c2 1 3 3 2.5 5M41.5 33c-1.5 2-1 4 0.5 5.5" stroke="#5e8a6a" strokeWidth="1.6" fill="none" opacity="0.75" strokeLinecap="round"/>
    {/* 双足 */}
    <path d="M22 41h5l-2.5 10h-5zM37 41h5l2.5 10h-5z" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1"/>
    {/* 高光 */}
    <path d="M21 19.2h13" stroke="#f2cf9e" strokeWidth="1.6" strokeLinecap="round" opacity="0.9"/>
  </>),
  // ===== 青 =====
  v_jade: (<>
    {sh(14, 57)}
    {/* 身 */}
    <path d="M21 53V32a11 11 0 0 1 22 0v21z" fill="url(#iaJade)" stroke="#134a2c" strokeWidth="1.3"/>
    {/* 头 */}
    <circle cx="32" cy="21" r="8.6" fill="url(#iaJade)" stroke="#134a2c" strokeWidth="1.3"/>
    {/* 衣纹 */}
    <path d="M21 36.5h22M26 42h12M26 47h12" stroke="#1d5e3c" strokeWidth="1.5" opacity="0.8"/>
    <path d="M27 15.5a8 8 0 0 1 5.8-2.6" stroke="#c8f2d8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9"/>
    <ellipse cx="29" cy="28" rx="2.4" ry="4" fill="#8fd4b4" opacity="0.55"/>
  </>),
  v_vase: (<>
    {sh(14, 57)}
    {/* 瓶口 */}
    <rect x="26" y="7" width="12" height="5" rx="1.8" fill="url(#iaPorce)" stroke="#3a2456" strokeWidth="1.1"/>
    {/* 瓶身 */}
    <path d="M28 12h8v5l7.5 9.5v19a10 10 0 0 1-10 10h-3a10 10 0 0 1-10-10v-19L28 17z" fill="url(#iaPorce)" stroke="#3a2456" strokeWidth="1.3"/>
    {/* 纹饰 */}
    <path d="M22 30c5-3 15-3 20 0M23 38c4.5-2.5 13.5-2.5 18 0M25 46c3.5-2 10.5-2 14 0" stroke="#d9ccf2" strokeWidth="1.3" fill="none" opacity="0.85"/>
    <circle cx="32" cy="34" r="2.2" fill="#d9ccf2" opacity="0.85"/>
    {/* 釉面高光 */}
    <path d="M25.5 28c-1.6 6-1.6 13 0 19" stroke="#efe6fb" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" fill="none"/>
  </>),
  v_diamond: (<>
    {sh(16, 58, 3, 0.2)}
    <path d="M19 16h26l9 11-22 27L10 27z" fill="url(#iaGemC)" stroke="#4e8aa8" strokeWidth="1.2"/>
    {/* 刻面 */}
    <path d="M19 16l6.5 11L32 16l6.5 11L45 16M10 27h44M25.5 27L32 54l6.5-27" fill="none" stroke="#eafcff" strokeWidth="1.1" opacity="0.95"/>
    <path d="M19 16l6.5 11h-12zM45 16l-6.5 11h12z" fill="#ffffff" opacity="0.45"/>
    <path d="M25.5 27L32 54 21.5 27z" fill="#8fd0e4" opacity="0.45"/>
    {/* 闪光 */}
    <path d="M49 11l1.3 3.2 3.2 1.3-3.2 1.3-1.3 3.2-1.3-3.2-3.2-1.3 3.2-1.3z" fill="#ffffff"/>
    <path d="M13.5 13.5l.9 2.2 2.2.9-2.2.9-.9 2.2-.9-2.2-2.2-.9 2.2-.9z" fill="#ffffff" opacity="0.9"/>
  </>),
  v_painting: (<>
    {sh(20, 56)}
    {/* 鎏金外框 */}
    <rect x="10" y="12" width="44" height="40" rx="2.2" fill="url(#iaGoldV)" stroke="#6e4a0c" strokeWidth="1.4"/>
    <rect x="13.5" y="15.5" width="37" height="33" rx="1" fill="none" stroke="#f8e29a" strokeWidth="1" opacity="0.7"/>
    {/* 画面 */}
    <rect x="16" y="18" width="32" height="28" fill="#2c4a60"/>
    <rect x="16" y="18" width="32" height="28" fill="url(#iaLapis)" opacity="0.5"/>
    <circle cx="39" cy="26" r="3.8" fill="url(#iaGlowO)"/>
    <path d="M16 46l9.5-12 6 7.5 7-10.5L48 46z" fill="#3f6b45"/>
    <path d="M16 46l9.5-12 3 3.6-4.6 8.4z" fill="#57875c"/>
    <path d="M33 42h11M36 44.6h7" stroke="#e8c95a" strokeWidth="1" opacity="0.7"/>
    {/* 玻璃斜光 */}
    <path d="M19.5 20.5l7-2M18.5 26.5l11-3.2" stroke="#ffffff" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>
  </>),
  // ===== 红（常规大红） =====
  v_crown: (<>
    {sh(20, 56)}
    {/* 冠体 */}
    <path d="M13 43l-3.5-21 11.5 8.5L32 14l11 16.5L54.5 22 51 43z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    {/* 尖顶珠 */}
    <circle cx="9.5" cy="20" r="2.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    <circle cx="32" cy="12" r="2.8" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    <circle cx="54.5" cy="20" r="2.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    {/* 宝石 */}
    <circle cx="21" cy="37" r="3.2" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    <circle cx="32" cy="34.5" r="3.6" fill="url(#iaGemB)" stroke="#0f3d68" strokeWidth="0.8"/>
    <circle cx="43" cy="37" r="3.2" fill="url(#iaGemG)" stroke="#12512c" strokeWidth="0.8"/>
    {/* 底圈 */}
    <rect x="12" y="43" width="40" height="8" rx="2.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.2"/>
    <path d="M16 47h32" stroke="#f8e29a" strokeWidth="1.3" opacity="0.85"/>
    <path d="M18 25.5l3.6 2.8M46 25.5l-3.6 2.8" stroke="#fff3c2" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
  </>),
  v_super: (<>
    {sh(15, 58)}
    <rect x="17" y="8" width="30" height="48" rx="3" fill="url(#iaIron)" stroke="#0e1013" strokeWidth="1.5"/>
    {/* 顶部面板 */}
    <path d="M17 11a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v6H17z" fill="#39424c"/>
    <rect x="21" y="11" width="12" height="3.6" rx="1.2" fill="#68d0f0" opacity="0.95"/>
    <circle cx="41" cy="12.8" r="1.6" fill="#5ff0a0"/>
    {/* 服务器槽位 */}
    {[23, 30.5, 38, 45.5].map((y) => (<g key={y}>
      <rect x="21" y={y} width="22" height="5" rx="1.2" fill="#23282f" stroke="#3c434c" strokeWidth="0.8"/>
      <rect x="23" y={y + 1.6} width="12" height="1.8" rx="0.9" fill="#4a545f"/>
      <circle cx="40" cy={y + 2.5} r="1.4" fill="#5ff0a0" opacity="0.95"/>
    </g>))}
    {/* 侧光 */}
    <rect x="18.6" y="20" width="2" height="34" rx="1" fill="#68d0f0" opacity="0.22"/>
  </>),
  v_scarab: (<>
    {sh(15, 56)}
    {/* 腿 */}
    <path d="M20 29l-8-6M19 37l-9 1M21 44l-7 7M44 29l8-6M45 37l9 1M43 44l7 7" stroke="url(#iaGoldV)" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
    {/* 头 */}
    <circle cx="32" cy="18" r="6" fill="url(#iaGoldV)" stroke="#6e4a0c" strokeWidth="1.1"/>
    {/* 翡翠鞘翅 */}
    <ellipse cx="32" cy="36" rx="12.5" ry="14.5" fill="url(#iaGemG)" stroke="#0e3d24" strokeWidth="1.4"/>
    <path d="M32 23.5V49" stroke="#0e3d24" strokeWidth="1.6"/>
    <path d="M24 30c2-2.5 5-4 8-4s6 1.5 8 4" fill="none" stroke="#8fe0b0" strokeWidth="1.1" opacity="0.7"/>
    <ellipse cx="26.5" cy="29" rx="2.6" ry="4.4" fill="#c8f2d8" opacity="0.6" transform="rotate(-18 26.5 29)"/>
    {/* 头顶宝石 */}
    <circle cx="32" cy="11.8" r="2.6" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.7"/>
  </>),
  v_egg: (<>
    {sh(13, 56)}
    <path d="M32 8c10.5 0 15.5 14 15.5 25a15.5 15.5 0 0 1-31 0C16.5 22 21.5 8 32 8z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    {/* 饰带 */}
    <path d="M19 39c7 4 19 4 26 0" fill="none" stroke="#b3811c" strokeWidth="2" opacity="0.8"/>
    {[24, 32, 40].map((x) => <circle key={x} cx={x} cy="41.2" r="1.5" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.5" />)}
    {/* 大高光 */}
    <path d="M23.5 32c-1.5-8 .5-16 4.8-20.3" stroke="#fff6cf" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85"/>
    <ellipse cx="38" cy="46.5" rx="5" ry="2" fill="#8a5f0e" opacity="0.3"/>
  </>),
  v_safe: (<>
    {sh(20, 57)}
    <rect x="9" y="13" width="46" height="42" rx="4.5" fill="url(#iaSteel)" stroke="#22262c" strokeWidth="1.6"/>
    {/* 门 */}
    <rect x="15" y="19" width="34" height="30" rx="2.8" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1.3"/>
    <rect x="15" y="19" width="34" height="30" rx="2.8" fill="none" stroke="#5f6873" strokeWidth="0.8" opacity="0.6"/>
    {/* 铰链 */}
    <rect x="10.6" y="23" width="3.6" height="7" rx="1.6" fill="url(#iaSilver)" stroke="#3c434c" strokeWidth="0.7"/>
    <rect x="10.6" y="38" width="3.6" height="7" rx="1.6" fill="url(#iaSilver)" stroke="#3c434c" strokeWidth="0.7"/>
    {/* 密码盘 */}
    <circle cx="30" cy="34" r="8.4" fill="url(#iaSilver)" stroke="#333a42" strokeWidth="1.3"/>
    <circle cx="30" cy="34" r="5.4" fill="url(#iaIron)"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <line key={a} x1="30" y1="27.4" x2="30" y2="29.6" stroke="#22262c" strokeWidth="0.9" transform={`rotate(${a} 30 34)`} />
    ))}
    <circle cx="30" cy="34" r="1.8" fill="url(#iaSilver)"/>
    {/* 把手 */}
    <rect x="42" y="29.5" width="3" height="9" rx="1.5" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    {/* 顶部高光 */}
    <path d="M13 15.4h26" stroke="#aeb9c4" strokeWidth="1.6" strokeLinecap="round" opacity="0.75"/>
  </>),
  v_dragon: (<>
    {sh(18, 57)}
    {/* 盘绕龙身 */}
    <path d="M19 51c-6-4-8-12-4-18 3-5 9-6 14-4-1-6 3-11 10-11 5 0 9 3 10 7" fill="none" stroke="url(#iaGoldV)" strokeWidth="7.5" strokeLinecap="round"/>
    <path d="M18.5 50.5c-5.5-4-7.5-11-4-16.5" fill="none" stroke="#fff3c2" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
    {/* 背鳍 */}
    <path d="M13.5 38l-4.5-4M17 29.5l-5-3.5M28 21.5l-2-6" stroke="url(#iaGoldV)" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
    {/* 龙首 */}
    <circle cx="48" cy="24" r="7.8" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.2"/>
    {/* 角 */}
    <path d="M45 17.5l-2.5-7M51.5 18l4-6.5" stroke="url(#iaGoldV)" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
    {/* 眼 */}
    <circle cx="50" cy="22.5" r="1.8" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.5"/>
    {/* 须 */}
    <path d="M54 27c4 1 6 4 7 7M52.5 30c3 2 5 5 5 8" fill="none" stroke="#e8c04a" strokeWidth="1.6" strokeLinecap="round"/>
    {/* 宝珠 */}
    <circle cx="24" cy="51" r="2.8" fill="url(#iaGemC)" stroke="#4e8aa8" strokeWidth="0.7"/>
  </>),
  v_phoenix: (<>
    {sh(16, 60, 3, 0.24)}
    {[-26, -13, 0, 13, 26].map((a) => (
      <g key={a} transform={`rotate(${a} 32 50)`}>
        <path d="M32 50c-5-11-5-24 0-34 5 10 5 23 0 34z" fill={a === 0 ? 'url(#iaGemR)' : 'url(#iaGlowO)'} stroke="#6e2408" strokeWidth="0.9"/>
        <path d="M32 47V19" stroke="#8a3c08" strokeWidth="1" opacity="0.7"/>
        <path d="M30.6 26c-1 5-1 10 0 15" stroke="#ffd98f" strokeWidth="0.9" opacity="0.75" fill="none"/>
      </g>
    ))}
    {/* 冠座 */}
    <path d="M17 50h30l-3.5 8h-23z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.2"/>
    <circle cx="32" cy="53.6" r="2.6" fill="url(#iaGemB)" stroke="#0f3d68" strokeWidth="0.7"/>
    <circle cx="23" cy="53.6" r="1.6" fill="url(#iaGemG)"/>
    <circle cx="41" cy="53.6" r="1.6" fill="url(#iaGemG)"/>
  </>),
  v_amber: (<>
    {sh(15, 58, 3, 0.22)}
    <path d="M32 9c12.5 0 18.5 10 18.5 22S44.5 54 32 54 13.5 44 13.5 31 19.5 9 32 9z" fill="url(#iaAmber)" stroke="#7a4a08" strokeWidth="1.3" opacity="0.96"/>
    {/* 虫影 */}
    <ellipse cx="32" cy="35" rx="4.4" ry="6.4" fill="#4a2c08" opacity="0.85"/>
    <path d="M28.5 31l-4.5-4M35.5 31l4.5-4M28.5 39l-4.5 4M35.5 39l4.5 4M32 28.5v-4" stroke="#4a2c08" strokeWidth="1.4" strokeLinecap="round" opacity="0.85"/>
    {/* 气泡 */}
    <circle cx="25" cy="24" r="1.3" fill="#ffe9bd" opacity="0.8"/>
    <circle cx="40" cy="30" r="0.9" fill="#ffe9bd" opacity="0.7"/>
    {/* 表面光泽 */}
    <path d="M21.5 21.5a14 14 0 0 1 9.5-8.3" stroke="#ffe9bd" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9"/>
  </>),
  v_scroll: (<>
    {sh(20, 56)}
    {/* 卷纸 */}
    <path d="M17 15h30v34c0 3-2 5-5 5H17z" fill="url(#iaPaper)" stroke="#9a8a64" strokeWidth="1.2"/>
    {/* 文字 */}
    <path d="M23 23h16M23 29h16M23 35h16M23 41h9" stroke="#8a744a" strokeWidth="1.6"/>
    {/* 印章 */}
    <circle cx="40" cy="44" r="4" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    <path d="M38.6 44h2.8M40 42.6v2.8" stroke="#7a1420" strokeWidth="0.8"/>
    {/* 卷边 */}
    <path d="M44 15.5V48" stroke="#b8a878" strokeWidth="1.3" opacity="0.8"/>
    {/* 木轴 */}
    <rect x="11" y="11" width="7" height="42" rx="3.2" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.1"/>
    <circle cx="14.5" cy="11" r="3.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    <circle cx="14.5" cy="53" r="3.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
  </>),
  v_cup: (<>
    {sh(18, 57)}
    {/* 双耳 */}
    <path d="M19 15c-7 0-8.5 10.5 0 12.5M45 15c7 0 8.5 10.5 0 12.5" fill="none" stroke="url(#iaGoldV)" strokeWidth="3.4"/>
    {/* 杯身 */}
    <path d="M19 12h26v11a13 13 0 0 1-26 0z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.3"/>
    <path d="M19 12h26v3.6H19z" fill="#f8dc7e" opacity="0.85"/>
    {/* 纹饰 */}
    <path d="M23 19.5h18" stroke="#b3811c" strokeWidth="1.3" opacity="0.85"/>
    {[27, 32, 37].map((x) => <circle key={x} cx={x} cy="23.8" r="1.6" fill="url(#iaGemB)" stroke="#0f3d68" strokeWidth="0.5" />)}
    {/* 足 */}
    <rect x="29" y="35" width="6" height="7" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.9"/>
    <rect x="21" y="42" width="22" height="6.5" rx="2.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.1"/>
    <path d="M23.5 14.6c4-1.6 13-1.6 17 0" stroke="#fff6cf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9"/>
  </>),
  v_meteor: (<>
    {sh(17, 57)}
    {/* 岩体 */}
    <path d="M17 19l14-8 16 5.5 7 14-8 14.5-16 6.5-14.5-8-4.5-14z" fill="url(#iaRock)" stroke="#241f18" strokeWidth="1.4"/>
    {/* 岩面 */}
    <path d="M20 22l7-4M44 21l5 6M22 44l6 3" stroke="#6e6656" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
    {/* 熔岩裂纹 */}
    <path d="M26 26l8 6-4 9M38 22l2.5 8 8 4.5" fill="none" stroke="#f28c1e" strokeWidth="2.6" strokeLinecap="round"/>
    <path d="M26 26l8 6-4 9M38 22l2.5 8 8 4.5" fill="none" stroke="#ffd27a" strokeWidth="1" strokeLinecap="round" opacity="0.9"/>
    {/* 核心 */}
    <circle cx="30" cy="35" r="3.4" fill="url(#iaGlowO)"/>
    <circle cx="30" cy="35" r="1.4" fill="#ffe9bd"/>
  </>),
  v_pearl: (<>
    {sh(14, 57, 3, 0.2)}
    {/* 晕光 */}
    <circle cx="32" cy="31" r="21" fill="#9fdcf0" opacity="0.14"/>
    <circle cx="32" cy="31" r="17.5" fill="none" stroke="#bdeaf8" strokeWidth="1" opacity="0.35"/>
    {/* 珠体 */}
    <circle cx="32" cy="31" r="15" fill="url(#iaPearl)"/>
    <circle cx="32" cy="31" r="15" fill="none" stroke="#a8d4e4" strokeWidth="1.2" opacity="0.8"/>
    {/* 虹彩 */}
    <path d="M22 38a12 12 0 0 0 20 1" fill="none" stroke="#f2c2e0" strokeWidth="1.6" opacity="0.6"/>
    <path d="M21 33a12 12 0 0 0 4 6" fill="none" stroke="#c2e8b0" strokeWidth="1.4" opacity="0.55"/>
    {/* 高光 */}
    <ellipse cx="25.5" cy="23.5" rx="5.4" ry="3.6" fill="#ffffff" opacity="0.95" transform="rotate(-24 25.5 23.5)"/>
  </>),
  v_ruby: (<>
    {sh(16, 58, 3, 0.2)}
    <path d="M19 16h26l9 11-22 27L10 27z" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="1.2"/>
    <path d="M19 16l6.5 11L32 16l6.5 11L45 16M10 27h44M25.5 27L32 54l6.5-27" fill="none" stroke="#ff9aa4" strokeWidth="1.1" opacity="0.9"/>
    <path d="M19 16l6.5 11h-12zM45 16l-6.5 11h12z" fill="#ffccd0" opacity="0.5"/>
    <path d="M32 54L25.5 27h13z" fill="#8a1220" opacity="0.4"/>
    <path d="M49 11l1.3 3.2 3.2 1.3-3.2 1.3-1.3 3.2-1.3-3.2-3.2-1.3 3.2-1.3z" fill="#ffffff"/>
  </>),
  v_fang: (<>
    {sh(12, 58, 3, 0.22)}
    {/* 狼牙 */}
    <path d="M24 10c13 4 21 15.5 19 29-1.5 9.5-6.5 15.5-12 17.5 3.5-10 1.5-19.5-4.5-27.5-4-5.5-5.5-12-2.5-19z" fill="url(#iaIvory)" stroke="#8a7a58" strokeWidth="1.2"/>
    <path d="M27.5 14.5c7.5 5 12.5 13.5 12.5 22.5" fill="none" stroke="#c8b89a" strokeWidth="1.6" strokeLinecap="round" opacity="0.9"/>
    <path d="M31 51c3-1.5 5.5-4.5 6.5-8" stroke="#fdf8ec" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.8"/>
    {/* 血珀珠 */}
    <circle cx="22" cy="12" r="5" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.9"/>
    <circle cx="20.3" cy="10.3" r="1.4" fill="#ffb3b8" opacity="0.9"/>
    {/* 系绳 */}
    <path d="M22 7c0-3 2-4.5 4-4.5" stroke="#7a5a3a" strokeWidth="1.6" fill="none"/>
  </>),
  v_compass: (<>
    {sh(15, 57)}
    {/* 吊环 */}
    <path d="M27 11.5a5 5 0 0 1 10 0" fill="none" stroke="url(#iaGoldV)" strokeWidth="2.6"/>
    <rect x="29" y="9" width="6" height="5" rx="1.6" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    {/* 外壳 */}
    <circle cx="32" cy="35" r="19" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    <circle cx="32" cy="35" r="14" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="1"/>
    {/* 刻度 */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <line key={a} x1="32" y1="23.6" x2="32" y2="26" stroke="#8a744a" strokeWidth="1" transform={`rotate(${a} 32 35)`} />
    ))}
    {/* 指针 */}
    <path d="M32 23.8l3.4 11.2-3.4 11.2-3.4-11.2z" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.7"/>
    <path d="M32 23.8l3.4 11.2h-6.8z" fill="#e88a92" opacity="0.8"/>
    <circle cx="32" cy="35" r="2.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.7"/>
    {/* 玻璃反光 */}
    <path d="M22.5 27a13 13 0 0 1 8.3-5" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7"/>
  </>),
  v_seal: (<>
    {sh(15, 57)}
    {/* 兽钮 */}
    <path d="M24 32c0-9.5 2.5-15 8-15s8 5.5 8 15z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.2"/>
    <circle cx="32" cy="21" r="3.2" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    <path d="M27 26c1.5-3 8.5-3 10 0" stroke="#b3811c" strokeWidth="1.2" fill="none"/>
    {/* 印台 */}
    <rect x="17" y="32" width="30" height="19" rx="2.6" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.3"/>
    <rect x="17" y="32" width="30" height="5" rx="2.4" fill="#f8dc7e" opacity="0.8"/>
    {/* 刻纹 */}
    <path d="M22 41h20M22 45.5h20" stroke="#a3741a" strokeWidth="1.6"/>
    <path d="M20 33.6h14" stroke="#fff6cf" strokeWidth="1.4" strokeLinecap="round" opacity="0.9"/>
  </>),
  v_flute: (<>
    {sh(20, 55, 3, 0.2)}
    {/* 箫身（斜置） */}
    <g transform="rotate(-18 32 32)">
      <rect x="8" y="28" width="48" height="8" rx="4" fill="url(#iaJade)" stroke="#134a2c" strokeWidth="1.2"/>
      <rect x="9.5" y="29.2" width="45" height="2.2" rx="1.1" fill="#c8f2d8" opacity="0.5"/>
      {/* 音孔 */}
      {[24, 31, 38, 45].map((x) => <circle key={x} cx={x} cy="32" r="1.7" fill="#0f3a24" />)}
      {/* 金丝箍 */}
      <rect x="12" y="27.4" width="3.4" height="9.2" rx="1.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.7"/>
      <rect x="50" y="27.4" width="3.4" height="9.2" rx="1.4" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.7"/>
    </g>
    {/* 流苏 */}
    <path d="M50.5 21c3-2 6-1.5 7 1M51 24.5c3-1 5.5 0 6.5 2" stroke="#c0392b" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
  </>),
  v_mask: (<>
    {sh(15, 58)}
    {/* 头巾 */}
    <path d="M18 10h28v14l-5.5 26h-17L18 24z" fill="url(#iaGoldR)" stroke="#6e4a0c" strokeWidth="1.3"/>
    {/* 青金条纹 */}
    <path d="M18 15.5h28M18 20.5h28M18 25.5h28" stroke="url(#iaLapis)" strokeWidth="2.6"/>
    {/* 脸 */}
    <path d="M25 24h14v12l-3.5 10h-7L25 36z" fill="#e8bd52" stroke="#a3741a" strokeWidth="0.9"/>
    {/* 眉眼 */}
    <rect x="27" y="29" width="4" height="1.8" rx="0.9" fill="#16303e"/>
    <rect x="34" y="29" width="4" height="1.8" rx="0.9" fill="#16303e"/>
    <path d="M30.5 31v4l1.5 1.5" stroke="#a3741a" strokeWidth="1" fill="none"/>
    {/* 假胡须 */}
    <path d="M31 46h2l1 6h-4z" fill="url(#iaLapis)" stroke="#0f2c46" strokeWidth="0.7"/>
    {/* 高光 */}
    <path d="M21 12.6h12" stroke="#fff3c2" strokeWidth="1.6" strokeLinecap="round" opacity="0.9"/>
  </>),
  // ===== 红（巨型红货） =====
  v_tank: (<>
    {sh(21, 55)}
    {/* 履带 */}
    <rect x="9" y="36" width="46" height="13" rx="6.5" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.3"/>
    {[18, 28, 38, 48].map((x) => <circle key={x} cx={x} cy="42.5" r="3.4" fill="#4a3319" stroke="#7a5a30" strokeWidth="0.9" />)}
    {/* 车体 */}
    <path d="M14 36v-6a4 4 0 0 1 4-4h24a6 6 0 0 1 6 6v4z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.2"/>
    {/* 炮塔 */}
    <path d="M22 26v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.1"/>
    {/* 炮管 */}
    <rect x="38" y="21.5" width="17" height="4" rx="2" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.9"/>
    <circle cx="26" cy="22" r="1.8" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.5"/>
    <path d="M17 28.4h14" stroke="#fff3c2" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
  </>),
  v_engine: (<>
    {sh(20, 57)}
    {/* 燃烧室 */}
    <path d="M13 25h25l11 6.5v9L38 47H13z" fill="url(#iaSteel)" stroke="#22262c" strokeWidth="1.3"/>
    {/* 加强筋 */}
    <path d="M21 25v22M29 25v22M37 27.5v18" stroke="#39424c" strokeWidth="1.8"/>
    <path d="M15 26.6h20" stroke="#aeb9c4" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
    {/* 进气口 */}
    <ellipse cx="13" cy="36" rx="5" ry="11" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1.2"/>
    <ellipse cx="13" cy="36" rx="2.2" ry="6.5" fill="#0e1013"/>
    {/* 尾喷口 */}
    <path d="M49 31.5l6-3v15l-6-3z" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1.1"/>
    <ellipse cx="55" cy="36" rx="2.6" ry="6.8" fill="url(#iaGlowO)"/>
    <ellipse cx="55" cy="36" rx="1.1" ry="3.4" fill="#ffe9bd"/>
    {/* 顶部管路 */}
    <rect x="24" y="17" width="11" height="7" rx="2.2" fill="url(#iaSteel)" stroke="#22262c" strokeWidth="1"/>
    <path d="M26 17v-3h7v3" fill="none" stroke="#565e68" strokeWidth="2"/>
  </>),
  v_reactor: (<>
    {sh(15, 58)}
    <rect x="17" y="13" width="30" height="41" rx="5" fill="url(#iaSteel)" stroke="#22262c" strokeWidth="1.4"/>
    <path d="M17 18a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v4H17z" fill="#6e7887" opacity="0.9"/>
    <path d="M20.5 14.6h15" stroke="#aeb9c4" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>
    {/* 散热片 */}
    <path d="M17 26h30M17 31h30" stroke="#2c3138" strokeWidth="1.6" opacity="0.8"/>
    {/* 辐射标志 */}
    <circle cx="32" cy="40" r="10.5" fill="#e8c93a" stroke="#22262c" strokeWidth="1.2"/>
    <path d="M32 40l-3.6-6.2a4.2 4.2 0 0 1 7.2 0zM32 40l7 .8a4.2 4.2 0 0 1-3.6 6.4zM32 40l-3.4 6.8a4.2 4.2 0 0 1-3.6-6z" fill="#1c1f24"/>
    <circle cx="32" cy="40" r="2" fill="#1c1f24"/>
    <circle cx="32" cy="40" r="10.5" fill="none" stroke="#f8ec9a" strokeWidth="0.8" opacity="0.6"/>
  </>),
  v_bell: (<>
    {sh(16, 57)}
    {/* 钟钮 */}
    <path d="M28 9a4 4 0 0 1 8 0v4h-8z" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.1"/>
    {/* 钟体 */}
    <path d="M32 12c10 0 15.5 8 15.5 18v10l5.5 8H11l5.5-8V30c0-10 5.5-18 15.5-18z" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.4"/>
    {/* 弦纹 */}
    <path d="M18 34h28M16.5 40h31" stroke="#5e3a1a" strokeWidth="1.8" opacity="0.75"/>
    {/* 铜绿 */}
    <path d="M20 26c-1 5-0.5 9 1 13" stroke="#5e8a6a" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* 高光 */}
    <path d="M22.5 26c0-7 3.5-11.5 8.8-13" fill="none" stroke="#f2cf9e" strokeWidth="2.6" strokeLinecap="round" opacity="0.9"/>
    {/* 钟锤 */}
    <circle cx="32" cy="52" r="3.8" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1"/>
  </>),
  v_warrior: (<>
    {sh(15, 57)}
    {/* 头 */}
    <circle cx="32" cy="16" r="7.4" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.2"/>
    {/* 头盔 */}
    <path d="M24.5 14a7.6 7.6 0 0 1 15 0v3.5h-15z" fill="#6e4620" stroke="#4a2c12" strokeWidth="0.9"/>
    <path d="M32 5.5v4" stroke="#8a5a2a" strokeWidth="2.4" strokeLinecap="round"/>
    {/* 面部 */}
    <rect x="28" y="15.5" width="2.6" height="1.6" fill="#2c1a0c"/>
    <rect x="33.4" y="15.5" width="2.6" height="1.6" fill="#2c1a0c"/>
    {/* 铠甲 */}
    <path d="M21 26h22l3 12-4.5 14h-19L18 38z" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.2"/>
    {/* 甲片 */}
    <path d="M25.5 29v19M32 29v20M38.5 29v19M21.5 34h21M23 40h18" stroke="#5e3a1a" strokeWidth="1.3" opacity="0.8"/>
    {/* 铜绿斑 */}
    <path d="M24 43c2 1.5 2.5 4 1.5 6" stroke="#5e8a6a" strokeWidth="1.6" fill="none" opacity="0.7" strokeLinecap="round"/>
    {/* 高光 */}
    <path d="M24 28.5l1.5 8" stroke="#f2cf9e" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
  </>),
  v_cannon: (<>
    {sh(21, 57)}
    {/* 木轮 */}
    <circle cx="19" cy="48" r="7.5" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.2"/>
    <path d="M19 41.5v13M12.5 48h13" stroke="#3d2712" strokeWidth="1.1"/>
    <circle cx="19" cy="48" r="2.2" fill="#3d2712"/>
    <circle cx="41" cy="48" r="7.5" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.2"/>
    <path d="M41 41.5v13M34.5 48h13" stroke="#3d2712" strokeWidth="1.1"/>
    <circle cx="41" cy="48" r="2.2" fill="#3d2712"/>
    {/* 炮身 */}
    <path d="M7 27h33l14 5v8l-14 5H7z" fill="url(#iaRust)" stroke="#33210f" strokeWidth="1.3"/>
    {/* 炮箍 */}
    <path d="M16 27v18M30 27.8v16.4" stroke="#3a3f46" strokeWidth="2.6"/>
    <path d="M16 27v4M30 27.8v4" stroke="#6e7883" strokeWidth="1" opacity="0.8"/>
    {/* 炮口与尾钮 */}
    <ellipse cx="54" cy="36" rx="2.8" ry="6" fill="#241a10" stroke="#14100a" strokeWidth="1"/>
    <circle cx="7" cy="36" r="4" fill="url(#iaRust)" stroke="#33210f" strokeWidth="1"/>
    {/* 锈痕 */}
    <path d="M20 32c4-1.5 8-1 11 1.5" stroke="#8a5a30" strokeWidth="1.4" fill="none" opacity="0.8"/>
  </>),
  v_piano: (<>
    {sh(20, 58, 3, 0.26)}
    {/* 鎏金琴腿 */}
    <path d="M15 47v7M31 49v7M45 42v8" stroke="url(#iaGoldV)" strokeWidth="3" strokeLinecap="round"/>
    {/* 漆面琴身 */}
    <path d="M9 21c14-6.5 31-6.5 37 1.5 5 6.5 2 14-6.5 16L16 47c-6 2-8.5-2-8.5-8V25a4 4 0 0 1 1.5-4z" fill="url(#iaObsidian)" stroke="#05070a" strokeWidth="1.4"/>
    {/* 鎏金边 */}
    <path d="M13 23.5c12-5 26-5 31.5 1" fill="none" stroke="url(#iaGoldV)" strokeWidth="2.6" strokeLinecap="round"/>
    {/* 漆面反光 */}
    <path d="M12 30c8-5 20-6.5 27-4" fill="none" stroke="#7d8894" strokeWidth="1.8" strokeLinecap="round" opacity="0.55"/>
    {/* 键盘 */}
    <rect x="11" y="37" width="23" height="8" rx="1.4" fill="url(#iaIvory)" stroke="#8a7a58" strokeWidth="0.9"/>
    {[15.5, 19.5, 23.5, 27.5].map((x) => <rect key={x} x={x} y="37" width="2.2" height="4.8" fill="#10131a" />)}
  </>),
  v_sarc: (<>
    {sh(15, 59)}
    <path d="M23 7h18l8 11v33l-6.5 7h-21L15 51V18z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.4"/>
    <path d="M23 7h18l8 11H15z" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1"/>
    {/* 头饰条纹 */}
    <path d="M18 22h28M19 27h26" stroke="url(#iaLapis)" strokeWidth="2.4"/>
    {/* 脸 */}
    <circle cx="32" cy="26" r="6.4" fill="#f0c75e" stroke="#a3741a" strokeWidth="1"/>
    <rect x="28.6" y="23.5" width="2.6" height="1.7" fill="#16303e"/>
    <rect x="32.8" y="23.5" width="2.6" height="1.7" fill="#16303e"/>
    <path d="M30.5 30.5h3" stroke="#a3741a" strokeWidth="0.9"/>
    {/* 铭文 */}
    <path d="M24 36h16M24 41h16M24 46h16M24 51h16" stroke="#a3741a" strokeWidth="1.5"/>
    <path d="M32 31v4" stroke="#a3741a" strokeWidth="1.4"/>
    {/* 圣甲虫饰 */}
    <ellipse cx="32" cy="55" rx="3" ry="2" fill="url(#iaGemG)" stroke="#12512c" strokeWidth="0.6"/>
    {/* 高光 */}
    <path d="M19 10.5l8-1.6" stroke="#fff6cf" strokeWidth="1.8" strokeLinecap="round" opacity="0.9"/>
  </>),
  v_sat: (<>
    {sh(20, 58, 3, 0.2)}
    {/* 太阳能板 */}
    <rect x="3" y="25" width="18" height="13" rx="1.6" fill="url(#iaLapis)" stroke="#0f2c46" strokeWidth="1.2"/>
    <rect x="43" y="25" width="18" height="13" rx="1.6" fill="url(#iaLapis)" stroke="#0f2c46" strokeWidth="1.2"/>
    <path d="M9 25.8v11.4M15 25.8v11.4M49 25.8v11.4M55 25.8v11.4" stroke="#68a8d8" strokeWidth="1.1"/>
    <path d="M3 31.5h18M43 31.5h18" stroke="#68a8d8" strokeWidth="1.1"/>
    <path d="M5 27.2h8M45 27.2h8" stroke="#c9e6f8" strokeWidth="1.4" strokeLinecap="round" opacity="0.85"/>
    {/* 主体 */}
    <rect x="23" y="23" width="18" height="18" rx="2.4" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="1.2"/>
    <path d="M23 27.5h18" stroke="#8a929c" strokeWidth="1"/>
    {/* 光学窗 */}
    <circle cx="32" cy="33" r="4.4" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1"/>
    <circle cx="30.6" cy="31.6" r="1.3" fill="#eaf8ff"/>
    {/* 天线 */}
    <path d="M32 41v8" stroke="#8a929c" strokeWidth="2.2"/>
    <circle cx="32" cy="52" r="3.2" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.9"/>
    <circle cx="25" cy="25.4" r="1.4" fill="url(#iaGemR)"/>
  </>),
  // ===== Boss 专属红 =====
  v_core: (<>
    {sh(17, 58, 3, 0.24)}
    {/* 光晕 */}
    <circle cx="32" cy="32" r="24" fill="#f28c1e" opacity="0.12"/>
    {/* 外环 */}
    <circle cx="32" cy="32" r="20" fill="url(#iaIron)" stroke="#0e1013" strokeWidth="1.6"/>
    <circle cx="32" cy="32" r="20" fill="none" stroke="#525a64" strokeWidth="0.9" opacity="0.7"/>
    {/* 固定爪 */}
    {[0, 90, 180, 270].map((a) => (
      <rect key={a} x="29" y="8.5" width="6" height="7.5" rx="1.6" fill="url(#iaSteel)" stroke="#14171c" strokeWidth="0.9" transform={`rotate(${a} 32 32)`} />
    ))}
    {/* 内环 */}
    <circle cx="32" cy="32" r="13" fill="#15181d" stroke="#333a42" strokeWidth="1.2"/>
    {/* 核心 */}
    <circle cx="32" cy="32" r="8.4" fill="url(#iaGlowO)"/>
    <circle cx="32" cy="32" r="4" fill="#ffe9bd"/>
    <circle cx="32" cy="32" r="1.8" fill="#fffdf4"/>
    {/* 能量纹 */}
    {[30, 150, 270].map((a) => (
      <path key={a} d="M32 19.5v4" stroke="#f2a54a" strokeWidth="1.4" opacity="0.85" transform={`rotate(${a} 32 32)`} />
    ))}
  </>),
  v_blueprint: (<>
    {sh(17, 58)}
    <rect x="13" y="10" width="38" height="44" rx="2.6" fill="#24507e" stroke="#0f2c46" strokeWidth="1.3"/>
    <rect x="13" y="10" width="38" height="44" rx="2.6" fill="url(#iaLapis)" opacity="0.5"/>
    {/* 折角 */}
    <path d="M43 10l8 8h-8z" fill="#4d8fd1" stroke="#0f2c46" strokeWidth="0.9"/>
    {/* 边框线 */}
    <path d="M19 16h26M19 48h26M19 16v32M45 16v32" stroke="#4d8fd1" strokeWidth="0.7" opacity="0.6"/>
    {/* 发射塔图 */}
    <path d="M26 45V30l6-9 6 9v15z" fill="none" stroke="#c9e6f8" strokeWidth="1.6"/>
    <path d="M29 21l3-5 3 5M36 33h6M36 38h6M26 45h20" stroke="#c9e6f8" strokeWidth="1.2"/>
    <path d="M29 33h-3M29 38h-3" stroke="#9fd0f0" strokeWidth="1"/>
    {/* 标题栏 */}
    <path d="M18 13.6h12" stroke="#eaf6ff" strokeWidth="1.8" opacity="0.9"/>
  </>),
  v_scepter: (<>
    {sh(12, 58, 3, 0.22)}
    {/* 杖身 */}
    <rect x="29" y="20" width="6" height="31" rx="3" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.1"/>
    <path d="M29 27h6M29 40h6" stroke="#a3741a" strokeWidth="1.2"/>
    {/* 爪托 */}
    <path d="M23 23l-4.5 5M41 23l4.5 5" stroke="url(#iaGoldV)" strokeWidth="2.8" strokeLinecap="round"/>
    {/* 顶珠 */}
    <circle cx="32" cy="14" r="8.2" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.2"/>
    <circle cx="32" cy="14" r="4.2" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.9"/>
    <circle cx="30.4" cy="12.2" r="1.3" fill="#ffb3b8"/>
    {/* 底饰 */}
    <rect x="26.5" y="50" width="11" height="5.5" rx="2.2" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1"/>
  </>),
  v_sharktooth: (<>
    {sh(15, 58, 3, 0.2)}
    {/* 皮绳 */}
    <path d="M13 10c6 17 32 17 38 0" fill="none" stroke="#6e4a2c" strokeWidth="2.4"/>
    {/* 红珠 */}
    {[19, 26, 38, 45].map((x, i) => (
      <circle key={x} cx={x} cy={[21.5, 25, 25, 21.5][i]} r="2.4" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.7" />
    ))}
    {/* 主牙 */}
    <path d="M28 27c-2 10.5 0 20.5 6.5 27 3-8.5 3-18.5-1-27z" fill="url(#iaIvory)" stroke="#8a7a58" strokeWidth="1.1"/>
    <path d="M30.5 30c-1 7 0 14 3 19" fill="none" stroke="#c8b89a" strokeWidth="1.3" opacity="0.9"/>
    {/* 侧牙 */}
    <path d="M22 25c-1.5 6-0.5 11.5 3 16 1.5-5.5 1-11-1-16z" fill="url(#iaIvory)" stroke="#8a7a58" strokeWidth="0.9"/>
    <path d="M40 25c1.5 6 0.5 11.5-3 16-1.5-5.5-1-11 1-16z" fill="url(#iaIvory)" stroke="#8a7a58" strokeWidth="0.9"/>
  </>),
  v_wolfcamo: (<>
    {sh(17, 56, 3, 0.2)}
    {/* 布料 */}
    <path d="M13 15h38v33c-6 3.5-12-2-19 1s-13-3.5-19-1z" fill="url(#iaCamo)" stroke="#7d8894" strokeWidth="1.3"/>
    {/* 迷彩斑块 */}
    <path d="M13 25c8-6 12 2.5 20-3s12 3 18-2v-5H13z" fill="#b6c1ca" opacity="0.9"/>
    <path d="M13 38c7-5 14 2.5 22-3 6.5-4.5 10 1 16-2v15.5c-6 3-11.5-2-18.5 1S20 46 13 48.5z" fill="#93a1ad" opacity="0.9"/>
    <path d="M20 45c6-4 12 2 18-2" fill="none" stroke="#6b7885" strokeWidth="1.8"/>
    {/* 狼爪标 */}
    <path d="M41 19.5l4-3.5 3.5 4-4 2.5z" fill="#f4f7f9" stroke="#aeb9c2" strokeWidth="0.7"/>
    {/* 折痕 */}
    <path d="M17 17v28" stroke="#ffffff" strokeWidth="1.6" opacity="0.55"/>
    <path d="M46 16.5v6" stroke="#ffffff" strokeWidth="1.2" opacity="0.5"/>
  </>),
  // ===== 战役章节纪念 =====
  g_c1l1: (<>
    {sh(19, 56)}
    {/* 折叠地图 */}
    <path d="M11 14l14-3 14 3 14-3v39l-14 3-14-3-14 3z" fill="url(#iaPaper)" stroke="#9a8a64" strokeWidth="1.2"/>
    <path d="M25 11v39M39 14v39" stroke="#b8a878" strokeWidth="1.1"/>
    {/* 地形线 */}
    <path d="M14 22c6-3 10 2 16-1M28 41c6-4 12 1 18-3" stroke="#a89468" strokeWidth="1.2" fill="none"/>
    {/* 布防路线 */}
    <path d="M17 42c6-10 12-4 18-12s8 2 12-4" fill="none" stroke="#b03024" strokeWidth="1.8" strokeDasharray="4 3"/>
    {/* 目标点 */}
    <circle cx="45" cy="22" r="3.4" fill="none" stroke="#b03024" strokeWidth="1.4"/>
    <path d="M43.4 20.4l3.2 3.2M46.6 20.4l-3.2 3.2" stroke="#b03024" strokeWidth="1.4"/>
    <path d="M14.5 17.5h8" stroke="#6e5a3a" strokeWidth="2.2"/>
  </>),
  g_c1l2: (<>
    {sh(15, 58)}
    {/* 夹板 */}
    <rect x="17" y="10" width="30" height="44" rx="3" fill="url(#iaWood)" stroke="#3d2712" strokeWidth="1.2"/>
    {/* 纸 */}
    <rect x="21" y="15" width="22" height="35" rx="1.4" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="0.8"/>
    {/* 金属夹 */}
    <rect x="26" y="7.5" width="12" height="7" rx="2.6" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="1"/>
    <circle cx="32" cy="10.5" r="1.8" fill="#565e68"/>
    {/* 记录 */}
    <path d="M25 21h14M25 26h14M25 31h9" stroke="#8a8578" strokeWidth="1.6"/>
    {/* 验收勾 */}
    <path d="M25 40.5l4 4 8.5-8.5" fill="none" stroke="#b03024" strokeWidth="2.2" strokeLinecap="round"/>
    {/* 雷管 */}
    <rect x="36" y="33" width="5" height="10" rx="1.6" fill="url(#iaRedSilk)" stroke="#5e150d" strokeWidth="0.7" transform="rotate(14 38.5 38)"/>
  </>),
  g_c1l3: (<>
    {sh(16, 57)}
    {/* 交叉短刃 */}
    <path d="M18 14l27 27" stroke="url(#iaWood)" strokeWidth="4.6" strokeLinecap="round"/>
    <path d="M46 14L19 41" stroke="url(#iaWood)" strokeWidth="4.6" strokeLinecap="round"/>
    <path d="M14 10l10-2.5L26.5 18z" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="1"/>
    <path d="M50 10L40 7.5 37.5 18z" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="1"/>
    <path d="M16.5 12.5l5-1.2" stroke="#f7fafc" strokeWidth="1.1" opacity="0.85"/>
    {/* 爪痕徽记 */}
    <circle cx="32" cy="28" r="7" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.1"/>
    <path d="M28 25.5l2 2.5M32 24.5v3M36 25.5l-2 2.5" stroke="#7a1420" strokeWidth="1.8" strokeLinecap="round"/>
    {/* 铭牌 */}
    <rect x="14" y="44" width="36" height="8.5" rx="2.2" fill="url(#iaIron)" stroke="#14171c" strokeWidth="1.1"/>
    <path d="M20 48.5h24" stroke="#8a929c" strokeWidth="1.4" opacity="0.9"/>
  </>),
  g_c2l1: (<>
    {sh(15, 58)}
    {/* 皮面 */}
    <rect x="17" y="9" width="30" height="46" rx="3" fill="url(#iaLeather)" stroke="#241510" strokeWidth="1.3"/>
    {/* 书脊 */}
    <rect x="17" y="9" width="8.5" height="46" rx="3" fill="#332014" stroke="#241510" strokeWidth="1"/>
    <path d="M21.5 12.5v39" stroke="#1d110a" strokeWidth="1.2" opacity="0.8"/>
    {/* 标签 */}
    <rect x="29" y="16" width="13" height="9" rx="1" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="0.7"/>
    <path d="M31 19.5h9M31 22.2h6" stroke="#8a744a" strokeWidth="1.1"/>
    {/* 压印 */}
    <path d="M29 34h13M29 39h13M29 44h9" stroke="#5a3c2a" strokeWidth="1.5"/>
    {/* 铜包角 */}
    <path d="M17 12a3 3 0 0 1 3-3h3.5v3.5zM43.5 9H47a3 3 0 0 1 0 3h-3.5z" fill="url(#iaGoldV)" opacity="0.9"/>
    {/* 火漆 */}
    <circle cx="40" cy="49" r="4.2" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    <circle cx="38.6" cy="47.6" r="1.2" fill="#ffb3b8" opacity="0.85"/>
  </>),
  g_c2l2: (<>
    {sh(20, 56)}
    {/* 档案盒 */}
    <rect x="11" y="17" width="42" height="34" rx="3" fill="#5e5648" stroke="#33301f" strokeWidth="1.3"/>
    <rect x="11" y="17" width="42" height="34" rx="3" fill="url(#iaIron)" opacity="0.3"/>
    {/* 盒盖 */}
    <path d="M11 20a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v9H11z" fill="#6e6656" stroke="#33301f" strokeWidth="1.1"/>
    <rect x="26" y="21.5" width="12" height="3.8" rx="1.9" fill="#3d382c"/>
    <path d="M15 19.2h20" stroke="#9a927e" strokeWidth="1.4" strokeLinecap="round" opacity="0.8"/>
    {/* 封条 */}
    <rect x="11" y="33" width="42" height="6.5" fill="url(#iaPaper)" stroke="#b8a878" strokeWidth="0.7"/>
    <path d="M15 36.2h16" stroke="#8a744a" strokeWidth="1.4"/>
    {/* 火漆 */}
    <circle cx="44" cy="36.2" r="5" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.9"/>
    <circle cx="42.3" cy="34.5" r="1.4" fill="#ffb3b8" opacity="0.85"/>
    {/* 火箭签 */}
    <path d="M20 45.5v-3.5l2-2.5 2 2.5v3.5z" fill="none" stroke="#c9b888" strokeWidth="1.2"/>
  </>),
  g_c2l3: (<>
    {sh(15, 56)}
    {/* 挂环 */}
    <path d="M22 13l10 7 10-7" fill="none" stroke="url(#iaSteel)" strokeWidth="3.2" strokeLinecap="round"/>
    {/* 章体 */}
    <circle cx="32" cy="35" r="15" fill="url(#iaSilver)" stroke="#4a525c" strokeWidth="1.3"/>
    <circle cx="32" cy="35" r="10.6" fill="url(#iaSteel)" stroke="#39424c" strokeWidth="1"/>
    {/* 五角星 */}
    <path d="M32 26.5l2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.9z" fill="url(#iaSilver)" stroke="#333a42" strokeWidth="0.8"/>
    <circle cx="32" cy="35" r="13" fill="none" stroke="#7d8894" strokeWidth="0.8" opacity="0.7"/>
    {/* 高光 */}
    <path d="M23.5 26a13.5 13.5 0 0 1 7.6-4.4" stroke="#f7fafc" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.85"/>
  </>),
  g_c3l1: (<>
    {sh(17, 56)}
    {[22, 28, 34, 40].map((y) => (<g key={y}>
      <rect x="11" y={y} width="7" height="2.8" rx="1" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.5"/>
      <rect x="46" y={y} width="7" height="2.8" rx="1" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.5"/>
    </g>))}
    {[22, 28, 34, 40].map((x) => (<g key={x}>
      <rect x={x} y="11" width="2.8" height="7" rx="1" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.5"/>
      <rect x={x} y="46" width="2.8" height="7" rx="1" fill="url(#iaSilver)" stroke="#565e68" strokeWidth="0.5"/>
    </g>))}
    {/* 基板 */}
    <rect x="17" y="17" width="30" height="30" rx="3" fill="#1d3d5c" stroke="#0d2033" strokeWidth="1.4"/>
    {/* 雷达屏 */}
    <circle cx="32" cy="32" r="8.5" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1"/>
    <path d="M32 32l6-6" stroke="#d9f2fb" strokeWidth="1.4"/>
    <path d="M32 25.5a6.5 6.5 0 0 1 6.5 6.5" fill="none" stroke="#a8e6f8" strokeWidth="1" opacity="0.9"/>
    <circle cx="32" cy="32" r="1.5" fill="#eaf8ff"/>
    <circle cx="37.6" cy="27.8" r="1.1" fill="#5ff0a0"/>
  </>),
  g_c3l2: (<>
    {sh(15, 57)}
    <rect x="16" y="11" width="32" height="42" rx="2.6" fill="url(#iaCamo)" stroke="#7d8894" strokeWidth="1.2"/>
    {/* 瞄准分划 */}
    <circle cx="32" cy="30" r="11" fill="none" stroke="#4a5560" strokeWidth="1.6"/>
    <circle cx="32" cy="30" r="5.5" fill="none" stroke="#4a5560" strokeWidth="1.1"/>
    <path d="M32 15.5v7.5M32 37v7.5M17.5 30h7.5M39 30h7.5" stroke="#4a5560" strokeWidth="1.4"/>
    <circle cx="32" cy="30" r="1.6" fill="url(#iaGemR)"/>
    {/* 命中记录 */}
    <path d="M21 44.5l2 2 3.5-3.5M21 49.5l2 2 3.5-3.5" fill="none" stroke="#8a1f1f" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M29 46h13M29 51h9" stroke="#8a98a3" strokeWidth="1.4"/>
    <path d="M19 13.6h12" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
  </>),
  g_c3l3: (<>
    {sh(19, 54)}
    {/* 机身 */}
    <rect x="12" y="23" width="40" height="19" rx="8" fill="url(#iaSteel)" stroke="#14171c" strokeWidth="1.4"/>
    <rect x="27" y="26.5" width="10" height="12" rx="2.4" fill="url(#iaIron)" stroke="#101318" strokeWidth="1"/>
    {/* 目镜 */}
    <circle cx="21" cy="32.5" r="6.4" fill="url(#iaLens)" stroke="#0e2531" strokeWidth="1.2"/>
    <circle cx="19.3" cy="30.5" r="1.9" fill="#eaf8ff" opacity="0.95"/>
    {/* 激光窗 */}
    <circle cx="43" cy="32.5" r="5" fill="#1c2126" stroke="#0e1013" strokeWidth="1.2"/>
    <circle cx="43" cy="32.5" r="2.2" fill="url(#iaGemR)"/>
    <circle cx="43" cy="32.5" r="0.8" fill="#ffd9de"/>
    {/* 挂带 */}
    <path d="M32 23v-6" stroke="#3c434c" strokeWidth="3"/>
    <path d="M16 25.4h14" stroke="#aeb9c4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
  </>),
  g_c4l1: (<>
    {sh(13, 58, 3, 0.22)}
    {/* 安卡符 */}
    <path d="M32 8a7 7 0 0 1 7 7c0 5-4.5 8-7 9-2.5-1-7-4-7-9a7 7 0 0 1 7-7z" fill="none" stroke="url(#iaGoldV)" strokeWidth="4.6"/>
    <path d="M32 24.5V51M22 31h20" stroke="url(#iaGoldV)" strokeWidth="5" strokeLinecap="round"/>
    {/* 嵌宝石 */}
    <circle cx="32" cy="31" r="2.8" fill="url(#iaGemB)" stroke="#0f3d68" strokeWidth="0.8"/>
    <circle cx="32" cy="15" r="2" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.6"/>
    {/* 底饰 */}
    <rect x="27" y="50" width="10" height="4.5" rx="1.8" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.9"/>
    <path d="M27.5 10.5a6 6 0 0 1 3.6-1.8" stroke="#fff6cf" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9"/>
  </>),
  g_c4l2: (<>
    {sh(16, 58)}
    <path d="M17 13h30l4.5 14-8.5 25H21l-8.5-25z" fill="url(#iaPorce)" stroke="#3a2456" strokeWidth="1.3"/>
    {/* 额饰 */}
    <path d="M21 21h22l2 7H19z" fill="#5d4385" opacity="0.85"/>
    <path d="M21 21h22" stroke="#b99fe0" strokeWidth="1.2" opacity="0.8"/>
    {/* 宝石眼 */}
    <circle cx="26" cy="32" r="3.6" fill="url(#iaGemC)" stroke="#4e8aa8" strokeWidth="0.8"/>
    <circle cx="38" cy="32" r="3.6" fill="url(#iaGemC)" stroke="#4e8aa8" strokeWidth="0.8"/>
    <circle cx="24.8" cy="30.8" r="1.1" fill="#ffffff"/>
    <circle cx="36.8" cy="30.8" r="1.1" fill="#ffffff"/>
    {/* 鼻与口 */}
    <path d="M29 40h6l-3 6.5z" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="0.8"/>
    <path d="M27 50h10" stroke="#3a2456" strokeWidth="1.8"/>
    <path d="M20 15.6h12" stroke="#e4d6f6" strokeWidth="1.6" strokeLinecap="round" opacity="0.85"/>
  </>),
  g_c4l3: (<>
    {sh(12, 58, 3, 0.22)}
    {/* 杖身 */}
    <rect x="29" y="16" width="6" height="34" rx="3" fill="url(#iaGoldV)" stroke="#7d5410" strokeWidth="1.1"/>
    <path d="M29 24h6M29 33h6M29 42h6" stroke="#a3741a" strokeWidth="1.1"/>
    {/* 顶钻 */}
    <path d="M32 3.5l7.5 8.5L32 20.5 24.5 12z" fill="url(#iaGemC)" stroke="#4e8aa8" strokeWidth="1.1"/>
    <path d="M24.5 12h15M32 3.5v17" stroke="#eafcff" strokeWidth="0.9" opacity="0.9"/>
    {/* 环饰 */}
    <path d="M22 25.5c4 4.5 16 4.5 20 0" fill="none" stroke="url(#iaGoldR)" strokeWidth="3"/>
    {/* 底 */}
    <rect x="26.5" y="50" width="11" height="5" rx="2" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="0.9"/>
    {/* 星光 */}
    <path d="M44.5 5.5l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" fill="#ffffff"/>
  </>),
  // ===== 常驻 Boss 红 =====
  c_claw: (<>
    {sh(16, 59)}
    {/* 盾 */}
    <path d="M32 6l19 8v14.5c0 14.5-8.5 23-19 27.5-10.5-4.5-19-13-19-27.5V14z" fill="url(#iaIron)" stroke="#0e1013" strokeWidth="1.6"/>
    <path d="M32 6l19 8v14.5c0 14.5-8.5 23-19 27.5-10.5-4.5-19-13-19-27.5V14z" fill="none" stroke="#525a64" strokeWidth="0.9" opacity="0.6"/>
    {/* 爪痕 */}
    <path d="M23 21l8.5 8.5M32 19.5V31M41 21l-8.5 8.5" stroke="url(#iaGemR)" strokeWidth="3.6" strokeLinecap="round"/>
    <path d="M23 21l8.5 8.5M32 19.5V31M41 21l-8.5 8.5" stroke="#ff8a92" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    {/* 铆接线 */}
    <path d="M25 41l7-5.5 7 5.5" fill="none" stroke="#7d8894" strokeWidth="2.2"/>
    {/* 高光 */}
    <path d="M17.5 15.5l13-5.8" stroke="#8d97a2" strokeWidth="1.6" strokeLinecap="round" opacity="0.75"/>
  </>),
  c_keys: (<>
    {sh(16, 57, 3, 0.22)}
    {/* 钥匙圈 */}
    <circle cx="26" cy="15" r="7.5" fill="none" stroke="url(#iaGoldV)" strokeWidth="3.4"/>
    <path d="M21.5 9.8a7.5 7.5 0 0 1 5-2.4" stroke="#fff3c2" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.9"/>
    {/* 金钥匙 */}
    <path d="M30 21l17 17M40 31l5-5M44 35l5-5" stroke="url(#iaGoldV)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="28" cy="19" r="4.6" fill="none" stroke="url(#iaGoldV)" strokeWidth="3.2"/>
    {/* 银钥匙 */}
    <path d="M22 22l-12 12M15 29l-4 4M18 32l-4 4" stroke="url(#iaSilver)" strokeWidth="3.6" strokeLinecap="round" fill="none"/>
    <circle cx="24" cy="20" r="4" fill="none" stroke="url(#iaSilver)" strokeWidth="3"/>
    {/* 红绳牌 */}
    <rect x="38" y="44" width="12" height="8" rx="2" fill="url(#iaRedSilk)" stroke="#5e150d" strokeWidth="1" transform="rotate(-8 44 48)"/>
    <circle cx="41" cy="47" r="1.1" fill="#f8ecd8"/>
  </>),
  c_wolf: (<>
    {sh(18, 54, 3, 0.2)}
    {/* 眼眶 */}
    <path d="M11 32c8.5-12.5 33.5-12.5 42 0-8.5 12.5-33.5 12.5-42 0z" fill="url(#iaCamo)" stroke="#7d8894" strokeWidth="1.3"/>
    {/* 虹膜 */}
    <circle cx="32" cy="32" r="9.5" fill="url(#iaGemB)" stroke="#0f3d68" strokeWidth="1.2"/>
    {/* 竖瞳 */}
    <ellipse cx="32" cy="32" rx="2.4" ry="5.4" fill="#0a0d12"/>
    {/* 高光 */}
    <circle cx="28.8" cy="28.8" r="1.9" fill="#eaf8ff"/>
    <circle cx="35.5" cy="36" r="0.9" fill="#bdeaf8" opacity="0.9"/>
    {/* 白毛 */}
    <path d="M15 23l-5-4M49 23l5-4M13 30l-5-1M51 30l5-1" stroke="#aeb9c2" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M20 21c4-2.5 20-2.5 24 0" stroke="#f4f7f9" strokeWidth="1.4" fill="none" opacity="0.8"/>
  </>),
  c_scarab: (<>
    {sh(15, 57)}
    {/* 腿 */}
    <path d="M20 29l-8-6M19 37l-9 1M21 44l-7 7M44 29l8-6M45 37l9 1M43 44l7 7" stroke="url(#iaBronze)" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
    {/* 头 */}
    <circle cx="32" cy="18" r="6" fill="url(#iaBronze)" stroke="#4a2c12" strokeWidth="1.1"/>
    {/* 黄金鞘翅 */}
    <ellipse cx="32" cy="36" rx="12.5" ry="14.5" fill="url(#iaGoldR)" stroke="#7d5410" strokeWidth="1.4"/>
    <path d="M32 23.5V49" stroke="#a3741a" strokeWidth="1.6"/>
    <path d="M24 30c2-2.5 5-4 8-4s6 1.5 8 4" fill="none" stroke="#f8e29a" strokeWidth="1.1" opacity="0.85"/>
    <ellipse cx="26.5" cy="29" rx="2.6" ry="4.4" fill="#fff6cf" opacity="0.65" transform="rotate(-18 26.5 29)"/>
    {/* 头顶宝石 */}
    <circle cx="32" cy="11.5" r="3" fill="url(#iaGemR)" stroke="#5e0f18" strokeWidth="0.8"/>
    <circle cx="31" cy="10.4" r="0.9" fill="#ffb3b8"/>
  </>),
}

interface ItemArtProps {
  defId: string
  width: number
  height: number
  emojiSize?: number   // 无矢量图回退 emoji 时的字号
  inline?: boolean     // 嵌在文字行内时垂直居中
}

/** 变卖物图标：有原创矢量图用矢量图，其余物品回退 emoji */
export function ItemArt({ defId, width, height, emojiSize, inline }: ItemArtProps) {
  const art = ART[defId]
  if (!art) {
    const def = ITEMS[defId]
    return (
      <span style={{ fontSize: emojiSize ?? Math.min(width, height) * 0.6, lineHeight: 1 }}>{def?.icon ?? '❔'}</span>
    )
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: inline ? 'inline-block' : 'block', verticalAlign: inline ? 'middle' : undefined, filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.45))' }}
    >
      {D}
      {art}
    </svg>
  )
}
