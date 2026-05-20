import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import usePortfolio from '../../hooks/usePortfolio'

const ProjectsButtons = ({ project, github }) => {
  const { content } = usePortfolio()

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project && (
        <a href={project} target="_blank" rel="noreferrer" className="primary-action">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          {content.ui.liveProject}
        </a>
      )}
      <a href={github} target="_blank" rel="noreferrer" className="secondary-action">
        <FontAwesomeIcon icon={faGithub} />
        {content.ui.sourceCode}
      </a>
    </div>
  )
}

export default ProjectsButtons
