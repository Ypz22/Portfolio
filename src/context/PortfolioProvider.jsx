import { startTransition, useEffect, useState } from 'react'
import PortfolioContext from './portfolioContext'
import { siteContent } from '../data/siteData'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const storedLanguage = window.localStorage.getItem('portfolio-language')

  if (storedLanguage === 'es' || storedLanguage === 'en') {
    return storedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  const toggleTheme = () => {
    startTransition(() => {
      setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
    })
  }

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))
    })
  }

  const value = {
    content: siteContent[language],
    language,
    setLanguage,
    toggleLanguage,
    theme,
    toggleTheme,
  }

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export default PortfolioProvider
