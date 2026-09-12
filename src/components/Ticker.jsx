import { profile } from '../data/profile.js'

// 技术栈跑马灯：两份内容首尾相接，-50% 平移实现无缝循环，悬停暂停
export default function Ticker() {
  const items = [...profile.ticker, ...profile.ticker]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
