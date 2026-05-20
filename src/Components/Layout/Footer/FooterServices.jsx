import usePortfolio from '../../../hooks/usePortfolio'

const FooterServices = () => {
  const { content } = usePortfolio()

  return (
    <div>
      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {content.footer.servicesTitle}
      </h3>
      <ul className="mt-5 space-y-3">
        {content.footer.services.map((service) => (
          <li key={service} className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterServices
