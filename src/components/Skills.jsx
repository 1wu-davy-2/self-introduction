import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const GROUP_ICON = {
  'Java 后端': 'cpu',
  '监控与可观测': 'activity',
  'Python 后端': 'terminal',
  '数据库': 'database',
  '中间件与 Web 服务': 'layers',
  '前端与工具': 'code',
}

export default function Skills() {
  return (
    <div className="skills stagger">
      {profile.skills.map((g) => (
        <div className="skill-group" key={g.group}>
          <div className="skill-head">
            <h3>
              <Icon name={GROUP_ICON[g.group] ?? 'code'} />
              {g.group}
            </h3>
            {g.note && <span className="skill-note">{g.note}</span>}
          </div>
          <ul className="skill-items">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
