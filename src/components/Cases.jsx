import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const TAG_ICON = {
  'Java': 'cpu',
  'Linux': 'terminal',
  'Web 服务': 'globe',
  '数据库': 'database',
  '中间件': 'layers',
  '架构 · 安全': 'shield',
  '可观测': 'eye',
}

// 解决案例：问题 → 处理 → 结果
export default function Cases() {
  return (
    <div className="cases stagger">
      {profile.cases.map((c) => (
        <div className="case-card" key={c.title}>
          <div className="case-head">
            <span className="case-tag">
              <Icon name={TAG_ICON[c.tag] ?? 'code'} size={13} />
              {c.tag}
            </span>
            <h3>{c.title}</h3>
          </div>
          <p>{c.text}</p>
          <p className="case-result">{c.result}</p>
        </div>
      ))}
    </div>
  )
}
