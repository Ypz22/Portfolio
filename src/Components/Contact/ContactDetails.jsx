import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactDetails = (props) => {
    return (
        <div className="container-details">
            <div className="container-icon">
                <FontAwesomeIcon className="icon" icon={props.icon} />
            </div>
            <div className="info">
                <h3>{props.label}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default ContactDetails;