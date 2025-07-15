import React from "react";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import FooterInfo from "./FooterInfo";


const Footer = () => {
    return (
        <footer>
            <FooterInfo />
            <FooterQuickLinks />
            <FooterServices />
        </footer>
    )
};

export default Footer;