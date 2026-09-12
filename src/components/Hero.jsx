import Terminal from './Terminal.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            持续运行中 · uptime 4 年
          </p>
          <p className="hero-kicker">你好，我是</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-intro">{profile.intro}</p>
          <ul className="hero-chips">
            {profile.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#repos">
              查看作品
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </header>
  )
}
