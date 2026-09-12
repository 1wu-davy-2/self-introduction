import { profile } from '../data/profile.js'

// 采集链路架构图：节点 + 箭头，窄屏自动纵排
export default function ArchFlow() {
  return (
    <div className="arch-wrap">
      <div className="arch">
        {profile.arch.map((n, i) => (
          <div className="arch-frag" key={n.node}>
            {i > 0 && (
              <span className="arch-arrow" aria-hidden="true">
                →
              </span>
            )}
            <div className="arch-node">
              <b>{n.node}</b>
              <span>{n.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="arch-note">
        旁路接入 Prometheus 指标体系与 APM 链路追踪，与平台采集数据互为补充，形成「指标 + 链路 +
        拓扑」的完整观测能力。
      </p>
    </div>
  )
}
