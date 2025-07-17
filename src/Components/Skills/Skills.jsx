import React from "react";
import SeccionIntro from "../SeccionIntro";
import SkillCard from "./SkillCard";
import { skillCategories } from "../../data/skillsData";
import { introSkils } from "../../data/introsData";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className="container container-skills" data-aos="zoom-in" id="Skills">
            <SeccionIntro {...introSkils} />
            <div className="container-skill-cards">
                {skillCategories.map(category => (
                    <SkillCard key={category.label} {...category} />
                ))}
            </div>
        </div>
    )
};

export default Skills;