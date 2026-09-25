import { useRef, useState } from 'react'
import { engine, useUI, notify, uiState } from '@/game/store'
import { ITEMS, DRINK_MATS, DRINK_RECIPES, matchRecipe, makeItem } from '@/game/data'
import { loadStash, saveStash } from '@/game/stash'
import { autoPlace, removeItem } from '@/game/inventory'
import { itemValue } from '@/game/types'
import { officialEventActive } from '@/game/events'
import { saveMoney } from '@/game/stash'

/** 统计仓库中各调酒材料数量 */
function matCounts(): Record<string, number> {
  const stash = loadStash()
  const counts: Record<string, number> = {}
  for (const p of stash.placed) {
    if ((DRINK_MATS as readonly string[]).includes(p.item.defId)) {
      counts[p.item.defId] = (counts[p.item.defId] ?? 0) + p.item.count
    }
  }
  return counts
}

/** 饮品特调（官方调酒活动）：选 3 份材料 + 按住摇晃定秒数，按官方配方调制 */
export function MixPanel() {
  const ui = useUI()
  const [sel, setSel] = useState<string[]>([])
  const [shaking, setShaking] = useState(false)
  const [sec, setSec] = useState(0)
  const [result, setResult] = useState('')
  const timer = useRef<{ start: number; raf: number } | null>(null)

  if (!ui.mixOpen) return null
  const active = officialEventActive('饮品特调返场')
  const counts = matCounts()
  const selCount: Record<string, number> = {}
  for (const m of sel) selCount[m] = (selCount[m] ?? 0) + 1

  const toggleMat = (defId: string) => {
    setResult('')
    const owned = counts[defId] ?? 0
    const used = selCount[defId] ?? 0
    if (used < owned && sel.length < 3 && !sel.includes(defId)) {
      setSel([...sel, defId])
    } else if (sel.includes(defId)) {
      setSel(sel.filter(m => m !== defId))
    }
  }

  const startShake = () => {
    if (sel.length !== 3 || shaking) return
    setResult('')
    setShaking(true)
    const start = performance.now()
    const tick = () => {
      setSec((performance.now() - start) / 1000)
      timer.current!.raf = requestAnimationFrame(tick)
    }
    timer.current = { start, raf: requestAnimationFrame(tick) }
  }

  const stopShake = () => {
    if (!shaking || !timer.current) return
    cancelAnimationFrame(timer.current.raf)
    const finalSec = (performance.now() - timer.current.start) / 1000
    timer.current = null
    setShaking(false)
    doMix(finalSec)
  }

  const doMix = (shakeSec: number) => {
    const stash = loadStash()
    // 消耗 3 份材料
    for (const m of sel) {
      const p = stash.placed.find(x => x.item.defId === m)
      if (!p) continue
      p.item.count--
      if (p.item.count <= 0) removeItem(stash, p.item.uid)
    }
    const r = matchRecipe(sel, shakeSec)
    const outId = r ? r.out : 'dk_dark'
    const outDef = ITEMS[outId]
    const it = makeItem(outId, 1)
    if (autoPlace(stash, it)) {
      setResult(
        r
          ? `🍹 调制成功：「${outDef.name}」（${r.cat}类 · ${r.eff}）！已放入仓库，带入局内饮用生效`
          : `🤢 配方或摇晃时间不对，调出了「黑暗特调」……已放入仓库，谨慎饮用`
      )
    } else {
      const gold = itemValue(outDef)
      uiState.money += gold
      saveMoney(uiState.money)
      setResult(`仓库已满，「${outDef.name}」折现 +${gold.toLocaleString()} 金币`)
    }
    saveStash(stash)
    setSel([])
    setSec(0)
    notify()
  }

  return (
    <div className="absolute inset-0 z-[60] overflow-y-auto bg-black/80 backdrop-blur-sm" onClick={() => { stopShake(); engine.closeMix() }}>
      <div
        className="max-w-2xl w-full mx-auto my-8 rounded-xl border border-emerald-600/40 bg-zinc-950/95 p-5 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-black text-emerald-300">🍹 饮品特调</h2>
          <button onClick={() => engine.closeMix()} className="text-zinc-500 hover:text-zinc-200 text-xl px-2">✕</button>
        </div>
        <div className="text-[10px] text-zinc-500 mb-4 leading-relaxed">
          官方饮品特调活动：局内容器收集材料，选 <span className="text-emerald-300">3 份材料</span>，按住「摇晃」控制秒数，
          配方与摇晃时间都对才能调出对应饮品；调错会得到「黑暗特调」（喝了会醉）。成品在仓库，带入局内饮用获得增益。
        </div>

        {!active && (
          <div className="mb-3 rounded-lg border border-amber-600/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
            ⚠️ 活动未在窗口期（9月26日 - 10月15日），材料暂不掉落；仍可用已有材料调制。
          </div>
        )}

        {/* 材料选择 */}
        <div className="text-sm font-bold text-zinc-300 mb-2">① 选择 3 份材料（{sel.length}/3）</div>
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {DRINK_MATS.map(id => {
            const d = ITEMS[id]
            const n = counts[id] ?? 0
            const picked = sel.includes(id)
            return (
              <button
                key={id}
                onClick={() => toggleMat(id)}
                disabled={n === 0 && !picked}
                className={`rounded-lg border px-2 py-1.5 text-xs flex items-center gap-1.5 transition-colors ${
                  picked
                    ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200'
                    : n > 0
                      ? 'border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:border-zinc-500'
                      : 'border-zinc-800 bg-zinc-900/30 text-zinc-600 cursor-not-allowed'
                }`}
              >
                <span className="text-base">{d.icon}</span>
                <span className="flex-1 text-left truncate">{d.name}</span>
                <span className={`font-mono ${n > 0 ? 'text-zinc-400' : 'text-zinc-700'}`}>×{n}</span>
              </button>
            )
          })}
        </div>

        {/* 摇晃 */}
        <div className="text-sm font-bold text-zinc-300 mb-2">② 按住摇晃，按配方秒数松开</div>
        <div className="flex items-center gap-3 mb-4">
          <button
            onMouseDown={startShake}
            onMouseUp={stopShake}
            onMouseLeave={() => shaking && stopShake()}
            onTouchStart={e => { e.preventDefault(); startShake() }}
            onTouchEnd={e => { e.preventDefault(); stopShake() }}
            disabled={sel.length !== 3}
            className={`flex-1 py-3 rounded-xl font-black text-lg transition-all select-none ${
              sel.length !== 3
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                : shaking
                  ? 'bg-emerald-500 text-black scale-95 animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {sel.length !== 3 ? '先选满 3 份材料' : shaking ? `🫨 摇晃中… ${sec.toFixed(1)}s` : '🫗 按住摇晃'}
          </button>
          <div className="w-24 text-center">
            <div className={`text-2xl font-black font-mono ${shaking ? 'text-emerald-300' : 'text-zinc-500'}`}>
              {sec.toFixed(1)}s
            </div>
            <div className="text-[10px] text-zinc-600">摇晃秒数</div>
          </div>
        </div>

        {result && (
          <div className={`mb-4 rounded-lg border px-3 py-2.5 text-sm ${
            result.startsWith('🍹') ? 'border-emerald-600/50 bg-emerald-500/10 text-emerald-200' : 'border-amber-600/50 bg-amber-500/10 text-amber-200'
          }`}>
            {result}
          </div>
        )}

        {/* 配方图鉴 */}
        <div className="text-sm font-bold text-zinc-300 mb-2">📖 配方图鉴（与官方一致）</div>
        <div className="space-y-1">
          {DRINK_RECIPES.map(r => {
            const out = ITEMS[r.out]
            return (
              <div key={r.out} className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-2.5 py-1.5 text-xs">
                <span className="text-base">{out.icon}</span>
                <span className="font-bold text-zinc-200 w-20 truncate">{out.name}</span>
                <span className="text-zinc-500 flex-1 truncate">
                  {r.mats.map(m => ITEMS[m].name).join(' + ')}
                </span>
                <span className="text-emerald-400/90 font-mono whitespace-nowrap">摇 {r.shake[0]}-{r.shake[1]}s</span>
                <span className="text-zinc-500 whitespace-nowrap hidden sm:inline">{r.cat}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
