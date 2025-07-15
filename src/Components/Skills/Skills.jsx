import React from "react";
import SeccionIntro from "../SeccionIntro";
import SkillCard from "./SkillCard";
import { skillCategories } from "../../data/skillsData";
import { introSkils } from "../../data/introsData";

const Skills = () => {

    return (
        <div className="container container-skills" id="Skills">
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