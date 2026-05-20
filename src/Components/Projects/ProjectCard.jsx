import ProjectsButtons from './ProjectsButtons'

const ProjectCard = ({ featured = false, ...project }) => {
  return (
    <article
      data-aos="zoom-in"
      className={`surface-panel overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`grid ${featured ? 'lg:grid-cols-[minmax(300px,0.95fr)_minmax(0,1fr)]' : ''}`}>
        <div className="relative overflow-hidden border-b border-[var(--border)] lg:border-b-0 lg:border-r">
          <img
            src={project.img}
            alt={project.name}
            className={`h-full w-full object-cover transition duration-500 hover:scale-[1.03] ${
              featured ? 'aspect-[16/10]' : 'aspect-[16/11]'
            }`}
          />
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              {project.highlight}
            </span>
            <span className="text-sm font-semibold text-[var(--muted)]">{project.type}</span>
          </div>

          <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="chip">
                {technology}
              </span>
            ))}
          </div>

          <ProjectsButtons {...project.links} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
