import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Section from './components/Section.jsx'
import About from './components/About.jsx'
import StatCards from './components/StatCards.jsx'
import Skills from './components/Skills.jsx'
import Domains from './components/Domains.jsx'
import ArchFlow from './components/ArchFlow.jsx'
import Cases from './components/Cases.jsx'
import Timeline from './components/Timeline.jsx'
import Repos from './components/Repos.jsx'
import Footer from './components/Footer.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Ticker />
      <main>
        <Section id="about" no="01" title="关于我">
          <StatCards />
          <About />
        </Section>
        <Section id="skills" no="02" title="技能栈">
          <Skills />
        </Section>
        <Section id="domains" no="03" title="主攻方向">
          <ArchFlow />
          <Domains />
        </Section>
        <Section id="cases" no="04" title="解决案例">
          <Cases />
        </Section>
        <Section id="timeline" no="05" title="经历">
          <Timeline />
        </Section>
        <Section id="repos" no="06" title="开源作品">
          <Repos />
        </Section>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  )
}
