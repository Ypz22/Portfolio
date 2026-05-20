import Nav from './Components/Layout/NavBar/Nav'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Layout/Footer/Footer'
import useAos from './hooks/useAos'

function App() {
  useAos()

  return (
    <div className="relative overflow-x-clip">
      <Nav />
      <main className="pb-10">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
