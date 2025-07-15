import React from "react";
import SeccionIntro from "../SeccionIntro";
import { introContact } from "../../data/introsData";
import ContactInfo from "./ContactInfo";
import ContactMe from "./ContactMe";

const Contact = () => {

    return (
        <div className="container container-contact" id="Contact">
            <SeccionIntro {...introContact} />
            <div className="contact-content">
                <ContactInfo />
                <ContactMe />
            </div>
        </div>
    )
};

export default Contact;