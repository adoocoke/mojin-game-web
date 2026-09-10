import type { ReactNode } from 'react'
import { ITEMS } from '@/game/data'

/**
 * 变卖物矢量图标库 —— 原创绘制，军用搜刮物资风格。
 * 每个图标 64×64 视窗，暗色描边 + 平涂上色 + 顶部高光。
 * 未收录的 defId（武器/护甲/医疗等）回退到 data.ts 里的 emoji。
 */

const S = '#10131a' // 统一暗色描边/阴影

// 每个条目是一段 <g> 内容；命名即物品 id
const ART: Record<string, ReactNode> = {
  // ===== 白 =====
  v_coin: (<>
    <ellipse cx="32" cy="47" rx="17" ry="6.5" fill="#8a6410"/>
    <ellipse cx="32" cy="41" rx="17" ry="6.5" fill="#c9962a"/>
    <ellipse cx="32" cy="35" rx="17" ry="6.5" fill="#e8b53a"/>
    <ellipse cx="32" cy="29" rx="17" ry="6.5" fill="#f5d05e"/>
    <ellipse cx="32" cy="28" rx="10.5" ry="3.6" fill="#dca93a"/>
    <ellipse cx="26" cy="26.5" rx="3.4" ry="1.2" fill="#fceda8"/>
  </>),
  v_cigar: (<>
    <rect x="10" y="24" width="44" height="20" rx="2.5" fill="#6d4a2f" stroke={S} strokeWidth="2"/>
    <rect x="10" y="24" width="44" height="7" rx="2.5" fill="#855c3a"/>
    <rect x="28" y="24" width="8" height="20" fill="#c8a24a"/>
    <rect x="14" y="36" width="12" height="4" rx="1" fill="#4e3423"/>
    <rect x="38" y="36" width="12" height="4" rx="1" fill="#4e3423"/>
  </>),
  v_cigs: (<>
    <rect x="20" y="14" width="24" height="38" rx="2.5" fill="#b03a2e" stroke={S} strokeWidth="2"/>
    <rect x="20" y="14" width="24" height="10" rx="2.5" fill="#d4d4d4"/>
    <rect x="24" y="30" width="16" height="9" rx="1" fill="#f0e6c8"/>
    <rect x="26" y="32.5" width="12" height="1.8" fill="#8a6410"/>
    <rect x="26" y="36" width="12" height="1.8" fill="#8a6410"/>
  </>),
  v_bottle: (<>
    <rect x="28" y="8" width="8" height="10" rx="1.5" fill="#3d2b1f"/>
    <path d="M26 18h12l4 10v20a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6V28z" fill="#5c1a1a" stroke={S} strokeWidth="2"/>
    <path d="M26 18h12l4 10H22z" fill="#7a2828"/>
    <rect x="25" y="34" width="14" height="12" rx="1" fill="#e8dcc0"/>
    <rect x="27" y="37" width="10" height="2" fill="#7a2828"/>
    <rect x="27" y="41" width="10" height="2" fill="#7a2828"/>
  </>),
  // ===== 绿 =====
  v_watch: (<>
    <rect x="29" y="6" width="6" height="8" rx="2" fill="#8a6d3a"/>
    <circle cx="32" cy="36" r="17" fill="#c9962a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="36" r="12.5" fill="#f4ead0"/>
    <line x1="32" y1="36" x2="32" y2="27" stroke="#3a3a3a" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="32" y1="36" x2="38.5" y2="39" stroke="#3a3a3a" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="32" cy="36" r="1.8" fill="#3a3a3a"/>
  </>),
  v_scope: (<>
    <rect x="10" y="26" width="19" height="16" rx="7" fill="#3f4a3a" stroke={S} strokeWidth="2"/>
    <rect x="35" y="26" width="19" height="16" rx="7" fill="#3f4a3a" stroke={S} strokeWidth="2"/>
    <rect x="27" y="30" width="10" height="8" fill="#2c3527"/>
    <circle cx="19.5" cy="34" r="4.6" fill="#7fb4c7"/>
    <circle cx="44.5" cy="34" r="4.6" fill="#7fb4c7"/>
    <circle cx="18" cy="32.5" r="1.6" fill="#d9eef5"/>
    <circle cx="43" cy="32.5" r="1.6" fill="#d9eef5"/>
  </>),
  v_camera: (<>
    <rect x="10" y="22" width="44" height="26" rx="4" fill="#4b4237" stroke={S} strokeWidth="2"/>
    <rect x="22" y="16" width="14" height="7" rx="2" fill="#5d5346"/>
    <rect x="42" y="17" width="8" height="5" rx="1.5" fill="#8a2f2f"/>
    <circle cx="32" cy="35" r="9.5" fill="#22252b" stroke="#8a8071" strokeWidth="2"/>
    <circle cx="32" cy="35" r="5" fill="#5a7a8c"/>
    <circle cx="30" cy="33" r="1.7" fill="#cfe3ec"/>
  </>),
  v_perfume: (<>
    <rect x="27" y="10" width="10" height="6" rx="1.5" fill="#c9a24a"/>
    <rect x="29.5" y="16" width="5" height="5" fill="#a58440"/>
    <path d="M24 21h16l5 9v16a6 6 0 0 1-6 6H25a6 6 0 0 1-6-6V30z" fill="#c78ba7" stroke={S} strokeWidth="2"/>
    <path d="M24 21h16l5 9H19z" fill="#e0aec6"/>
    <rect x="26" y="36" width="12" height="8" rx="1" fill="#f4ead0"/>
  </>),
  // ===== 蓝 =====
  v_ring: (<>
    <circle cx="32" cy="38" r="13" fill="none" stroke="#d8b13c" strokeWidth="6"/>
    <path d="M26 18l6-6 6 6-6 7z" fill="#9fd8f0" stroke={S} strokeWidth="1.6"/>
    <path d="M26 18h12" stroke="#e8f7ff" strokeWidth="1.4"/>
    <circle cx="26" cy="32" r="2" fill="#f7e39a"/>
  </>),
  v_chip: (<>
    <rect x="18" y="18" width="28" height="28" rx="3" fill="#1d4d33" stroke={S} strokeWidth="2"/>
    <rect x="25" y="25" width="14" height="14" rx="1.5" fill="#c8c8c8"/>
    <rect x="25" y="25" width="14" height="5" rx="1.5" fill="#e0e0e0"/>
    {[22, 28, 34, 40].map((y) => (<g key={y}>
      <rect x="12" y={y} width="6" height="2.6" fill="#b8a24a"/>
      <rect x="46" y={y} width="6" height="2.6" fill="#b8a24a"/>
    </g>))}
    {[22, 28, 34, 40].map((x) => (<g key={x}>
      <rect x={x} y="12" width="2.6" height="6" fill="#b8a24a"/>
      <rect x={x} y="46" width="2.6" height="6" fill="#b8a24a"/>
    </g>))}
  </>),
  v_gpu: (<>
    <rect x="8" y="20" width="46" height="24" rx="3" fill="#2c3138" stroke={S} strokeWidth="2"/>
    <rect x="8" y="20" width="46" height="7" rx="3" fill="#3d434c"/>
    <circle cx="22" cy="36" r="7" fill="#171a1f" stroke="#566" strokeWidth="1.6"/>
    <circle cx="40" cy="36" r="7" fill="#171a1f" stroke="#566" strokeWidth="1.6"/>
    {[0, 60, 120].map((a) => (<g key={a}>
      <rect x="21" y="31" width="2" height="10" rx="1" fill="#5b6670" transform={`rotate(${a} 22 36)`}/>
      <rect x="39" y="31" width="2" height="10" rx="1" fill="#5b6670" transform={`rotate(${a} 40 36)`}/>
    </g>))}
    <rect x="12" y="46" width="30" height="4" fill="#b8a24a"/>
  </>),
  v_medal: (<>
    <path d="M24 8l8 14 8-14 6 4-10 18H28L18 12z" fill="#a33327"/>
    <path d="M28 8l4 7 4-7" fill="none" stroke="#d8b13c" strokeWidth="2"/>
    <circle cx="32" cy="38" r="13" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="38" r="9" fill="#f5d05e"/>
    <path d="M32 31.5l2 4.1 4.5.6-3.3 3.2.8 4.5-4-2.1-4 2.1.8-4.5-3.3-3.2 4.5-.6z" fill="#c9962a"/>
  </>),
  // ===== 紫 =====
  v_goldbar: (<>
    <path d="M12 40l4-9h16l4 9z" fill="#d8a428" stroke={S} strokeWidth="1.8"/>
    <path d="M30 40l4-9h16l4 9z" fill="#e8b53a" stroke={S} strokeWidth="1.8"/>
    <path d="M21 30l4-9h16l4 9z" fill="#f5d05e" stroke={S} strokeWidth="1.8"/>
    <path d="M25 24h8" stroke="#fceda8" strokeWidth="2" strokeLinecap="round"/>
  </>),
  v_intel: (<>
    <rect x="18" y="10" width="28" height="44" rx="2" fill="#e8e2d2" stroke={S} strokeWidth="2"/>
    <rect x="23" y="17" width="18" height="2.6" fill="#8a8578"/>
    <rect x="23" y="23" width="18" height="2.6" fill="#8a8578"/>
    <rect x="23" y="29" width="12" height="2.6" fill="#8a8578"/>
    <rect x="18" y="38" width="28" height="7" fill="#a33327"/>
    <text x="32" y="43.4" fontSize="5.4" fill="#f4ead0" textAnchor="middle" fontWeight="bold">机密</text>
    <circle cx="40" cy="49" r="4.5" fill="#a33327"/>
  </>),
  v_necklace: (<>
    <path d="M14 14c4 22 32 22 36 0" fill="none" stroke="#d8cdb4" strokeWidth="2.4"/>
    {[18, 25, 32, 39, 46].map((x, i) => (
      <circle key={x} cx={x} cy={i === 2 ? 33.4 : 31.5 - Math.abs(i - 2) * 3.4} r="3.4" fill="#f2ede0" stroke="#b8ad94" strokeWidth="1.2"/>
    ))}
    <circle cx="32" cy="40" r="4.6" fill="#e8e0cc" stroke="#b8ad94" strokeWidth="1.4"/>
  </>),
  v_relic: (<>
    <rect x="26" y="12" width="12" height="4" rx="1.5" fill="#5e7a52"/>
    <path d="M20 20h24l-3 22H23z" fill="#6f8a60" stroke={S} strokeWidth="2"/>
    <path d="M20 20h24l-1.5 8h-21z" fill="#87a274"/>
    <path d="M24 42h4l-2 9h-4zM36 42h4l2 9h-4z" fill="#5e7a52"/>
    <rect x="23" y="26" width="18" height="3" fill="#4c6544"/>
  </>),
}

