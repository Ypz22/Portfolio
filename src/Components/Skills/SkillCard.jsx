import React from "react";

const SkillCard = (props) => {
    return (
        <div className="skill-card">
            <h3>{props.label}</h3>
            <div className="container-techno">
                {props.skills.map(skill => (<p key={skill.label} className="techno">{skill.label}</p>))}
            </div>
        </div>
    )
};

export default SkillCard;