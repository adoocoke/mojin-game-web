import { useState } from 'react'
import { engine, useUI } from '@/game/store'
import { ITEMS } from '@/game/data'
import { RARITY_INFO } from '@/game/types'
import { RAVEN_CANDLES, loadTrickster } from '@/game/trickster'

/**
 * 惊喜渡鸦：路灯提交面板（官方 10/23 活动镜像）
 * 规则对齐官方：提交本局搜到的紫色以上收藏品，渡鸦返还惊喜（升档）/等价互换/掉价/整蛊（叼走）；
 * 同一盏灯提交越多收益越高、风险越大；蜡烛烧尽路灯作废。
 * 联动/活动/任务收集品不可提交（官方不收）。界面与美术原创。
 */
export function RavenPanel() {
  const ui = useUI()
  const [lastMsg, setLastMsg] = useState('')
  if (!ui.ravenOpen || !ui.backpack) return null

  const lamp = ui.ravenLamp
  const tokens = loadTrickster().tokens
  // 可提交：紫色以上变卖物；排除活动/任务/联动收集品（对应官方不收清单）
  const submittable = ui.backpack.placed.filter(p => {
    const def = ITEMS[p.item.defId]
    if (!def || def.kind !== 'valuable') return false
    if (!['purple', 'cyan', 'red'].includes(p.item.rarity)) return false
    if (def.openable || def.id.startsWith('ev_') || def.id === 'v_idtag' || def.id === 'v_butterfly') return false
    return true
  })

  const submit = (uid: string) => {
    const msg = engine.ravenSubmit(uid)
    if (msg) setLastMsg(msg)
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => engine.closeRaven()}>
      <div
        className="w-[26rem] max-w-[92vw] rounded-xl border border-amber-600/40 bg-zinc-950/95 p-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-black text-amber-300">🐦‍⬛ 渡鸦路灯</h3>
          <button onClick={() => engine.closeRaven()} className="text-zinc-500 hover:text-zinc-200 text-lg px-2">✕</button>
        </div>
        <div className="text-[10px] text-zinc-500 mb-3 leading-relaxed">
          提交本局搜到的紫色以上收藏品，渡鸦会还你「惊喜」或「整蛊」。同一盏灯提交越多，收益越高、风险越大。
          蜡烛烧尽后渡鸦飞走。捣蛋代币余额：<span className="text-amber-300 font-bold">{tokens}</span>
        </div>

        {lamp && (
          <div className="flex items-center gap-1 mb-3">
            <span className="text-[10px] text-zinc-400 mr-1">蜡烛</span>
            {Array.from({ length: RAVEN_CANDLES }).map((_, i) => (
              <span key={i} className={`inline-block w-2.5 h-3.5 rounded-sm ${i < lamp.left ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]' : 'bg-zinc-700'}`} />
            ))}
            <span className="text-[10px] text-zinc-500 ml-1">{lamp.left}/{RAVEN_CANDLES}</span>
          </div>
        )}

        {lastMsg && (
          <div className="mb-3 rounded-lg border border-purple-500/40 bg-purple-500/10 px-3 py-2 text-[11px] text-purple-200 leading-relaxed">
            {lastMsg}
          </div>
        )}

        <div className="max-h-56 overflow-y-auto space-y-1.5">
          {submittable.length === 0 && (
            <div className="text-[11px] text-zinc-500 border border-zinc-800 rounded-lg px-3 py-3 text-center">
              背包里没有可提交的收藏品（需紫色以上变卖物；活动/任务/联动收集品不收）
            </div>
          )}
          {submittable.map(p => {
            const def = ITEMS[p.item.defId]
            const ri = RARITY_INFO[p.item.rarity as keyof typeof RARITY_INFO]
            return (
              <button
                key={p.item.uid}
                onClick={() => submit(p.item.uid)}
                className="w-full flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900/70 px-2.5 py-1.5 hover:border-amber-500/60 hover:bg-amber-500/10 transition-colors text-left"
              >
                <span className="text-lg">{def.icon}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs font-bold truncate" style={{ color: ri?.color }}>{def.name}{p.item.count > 1 ? ` ×${p.item.count}` : ''}</span>
                  <span className="block text-[10px] text-zinc-500">{ri?.label} · 提交 1 件</span>
                </span>
                <span className="text-[10px] text-amber-300 font-mono">提交 ›</span>
              </button>
            )
          })}
        </div>

        <div className="mt-3 text-center text-[10px] text-zinc-600">按 F 或 Esc 收起面板</div>
      </div>
    </div>
  )
}
