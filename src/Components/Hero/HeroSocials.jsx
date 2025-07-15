import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const HeroSocials = () => {
    return (
        <div className="hero-socials">
            <a target="_blank" href="https://github.com/ypz22"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jefferson-yepez-ba361628b/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a target="_blank" href="mailto:jeffersonyepez621@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    )
};

export default HeroSocials;