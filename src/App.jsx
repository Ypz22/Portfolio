import { useState } from 'react'
import './App.css'
import './../public/styles/styles.css'
import Nav from './Components/Layout/navBar/Nav.jsx'
import Hero from './Components/hero/Hero.jsx'
import AboutMe from './Components/aboutMe/AboutMe.jsx'
import Skills from './Components/skills/Skills.jsx'
import Projects from './Components/projects/Projects.jsx'
import Contact from './Components/contact/Contact.jsx'
import Footer from './Components/Layout/footer/Footer.jsx'

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
