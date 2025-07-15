import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsButtons = (props) => {
    return (
        <div className="container-buttons buttons-projects">
            {props.project !== "" && <button>
                <a href={props.project} target="_blank">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Project
                </a>
            </button>}
            <button>
                <a href={props.github} target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </button>
        </div >
    )
};

export default ProjectsButtons;