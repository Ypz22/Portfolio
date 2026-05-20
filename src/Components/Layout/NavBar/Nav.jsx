import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlobe, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import usePortfolio from '../../../hooks/usePortfolio'
import useNavigation from '../../../hooks/useNavigation'

const Nav = () => {
  const { content, language, theme, toggleLanguage, toggleTheme } = usePortfolio()
  const { isOpen, closeMenu, toggleMenu } = useNavigation()

  const themeIcon = theme === 'dark' ? faSun : faMoon
  const themeLabel = theme === 'dark' ? content.ui.lightMode : content.ui.darkMode
  const nextLanguage = language === 'es' ? 'EN' : 'ES'

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface-strong)] backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <a href="#Home" className="min-w-0">
          <p className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-2xl">
            Jefferson Yepez
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {content.hero.role}
          </p>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 lg:gap-8">
            {content.navLinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={content.ui.languageToggle}
              onClick={toggleLanguage}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <FontAwesomeIcon icon={faGlobe} className="text-xs text-[var(--accent)]" />
              <span>{nextLanguage}</span>
            </button>
            <button
              type="button"
              aria-label={content.ui.themeToggle}
              onClick={toggleTheme}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <FontAwesomeIcon icon={themeIcon} className="text-xs text-[var(--accent)]" />
              <span>{themeLabel}</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? content.ui.closeMenu : content.ui.openMenu}
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--ink)] md:hidden"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </nav>

      {isOpen && (
        <div className="section-shell border-t border-[var(--border)] py-4 md:hidden">
          <div className="surface-panel rounded-[1.5rem] p-5">
            <ul className="flex flex-col gap-4">
              {content.navLinks.map((link) => (
                <NavItem key={link.href} {...link} onClick={closeMenu} />
              ))}
            </ul>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                aria-label={content.ui.languageToggle}
                onClick={toggleLanguage}
                className="secondary-action flex-1"
              >
                <FontAwesomeIcon icon={faGlobe} />
                {nextLanguage}
              </button>
              <button
                type="button"
                aria-label={content.ui.themeToggle}
                onClick={toggleTheme}
                className="secondary-action flex-1"
              >
                <FontAwesomeIcon icon={themeIcon} />
                {themeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
