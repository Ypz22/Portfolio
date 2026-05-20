import usePortfolio from '../../hooks/usePortfolio'

const HeroIntro = () => {
  const { content } = usePortfolio()
  const { hero } = content

  return (
    <>
      <span className="eyebrow">{hero.badge}</span>
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
        {hero.role}
      </p>
      <h1 className="mt-5 font-display text-[clamp(3.3rem,9vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--ink)]">
        <span className="block">{hero.title}</span>
        <span className="mt-3 block text-[var(--accent)]">{hero.titleAccent}</span>
      </h1>
      <p className="mt-8 max-w-[62ch] text-lg leading-8 text-[var(--muted)] sm:text-xl">
        {hero.description}
      </p>
    </>
  )
}

export default HeroIntro
