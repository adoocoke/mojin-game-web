import { useEffect, useMemo, useRef, useState } from 'react'
import { engine, notify, useUI } from '@/game/store'
import {
  HOTPOT_BUNDLE_NEED, HOTPOT_DAILY_CAP, HOTPOT_FOODS, HOTPOT_OPS,
  claimHotpotBundle, hotpotActive, loadHotpot, reportHotpotGame, type HotpotOp,
} from '@/game/hotpot'
import { makeItem } from '@/game/data'
import { addToStash, loadStash } from '@/game/stash'

/**
 * 火锅对决（周年庆小游戏镜像）
 * 规则框架对齐官方：1 分钟对局、夹菜得分（单格 +5 / 两格 +10 / 生姜 -8）、
 * 夹取冷却、干员技能、6 人排名积分、每日积分上限、累计 70 分换「猛火强攻捆绑包」。
 * AI 对手、界面与美术均为原创。
 */

const ROUND_SEC = 60
const GRAB_CD_MS = 800
const CELLS = 9

interface CellFood {
  idx: number // HOTPOT_FOODS 下标
  born: number
}

interface AiScore {
  name: string
  icon: string
  score: number
  rate: number // 每秒期望得分
}

const AI_NAMES = [
  { name: '锅边老李', icon: '🧓' },
  { name: '麻辣新兵', icon: '🌶️' },
  { name: '涮涮小队', icon: '🍲' },
  { name: '底料大师', icon: '🥄' },
  { name: '捞月人', icon: '🌙' },
]

