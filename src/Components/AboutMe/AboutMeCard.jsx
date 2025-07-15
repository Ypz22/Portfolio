import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutMeCard = (props) => {
    return (
        <div className="card">
            <FontAwesomeIcon icon={props.icon} />
            <h4>{props.label}</h4>
            <p>{props.description}</p>
        </div>
    )
};

export default AboutMeCard;