import { useState } from 'react'
import { engine, useUI } from '@/game/store'
import { GAME_REPORTS, type GameReport } from '@/game/reports'

/** 开发周报：主菜单「📰 周报」入口，每周五更新一期 */
function ReportCard({ report, defaultOpen }: { report: GameReport; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-sky-600/30 bg-gradient-to-br from-sky-950/40 to-zinc-900/60 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-sky-900/20 transition-colors text-left"
      >
        <div>
          <div className="text-sky-300 font-black text-sm">📰 {report.id} · {report.theme}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">{report.week} · 本周 {report.commits} 次提交</div>
        </div>
        <span className={`text-zinc-500 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-sky-900/40 pt-3">
          <div className="rounded-lg bg-sky-500/10 border border-sky-500/20 px-3 py-2 text-[12px] text-sky-100 leading-relaxed">
            💡 <span className="font-bold">本周亮点：</span>{report.highlight}
          </div>
          {report.sections.map(s => (
            <div key={s.title}>
              <div className="text-[13px] font-bold text-zinc-200 mb-1.5">{s.icon} {s.title}</div>
              <ul className="space-y-1">
                {s.items.map((it, i) => (
                  <li key={i} className="text-[12px] text-zinc-400 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-sky-500/60" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-[13px] font-bold text-amber-300 mb-1.5">🔮 下周预告</div>
            <ul className="space-y-1">
              {report.next.map((it, i) => (
                <li key={i} className="text-[12px] text-amber-100/70 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export function ReportPanel() {
  const ui = useUI()
  if (!ui.reportOpen) return null
  return (
    <div className="absolute inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm" onClick={() => engine.closeReports()}>
      <div
        className="max-w-2xl w-full mx-auto my-8 rounded-xl border border-sky-600/40 bg-zinc-950/95 p-5 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-black text-sky-300">📰 开发周报</h2>
          <button onClick={() => engine.closeReports()} className="text-zinc-500 hover:text-zinc-200 text-xl px-2">✕</button>
        </div>
        <div className="text-[10px] text-zinc-500 mb-4 leading-relaxed">
          每周五晚更新一期，同步官方最新活动 / 赛季 / 剧情进展。新一期上线后记得 Ctrl+Shift+R 强刷。
        </div>
        <div className="space-y-3">
          {GAME_REPORTS.map((r, i) => <ReportCard key={r.id} report={r} defaultOpen={i === 0} />)}
        </div>
      </div>
    </div>
  )
}
