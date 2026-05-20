import FooterQuickLinks from './FooterQuickLinks'
import FooterServices from './FooterServices'
import FooterInfo from './FooterInfo'
import usePortfolio from '../../../hooks/usePortfolio'

const Footer = () => {
  const { content } = usePortfolio()

  return (
    <footer className="border-t border-[var(--border)] py-10" data-aos="fade-up">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_220px_260px]">
          <FooterInfo />
          <FooterQuickLinks />
          <FooterServices />
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Jefferson Yepez. {content.footer.rights}
        </div>
      </div>
    </footer>
  )
}

export default Footer
