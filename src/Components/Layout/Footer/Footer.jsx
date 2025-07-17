import React from "react";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import FooterInfo from "./FooterInfo";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <footer data-aos="fade-right">
            <FooterInfo />
            <FooterQuickLinks />
            <FooterServices />
        </footer>
    )
};

export default Footer;