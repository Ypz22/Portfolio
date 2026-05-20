import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePortfolio from '../../hooks/usePortfolio'

const SkillCard = ({ icon, label, summary, skills }) => {
  const { content } = usePortfolio()

  return (
    <article
      data-aos="zoom-in"
      className="surface-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
          {skills.length} {content.ui.toolsUnit}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillCard
