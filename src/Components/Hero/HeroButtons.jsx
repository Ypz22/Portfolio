import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import usePortfolio from '../../hooks/usePortfolio'

const HeroButtons = () => {
  const { content } = usePortfolio()

  const scrollToContact = () => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button type="button" onClick={scrollToContact} className="primary-action">
        <FontAwesomeIcon icon={faEnvelope} />
        {content.ui.workTogether}
      </button>
      <a href="/Jefferson_Yepez_CV.pdf" download className="secondary-action">
        <FontAwesomeIcon icon={faArrowDown} />
        {content.ui.downloadCv}
      </a>
    </div>
  )
}

export default HeroButtons
