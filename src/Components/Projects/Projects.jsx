import React from "react";
import SeccionIntro from "../SeccionIntro";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";
import { introProjects } from "../../data/introsData";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);


    return (
        <div className="container container-projects" data-aos="fade-right" id="Projects">
            <SeccionIntro {...introProjects} />
            <div className="cards">
                {projects.map(project => (<ProjectCard key={project.name} {...project} />))}
            </div>
        </div>
    )
};

export default Projects;