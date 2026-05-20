import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePortfolio from '../../../hooks/usePortfolio'

const FooterInfo = () => {
  const { content } = usePortfolio()

  return (
    <div className="max-w-md">
      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
        Jefferson Yepez
      </h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{content.footer.note}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {content.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="icon-pill"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterInfo
