import React from "react";
import SeccionIntro from "../SeccionIntro";
import { introContact } from "../../data/introsData";
import ContactInfo from "./ContactInfo";
import ContactMe from "./ContactMe";

import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="container container-contact" data-aos="zoom-in" id="Contact">
            <SeccionIntro {...introContact} />
            <div className="contact-content">
                <ContactInfo />
                <ContactMe />
            </div>
        </div>
    )
};

export default Contact;