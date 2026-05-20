import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactDetails = ({ icon, label, content, href }) => {
  const value = href ? (
    <a href={href} className="text-sm leading-7 text-[var(--ink)] hover:text-[var(--accent)] sm:text-base">
      {content}
    </a>
  ) : (
    <p className="text-sm leading-7 text-[var(--ink)] sm:text-base">{content}</p>
  )

  return (
    <div className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{label}</h3>
        <div className="mt-1">{value}</div>
      </div>
    </div>
  )
}

export default ContactDetails
