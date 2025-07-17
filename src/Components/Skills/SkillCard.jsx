import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


const SkillCard = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className="skill-card" data-aos="zoom-in">
            <h3>{props.label}</h3>
            <div className="container-techno">
                {props.skills.map(skill => (<p key={skill.label} className="techno">{skill.label}</p>))}
            </div>
        </div>
    )
};

export default SkillCard;