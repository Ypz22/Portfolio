import { useState } from 'react'
import './App.css'
import './../public/styles/styles.css'
import Nav from './components/Layout/Nav/Nav'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Layout/Footer/Footer'

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
