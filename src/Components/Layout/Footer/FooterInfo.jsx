import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterInfo = () => {
    return (
        <div className="footer-info">
            <h3>Jefferson Yepez</h3>
            <p>Full Stack Software Engineer specializing in creating modern and scalable web solutions.</p>
            <div className="icon">
                <a href="https://github.com/ypz22" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/jefferson-yepez-ba361628b/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:jeffersonyepez621@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    )
};

export default FooterInfo;