Object.assign(ART, {
  // ===== 青 =====
  v_jade: (<>
    <path d="M22 52V30a10 10 0 0 1 20 0v22z" fill="#3f8f6b" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="22" r="8" fill="#55ab83" stroke={S} strokeWidth="2"/>
    <path d="M22 34h20" stroke="#2e6b4f" strokeWidth="2.4"/>
    <path d="M27 40h10M27 45h10" stroke="#2e6b4f" strokeWidth="2"/>
    <ellipse cx="29" cy="19.5" r="2.4" fill="#8fd4b4"/>
  </>),
  v_vase: (<>
    <path d="M27 8h10v6l7 9v22a9 9 0 0 1-9 9h-6a9 9 0 0 1-9-9V23l7-9z" fill="#7a5aa8" stroke={S} strokeWidth="2"/>
    <path d="M20 23h24l1.5 6h-27z" fill="#9378bd"/>
    <path d="M24 34h16M24 40h16" stroke="#5d4385" strokeWidth="2.2"/>
    <rect x="25" y="8" width="14" height="4" rx="1.5" fill="#9378bd"/>
  </>),
  v_diamond: (<>
    <path d="M20 20h24l8 10-20 24L12 30z" fill="#8fd8e8" stroke={S} strokeWidth="2"/>
    <path d="M20 20l6 10 6-10 6 10 6-10" fill="none" stroke="#c9f0f8" strokeWidth="1.6"/>
    <path d="M12 30h40" stroke="#c9f0f8" strokeWidth="1.6"/>
    <path d="M26 30l6 24 6-24" fill="none" stroke="#c9f0f8" strokeWidth="1.4"/>
    <path d="M22 23l4-3h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </>),
  v_painting: (<>
    <rect x="12" y="14" width="40" height="36" rx="2" fill="#8a6d3a" stroke={S} strokeWidth="2"/>
    <rect x="17" y="19" width="30" height="26" fill="#2e4a5c"/>
    <circle cx="41" cy="26" r="3.4" fill="#e8c95a"/>
    <path d="M17 45l9-11 6 7 7-10 8 14z" fill="#4c7a4a"/>
    <rect x="17" y="19" width="30" height="26" fill="none" stroke="#6e5627" strokeWidth="1.6"/>
  </>),
  // ===== 红（常规大红） =====
  v_crown: (<>
    <path d="M14 44l-3-20 11 8 10-16 10 16 11-8-3 20z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <rect x="14" y="44" width="36" height="7" rx="2" fill="#c9962a" stroke={S} strokeWidth="1.8"/>
    <circle cx="21" cy="38" r="3" fill="#c0392b"/>
    <circle cx="32" cy="36" r="3.4" fill="#2980b9"/>
    <circle cx="43" cy="38" r="3" fill="#27ae60"/>
    <path d="M18 46.5h28" stroke="#f5d05e" strokeWidth="1.6"/>
  </>),
  v_super: (<>
    <rect x="16" y="10" width="32" height="44" rx="3" fill="#23282f" stroke={S} strokeWidth="2"/>
    <rect x="16" y="10" width="32" height="9" rx="3" fill="#39424c"/>
    {[24, 31, 38, 45].map((y) => (<g key={y}>
      <rect x="21" y={y} width="16" height="3.4" rx="1" fill="#4a545f"/>
      <circle cx="42" cy={y + 1.7} r="1.6" fill="#5ff0a0"/>
    </g>))}
    <rect x="21" y="12.5" width="10" height="4" rx="1" fill="#68d0f0"/>
  </>),
  v_scarab: (<>
    <ellipse cx="32" cy="34" rx="12" ry="14" fill="#2f7a5c" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="19" r="6" fill="#265f47" stroke={S} strokeWidth="1.8"/>
    <path d="M32 22v26" stroke="#1d4a37" strokeWidth="2"/>
    <path d="M20 30l-8-6M20 38l-9 2M20 44l-7 7M44 30l8-6M44 38l9 2M44 44l7 7" stroke="#265f47" strokeWidth="2.6" strokeLinecap="round"/>
    <ellipse cx="28" cy="28" rx="3" ry="4.4" fill="#55ab83"/>
  </>),
  v_egg: (<>
    <path d="M32 8c10 0 15 14 15 25a15 15 0 0 1-30 0c0-11 5-25 15-25z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <path d="M24 34c0-8 3-18 8-22" fill="none" stroke="#f7e39a" strokeWidth="3" strokeLinecap="round"/>
  </>),
  v_safe: (<>
    <rect x="10" y="14" width="44" height="40" rx="4" fill="#3d434c" stroke={S} strokeWidth="2.4"/>
    <rect x="16" y="20" width="32" height="28" rx="2.5" fill="#2c3138" stroke="#171a1f" strokeWidth="1.6"/>
    <circle cx="32" cy="34" r="8" fill="#566170" stroke="#171a1f" strokeWidth="1.8"/>
    <circle cx="32" cy="34" r="3" fill="#c8cdd4"/>
    {[0, 90, 180, 270].map((a) => (
      <rect key={a} x="30.8" y="27.5" width="2.4" height="4" rx="1" fill="#c8cdd4" transform={`rotate(${a} 32 34)`}/>
    ))}
    <rect x="44" y="30" width="2.5" height="8" rx="1" fill="#b8a24a"/>
  </>),
  v_dragon: (<>
    <path d="M20 52c-6-4-8-12-4-18 3-5 9-6 14-4-1-6 3-11 10-11 5 0 9 3 10 7" fill="none" stroke="#d8a428" strokeWidth="7" strokeLinecap="round"/>
    <path d="M14 39l-4-4M18 30l-5-3M29 21l-2-6" stroke="#e8b53a" strokeWidth="2.6" strokeLinecap="round"/>
    <circle cx="48" cy="24" r="7.5" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <path d="M45 17l-2-7M52 18l4-6" stroke="#e8b53a" strokeWidth="2.8" strokeLinecap="round"/>
    <circle cx="50" cy="23" r="1.7" fill="#7a1f1f"/>
    <path d="M54 27c4 1 6 4 7 7M53 30c3 2 5 5 5 8" fill="none" stroke="#f5d05e" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="24" cy="50" r="2.4" fill="#f5d05e"/>
  </>),
  v_phoenix: (<>
    {[-26, -13, 0, 13, 26].map((a) => (
      <g key={a} transform={`rotate(${a} 32 48)`}>
        <path d="M32 48c-5-10-5-22 0-32 5 10 5 22 0 32z" fill={a === 0 ? '#c0392b' : '#e67e22'} stroke={S} strokeWidth="1.4"/>
        <path d="M32 45V20" stroke="#8a2f1f" strokeWidth="1.4"/>
      </g>
    ))}
    <path d="M18 48h28l-3 8H21z" fill="#e8b53a" stroke={S} strokeWidth="1.8"/>
    <circle cx="32" cy="52" r="2.6" fill="#2980b9"/>
  </>),
  v_amber: (<>
    <path d="M32 10c12 0 18 10 18 22s-6 22-18 22-18-10-18-22 6-22 18-22z" fill="#d88f2a" stroke={S} strokeWidth="2"/>
    <path d="M32 14c9 0 14 8 14 18" fill="none" stroke="#f2c063" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="32" cy="36" rx="5" ry="7" fill="#5a3a14"/>
    <path d="M28 32l-4-4M36 32l4-4M28 40l-4 4M36 40l4 4" stroke="#5a3a14" strokeWidth="1.8" strokeLinecap="round"/>
  </>),
  v_scroll: (<>
    <rect x="18" y="16" width="28" height="32" rx="2" fill="#e0d3ae" stroke={S} strokeWidth="2"/>
    <rect x="12" y="13" width="8" height="38" rx="3.5" fill="#8a6d3a" stroke={S} strokeWidth="1.6"/>
    <rect x="44" y="13" width="8" height="38" rx="3.5" fill="#8a6d3a" stroke={S} strokeWidth="1.6"/>
    <path d="M24 24h16M24 30h16M24 36h10" stroke="#a89060" strokeWidth="2"/>
    <circle cx="38" cy="41" r="4" fill="#a33327"/>
  </>),
  v_cup: (<>
    <path d="M20 14h24v10a12 12 0 0 1-24 0z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <path d="M20 16c-7 0-8 10 0 12M44 16c7 0 8 10 0 12" fill="none" stroke="#c9962a" strokeWidth="3.4"/>
    <rect x="29" y="34" width="6" height="8" fill="#c9962a"/>
    <rect x="22" y="42" width="20" height="6" rx="2" fill="#d8a428" stroke={S} strokeWidth="1.8"/>
    <path d="M24 18h16" stroke="#f7e39a" strokeWidth="2.2" strokeLinecap="round"/>
  </>),
  v_meteor: (<>
    <path d="M18 20l14-8 16 6 6 14-8 14-16 6-14-8-4-14z" fill="#5b5348" stroke={S} strokeWidth="2"/>
    <path d="M26 26l8 6-4 8M38 22l2 8 8 4" fill="none" stroke="#e8842a" strokeWidth="2.6" strokeLinecap="round"/>
    <circle cx="30" cy="34" r="3" fill="#f2a54a"/>
    <path d="M22 22l6-4" stroke="#8a8071" strokeWidth="2.4" strokeLinecap="round"/>
  </>),
  v_pearl: (<>
    <circle cx="32" cy="32" r="17" fill="#dfe8ee" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="32" r="17" fill="none" stroke="#a8c4d4" strokeWidth="1.4"/>
    <ellipse cx="25" cy="24" rx="6" ry="4" fill="#ffffff" opacity="0.9"/>
    <path d="M40 44c4-3 6-8 6-12" fill="none" stroke="#b8d4e4" strokeWidth="2.4" strokeLinecap="round"/>
  </>),
  v_ruby: (<>
    <path d="M20 20h24l8 10-20 24L12 30z" fill="#c01f3a" stroke={S} strokeWidth="2"/>
    <path d="M20 20l6 10 6-10 6 10 6-10" fill="none" stroke="#ee7a90" strokeWidth="1.6"/>
    <path d="M12 30h40" stroke="#ee7a90" strokeWidth="1.6"/>
    <path d="M22 23l4-3h5" stroke="#ffd9de" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </>),
  v_fang: (<>
    <path d="M22 8c14 4 22 16 20 30-1 10-6 16-12 18 4-10 2-20-4-28-4-6-6-13-4-20z" fill="#e8e0cc" stroke={S} strokeWidth="2"/>
    <path d="M24 12c8 5 14 14 14 24" fill="none" stroke="#c8b89a" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="22" cy="12" r="4" fill="#8a1f1f"/>
  </>),
  v_compass: (<>
    <circle cx="32" cy="34" r="19" fill="#c9962a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="34" r="14" fill="#f4ead0"/>
    <path d="M32 22l4 12-4 12-4-12z" fill="#c0392b"/>
    <path d="M20 34h24" stroke="#a89060" strokeWidth="1.4"/>
    <circle cx="32" cy="34" r="2.4" fill="#3a3a3a"/>
    <rect x="29" y="9" width="6" height="7" rx="2" fill="#8a6d3a"/>
  </>),
  v_seal: (<>
    <rect x="18" y="34" width="28" height="18" rx="2.5" fill="#d8a428" stroke={S} strokeWidth="2"/>
    <path d="M26 34c0-10 2-16 6-16s6 6 6 16z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="22" r="3" fill="#a33327"/>
    <rect x="23" y="40" width="18" height="2.6" fill="#a87820"/>
    <rect x="23" y="45" width="18" height="2.6" fill="#a87820"/>
  </>),
  v_flute: (<>
    <rect x="10" y="28" width="44" height="7" rx="3.5" fill="#7fae8a" stroke={S} strokeWidth="2" transform="rotate(-18 32 32)"/>
    {[24, 31, 38].map((x) => (
      <circle key={x} cx={x} cy={31.5 - (x - 24) * 0.36} r="1.8" fill="#2e4a37"/>
    ))}
    <rect x="46" y="20" width="5" height="11" rx="2" fill="#c9a24a" transform="rotate(-18 48 26)"/>
  </>),
  v_mask: (<>
    <path d="M20 12h24v16l-6 22H26l-6-22z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <path d="M20 12h24v8H20z" fill="#2980b9"/>
    <path d="M20 20h24" stroke="#1a5a8a" strokeWidth="2"/>
    <rect x="25" y="26" width="6" height="3.4" rx="1.6" fill="#10131a"/>
    <rect x="34" y="26" width="6" height="3.4" rx="1.6" fill="#10131a"/>
    <path d="M29 34h6l-3 6z" fill="#c9962a"/>
    <path d="M26 44h12" stroke="#a87820" strokeWidth="2.4"/>
  </>),
})

Object.assign(ART, {
  // ===== 红（巨型红货） =====
  v_tank: (<>
    <rect x="10" y="34" width="44" height="12" rx="6" fill="#8a6d1f" stroke={S} strokeWidth="2"/>
    {[18, 28, 38, 48].map((x) => <circle key={x} cx={x} cy="40" r="3.6" fill="#5e4c15"/>)}
    <path d="M18 34v-8a4 4 0 0 1 4-4h16a6 6 0 0 1 6 6v6z" fill="#d8a428" stroke={S} strokeWidth="2"/>
    <rect x="36" y="24" width="18" height="4.4" rx="2" fill="#e8b53a"/>
    <circle cx="26" cy="26" r="2.2" fill="#f5d05e"/>
  </>),
  v_engine: (<>
    <path d="M14 26h26l10 6v8l-10 6H14z" fill="#7a828c" stroke={S} strokeWidth="2"/>
    <ellipse cx="14" cy="36" rx="5" ry="10" fill="#4a525c" stroke={S} strokeWidth="1.8"/>
    <ellipse cx="50" cy="36" rx="4" ry="7" fill="#2c3138"/>
    <ellipse cx="50" cy="36" rx="2" ry="4" fill="#e8842a"/>
    <path d="M22 26v20M30 26v20M38 28v16" stroke="#565e68" strokeWidth="2.2"/>
    <rect x="24" y="18" width="10" height="6" rx="2" fill="#566170"/>
  </>),
  v_reactor: (<>
    <rect x="16" y="16" width="32" height="36" rx="5" fill="#566170" stroke={S} strokeWidth="2"/>
    <rect x="16" y="16" width="32" height="8" rx="4" fill="#6e7887"/>
    <circle cx="32" cy="37" r="11" fill="#e8c93a" stroke={S} strokeWidth="1.8"/>
    <path d="M32 37l-3.5-6a4 4 0 0 1 7 0zM32 37l6.8 1.4a4 4 0 0 1-3.5 6zM32 37l-3.3 7.4a4 4 0 0 1-3.5-6z" fill="#10131a"/>
    <circle cx="32" cy="37" r="2.2" fill="#10131a"/>
  </>),
  v_bell: (<>
    <path d="M32 10c10 0 15 8 15 18v10l5 8H12l5-8V28c0-10 5-18 15-18z" fill="#6f8a60" stroke={S} strokeWidth="2"/>
    <path d="M22 26c0-8 4-13 10-14" fill="none" stroke="#93b083" strokeWidth="2.6" strokeLinecap="round"/>
    <rect x="24" y="32" width="16" height="3" fill="#4c6544"/>
    <circle cx="32" cy="50" r="4" fill="#4c6544" stroke={S} strokeWidth="1.6"/>
  </>),
  v_warrior: (<>
    <circle cx="32" cy="17" r="7.5" fill="#a8765a" stroke={S} strokeWidth="2"/>
    <path d="M24 13a8 8 0 0 1 16 0v3H24z" fill="#7a4f38"/>
    <path d="M22 27h20l3 12-4 13H23l-4-13z" fill="#b08368" stroke={S} strokeWidth="2"/>
    <path d="M26 30v18M32 30v18M38 30v18" stroke="#8a6250" strokeWidth="1.8"/>
    <rect x="27" y="14.5" width="3" height="2" fill="#10131a"/>
    <rect x="34" y="14.5" width="3" height="2" fill="#10131a"/>
  </>),
  v_cannon: (<>
    <path d="M8 28h34l12 5v6l-12 5H8z" fill="#6e5a3a" stroke={S} strokeWidth="2"/>
    <rect x="6" y="26" width="8" height="20" rx="3" fill="#54452c"/>
    <circle cx="20" cy="50" r="6.5" fill="#4a3e28" stroke={S} strokeWidth="1.8"/>
    <circle cx="40" cy="50" r="6.5" fill="#4a3e28" stroke={S} strokeWidth="1.8"/>
    <path d="M46 30l6 2.5v3L46 38" fill="#8a744a"/>
    <path d="M14 30h20" stroke="#8a744a" strokeWidth="2"/>
  </>),
  v_piano: (<>
    <path d="M10 22c14-6 30-6 36 2 5 7 2 14-6 16l-24 8c-6 2-8-2-8-8V26a4 4 0 0 1 2-4z" fill="#7a5a20" stroke={S} strokeWidth="2"/>
    <path d="M14 24c12-5 26-5 31 1" fill="none" stroke="#d8a428" strokeWidth="2.6" strokeLinecap="round"/>
    <rect x="12" y="38" width="22" height="7" rx="1.5" fill="#f4ead0" stroke={S} strokeWidth="1.4"/>
    {[16, 20, 24, 28].map((x) => <rect key={x} x={x} y="38" width="2" height="4.4" fill="#10131a"/>)}
    <path d="M14 48v6M30 48v6M44 38v8" stroke="#5e4c15" strokeWidth="3" strokeLinecap="round"/>
  </>),
  v_sarc: (<>
    <path d="M24 8h16l8 10v34l-6 6H22l-6-6V18z" fill="#d8a428" stroke={S} strokeWidth="2"/>
    <path d="M24 8h16l8 10H16z" fill="#e8b53a"/>
    <circle cx="32" cy="26" r="7" fill="#f4d06a" stroke="#a87820" strokeWidth="1.8"/>
    <rect x="28" y="22" width="3" height="2.4" fill="#10131a"/>
    <rect x="34" y="22" width="3" height="2.4" fill="#10131a"/>
    <path d="M24 38h16M24 44h16M24 50h16" stroke="#a87820" strokeWidth="2.2"/>
    <path d="M32 33v5" stroke="#a87820" strokeWidth="2"/>
  </>),
  v_sat: (<>
    <rect x="24" y="24" width="16" height="16" rx="2" fill="#8a929c" stroke={S} strokeWidth="2"/>
    <rect x="4" y="26" width="16" height="12" rx="1.5" fill="#2b4a7a" stroke={S} strokeWidth="1.8"/>
    <rect x="44" y="26" width="16" height="12" rx="1.5" fill="#2b4a7a" stroke={S} strokeWidth="1.8"/>
    <path d="M8 29v6M12 29v6M16 29v6M48 29v6M52 29v6M56 29v6" stroke="#4a72b0" strokeWidth="1.4"/>
    <path d="M32 40v8l-6 6" fill="none" stroke="#8a929c" strokeWidth="2.4"/>
    <circle cx="26" cy="54" r="3" fill="#c8cdd4"/>
    <circle cx="32" cy="32" r="4" fill="#68d0f0"/>
  </>),
  // ===== Boss 专属红 =====
  v_core: (<>
    <circle cx="32" cy="32" r="20" fill="#3d434c" stroke={S} strokeWidth="2.4"/>
    <circle cx="32" cy="32" r="13" fill="#23282f"/>
    <circle cx="32" cy="32" r="8" fill="#e8842a"/>
    <circle cx="32" cy="32" r="4" fill="#f7c563"/>
    {[0, 90, 180, 270].map((a) => (
      <rect key={a} x="29.5" y="9" width="5" height="7" rx="1.5" fill="#566170" transform={`rotate(${a} 32 32)`}/>
    ))}
  </>),
  v_blueprint: (<>
    <rect x="14" y="12" width="36" height="42" rx="2.5" fill="#28507a" stroke={S} strokeWidth="2"/>
    <path d="M22 46V30l6-8 6 8v16z" fill="none" stroke="#9fd0f0" strokeWidth="2"/>
    <path d="M28 22l4-6 4 6" fill="none" stroke="#9fd0f0" strokeWidth="2"/>
    <path d="M36 34h8M36 40h8M22 46h22" stroke="#9fd0f0" strokeWidth="1.6"/>
    <path d="M20 18h12" stroke="#c9e6f8" strokeWidth="2.4"/>
  </>),
  v_scepter: (<>
    <rect x="29" y="18" width="6" height="34" rx="3" fill="#8a6d3a" stroke={S} strokeWidth="1.8"/>
    <circle cx="32" cy="14" r="8" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="14" r="4" fill="#c0392b"/>
    <path d="M24 22l-5 5M40 22l5 5" stroke="#c9962a" strokeWidth="2.6" strokeLinecap="round"/>
    <rect x="27" y="48" width="10" height="5" rx="2" fill="#c9a24a"/>
  </>),
  v_sharktooth: (<>
    <path d="M14 12c6 16 30 16 36 0" fill="none" stroke="#7a5a3a" strokeWidth="2.6"/>
    <path d="M28 24c-2 10 0 20 6 26 3-8 3-18-1-26z" fill="#e8e0cc" stroke={S} strokeWidth="2"/>
    <path d="M30 27c-1 7 0 14 3 19" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
    {[19, 25, 39, 45].map((x, i) => (
      <circle key={x} cx={x} cy={19.5 + (i % 2 === 0 ? 2 : 0)} r="2.2" fill="#8a1f1f"/>
    ))}
  </>),
  v_wolfcamo: (<>
    <rect x="14" y="16" width="36" height="32" rx="4" fill="#dfe6ea" stroke={S} strokeWidth="2"/>
    <path d="M14 26c8-6 12 2 20-3s12 3 16-2v-5H14z" fill="#aeb9c2"/>
    <path d="M14 38c7-5 14 2 22-3 6-4 10 1 14-2v15H14z" fill="#8b98a3"/>
    <path d="M20 44c6-4 12 2 18-2" fill="none" stroke="#6b7885" strokeWidth="2.4"/>
    <path d="M41 20l4-3 3 4-4 2z" fill="#f4f7f9"/>
  </>),
  // ===== 战役章节纪念 =====
  g_c1l1: (<>
    <rect x="12" y="14" width="40" height="36" rx="2.5" fill="#d9c9a0" stroke={S} strokeWidth="2"/>
    <path d="M12 26h40M28 14v36" stroke="#b8a878" strokeWidth="1.6"/>
    <path d="M18 40c6-10 12-4 18-12s8 2 12-4" fill="none" stroke="#a33327" strokeWidth="2.2" strokeDasharray="4 3"/>
    <circle cx="44" cy="22" r="3" fill="#a33327"/>
    <path d="M16 18h8" stroke="#8a744a" strokeWidth="2.4"/>
  </>),
  g_c1l2: (<>
    <rect x="16" y="10" width="32" height="44" rx="3" fill="#6e5a3a" stroke={S} strokeWidth="2"/>
    <rect x="21" y="15" width="22" height="34" rx="1.5" fill="#e8e2d2"/>
    <rect x="26" y="8" width="12" height="7" rx="2.5" fill="#8a8071" stroke={S} strokeWidth="1.6"/>
    <path d="M25 22h14M25 28h14M25 34h9" stroke="#8a8578" strokeWidth="2"/>
    <path d="M25 41l4 4 8-8" fill="none" stroke="#a33327" strokeWidth="2.4" strokeLinecap="round"/>
  </>),
  g_c1l3: (<>
    <path d="M18 14l28 28M46 14L18 42" stroke="#7a5a3a" strokeWidth="5" strokeLinecap="round"/>
    <path d="M14 10l10-2 2 10zM50 10l-10-2-2 10z" fill="#8a929c" stroke={S} strokeWidth="1.6"/>
    <circle cx="32" cy="28" r="6.5" fill="#c9962a" stroke={S} strokeWidth="1.8"/>
    <circle cx="32" cy="28" r="2.6" fill="#7a1f1f"/>
    <rect x="14" y="44" width="36" height="8" rx="2" fill="#3d434c" stroke={S} strokeWidth="1.6"/>
  </>),
  g_c2l1: (<>
    <rect x="16" y="10" width="32" height="44" rx="3" fill="#5a3a4a" stroke={S} strokeWidth="2"/>
    <rect x="16" y="10" width="9" height="44" rx="3" fill="#472c3a"/>
    <rect x="29" y="17" width="14" height="9" rx="1" fill="#e0d3ae"/>
    <path d="M31 20h10M31 23h7" stroke="#8a744a" strokeWidth="1.6"/>
    <path d="M29 36h14M29 41h14M29 46h9" stroke="#7a5a6a" strokeWidth="2"/>
    <circle cx="40" cy="48" r="4" fill="#a33327"/>
  </>),
  g_c2l2: (<>
    <rect x="12" y="18" width="40" height="32" rx="3" fill="#5e5648" stroke={S} strokeWidth="2"/>
    <rect x="12" y="18" width="40" height="9" rx="3" fill="#6e6656"/>
    <rect x="26" y="21" width="12" height="3.6" rx="1.8" fill="#3d382c"/>
    <path d="M20 34h24M20 40h24" stroke="#4a4438" strokeWidth="2.4"/>
    <rect x="36" y="31" width="11" height="13" rx="1" fill="#e0d3ae"/>
    <path d="M38 34h7M38 37.5h7M38 41h5" stroke="#a33327" strokeWidth="1.4"/>
  </>),
  g_c2l3: (<>
    <circle cx="32" cy="34" r="15" fill="#b8b2a2" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="34" r="10.5" fill="#d0caba"/>
    <path d="M32 25l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" fill="#8a8578"/>
    <path d="M22 16l10 6 10-6" fill="none" stroke="#6e6656" strokeWidth="3.4"/>
  </>),
  g_c3l1: (<>
    <rect x="18" y="18" width="28" height="28" rx="3" fill="#1d3d5c" stroke={S} strokeWidth="2"/>
    <rect x="25" y="25" width="14" height="14" rx="1.5" fill="#68d0f0"/>
    <rect x="25" y="25" width="14" height="5" rx="1.5" fill="#a8e6f8"/>
    {[22, 28, 34, 40].map((y) => (<g key={y}>
      <rect x="12" y={y} width="6" height="2.6" fill="#8a929c"/>
      <rect x="46" y={y} width="6" height="2.6" fill="#8a929c"/>
    </g>))}
    <path d="M28 32h8M32 28v8" stroke="#28507a" strokeWidth="1.8"/>
  </>),
  g_c3l2: (<>
    <rect x="16" y="12" width="32" height="40" rx="2.5" fill="#dfe6ea" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="30" r="11" fill="none" stroke="#4a5560" strokeWidth="2"/>
    <circle cx="32" cy="30" r="5.5" fill="none" stroke="#4a5560" strokeWidth="1.6"/>
    <path d="M32 16v8M32 36v8M18 30h8M38 30h8" stroke="#4a5560" strokeWidth="2"/>
    <circle cx="32" cy="30" r="2" fill="#a33327"/>
    <path d="M22 44h20" stroke="#8a98a3" strokeWidth="2.2"/>
  </>),
  g_c3l3: (<>
    <rect x="12" y="24" width="40" height="18" rx="8" fill="#4a525c" stroke={S} strokeWidth="2"/>
    <circle cx="21" cy="33" r="6.5" fill="#68d0f0" stroke="#171a1f" strokeWidth="1.6"/>
    <circle cx="43" cy="33" r="6.5" fill="#2c3138" stroke="#171a1f" strokeWidth="1.6"/>
    <circle cx="19.5" cy="31" r="2" fill="#d9f2fb"/>
    <rect x="28" y="28" width="8" height="10" rx="2" fill="#39424c"/>
    <path d="M32 24v-6" stroke="#4a525c" strokeWidth="3"/>
  </>),
  g_c4l1: (<>
    <path d="M26 12h12l6 10v18l-6 12H26l-6-12V22z" fill="#e8b53a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="24" r="5" fill="#2980b9"/>
    <path d="M32 29v14M26 36h12" stroke="#a87820" strokeWidth="2.6"/>
    <path d="M24 16h16" stroke="#f7e39a" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="32" cy="47" r="2.6" fill="#c0392b"/>
  </>),
  g_c4l2: (<>
    <path d="M18 14h28l4 14-8 24H22l-8-24z" fill="#7a5aa8" stroke={S} strokeWidth="2"/>
    <path d="M22 22h20l2 8H20z" fill="#9378bd"/>
    <circle cx="26" cy="30" r="3.4" fill="#68d0f0"/>
    <circle cx="38" cy="30" r="3.4" fill="#68d0f0"/>
    <path d="M28 40h8l-4 6z" fill="#e8b53a"/>
    <path d="M24 48h16" stroke="#5d4385" strokeWidth="2.6"/>
  </>),
  g_c4l3: (<>
    <rect x="29" y="16" width="6" height="36" rx="3" fill="#c9962a" stroke={S} strokeWidth="1.8"/>
    <path d="M32 4l7 8-7 8-7-8z" fill="#68d0f0" stroke={S} strokeWidth="1.8"/>
    <path d="M22 26c4 4 16 4 20 0" fill="none" stroke="#e8b53a" strokeWidth="3"/>
    <rect x="27" y="48" width="10" height="5" rx="2" fill="#8a6d3a"/>
  </>),
  // ===== 常驻 Boss 红 =====
  c_claw: (<>
    <path d="M32 8l18 8v14c0 14-8 22-18 26-10-4-18-12-18-26V16z" fill="#3d434c" stroke={S} strokeWidth="2.2"/>
    <path d="M22 22l8 8M32 20v12M42 22l-8 8" stroke="#c0392b" strokeWidth="3.4" strokeLinecap="round"/>
    <path d="M24 42l8-6 8 6" fill="none" stroke="#8a929c" strokeWidth="2.6"/>
  </>),
  c_keys: (<>
    <circle cx="24" cy="18" r="8" fill="none" stroke="#c9a24a" strokeWidth="4"/>
    <path d="M29 24l16 16M38 33l5-5M42 37l5-5" stroke="#c9a24a" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="42" cy="16" r="6" fill="none" stroke="#8a929c" strokeWidth="3.4"/>
    <path d="M46 21l10 12M50 28l4-4" stroke="#8a929c" strokeWidth="3.4" strokeLinecap="round"/>
  </>),
  c_wolf: (<>
    <path d="M12 32c8-12 32-12 40 0-8 12-32 12-40 0z" fill="#dfe6ea" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="32" r="9" fill="#4a72b0" stroke="#171a1f" strokeWidth="1.6"/>
    <circle cx="32" cy="32" r="4" fill="#10131a"/>
    <circle cx="29.5" cy="29.5" r="1.6" fill="#d9f2fb"/>
    <path d="M16 24l-4-4M48 24l4-4" stroke="#aeb9c2" strokeWidth="2.6" strokeLinecap="round"/>
  </>),
  c_scarab: (<>
    <ellipse cx="32" cy="34" rx="12" ry="14" fill="#8a5a2a" stroke={S} strokeWidth="2"/>
    <circle cx="32" cy="19" r="6" fill="#6e4620" stroke={S} strokeWidth="1.8"/>
    <path d="M32 22v26" stroke="#54350f" strokeWidth="2"/>
    <path d="M20 30l-8-6M20 38l-9 2M20 44l-7 7M44 30l8-6M44 38l9 2M44 44l7 7" stroke="#6e4620" strokeWidth="2.6" strokeLinecap="round"/>
    <ellipse cx="28" cy="28" rx="3" ry="4.4" fill="#c9962a"/>
    <circle cx="32" cy="12" r="3" fill="#c0392b"/>
  </>),
})

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
      {art}
    </svg>
  )
}
