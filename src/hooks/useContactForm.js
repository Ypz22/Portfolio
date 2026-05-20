import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

const SUCCESS_STATE = 'success'
const ERROR_STATE = 'error'

const useContactForm = (formRef, messages) => {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!status) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setStatus(null)
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [status])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: ERROR_STATE, message: messages.missingConfig })
      return
    }

    try {
      setIsSending(true)
      setStatus(null)

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      formRef.current?.reset()
      setStatus({ type: SUCCESS_STATE, message: messages.success })
    } catch (error) {
      console.error(error)
      setStatus({ type: ERROR_STATE, message: messages.error })
    } finally {
      setIsSending(false)
    }
  }

  return { handleSubmit, isSending, status }
}

export default useContactForm
