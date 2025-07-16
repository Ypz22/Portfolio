import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeroButtons = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="container-buttons">
            <button onClick={scrollToContact}><FontAwesomeIcon icon={faEnvelope} />Contact me</button>
            <button onClick={() => {
                const link = document.createElement('a');
                link.href = '/Jefferson_Yepez_CV.pdf';
                link.download = 'Jefferson_Yepez_CV.pdf';
                link.click();
            }}>
                <FontAwesomeIcon icon={faArrowDown} /> Download CV
            </button>

        </div>
    )
};

export default HeroButtons;