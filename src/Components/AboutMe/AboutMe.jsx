import React from "react";
import AboutMeDescription from "./AboutMeDescription";
import AboutMeCard from "./AboutMeCard";
import { faCode, faUserGroup, faLightbulb, faBullseye } from '@fortawesome/free-solid-svg-icons';
import SeccionIntro from "../SeccionIntro";
import { introAboutMe } from "../../data/introsData";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const cards = [
        { icon: faCode, label: "Programming Languages", description: "Proficient in JavaScript, C#, Java and more" },
        { icon: faBullseye, label: "Full Stack Development", description: "Complete frontend and backend experience" },
        { icon: faUserGroup, label: "Team Collaboration", description: "Experience working in agile teams" },
        { icon: faLightbulb, label: "Problem Solving", description: "Innovative solutions for complex challenges" }
    ]

    return (
        <div className="container container-about-me" data-aos="zoom-in" id="About">
            <SeccionIntro {...introAboutMe} />
            <div className="container-description-card">
                <AboutMeDescription />
                <div className="container-cards">
                    {cards.map(card => (<AboutMeCard key={card.label} {...card} />))}
                </div>
            </div>
        </div>
    )
};

export default AboutMe;