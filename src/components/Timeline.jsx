import { profile } from '../data/profile.js'

export default function Timeline() {
  return (
    <ol className="timeline stagger">
      {profile.timeline.map((t, i) => (
        <li key={i}>
          <div className="tl-year">{t.year}</div>
          <div className="tl-body">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
