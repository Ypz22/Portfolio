import React from "react";

import ProjectsButtons from "./ProjectsButtons";

const ProjectCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} />
            <div className="project-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className="container-techno">{props.technologies.map(techno => (<p className="techno" key={techno.label}>{techno.label}</p>))}</div>
                <ProjectsButtons {...props.links} />
            </div>
        </div>
    )
};

export default ProjectCard;