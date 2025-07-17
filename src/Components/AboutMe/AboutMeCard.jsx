import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const AboutMeCard = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className="card" data-aos="zoom-in">
            <FontAwesomeIcon icon={props.icon} />
            <h4>{props.label}</h4>
            <p>{props.description}</p>
        </div>
    )
};

export default AboutMeCard;