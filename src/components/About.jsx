import { profile } from '../data/profile.js'

export default function About() {
  const facts = profile.facts.filter((f) => f.value)
  return (
    <div className="about">
      <p className="about-text">{profile.bio}</p>
      <dl className="facts">
        {facts.map((f) => (
          <div className="fact" key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
