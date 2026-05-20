import ContactDetails from './ContactDetails'
import usePortfolio from '../../hooks/usePortfolio'

const ContactInfo = () => {
  const { content } = usePortfolio()

  return (
    <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
      <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
        {content.contact.infoTitle}
      </h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{content.contact.infoDescription}</p>

      <div className="mt-8 space-y-4">
        {content.contact.details.map((detail) => (
          <ContactDetails key={detail.label} {...detail} />
        ))}
      </div>
    </div>
  )
}

export default ContactInfo
