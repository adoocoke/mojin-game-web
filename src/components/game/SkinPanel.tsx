import { useState } from 'react'
import { engine, useUI } from '@/game/store'
import { GUNS, KNIFE } from '@/game/data'
import { RARITY_INFO } from '@/game/types'
import { SKINS, loadSkins, grantSkin, equipSkin, unequipSkin, type SkinDef } from '@/game/skins'
import { officialEventActive } from '@/game/events'
import { loadVouchers, spendVouchers, skinVoucherPrice, voucherEventActive } from '@/game/vouchers'
import { saveMoney } from '@/game/stash'
import { notify } from '@/game/store'

const ALL_GUNS: { id: string; name: string }[] = [
  { id: KNIFE.id, name: KNIFE.name },
  ...Object.values(GUNS).map(g => ({ id: g.id, name: g.name })),
]

function SkinCard({ skin, money }: { skin: SkinDef; money: number }) {
  const ui = useUI()
  const save = loadSkins()
  const owned = save.owned.includes(skin.id)
  const applicable = ALL_GUNS.filter(g => skin.gun === 'any' || skin.gun === g.id)
  const equippedTo = applicable.filter(g => save.equipped[g.id] === skin.id).map(g => g.id)
  const [pick, setPick] = useState(applicable[0]?.id ?? '')
  const r = RARITY_INFO[skin.rarity]

  // 官方活动「周年神秘折扣商店」：全场 5 折；「限时三角券狂欢」：可用券购买
  const sale = officialEventActive('周年神秘折扣商店')
  const goldPrice = skin.price ? (sale ? Math.ceil(skin.price / 2) : skin.price) : undefined
  const vPrice = goldPrice ? skinVoucherPrice(goldPrice) : undefined
  const vBalance = loadVouchers().total
  const vActive = voucherEventActive()

  const doBuy = () => {
    if (goldPrice == null || ui.money < goldPrice) return
    ui.money -= goldPrice
    saveMoney(ui.money)
    grantSkin(loadSkins(), skin.id)
    notify()
  }

  const doBuyVoucher = () => {
    if (vPrice == null) return
    if (spendVouchers(vPrice)) {
      grantSkin(loadSkins(), skin.id)
      notify()
    }
  }

  return (
    <div className={`rounded-lg border px-3 py-2.5 bg-zinc-900/60 ${owned ? 'border-pink-500/40' : 'border-zinc-700'}`}
      style={owned ? { boxShadow: `inset 0 0 18px #${skin.main.toString(16).padStart(6, '0')}22` } : undefined}>
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-bold text-zinc-200 flex items-center gap-1.5">
          <span className="inline-block w-3.5 h-3.5 rounded-sm border border-white/20"
            style={{ background: `#${skin.main.toString(16).padStart(6, '0')}`, boxShadow: skin.emissive ? `0 0 6px #${skin.emissive.toString(16).padStart(6, '0')}` : undefined }} />
          {skin.icon} {skin.name}
          <span className="text-[10px]" style={{ color: r.color }}>{r.name}</span>
        </div>
        {owned
          ? <span className="text-[10px] text-emerald-400 border border-emerald-600/40 rounded px-1">已拥有</span>
          : goldPrice
            ? (
              <span className="text-[10px] text-yellow-300 font-mono flex items-center gap-1">
                {sale && <span className="line-through text-zinc-500">{skin.price!.toLocaleString()}</span>}
                {goldPrice.toLocaleString()} 金币
                {sale && <span className="text-red-300 border border-red-500/50 rounded px-0.5 bg-red-500/10 font-sans">5折</span>}
              </span>
            )
            : <span className="text-[10px] text-amber-300 border border-amber-600/40 rounded px-1">活动限定</span>}
      </div>
      <div className="text-[11px] text-zinc-400 mt-1">{skin.desc}</div>
      <div className="text-[10px] text-zinc-500 mt-0.5">
        适用：{skin.gun === 'any' ? '全部武器' : (GUNS[skin.gun]?.name ?? skin.gun)}
        {equippedTo.length > 0 && <span className="text-pink-300 ml-2">已装备：{equippedTo.map(id => ALL_GUNS.find(g => g.id === id)?.name).join('、')}</span>}
      </div>
      <div className="flex items-center gap-2 mt-2">
        {!owned && goldPrice != null && (
          <button onClick={doBuy} disabled={money < goldPrice}
            className="px-3 py-1 rounded bg-yellow-600/80 hover:bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-white">
            💰 {goldPrice.toLocaleString()}
          </button>
        )}
        {!owned && vActive && vPrice != null && (
          <button onClick={doBuyVoucher} disabled={vBalance < vPrice}
            className="px-3 py-1 rounded bg-cyan-600/80 hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-white">
            🎟️ {vPrice.toLocaleString()} 券
          </button>
        )}
        {owned && (
          <>
            <select value={pick} onChange={e => setPick(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 rounded text-xs text-zinc-200 px-1.5 py-1 max-w-[10rem]">
              {applicable.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
            <button
              onClick={() => { equipSkin(loadSkins(), pick, skin.id); notify() }}
              className="px-3 py-1 rounded bg-pink-600/80 hover:bg-pink-500 text-xs font-bold text-white">
              装备
            </button>
            {equippedTo.length > 0 && (
              <button
                onClick={() => { const s = loadSkins(); for (const id of equippedTo) unequipSkin(s, id); notify() }}
                className="px-2.5 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-xs text-zinc-300">
                卸下
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

/** 皮肤面板：枪皮收藏 / 商店购买 / 按枪装备 */
export function SkinPanel() {
  const ui = useUI()
  if (!ui.skinOpen) return null
  const save = loadSkins()
  const ownedCount = save.owned.length

  return (
    <div className="absolute inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm" onClick={() => engine.closeSkins()}>
      <div
        className="max-w-2xl w-full mx-auto my-8 rounded-xl border border-pink-600/40 bg-zinc-950/95 p-5 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-black text-pink-300">🎨 皮肤</h2>
          <button onClick={() => engine.closeSkins()} className="text-zinc-500 hover:text-zinc-200 text-xl px-2">✕</button>
        </div>
        <div className="text-xs text-zinc-400 mb-3 flex justify-between">
          <span>已收藏 <span className="text-pink-300 font-bold">{ownedCount}</span> / {SKINS.length}</span>
          <span className="flex gap-3">
            {voucherEventActive() && <span>🎟️ <span className="text-cyan-300 font-mono font-bold">{loadVouchers().total.toLocaleString()}</span></span>}
            <span>💰 <span className="text-yellow-300 font-mono font-bold">{ui.money.toLocaleString()}</span></span>
          </span>
        </div>
        <div className="text-[10px] text-zinc-500 mb-3 leading-relaxed">
          皮肤永久保留、按枪装备，进局后第一人称视模生效。带「活动限定」标记的皮肤由官方活动镜像发放（见主界面活动横幅）。
        </div>
        <div className="space-y-2">
          {SKINS.map(s => <SkinCard key={s.id} skin={s} money={ui.money} />)}
        </div>
      </div>
    </div>
  )
}
