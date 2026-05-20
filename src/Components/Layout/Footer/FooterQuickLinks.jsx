import usePortfolio from '../../../hooks/usePortfolio'

const FooterQuickLinks = () => {
  const { content } = usePortfolio()

  return (
    <div>
      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {content.footer.quickLinksTitle}
      </h3>
      <ul className="mt-5 space-y-3">
        {content.navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)] sm:text-base">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterQuickLinks
