import AboutMeDescription from './AboutMeDescription'
import AboutMeCard from './AboutMeCard'
import SeccionIntro from '../SeccionIntro'
import usePortfolio from '../../hooks/usePortfolio'

const AboutMe = () => {
  const { content } = usePortfolio()

  return (
    <section id="About" className="section-anchor py-[clamp(4.5rem,8vw,6.5rem)]">
      <div className="section-shell">
        <div data-aos="fade-up">
          <SeccionIntro {...content.sectionIntro.about} />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div data-aos="fade-right" className="surface-panel rounded-[2rem] p-7 sm:p-8">
            <AboutMeDescription paragraphs={content.aboutParagraphs} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.aboutHighlights.map((card) => (
              <AboutMeCard key={card.label} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