export function HotpotPanel() {
  const ui = useUI()
  const [phase, setPhase] = useState<'pick' | 'play' | 'over'>('pick')
  const [op, setOp] = useState<HotpotOp>(HOTPOT_OPS[0])
  const [cells, setCells] = useState<(CellFood | null)[]>(Array(CELLS).fill(null))
  const [score, setScore] = useState(0)
  const [left, setLeft] = useState(ROUND_SEC)
  const [cdUntil, setCdUntil] = useState(0)
  const [skillUntil, setSkillUntil] = useState(0)
  const [skillUsed, setSkillUsed] = useState(false)
  const [ais, setAis] = useState<AiScore[]>([])
  const [result, setResult] = useState<{ rank: number; gained: number; total: number } | null>(null)
  const [msg, setMsg] = useState('')
  const save = useMemo(() => loadHotpot(), [ui.hotpotOpen, phase])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // 对局主循环
  useEffect(() => {
    if (phase !== 'play') return
    const t0 = Date.now()
    timerRef.current = setInterval(() => {
      const el = (Date.now() - t0) / 1000
      setLeft(Math.max(0, ROUND_SEC - Math.floor(el)))
      // 补菜：空格随机长出新菜，保持桌上 3~6 份
      setCells(prev => {
        const next = [...prev]
        const filled = next.filter(Boolean).length
        if (filled < 6 && Math.random() < 0.55) {
          const empty = next.map((c, i) => (c ? -1 : i)).filter(i => i >= 0)
          if (empty.length) {
            const slot = empty[Math.floor(Math.random() * empty.length)]
            // 生姜概率 16%，两格菜 30%
            const r = Math.random()
            let fi = Math.floor(Math.random() * 4) // 单格菜
            if (r < 0.16) fi = 7
            else if (r > 0.7) fi = 4 + Math.floor(Math.random() * 3)
            next[slot] = { idx: fi, born: Date.now() }
          }
        }
        return next
      })
      // AI 对手得分模拟
      setAis(prev => prev.map(a => ({ ...a, score: a.score + (Math.random() < a.rate * 0.5 ? (Math.random() < 0.25 ? 10 : 5) : 0) })))
      if (el >= ROUND_SEC) {
        if (timerRef.current) clearInterval(timerRef.current)
        setPhase('over')
      }
    }, 500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  // 结算
  useEffect(() => {
    if (phase !== 'over' || result) return
    setAis(prev => {
      const board = [...prev, { name: '你', icon: op.icon, score, rate: 0 }].sort((a, b) => b.score - a.score)
      const rank = board.findIndex(b => b.name === '你') + 1
      const rep = reportHotpotGame(rank)
      setResult({ rank, gained: rep.gained, total: rep.total })
      return prev
    })
  }, [phase, result, op.icon, score])

  if (!ui.hotpotOpen) return null
  const now = Date.now()
  const active = hotpotActive(now)
  const cdLeft = Math.max(0, cdUntil - now)
  const skillOn = skillUntil > now
  const noCd = op.id === 'wuming' && skillOn
  const doublePts = op.id === 'die' && skillOn
  const gingerSafe = op.id === 'die' && skillOn
  const gingerWarn = op.id === 'honglang'

  const start = () => {
    setCells(Array(CELLS).fill(null))
    setScore(0)
    setLeft(ROUND_SEC)
    setCdUntil(0)
    setSkillUntil(0)
    setSkillUsed(false)
    setResult(null)
    setMsg('')
    setAis(AI_NAMES.map(n => ({ ...n, score: 0, rate: 0.55 + Math.random() * 0.5 })))
    setPhase('play')
  }

  const grab = (i: number) => {
    const c = cells[i]
    if (!c || phase !== 'play') return
    if (!noCd && Date.now() < cdUntil) return
    const f = HOTPOT_FOODS[c.idx]
    let pts = f.pts
    if (f.ginger && gingerSafe) pts = 0
    if (pts > 0 && doublePts) pts *= 2
    setScore(s => Math.max(0, s + pts))
    setMsg(f.ginger ? (pts === 0 ? '🦋 蝶翼护体：生姜没扣分' : `🫚 夹到生姜！${pts} 分`) : `+${pts} ${f.name}`)
    setCells(prev => prev.map((x, j) => (j === i ? null : x)))
    if (!noCd) setCdUntil(Date.now() + GRAB_CD_MS)
  }

  const useSkill = () => {
    if (skillUsed || phase !== 'play') return
    setSkillUsed(true)
    setSkillUntil(Date.now() + (op.id === 'wuming' ? 5000 : 8000))
  }

  const claimBundle = () => {
    if (!claimHotpotBundle()) return
    const stash = loadStash()
    addToStash(stash, [makeItem('ev_hotpot_bundle', 1)])
    ui.stash = stash
    setMsg('🔥 猛火强攻捆绑包已入仓库——去仓库开启！')
    notify()
  }

  const board = [...ais, { name: '你', icon: op.icon, score, rate: 0 }].sort((a, b) => b.score - a.score)

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm" onClick={() => engine.closeHotpot()}>
      <div
        className="w-full max-w-lg rounded-xl border border-red-600/40 bg-zinc-950/95 p-5 shadow-2xl mx-4 max-h-[92vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-black text-red-300">🍲 火锅对决</h2>
          <button onClick={() => engine.closeHotpot()} className="text-zinc-500 hover:text-zinc-200 text-xl px-2">✕</button>
        </div>
        <div className="text-[11px] text-zinc-500 mb-3">
          二周年庆官方小游戏镜像：1 分钟夹菜比拼，单格菜 +5 / 两格菜 +10 / 生姜 -8。按排名得积分（第 1 名 5 分），
          每日上限 {HOTPOT_DAILY_CAP} 分，累计 {HOTPOT_BUNDLE_NEED} 分兑换「猛火强攻捆绑包」。
        </div>

        {/* 积分进度 */}
        <div className="flex items-center gap-3 mb-3 text-xs font-mono">
          <span className="text-amber-300">今日 {save.dayPts}/{HOTPOT_DAILY_CAP}</span>
          <span className="text-red-300">累计 {save.totalPts}/{HOTPOT_BUNDLE_NEED}</span>
          <span className="text-zinc-500">对局 {save.games}</span>
          {!save.bundleClaimed && save.totalPts >= HOTPOT_BUNDLE_NEED && (
            <button onClick={claimBundle} className="rounded border border-red-500/60 bg-red-500/15 text-red-200 px-2 py-0.5 font-bold hover:bg-red-500/30">
              🎁 领取捆绑包
            </button>
          )}
          {save.bundleClaimed && <span className="text-emerald-300">捆绑包已领</span>}
        </div>

        {!active && (
          <div className="mb-3 rounded border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-xs text-zinc-400">
            📅 活动档期 9月30日—10月22日。当前不在窗口期，可练习但积分不计入官方档期（本地仍记录）。
          </div>
        )}

        {phase === 'pick' && (
          <>
            <div className="text-sm font-bold text-zinc-300 mb-2">选择出战干员</div>
            <div className="space-y-2 mb-4">
              {HOTPOT_OPS.map(o => (
                <button
                  key={o.id}
                  onClick={() => setOp(o)}
                  className={`w-full text-left rounded-lg border px-3 py-2 transition-colors ${
                    op.id === o.id ? 'border-red-500/70 bg-red-500/10' : 'border-zinc-700 bg-zinc-900/60 hover:border-zinc-500'
                  }`}
                >
                  <span className="text-lg mr-2">{o.icon}</span>
                  <span className="font-bold text-zinc-100">{o.name}</span>
                  <span className="text-xs text-zinc-400 ml-2">{o.desc}</span>
                </button>
              ))}
            </div>
            <button onClick={start} className="w-full rounded-lg bg-red-500 py-2.5 font-black text-black hover:bg-red-400">
              🔥 开锅！
            </button>
          </>
        )}

        {phase === 'play' && (
          <>
            <div className="flex items-center justify-between mb-2 font-mono text-sm">
              <span className="text-zinc-300">⏱ {left}s</span>
              <span className="text-amber-300 font-black text-lg">{score} 分</span>
              {op.id !== 'honglang' ? (
                <button
                  onClick={useSkill}
                  disabled={skillUsed}
                  className={`rounded px-2 py-1 text-xs font-bold ${skillUsed ? 'bg-zinc-800 text-zinc-600' : 'bg-amber-500 text-black hover:bg-amber-400'}`}
                >
                  {skillUsed ? (skillOn ? '技能生效中' : '技能已用') : `${op.icon} 技能`}
                </button>
              ) : (
                <span className="text-xs text-zinc-500">🐺 被动生效中</span>
              )}
            </div>
            {/* 锅格 */}
            <div className="grid grid-cols-3 gap-2 mb-2 rounded-xl border border-red-900/60 bg-gradient-to-b from-red-950/60 to-zinc-950 p-3">
              {cells.map((c, i) => {
                const f = c ? HOTPOT_FOODS[c.idx] : null
                const warn = f?.ginger && gingerWarn
                return (
                  <button
                    key={i}
                    onClick={() => grab(i)}
                    className={`aspect-square rounded-lg text-3xl flex items-center justify-center transition-all ${
                      f
                        ? warn
                          ? 'bg-zinc-800 border-2 border-yellow-500/80 hover:scale-105'
                          : f.ginger
                            ? 'bg-zinc-800/80 border border-zinc-700 hover:scale-105'
                            : f.big
                              ? 'bg-red-900/50 border border-red-500/50 hover:scale-105'
                              : 'bg-zinc-800 border border-zinc-600 hover:scale-105'
                        : 'bg-zinc-900/60 border border-zinc-800'
                    } ${!noCd && cdLeft > 0 ? 'opacity-60' : ''}`}
                  >
                    {f ? f.icon : ''}
                    {f?.big && <span className="absolute text-[9px] text-red-300 mt-8">+10</span>}
                  </button>
                )
              })}
            </div>
            <div className="h-4 text-xs text-amber-200 mb-1">{msg}</div>
            {/* 实时排名 */}
            <div className="space-y-0.5">
              {board.map((b, i) => (
                <div key={b.name} className={`flex justify-between text-xs px-2 py-0.5 rounded ${b.name === '你' ? 'bg-red-500/15 text-red-200 font-bold' : 'text-zinc-500'}`}>
                  <span>{i + 1}. {b.icon} {b.name}</span>
                  <span className="font-mono">{b.score}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {phase === 'over' && result && (
          <div className="text-center">
            <div className="text-4xl mb-2">{result.rank === 1 ? '🏆' : result.rank <= 3 ? '🥢' : '🍥'}</div>
            <div className="text-xl font-black text-zinc-100 mb-1">第 {result.rank} 名 · {score} 分</div>
            <div className="text-sm text-amber-300 mb-1">
              活动积分 +{result.gained}（累计 {result.total}/{HOTPOT_BUNDLE_NEED}）
            </div>
            {result.gained === 0 && <div className="text-xs text-zinc-500 mb-2">今日积分已达上限，明天再来</div>}
            <div className="space-y-0.5 my-3 text-left">
              {[...ais, { name: '你', icon: op.icon, score, rate: 0 }].sort((a, b) => b.score - a.score).map((b, i) => (
                <div key={b.name} className={`flex justify-between text-xs px-2 py-0.5 rounded ${b.name === '你' ? 'bg-red-500/15 text-red-200 font-bold' : 'text-zinc-500'}`}>
                  <span>{i + 1}. {b.icon} {b.name}</span>
                  <span className="font-mono">{b.score}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={start} className="flex-1 rounded-lg bg-red-500 py-2 font-black text-black hover:bg-red-400">再来一局</button>
              <button onClick={() => engine.closeHotpot()} className="flex-1 rounded-lg bg-zinc-800 py-2 font-bold text-zinc-300 hover:bg-zinc-700">收工</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
