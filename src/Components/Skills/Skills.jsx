import SeccionIntro from '../SeccionIntro'
import SkillCard from './SkillCard'
import usePortfolio from '../../hooks/usePortfolio'

const Skills = () => {
  const { content } = usePortfolio()

  return (
    <section id="Skills" className="section-anchor py-[clamp(4.5rem,8vw,6.5rem)]">
      <div className="section-shell">
        <div data-aos="fade-up">
          <SeccionIntro {...content.sectionIntro.skills} />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {content.skills.map((category) => (
            <SkillCard key={category.label} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
