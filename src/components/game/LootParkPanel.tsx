import { useEffect, useState } from 'react'
import { engine } from '@/game/store'
import { ITEMS } from '@/game/data'
import { gridValue } from '@/game/inventory'
import { addToStash, loadStash, stashValue } from '@/game/stash'
import { RARITY_INFO, itemValue, type Grid } from '@/game/types'
import {
  PARK_CONTAINERS,
  TIER_ODDS,
  openParkContainer,
  parkJackpot,
  type ParkCat,
  type ParkContainerDef,
  type ParkTier,
} from '@/game/lootpark'
import { ItemArt } from './ItemArt'

const CAT_NAME: Record<ParkCat, string> = {
  craft: '工艺藏品',
  electronic: '电子物品',
  medical: '医疗物资',
  military: '军工武器',
  cards: '门卡钥匙',
  mixed: '全品类杂物',
}

const TIER_NAME: Record<ParkTier, string> = {
  0: '空投传说',
  1: '高爆率',
  2: '中爆率',
  3: '低爆率',
  4: '垃圾也出红',
}

const TIER_STYLE: Record<ParkTier, string> = {
  0: 'border-red-500/60 bg-red-950/30 text-red-200',
  1: 'border-amber-500/60 bg-amber-950/30 text-amber-200',
  2: 'border-cyan-500/50 bg-cyan-950/25 text-cyan-200',
  3: 'border-violet-500/45 bg-violet-950/25 text-violet-200',
  4: 'border-zinc-600 bg-zinc-900/60 text-zinc-300',
}

interface ParkResult {
  def: ParkContainerDef
  grid: Grid
  value: number
  overflow: number
  jackpot: 'red' | 'cyan' | null
  ts: number
}

interface ParkStats {
  pulls: number
  red: number
  cyan: number
  value: number
}

const STATS_KEY = 'mojin_lootpark_stats'
const RESTOCK_MS = 8000

function loadParkStats(): ParkStats {
  try {
    const s = JSON.parse(localStorage.getItem(STATS_KEY) || '{}') as Partial<ParkStats>
    return { pulls: s.pulls ?? 0, red: s.red ?? 0, cyan: s.cyan ?? 0, value: s.value ?? 0 }
  } catch {
    return { pulls: 0, red: 0, cyan: 0, value: 0 }
  }
}

function stashMeta() {
  const stash = loadStash()
  return { count: stash.placed.length, value: stashValue(stash) }
}

