import { useEffect, useState } from 'react'

// 首屏终端：逐字敲命令、逐行输出，全部完成后光标持续闪烁
const SCRIPT = [
  {
    cmd: 'whoami',
    out: ['魏鹏 —— Web 全栈开发工程师 · 运维监控方向'],
  },
  {
    cmd: 'cat stack.txt',
    out: [
      'Java / Spring Cloud  ·  Django / DRF  ·  React',
      'Zabbix 二开 · Prometheus · APM · ClickHouse · Kafka / NATS',
    ],
  },
  {
    cmd: 'uptime --career',
    out: ['4 年 · 正在构建国产化监控采集平台'],
  },
  {
    cmd: './passion.sh',
    out: ['[ OK ] 量化数据   [ OK ] 效率工具   [ OK ] Agent 应用   [ OK ] 开源'],
  },
]

const TYPE_MS = 65
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function Terminal() {
  const [history, setHistory] = useState([]) // 已完成的 {cmd?} / {out} 条目
  const [typing, setTyping] = useState('') // 正在敲的命令
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHistory(SCRIPT.flatMap((l) => [{ cmd: l.cmd }, ...l.out.map((o) => ({ out: o }))]))
      setDone(true)
      return
    }
    let cancelled = false
    ;(async () => {
      await sleep(600)
      for (const line of SCRIPT) {
        for (let i = 1; i <= line.cmd.length; i++) {
          if (cancelled) return
          setTyping(line.cmd.slice(0, i))
          await sleep(TYPE_MS + Math.random() * 70)
        }
        await sleep(260)
        if (cancelled) return
        setTyping('')
        setHistory((h) => [...h, { cmd: line.cmd }])
        for (const o of line.out) {
          if (cancelled) return
          await sleep(200)
          setHistory((h) => [...h, { out: o }])
        }
        await sleep(420)
      }
      if (!cancelled) setDone(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="terminal" aria-label="终端演示">
      <div className="t-bar">
        <i className="t-dot r" />
        <i className="t-dot y" />
        <i className="t-dot g" />
        <span className="t-title">weipeng@monitor: ~</span>
      </div>
      <div className="t-body">
        {history.map((h, i) =>
          h.cmd !== undefined ? (
            <p className="t-line" key={i}>
              <span className="t-prompt">➜ ~ </span>
              <span className="t-cmd">{h.cmd}</span>
            </p>
          ) : (
            <p className="t-line t-out" key={i}>
              {h.out}
            </p>
          ),
        )}
        <p className="t-line">
          <span className="t-prompt">➜ ~ </span>
          {!done && <span className="t-cmd">{typing}</span>}
          <span className="t-caret" />
        </p>
      </div>
    </div>
  )
}
