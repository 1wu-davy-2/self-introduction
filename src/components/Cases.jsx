import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import CaseDiagram from './CaseDiagram.jsx'
import { profile } from '../data/profile.js'

const TAG_ICON = {
  'Java': 'cpu',
  'Linux': 'terminal',
  'Web 服务': 'globe',
  '数据库': 'database',
  '中间件': 'layers',
  '架构 · 安全': 'shield',
  '可观测': 'eye',
  '银行 · 金融': 'server',
  'SaaS 服务': 'globe',
  '高校': 'layers',
  '政企': 'shield',
}

// 解决案例：企业级场景（点击弹窗看详情）+ 项目级实战
export default function Cases() {
  const [active, setActive] = useState(null) // 点击的企业级案例下标

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const c = active !== null ? profile.enterpriseCases[active] : null

  return (
    <div className="cases-wrap">
      <h3 className="case-sub">企业级场景</h3>
      <div className="cases stagger">
        {profile.enterpriseCases.map((ec, i) => (
          <div
            className="case-card case-clickable"
            key={ec.sector}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActive(i)
              }
            }}
          >
            <div className="case-head">
              <span className="case-tag">
                <Icon name={TAG_ICON[ec.sector] ?? 'server'} size={13} />
                {ec.sector}
              </span>
              <h3>{ec.title}</h3>
            </div>
            <CaseDiagram variant={ec.diagram} />
            <p className="ent-hint">点击查看详情</p>
          </div>
        ))}
      </div>

      <h3 className="case-sub">项目级实战</h3>
      <div className="cases stagger">
        {profile.cases.map((c0) => (
          <div className="case-card" key={c0.title}>
            <div className="case-head">
              <span className="case-tag">
                <Icon name={TAG_ICON[c0.tag] ?? 'code'} size={13} />
                {c0.tag}
              </span>
              <h3>{c0.title}</h3>
            </div>
            <p>{c0.text}</p>
            <p className="case-result">{c0.result}</p>
          </div>
        ))}
      </div>

      {c && (
        <div className="case-pop-backdrop" onClick={() => setActive(null)}>
          <div
            className="case-pop"
            role="dialog"
            aria-modal="true"
            aria-label={c.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="case-pop-close"
              onClick={() => setActive(null)}
              aria-label="关闭"
            >
              ✕
            </button>
            <span className="case-tag">
              <Icon name={TAG_ICON[c.sector] ?? 'server'} size={13} />
              {c.sector}
            </span>
            <h4 className="case-pop-title">{c.title}</h4>
            <CaseDiagram variant={c.diagram} />
            <p className="case-pop-text">{c.text}</p>
            <ul className="ent-points">
              {c.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="case-result">{c.result}</p>
          </div>
        </div>
      )}
    </div>
  )
}
