// 四个行业的监控架构示意图（手绘 SVG，描边走 currentColor，随主题变色）
function Frame({ children, label }) {
  return (
    <svg className="case-diagram" viewBox="0 0 320 132" role="img" aria-label={label}>
      {children}
    </svg>
  )
}

const BOX = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  rx: 4,
}

function T({ x, y, children, accent }) {
  return (
    <text x={x} y={y} textAnchor="middle" className={accent ? 'cd-t cd-accent' : 'cd-t'}>
      {children}
    </text>
  )
}

function L({ x1, y1, x2, y2 }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.55" />
}

function Bank() {
  return (
    <Frame label="银行双数据中心分布式监控架构示意">
      <rect {...BOX} x="40" y="10" width="90" height="26" />
      <T x={85} y={27}>生产中心</T>
      <rect {...BOX} x="190" y="10" width="90" height="26" />
      <T x={235} y={27}>同城灾备</T>
      <L x1={40} y1={49} x2={280} y2={49} />
      <L x1={70} y1={36} x2={70} y2={49} />
      <L x1={235} y1={36} x2={235} y2={49} />
      <L x1={70} y1={49} x2={70} y2={58} />
      <L x1={160} y1={49} x2={160} y2={58} />
      <L x1={250} y1={49} x2={250} y2={58} />
      <rect {...BOX} x="40" y="58" width="60" height="22" />
      <T x={70} y={73}>分行 Proxy</T>
      <rect {...BOX} x="130" y="58" width="60" height="22" />
      <T x={160} y={73}>支行 Proxy</T>
      <rect {...BOX} x="220" y="58" width="60" height="22" />
      <T x={250} y={73}>网点 Proxy</T>
      <L x1={70} y1={80} x2={70} y2={96} />
      <L x1={160} y1={80} x2={160} y2={96} />
      <L x1={250} y1={80} x2={250} y2={96} />
      <rect className="cd-box-accent" x="95" y="96" width="130" height="26" rx="4" />
      <T x={160} y={113} accent>全栈监控平台 · 大盘</T>
    </Frame>
  )
}

function Saas() {
  return (
    <Frame label="SaaS 多租户拨测与 SLA 分层示意">
      <circle cx="60" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <T x={60} y={28}>API</T>
      <circle cx="160" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <T x={160} y={28}>页面</T>
      <circle cx="260" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <T x={260} y={28}>移动端</T>
      <L x1={60} y1={39} x2={110} y2={56} />
      <L x1={160} y1={39} x2={160} y2={56} />
      <L x1={260} y1={39} x2={210} y2={56} />
      <rect className="cd-box-accent" x="95" y="56" width="130" height="24" rx="4" />
      <T x={160} y={72} accent>拨测引擎 · SLI / SLO</T>
      <L x1={75} y1={80} x2={75} y2={96} />
      <L x1={160} y1={80} x2={160} y2={96} />
      <L x1={245} y1={80} x2={245} y2={96} />
      <rect {...BOX} x="30" y="96" width="90" height="22" />
      <T x={75} y={111}>租户 A · SLO</T>
      <rect {...BOX} x="115" y="96" width="90" height="22" />
      <T x={160} y={111}>租户 B · SLO</T>
      <rect {...BOX} x="200" y="96" width="90" height="22" />
      <T x={245} y={111}>租户 C · 状态页</T>
    </Frame>
  )
}

function Edu() {
  return (
    <Frame label="高校多校区统一监控架构示意">
      <rect {...BOX} x="16" y="12" width="86" height="22" />
      <T x={59} y={27}>教学区 · 主机</T>
      <rect {...BOX} x="16" y="55" width="86" height="22" />
      <T x={59} y={70}>办公区 · 终端</T>
      <rect {...BOX} x="16" y="98" width="86" height="22" />
      <T x={59} y={113}>宿舍区 · 网络</T>
      <L x1={102} y1={23} x2={130} y2={50} />
      <L x1={102} y1={66} x2={130} y2={66} />
      <L x1={102} y1={109} x2={130} y2={82} />
      <rect className="cd-box-accent" x="130" y="44" width="72" height="44" rx="4" />
      <T x={166} y={62} accent>IP Radar</T>
      <T x={166} y={76} accent>统一监控</T>
      <L x1={202} y1={56} x2={232} y2={38} />
      <L x1={202} y1={78} x2={232} y2={94} />
      <rect {...BOX} x="232" y="24" width="72" height="22" />
      <T x={268} y={39}>告警 · 大屏</T>
      <rect {...BOX} x="232" y="86" width="72" height="22" />
      <T x={268} y={101}>2.8万+ 节点</T>
    </Frame>
  )
}

function Gov() {
  return (
    <Frame label="政务云多委办局分权分域监控示意">
      <rect {...BOX} x="18" y="10" width="82" height="22" />
      <T x={59} y={25}>委办局 A</T>
      <rect {...BOX} x="119" y="10" width="82" height="22" />
      <T x={160} y={25}>委办局 B</T>
      <rect {...BOX} x="220" y="10" width="82" height="22" />
      <T x={261} y={25}>委办局 C</T>
      <L x1={59} y1={32} x2={120} y2={52} />
      <L x1={160} y1={32} x2={160} y2={52} />
      <L x1={261} y1={32} x2={200} y2={52} />
      <rect {...BOX} x="90" y="52" width="140" height="22" />
      <T x={160} y={67}>分权分域 · 数据隔离</T>
      <L x1={160} y1={74} x2={160} y2={90} />
      <rect className="cd-box-accent" x="90" y="90" width="140" height="24" rx="4" />
      <T x={160} y={106} accent>省级统一运维平台</T>
      <L x1={90} y1={102} x2={59} y2={102} />
      <L x1={230} y1={102} x2={261} y2={102} />
      <rect {...BOX} x="18" y="92" width="41" height="20" />
      <T x={38} y={106}>工单</T>
      <rect {...BOX} x="261" y="92" width="41" height="20" />
      <T x={281} y={106}>考核</T>
    </Frame>
  )
}

const MAP = { bank: Bank, saas: Saas, edu: Edu, gov: Gov }

export default function CaseDiagram({ variant, label }) {
  const Cmp = MAP[variant] ?? Bank
  return <Cmp />
}
