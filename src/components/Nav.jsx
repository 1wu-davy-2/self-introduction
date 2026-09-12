import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const LINKS = [
  { id: 'about', text: '关于' },
  { id: 'skills', text: '技能' },
  { id: 'domains', text: '方向' },
  { id: 'cases', text: '案例' },
  { id: 'timeline', text: '经历' },
  { id: 'repos', text: '作品' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  // 滚动高亮（渲染被节流的环境下可能延迟，仅影响高亮，不影响内容）
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // 抽屉打开时锁定页面滚动，Esc 关闭
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name}
          <span className="nav-brand-sub">· 全栈</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : ''}>
              {l.text}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="nav-gh">
            GitHub ↗
          </a>
        </div>
        <button
          type="button"
          className={'nav-burger' + (open ? ' open' : '')}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={'nav-drawer' + (open ? ' open' : '')}>
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'on' : ''}
            onClick={() => setOpen(false)}
          >
            <i>{String(i + 1).padStart(2, '0')}</i>
            {l.text}
          </a>
        ))}
        <a
          className="drawer-gh"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}
