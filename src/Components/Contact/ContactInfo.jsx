import React from "react";
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ContactDetails from "./ContactDetails";


const ContactInfo = () => {
    const contacts = [
        {
            icon: faEnvelope,
            label: "Email",
            content: "jeffersonyepez621@gmail.com"
        },
        {
            icon: faPhone,
            label: "Phone",
            content: "+593 97 939 5043"
        },
        {
            icon: faLocationDot,
            label: "Location",
            content: "Ibarra, Ecuador"
        }
    ]

    return (
        <div className="container-info-contact">
            <h2>Contact Information</h2>
            <p>I'm available for new projects and collaboration opportunities. Feel free to contact me through any of these channels.</p>
            {contacts.map(contact => (<ContactDetails key={contact.label} {...contact} />))}
        </div>
    )
};

export default ContactInfo;