import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'

// 生成一段平滑随机走势，并持续小幅跳动，营造「活着的监控曲线」
function seedPoints(n) {
  const pts = []
  let v = 30 + Math.random() * 20
  for (let i = 0; i < n; i++) {
    v += (Math.random() - 0.38) * 10
    v = Math.min(88, Math.max(10, v))
    pts.push(v)
  }
  return pts
}

function stepPoints(pts) {
  const next = pts.slice(1)
  let v = next[next.length - 1] + (Math.random() - 0.5) * 14
  v = Math.min(88, Math.max(10, v))
  return [...next, v]
}

function toPath(pts, w = 120, h = 34) {
  return pts
    .map((p, i) => `${((i / (pts.length - 1)) * w).toFixed(1)},${(h - (p / 100) * h).toFixed(1)}`)
    .join(' ')
}

function Sparkline() {
  const [pts, setPts] = useState(seedPoints)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setPts(stepPoints), 1800)
    return () => clearInterval(id)
  }, [])
  return (
    <svg className="spark" viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true">
      <polygon className="spark-area" points={`0,34 ${toPath(pts)} 120,34`} />
      <polyline className="spark-line" points={toPath(pts)} />
    </svg>
  )
}

function CountUp({ to, started, instant }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!started) return
    if (instant) {
      setV(to)
      return
    }
    let raf
    const t0 = performance.now()
    const dur = 900
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, to, instant])
  return <>{String(v).padStart(2, '0')}</>
}

export default function StatCards() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const instant =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStarted(true)
      return
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    // 渲染被节流的环境下 IO 不回调，兜底直接展示
    const timer = setTimeout(() => setStarted(true), 1500)
    return () => {
      obs.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="stats" ref={ref}>
      {profile.stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <Sparkline />
          <div className="stat-num">
            <CountUp to={s.value} started={started} instant={instant} />
            <span className="stat-suffix">{s.suffix}</span>
          </div>
          <div className="stat-label">{s.label}</div>
          <div className="stat-sub">{s.sub}</div>
        </div>
      ))}
    </div>
  )
}
