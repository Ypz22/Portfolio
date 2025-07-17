import HeroIntro from "./HeroIntro";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);


    return (
        <div className="container-hero" data-aos="flip-left" id="Hero">
            <HeroIntro />
            <HeroButtons />
            <HeroSocials />
        </div>
    )
};


export default Hero;