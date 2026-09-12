import useReveal from '../hooks/useReveal.js'

// 每个板块：编号 + 标题 + 内容
export default function Section({ id, no, title, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section">
      <div className="section-inner reveal" ref={ref}>
        <header className="sec-head">
          <span className="sec-no">{no}</span>
          <h2 className="sec-title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
