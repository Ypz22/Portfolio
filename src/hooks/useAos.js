import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useAos = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    AOS.init({
      once: true,
      duration: prefersReducedMotion ? 0 : 850,
      easing: 'ease-out-cubic',
      offset: 40,
      disable: prefersReducedMotion,
    })
  }, [])
}

export default useAos
