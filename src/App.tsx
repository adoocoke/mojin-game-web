import { useEffect, useRef, useState } from 'react'
import { Game } from '@/game/engine'
import { engine, uiState, useUI } from '@/game/store'
import { HUD } from '@/components/game/HUD'
import { InventoryOverlay } from '@/components/game/InventoryOverlay'
import { MenuScreen, ResultScreen } from '@/components/game/Screens'
import { TouchControls, useIsTouch } from '@/components/game/TouchControls'
import { WarehousePanel } from '@/components/game/WarehousePanel'
import { MapOverlay } from '@/components/game/MapOverlay'
import { MarketPanel } from '@/components/game/MarketPanel'
import { LoadoutPanel } from '@/components/game/LoadoutPanel'
import { QuestPanel } from '@/components/game/QuestPanel'
import { PassPanel } from '@/components/game/PassPanel'
import { AchPanel } from '@/components/game/AchPanel'
import { OnlinePanel } from '@/components/game/OnlinePanel'
import { CampaignScreen, CampaignResultOverlay } from '@/components/game/CampaignScreen'
import { InspectOverlay } from '@/components/game/InspectOverlay'
import { roomFromUrl } from '@/game/net'

export default function App() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <GameStage />
    </div>
  )
}

/** 画布 + 引擎实例；切换地图时整体重建 */
function GameStage() {
  const ui = useUI()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const rid = roomFromUrl()
    if (rid) { uiState.vsRoomUrl = rid; uiState.vsOpen = true }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    const game = new Game(canvasRef.current, ui.mapId)
    game.run()
    setReady(true)
    return () => { setReady(false); game.dispose() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ui.mapId, ui.night, ui.highRisk]) // 高危禁区切换也要重建世界（军用保险库）

  return (
    <>
      <canvas ref={canvasRef} className="block w-full h-full" />
      {ready && <GameUI />}
    </>
  )
}

/** 联机对战结算覆盖层 */
function VsEndOverlay() {
  const ui = useUI()
  if (!ui.vsEnd) return null
  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/75">
      <div className="text-center rounded-xl border border-zinc-600 bg-zinc-950/95 p-8 shadow-2xl">
        <div className="text-6xl mb-4">{ui.vsEnd === 'win' ? '🏆' : '💀'}</div>
        <div className={`text-3xl font-black tracking-widest mb-2 ${ui.vsEnd === 'win' ? 'text-amber-300' : 'text-red-400'}`}>
          {ui.vsEnd === 'win' ? '胜利！你击倒了对手' : '战败……被对手击倒'}
        </div>
        <div className="text-zinc-500 text-sm mb-6">与 {ui.vsSession?.players.filter(p => p.id !== ui.vsSession?.playerId).map(p => p.name).join('、') ?? '对手'} 的对局已结束</div>
        <button onClick={() => engine.vsExit()}
          className="px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black font-black tracking-widest">
          返回大厅
        </button>
      </div>
    </div>
  )
}

function GameUI() {
  const ui = useUI()
  const isTouch = useIsTouch()
  return (
    <>
      <HUD />
      {isTouch && <TouchControls />}
      <InventoryOverlay />
      <MenuScreen />
      <ResultScreen />
      <WarehousePanel />
      <MarketPanel />
      <LoadoutPanel />
      <QuestPanel />
      <PassPanel />
      <AchPanel />
      <OnlinePanel />
        <CampaignScreen />
        <CampaignResultOverlay />
        <InspectOverlay />
      <VsEndOverlay />
      <MapOverlay />
      {/* 点击锁定鼠标提示（仅 PC） */}
      {!isTouch && ui.phase === 'playing' && !ui.invOpen && (
        <ClickToLockHint />
      )}
    </>
  )
}

function ClickToLockHint() {
  const [locked, setLocked] = useState(!!document.pointerLockElement)
  useEffect(() => {
    const h = () => setLocked(!!document.pointerLockElement)
    document.addEventListener('pointerlockchange', h)
    return () => document.removeEventListener('pointerlockchange', h)
  }, [])
  if (locked) return null
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/50 pointer-events-none">
      <div className="text-zinc-200 text-lg font-bold bg-zinc-900/90 border border-zinc-600 rounded-lg px-6 py-3">
        点击画面锁定鼠标，继续行动
      </div>
    </div>
  )
}
