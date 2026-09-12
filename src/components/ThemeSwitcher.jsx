import { useEffect, useState } from 'react'

const THEMES = [
  { id: 'paper', label: '新中式' },
  { id: 'minimal', label: '极简白' },
  { id: 'dark', label: '深色' },
]

const KEY = 'wxk-theme'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(KEY) || 'paper'
    } catch {
      return 'paper'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    THEMES.forEach((t) => root.classList.remove('theme-' + t.id))
    root.classList.add('theme-' + theme)
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* 忽略隐私模式下的存储失败 */
    }
  }, [theme])

  return (
    <div className="theme-switcher" role="group" aria-label="切换页面风格">
      <span className="ts-label">风格</span>
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={theme === t.id ? 'on' : ''}
          onClick={() => setTheme(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
