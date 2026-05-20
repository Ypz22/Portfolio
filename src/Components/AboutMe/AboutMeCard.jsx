import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMeCard = ({ icon, label, description }) => {
  return (
    <article
      data-aos="zoom-in"
      className="surface-panel rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>
    </article>
  )
}

export default AboutMeCard
