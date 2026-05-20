import SeccionIntro from '../SeccionIntro'
import ProjectCard from './ProjectCard'
import usePortfolio from '../../hooks/usePortfolio'

const Projects = () => {
  const { content } = usePortfolio()

  return (
    <section id="Projects" className="section-anchor py-[clamp(4.5rem,8vw,6.5rem)]">
      <div className="section-shell">
        <div data-aos="fade-up">
          <SeccionIntro {...content.sectionIntro.projects} />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {content.projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              featured={index === 0 || index === 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
