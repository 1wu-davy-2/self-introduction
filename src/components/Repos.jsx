import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const NUMS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

// GitHub 语言点颜色（惯例配色）
const LANG_COLOR = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  Go: '#00ADD8',
  Shell: '#89e051',
  JavaScript: '#f1e05a',
}

export default function Repos() {
  const [stars, setStars] = useState({})

  // 尽力拉一次 star 数：失败（离线 / 限流）就静默不显示
  useEffect(() => {
    let dead = false
    fetch(`https://api.github.com/users/${profile.githubId}/repos?per_page=100`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((list) => {
        if (dead || !Array.isArray(list)) return
        const m = {}
        list.forEach((r) => {
          if (r && r.name) m[r.name] = r.stargazers_count ?? 0
        })
        setStars(m)
      })
      .catch(() => {})
    return () => {
      dead = true
    }
  }, [profile.githubId])

  return (
    <div className="repos">
      <ul className="repo-list stagger">
        {profile.repos.map((r, i) => (
          <li key={r.name}>
            <a className="repo-item" href={r.url} target="_blank" rel="noreferrer">
              <span className="repo-no" aria-hidden="true">
                {NUMS[i] ?? i + 1}
              </span>
              <span className="repo-main">
                <span className="repo-top">
                  <span className="repo-name">{r.name}</span>
                  {r.lang && (
                    <span className="repo-lang">
                      <i
                        className="lang-dot"
                        style={{ background: LANG_COLOR[r.lang] ?? '#8b949e' }}
                      />
                      {r.lang}
                    </span>
                  )}
                  {stars[r.name] > 0 && (
                    <span className="repo-star" title="GitHub Stars">
                      ★ {stars[r.name]}
                    </span>
                  )}
                </span>
                <span className="repo-desc">{r.desc}</span>
                {r.tags?.length > 0 && (
                  <span className="repo-tags">
                    {r.tags.map((t) => (
                      <i key={t}>{t}</i>
                    ))}
                  </span>
                )}
              </span>
              <span className="repo-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="repo-more">
        {profile.reposNote}更多请见{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub @{profile.githubId}
        </a>
      </p>
    </div>
  )
}
