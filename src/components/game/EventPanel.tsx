import { useEffect, useReducer, useState } from 'react'
import { engine, notify, uiState, useUI } from '@/game/store'
import { officialEventsList, jixingProgress, JIXING_EVENT_NAME, JIXING_GOAL, JIXING_SKIN, type OfficialEventInfo } from '@/game/events'
import { loadSkins, skinDef, grantSkin } from '@/game/skins'
import { claimVoucherLogins, loadVouchers, voucherEventActive, VOUCHER_TASK_CAP } from '@/game/vouchers'
import { loadFishing, loadHarp, harpStageText, FISH_TASK_KILLS } from '@/game/fishing'
import { loadBossPlay, regenQuota, dossierDoneCount, DOSSIER_TASKS, CARD_MAX, QUOTA_MAX } from '@/game/bossplay'
import { WAR_REWARDS, claimWarReward, loadWarEvents, type WarEventId } from '@/game/warevents'
import { loadHotpot, HOTPOT_BUNDLE_NEED, HOTPOT_DAILY_CAP } from '@/game/hotpot'
import { makeItem } from '@/game/data'
import { grantVehicleSkin } from '@/game/vehicles'
import { addToStash, loadStash, saveMoney } from '@/game/stash'

/** 大战场专项活动名 → 存档事件 id */
const WAR_EVENT_NAMES: Record<string, WarEventId> = {
  '群星行动·贯穿封锁': 'fengchuan',
  '战场畅玩月': 'changwanyue',
  '空地突袭': 'kongdi',
  '逐命十字': 'zhumling',
  '畅玩月保分': 'baofen',
  '洲末军火库': 'junhuoku',
}

/** 领取大战场活动奖励并实际入账（金币/物资入仓/皮肤） */
function claimWar(id: string) {
  const r = claimWarReward(id)
  if (!r) return
  if (r.gold) { uiState.money += r.gold; saveMoney(uiState.money) }
  if (r.items) {
    const stash = loadStash()
    addToStash(stash, r.items.map(d => makeItem(d, 1)))
    uiState.stash = stash
  }
  if (r.skin) grantSkin(loadSkins(), r.skin)
  if (r.vehicleSkin) grantVehicleSkin(r.vehicleSkin)
  notify()
}

/** 由活动名生成稳定色相，让每个活动有专属配色的横幅 */
function hueOf(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h % 360
}

function fmtLeft(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000))
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  if (d > 0) return `${d} 天 ${h} 小时`
  if (h > 0) return `${h} 小时 ${m} 分`
  return `${m} 分 ${s % 60} 秒`
}

