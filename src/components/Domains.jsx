import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const DOMAIN_ICON = {
  '国产化监控采集平台': 'server',
  '采集框架与 Agent': 'gitBranch',
  '拓扑与故障定界': 'topology',
  '指标与链路可观测': 'eye',
  '监控数据底座': 'database',
}

// 主攻方向：运维监控视角的几条主线
export default function Domains() {
  return (
    <div className="domains stagger">
      {profile.domains.map((d) => (
        <div className="domain-item" key={d.title}>
          <h3>
            <Icon name={DOMAIN_ICON[d.title] ?? 'server'} />
            {d.title}
          </h3>
          <p>{d.desc}</p>
        </div>
      ))}
    </div>
  )
}
