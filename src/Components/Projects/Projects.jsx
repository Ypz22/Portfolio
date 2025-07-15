import React from "react";
import SeccionIntro from "../SeccionIntro";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";
import { introProjects } from "../../data/introsData";

const Projects = () => {

    return (
        <div className="container container-projects" id="Projects">
            <SeccionIntro {...introProjects} />
            <div className="cards">
                {projects.map(project => (<ProjectCard key={project.name} {...project} />))}
            </div>
        </div>
    )
};

export default Projects;