/** 摸金乐园：无地图、无跑点、无战斗——页面直选容器，点击即摸，出货直接入仓库 */
export function LootParkPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [now, setNow] = useState(() => Date.now())
  const [restock, setRestock] = useState<Record<string, number>>({})
  const [result, setResult] = useState<ParkResult | null>(null)
  const [stats, setStats] = useState<ParkStats>(() => loadParkStats())
  const [resultSeq, setResultSeq] = useState(0)
  const stash = stashMeta()

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 200)
    const key = (e: KeyboardEvent) => { if (open && e.key === 'Escape') onClose() }
    window.addEventListener('keydown', key)
    return () => { window.clearInterval(id); window.removeEventListener('keydown', key) }
  }, [open, onClose])

  if (!open) return null

  const openContainer = (def: ParkContainerDef) => {
    const until = restock[def.title] ?? 0
    if (until > now) return
    const opened = openParkContainer(def)
    const value = gridValue(opened.grid)
    const red = opened.grid.placed.filter(p => parkJackpot(p.item) === 'red').length
    const cyan = opened.grid.placed.filter(p => parkJackpot(p.item) === 'cyan').length
    const jackpot: ParkResult['jackpot'] = red > 0 ? 'red' : cyan > 0 ? 'cyan' : null

    const stashGrid = loadStash()
    const stashOverflow = addToStash(stashGrid, opened.grid.placed.map(p => p.item))

    const nextStats = {
      pulls: stats.pulls + 1,
      red: stats.red + red,
      cyan: stats.cyan + cyan,
      value: stats.value + value,
    }
    const seq = resultSeq + 1
    setResultSeq(seq)
    setStats(nextStats)
    localStorage.setItem(STATS_KEY, JSON.stringify(nextStats))
    setRestock(r => ({ ...r, [def.title]: now + RESTOCK_MS }))
    setResult({ def, grid: opened.grid, value, overflow: opened.overflow + stashOverflow, jackpot, ts: seq })
  }

  const tierGroups = ([0, 1, 2, 3, 4] as ParkTier[]).map(tier => ({
    tier,
    containers: PARK_CONTAINERS.filter(c => c.tier === tier),
  }))

  return (
    <div className="absolute inset-0 z-[70] overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(120,72,15,0.34),transparent_38%),linear-gradient(180deg,#09090b_0%,#181106_52%,#09090b_100%)] p-4 sm:p-6">
      <style>{`@keyframes lp-pop{0%{opacity:0;transform:scale(.45) rotate(-7deg)}70%{transform:scale(1.08) rotate(2deg)}100%{opacity:1;transform:scale(1) rotate(0)}}@keyframes lp-glow{0%,100%{box-shadow:0 0 18px rgba(251,191,36,.22)}50%{box-shadow:0 0 42px rgba(251,191,36,.48)}}`}</style>
      <div className="mx-auto max-w-6xl pb-8">
        {/* 顶部 */}
        <div className="sticky top-0 z-10 -mx-2 mb-4 rounded-2xl border border-amber-500/30 bg-zinc-950/88 px-4 py-3 shadow-2xl backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/50 bg-amber-500/15 text-3xl shadow-[0_0_24px_rgba(251,191,36,0.25)]">🎰</div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-black tracking-widest text-amber-300">摸金乐园</h2>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">无需地图 · 点击即摸</span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300">物资池随官方公告维护</span>
              </div>
              <div className="mt-1 text-xs text-zinc-400">选择任意容器直接开摸；没有跑图、战斗、撤离和压力，出货自动收入仓库。</div>
            </div>
            <button
              onClick={() => { onClose(); engine.openStash() }}
              className="rounded-lg border border-amber-500/50 bg-amber-500/15 px-4 py-2 text-sm font-black text-amber-200 transition hover:bg-amber-500/25"
            >
              🏦 仓库 {stash.count} 件 · {stash.value.toLocaleString()}
            </button>
            <button
              onClick={onClose}
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              返回大厅 [Esc]
            </button>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[11px]">
            <div className="rounded-lg bg-zinc-900/80 px-2 py-1.5 text-zinc-400">累计开摸 <span className="font-black text-zinc-100">{stats.pulls}</span> 次</div>
            <div className="rounded-lg bg-zinc-900/80 px-2 py-1.5 text-zinc-400">大红 <span className="font-black text-red-300">{stats.red}</span></div>
            <div className="rounded-lg bg-zinc-900/80 px-2 py-1.5 text-zinc-400">大金 <span className="font-black text-cyan-300">{stats.cyan}</span></div>
            <div className="rounded-lg bg-zinc-900/80 px-2 py-1.5 text-zinc-400">累计估值 <span className="font-black text-amber-300">{stats.value.toLocaleString()}</span></div>
          </div>
        </div>

        {/* 最新出货 */}
        {result && (
          <div className={`mb-5 rounded-2xl border p-4 shadow-2xl ${result.jackpot === 'red'
            ? 'border-red-500/70 bg-red-950/25 shadow-red-950/40'
            : result.jackpot === 'cyan'
              ? 'border-cyan-400/60 bg-cyan-950/20 shadow-cyan-950/30'
              : 'border-amber-600/35 bg-zinc-950/85'}`}
            style={{ animation: 'lp-glow 1.8s ease-in-out infinite' }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-3xl">{result.def.icon}</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-black text-white">{result.def.title}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${TIER_STYLE[result.def.tier]}`}>{TIER_NAME[result.def.tier]}</span>
                  {result.jackpot === 'red' && <span className="animate-pulse rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-black text-white">🔴 大红出货</span>}
                  {result.jackpot === 'cyan' && <span className="animate-pulse rounded-full bg-cyan-400 px-2 py-0.5 text-[10px] font-black text-black">🟡 大金出货</span>}
                </div>
                <div className="mt-0.5 text-xs text-zinc-400">
                  {result.grid.placed.length} 件已收入仓库 · 估值 <span className="font-black text-amber-300">{result.value.toLocaleString()}</span> 金币
                  {result.overflow > 0 && <span className="ml-2 text-red-300">仓库/容器空间不足，{result.overflow} 件未能入库</span>}
                </div>
              </div>
              <button
                onClick={() => setResult(null)}
                className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-xs font-bold text-zinc-400 hover:text-white"
              >
                收起结果
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-start gap-4">
              <div
                className="relative shrink-0 rounded-xl border border-zinc-700 bg-zinc-900/75"
                style={{ width: result.grid.cols * 42, height: result.grid.rows * 42, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.055) 1px, transparent 1px)', backgroundSize: '42px 42px' }}
              >
                {result.grid.placed.map((p, idx) => {
                  const def = ITEMS[p.item.defId]
                  const r = RARITY_INFO[p.item.rarity]
                  return (
                    <div
                      key={`${result.ts}_${p.item.uid}`}
                      className="absolute flex flex-col items-center justify-center overflow-hidden rounded-md border"
                      style={{
                        left: p.x * 42 + 2,
                        top: p.y * 42 + 2,
                        width: def.w * 42 - 4,
                        height: def.h * 42 - 4,
                        borderColor: r.color,
                        backgroundColor: r.bg,
                        boxShadow: `inset 0 0 14px ${r.bg}, 0 0 12px ${r.bg}`,
                        animation: 'lp-pop .28s ease both',
                        animationDelay: `${idx * 90}ms`,
                      }}
                    >
                      <ItemArt defId={def.id} width={Math.min(def.w * 42 - 8, 66)} height={Math.min(def.h * 42 - 18, 66)} />
                      {def.w * 42 > 60 && <div className="w-full truncate px-1 text-center text-[10px] font-bold" style={{ color: r.color }}>{def.name}</div>}
                      <div className="absolute left-1 top-0.5 text-[9px] font-black" style={{ color: r.color }}>{r.label}</div>
                    </div>
                  )
                })}
              </div>
              <div className="grid min-w-64 flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
                {result.grid.placed.map((p, idx) => {
                  const def = ITEMS[p.item.defId]
                  const r = RARITY_INFO[p.item.rarity]
                  return (
                    <div
                      key={`list_${result.ts}_${p.item.uid}`}
                      className="flex items-center gap-2 rounded-lg border bg-zinc-950/75 p-2"
                      style={{ borderColor: `${r.color}66`, animation: 'lp-pop .28s ease both', animationDelay: `${idx * 90}ms` }}
                    >
                      <ItemArt defId={def.id} width={36} height={36} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-black" style={{ color: r.color }}>{def.name}{p.item.count > 1 ? ` ×${p.item.count}` : ''}</div>
                        <div className="text-[10px] text-zinc-500">{r.name} · {itemValue(def).toLocaleString()} 金币</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* 容器直选 */}
        <div className="space-y-5">
          {tierGroups.map(group => {
            const odds = TIER_ODDS[group.tier]
            return (
              <section key={group.tier}>
                <div className="mb-2 flex flex-wrap items-center gap-2 px-1">
                  <span className={`rounded-full border px-3 py-1 text-xs font-black ${TIER_STYLE[group.tier]}`}>{TIER_NAME[group.tier]}</span>
                  <span className="text-[11px] text-zinc-500">红 {(odds.red * 100).toFixed(group.tier >= 3 ? 2 : 1)}% · 金 {(odds.gold * 100).toFixed(1)}% · 紫 {(odds.purple * 100).toFixed(0)}%</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.containers.map(def => {
                    const until = restock[def.title] ?? 0
                    const left = Math.max(0, until - now)
                    const cooling = left > 0
                    const pct = cooling ? 1 - left / RESTOCK_MS : 1
                    return (
                      <button
                        key={def.title}
                        onClick={() => openContainer(def)}
                        disabled={cooling}
                        className={`group relative overflow-hidden rounded-2xl border-2 p-3 text-left transition-all ${cooling
                          ? 'cursor-wait border-zinc-800 bg-zinc-950/70 opacity-60'
                          : 'border-zinc-700 bg-zinc-950/78 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-950/20 hover:shadow-[0_0_28px_rgba(251,191,36,0.18)]'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-3xl transition ${cooling ? 'border-zinc-800 bg-zinc-900 grayscale' : 'border-amber-500/30 bg-amber-500/10 group-hover:scale-110'}`}>{def.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate text-base font-black text-zinc-100">{def.title}</span>
                              <span className="text-[10px] font-mono text-zinc-500">{def.gridW}×{def.gridH}</span>
                            </div>
                            <div className="mt-1 text-[11px] font-bold text-amber-200/85">{CAT_NAME[def.cat]}</div>
                            <div className="mt-1 text-[10px] leading-snug text-zinc-500">
                              {cooling ? `补货中 ${Math.ceil(left / 1000)} 秒` : `${def.slots[0]}-${def.slots[1]} 件 · 点击直接摸`}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                          <div className={`h-full rounded-full ${cooling ? 'bg-cyan-400' : 'bg-amber-400'}`} style={{ width: `${Math.round(pct * 100)}%` }} />
                        </div>
                        {!cooling && <div className="absolute right-2 top-2 rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-black text-amber-300 opacity-0 transition group-hover:opacity-100">开摸</div>}
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
