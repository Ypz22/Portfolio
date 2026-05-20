import HeroIntro from './HeroIntro'
import HeroButtons from './HeroButtons'
import HeroSocials from './HeroSocials'
import usePortfolio from '../../hooks/usePortfolio'

const Hero = () => {
  const { content } = usePortfolio()
  const { hero } = content

  return (
    <section id="Home" className="section-anchor">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)] lg:items-start">
          <div data-aos="fade-up" className="max-w-4xl">
            <HeroIntro />
            <HeroButtons />
            <HeroSocials />

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((item) => (
                <div key={item.label} className="surface-panel rounded-[1.6rem] p-5">
                  <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside data-aos="fade-left" className="surface-panel rounded-[2.2rem] p-7 sm:p-8 lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              {hero.panelLabel}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
              {hero.panelTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{hero.panelDescription}</p>

            <div className="mt-8 space-y-4">
              {hero.spotlights.map((spotlight) => (
                <article
                  key={spotlight.title}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {spotlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{spotlight.description}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
