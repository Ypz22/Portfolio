import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePortfolio from '../../hooks/usePortfolio'

const HeroSocials = () => {
  const { content } = usePortfolio()

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3" aria-label={content.ui.socialLinksLabel}>
      {content.socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="icon-pill"
          aria-label={link.label}
          title={link.label}
        >
          <FontAwesomeIcon icon={link.icon} />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
}

export default HeroSocials
