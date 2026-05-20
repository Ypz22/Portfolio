const SeccionIntro = ({ eyebrow, label, description }) => {
  return (
    <div className="section-copy">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--ink)]">
        {label}
      </h2>
      <p className="mt-5 max-w-[65ch] text-base leading-8 text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SeccionIntro
