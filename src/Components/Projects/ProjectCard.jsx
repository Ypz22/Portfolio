import React from "react";

import ProjectsButtons from "./ProjectsButtons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";



const ProjectCard = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className="card" data-aos="zoom-in">
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