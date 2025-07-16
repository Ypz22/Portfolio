import { useState } from 'react'
import './App.css'
import './../public/styles/styles.css'
import Nav from './Components/Layout/navBar/Nav'
import Hero from './Components/hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './Components/skills/Skills'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'
import Footer from './Components/Layout/footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
