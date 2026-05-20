import SeccionIntro from '../SeccionIntro'
import ContactInfo from './ContactInfo'
import ContactMe from './ContactMe'
import usePortfolio from '../../hooks/usePortfolio'

const Contact = () => {
  const { content } = usePortfolio()

  return (
    <section id="Contact" className="section-anchor py-[clamp(4.5rem,8vw,6.5rem)]">
      <div className="section-shell">
        <div data-aos="fade-up">
          <SeccionIntro {...content.sectionIntro.contact} />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]">
          <div data-aos="fade-right">
            <ContactInfo />
          </div>
          <div data-aos="fade-left">
            <ContactMe />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
