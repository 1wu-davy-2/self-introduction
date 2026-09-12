import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">
        {profile.name} · {profile.title}
      </p>
      <p className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
      </p>
      <p className="footer-copy">© 2026 {profile.name} · 用 React 构建</p>
    </footer>
  )
}
