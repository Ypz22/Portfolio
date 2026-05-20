import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import usePortfolio from '../../hooks/usePortfolio'
import useContactForm from '../../hooks/useContactForm'

const fieldClassName =
  'min-h-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20'

const ContactMe = () => {
  const { content } = usePortfolio()
  const formRef = useRef(null)
  const { handleSubmit, isSending, status } = useContactForm(formRef, content.contact.form.messages)
  const { fields } = content.contact.form

  return (
    <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
      <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
        {content.contact.form.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{content.contact.form.description}</p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--ink)]">{fields.name}</span>
            <input
              type="text"
              name="from_name"
              placeholder={fields.namePlaceholder}
              className={fieldClassName}
              required
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--ink)]">{fields.email}</span>
            <input
              type="email"
              name="from_email"
              placeholder={fields.emailPlaceholder}
              className={fieldClassName}
              required
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[var(--ink)]">{fields.subject}</span>
          <input
            type="text"
            name="subject"
            placeholder={fields.subjectPlaceholder}
            className={fieldClassName}
            required
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[var(--ink)]">{fields.message}</span>
          <textarea
            name="message"
            placeholder={fields.messagePlaceholder}
            className={`${fieldClassName} min-h-40 resize-y`}
            required
          />
        </label>

        <button type="submit" disabled={isSending} className="primary-action disabled:cursor-not-allowed disabled:opacity-70">
          <FontAwesomeIcon icon={faPaperPlane} />
          {isSending ? content.contact.form.sending : content.contact.form.submit}
        </button>

        {status && (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status.type === 'success'
                ? 'border-emerald-300/60 bg-emerald-100/70 text-emerald-900'
                : 'border-rose-300/60 bg-rose-100/70 text-rose-900'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactMe
