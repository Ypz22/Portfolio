import { useState } from 'react'
import './App.css'
import './../public/styles/styles.css'
import Nav from './Components/Layout/NavBar/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Layout/Footer/Footer.jsx'

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