function fmtDate(ts: number): string {
  const d = new Date(ts)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

function EventCard({ ev, now }: { ev: OfficialEventInfo; now: number }) {
  const H = hueOf(ev.name)
  const active = ev.status === 'active'
  const skin = ev.skin ? skinDef(ev.skin) : undefined
  const owned = skin ? loadSkins().owned.includes(skin.id) : false
  return (
    <div
      className="relative overflow-hidden rounded-xl border"
      style={{
        borderColor: active ? `hsl(${H} 80% 55% / 0.55)` : '#3f3f46',
        background: active
          ? `linear-gradient(135deg, hsl(${H} 75% 22% / 0.5), hsl(${(H + 50) % 360} 65% 12% / 0.5))`
          : 'rgba(24,24,27,0.6)',
        boxShadow: active ? `0 0 24px hsl(${H} 80% 50% / 0.14)` : undefined,
      }}
    >
      {/* 水印大图标 */}
      <div className="absolute -right-3 -top-5 text-7xl opacity-15 select-none pointer-events-none">{ev.icon}</div>
      <div className="relative px-4 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl">{ev.icon}</span>
          <span className={`font-black text-base ${active ? 'text-zinc-100' : 'text-zinc-400'}`}>{ev.name}</span>
          <span className="text-[10px] text-amber-300 border border-amber-500/50 rounded px-1 bg-amber-500/10">官方同步</span>
          {active ? (
            <span className="text-[10px] text-emerald-300 border border-emerald-500/50 rounded px-1 bg-emerald-500/10 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />进行中
            </span>
          ) : (
            <span className="text-[10px] text-zinc-400 border border-zinc-600 rounded px-1">未开启</span>
          )}
        </div>
        <div className={`text-xs mt-1.5 leading-relaxed ${active ? 'text-zinc-300' : 'text-zinc-500'}`}>{ev.desc}</div>
        {ev.name === '极星守望' && active && (() => {
          const bp = loadBossPlay()
          return (
            <div className="mt-1.5 space-y-0.5 rounded-lg border border-violet-500/20 bg-violet-500/5 px-2 py-1.5">
              <div className="text-[10px] font-bold text-violet-300">德穆兰档案（完成 3 条解锁扮演）</div>
              {DOSSIER_TASKS.map((t, i) => (
                <div key={t.name} className="text-[10px] text-zinc-400">
                  {bp.dossierDone[i] ? '✅' : '⬜'} {t.icon} {t.name}（{Math.min(bp.dossierProg[i] ?? 0, t.goal)}/{t.goal}） {t.desc}
                </div>
              ))}
            </div>
          )
        })()}
        <div className="flex items-center justify-between mt-2.5 flex-wrap gap-2">
          <span
            className={`text-[11px] font-mono rounded px-2 py-0.5 border ${
              active
                ? 'text-fuchsia-200 border-fuchsia-500/40 bg-fuchsia-500/10'
                : 'text-zinc-400 border-zinc-700 bg-zinc-800/60'
            }`}
          >
            {active
              ? `⏰ 剩余 ${fmtLeft(ev.endAt - now)}（${fmtDate(ev.endAt)} 结束）`
              : `📅 ${fmtDate(ev.startAt)} 开启 · 倒计时 ${fmtLeft(ev.startAt - now)}`}
          </span>
          {active && ev.name === '饮品特调返场' && (
            <button
              onClick={e => { e.stopPropagation(); engine.openMix() }}
              className="text-[11px] rounded px-2 py-0.5 border border-emerald-500/50 bg-emerald-500/15 text-emerald-200 font-bold hover:bg-emerald-500/30 transition-colors"
            >
              🍹 前往调制 ›
            </button>
          )}
          {(ev.name === '限时三角券狂欢' || ev.name === '三角券惊喜礼盒') && voucherEventActive() && (
            <span className="text-[11px] rounded px-2 py-0.5 border border-cyan-500/40 bg-cyan-500/10 text-cyan-200 font-mono">
              🎟️ 余额 {loadVouchers().total.toLocaleString()} · 任务 {loadVouchers().taskEarned}/{VOUCHER_TASK_CAP}
            </span>
          )}
          {ev.name === JIXING_EVENT_NAME && active && (
            <span className="text-[11px] rounded px-2 py-0.5 border border-sky-500/40 bg-sky-500/10 text-sky-200 font-mono">
              🌠 绩效 {Math.min(jixingProgress(), JIXING_GOAL)}/{JIXING_GOAL}
              {loadSkins().owned.includes(JIXING_SKIN) ? ' · M700「静点」已解锁' : ' · 航天基地撤离累计'}
            </span>
          )}
          {ev.name === '冰湖垂钓' && (() => {
            const fs = loadFishing()
            return (
              <span className="text-[11px] rounded px-2 py-0.5 border border-sky-500/40 bg-sky-500/10 text-sky-200 font-mono">
                {fs.rod ? '🎣 钓竿已解锁' : fs.acc ? `委托进度 ${fs.kills}/${FISH_TASK_KILLS}` : '未接委托'} · 累计渔获 {fs.total} · 图鉴 {Object.keys(fs.dex).length}/5
              </span>
            )
          })()}
          {ev.name === '守夜人的口风琴' && (
            <span className="text-[11px] rounded px-2 py-0.5 border border-amber-500/40 bg-amber-500/10 text-amber-200 font-mono">
              🎵 {harpStageText(loadHarp())}
            </span>
          )}
          {ev.name === '极星守望' && active && (() => {
            const bp = regenQuota(loadBossPlay())
            const can = bp.unlocked && bp.cards > 0
            return (
              <>
                <span className="text-[11px] rounded px-2 py-0.5 border border-violet-500/40 bg-violet-500/10 text-violet-200 font-mono">
                  🪪 工卡 {bp.cards}/{CARD_MAX} · 限购 {bp.quota}/{QUOTA_MAX} · 扮演 {bp.plays} 场 / 成功 {bp.wins}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); if (can) { engine.closeEvents(); engine.startBossPlay() } }}
                  className={`text-[11px] rounded px-2 py-0.5 border font-bold transition-colors ${
                    can
                      ? 'border-violet-500/50 bg-violet-500/15 text-violet-200 hover:bg-violet-500/30'
                      : 'border-zinc-700 bg-zinc-800/60 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  🌠 {bp.unlocked ? (bp.cards > 0 ? '前往扮演德穆兰 ›' : '缺工卡·交易行有售') : `扮演未解锁（档案 ${dossierDoneCount(bp)}/3）`}
                </button>
              </>
            )
          })()}
          {ev.name === '火锅对决' && active && (() => {
            const hp = loadHotpot()
            return (
              <>
                <span className="text-[11px] rounded px-2 py-0.5 border border-red-500/40 bg-red-500/10 text-red-200 font-mono">
                  🍲 今日 {hp.dayPts}/{HOTPOT_DAILY_CAP} · 累计 {hp.totalPts}/{HOTPOT_BUNDLE_NEED}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); engine.closeEvents(); engine.openHotpot() }}
                  className="text-[11px] rounded px-2 py-0.5 border border-red-500/50 bg-red-500/15 text-red-200 font-bold hover:bg-red-500/30 transition-colors"
                >
                  🥢 前往涮锅 ›
                </button>
              </>
            )
          })()}
          {WAR_EVENT_NAMES[ev.name] && active && (() => {
            const ws = loadWarEvents()
            const rs = WAR_REWARDS.filter(r => r.event === WAR_EVENT_NAMES[ev.name])
            if (!rs.length) {
              const tip = ev.name === '空地突袭' ? '✈️ 大战场局内按 B 呼叫空袭（45s 冷却）'
                : ev.name === '畅玩月保分' ? '🛡️ 窗口期大战场战功双倍'
                : ''
              return tip ? <span className="text-[11px] rounded px-2 py-0.5 border border-sky-500/40 bg-sky-500/10 text-sky-200 font-mono">{tip}</span> : null
            }
            return (
              <span className="flex flex-wrap items-center gap-1.5">
                {rs.map(r => {
                  const done = ws.claimed.includes(r.id)
                  const prog = Math.min(r.progress(ws), r.need)
                  const can = !done && prog >= r.need
                  return (
                    <button
                      key={r.id}
                      onClick={e => { e.stopPropagation(); if (can) claimWar(r.id) }}
                      className={`text-[10px] rounded px-1.5 py-0.5 border font-mono ${
                        done
                          ? 'border-emerald-600/40 bg-emerald-500/10 text-emerald-300'
                          : can
                            ? 'border-amber-500/60 bg-amber-500/15 text-amber-200 font-bold animate-pulse'
                            : 'border-zinc-700 bg-zinc-800/60 text-zinc-400'
                      }`}
                      title={`${r.name} → ${r.rewardText}`}
                    >
                      {done ? '✅ ' : `${r.icon} ${prog}/${r.need} `}{r.name}{can ? ' · 领取' : ''}
                    </button>
                  )
                })}
              </span>
            )
          })()}
          {skin && (
            <span className="text-[11px] flex items-center gap-1.5 rounded px-2 py-0.5 border border-pink-500/40 bg-pink-500/10 text-pink-200">
              <span
                className="inline-block w-3 h-3 rounded-sm border border-white/25"
                style={{
                  background: `#${skin.main.toString(16).padStart(6, '0')}`,
                  boxShadow: skin.emissive ? `0 0 6px #${skin.emissive.toString(16).padStart(6, '0')}` : undefined,
                }}
              />
              🎁 皮肤「{skin.name}」
              {owned ? <span className="text-emerald-300 font-bold">已领取</span> : <span className="text-zinc-300">开局即领</span>}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/** 活动中心：三角洲行动官方活动镜像列表（进行中 / 即将开启） */
export function EventPanel() {
  const ui = useUI()
  const [, force] = useReducer((x: number) => x + 1, 0)
  const [voucherMsg, setVoucherMsg] = useState('')
  useEffect(() => {
    if (!ui.eventsOpen) return
    // 官方「限时三角券狂欢」：登录即领（9/26 +500、10/1 +1000，幂等）
    const got = claimVoucherLogins()
    if (got > 0) setVoucherMsg(`🎟️ 登录奖励：限时三角券 +${got.toLocaleString()}！可到 🎨 皮肤 页使用`)
    const t = setInterval(force, 1000)
    return () => clearInterval(t)
  }, [ui.eventsOpen])
  if (!ui.eventsOpen) return null

  const now = Date.now()
  const list = officialEventsList(now)
  const act = list.filter(e => e.status === 'active')
  const up = list.filter(e => e.status === 'upcoming')

  return (
    <div className="absolute inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm" onClick={() => engine.closeEvents()}>
      <div
        className="max-w-2xl w-full mx-auto my-8 rounded-xl border border-fuchsia-600/40 bg-zinc-950/95 p-5 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-black text-fuchsia-300">🎉 活动中心</h2>
          <button onClick={() => engine.closeEvents()} className="text-zinc-500 hover:text-zinc-200 text-xl px-2">✕</button>
        </div>
        <div className="text-[10px] text-zinc-500 mb-4 leading-relaxed">
          与三角洲行动官方活动同步（名称与官方一致，效果等价映射到本游戏系统），官方活动更新后每周同步。
          带 🎁 的活动在窗口期内首次开局自动发放皮肤，可到 🎨 皮肤 页装备。
        </div>

        {voucherMsg && (
          <div className="mb-3 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200 flex items-center justify-between">
            <span>{voucherMsg}</span>
            <button className="text-zinc-500 hover:text-zinc-200 px-1" onClick={() => setVoucherMsg('')}>✕</button>
          </div>
        )}

        <div className="text-sm font-bold text-emerald-300 mb-2">进行中 · {act.length} 场</div>
        <div className="space-y-2.5 mb-5">
          {act.length > 0 ? (
            act.map(e => <EventCard key={e.name + e.start} ev={e} now={now} />)
          ) : (
            <div className="text-xs text-zinc-500 border border-zinc-800 rounded-lg px-3 py-2.5">暂无进行中的官方活动</div>
          )}
        </div>

        {up.length > 0 && (
          <>
            <div className="text-sm font-bold text-zinc-400 mb-2">即将开启 · {up.length} 场</div>
            <div className="space-y-2.5">{up.map(e => <EventCard key={e.name + e.start} ev={e} now={now} />)}</div>
          </>
        )}
      </div>
    </div>
  )
}
