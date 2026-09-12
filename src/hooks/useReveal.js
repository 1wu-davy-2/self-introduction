import { useEffect, useRef } from 'react'

// 进入视口时给元素加 .in，触发淡入上移。
// 主路径用 IntersectionObserver；部分环境（如窗口被遮挡时渲染被节流）
// IO 不回调，再用低频轮询兜底，保证内容最终一定显示。
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }

    let obs = null
    let timer = null
    let done = false
    const reveal = () => {
      if (done) return
      done = true
      el.classList.add('in')
      if (obs) obs.disconnect()
      if (timer) clearInterval(timer)
    }
    const inView = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.92 && r.bottom > 0
    }

    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) reveal()
        },
        { threshold: 0.1 },
      )
      obs.observe(el)
    }
    timer = setInterval(() => {
      if (inView()) reveal()
    }, 900)

    return () => {
      if (obs) obs.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [])

  return ref
}
