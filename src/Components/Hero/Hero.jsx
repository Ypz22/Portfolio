import HeroIntro from "./HeroIntro";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

const Hero = () => {
    return (
        <div className="container-hero" id="Hero">
            <HeroIntro />
            <HeroButtons />
            <HeroSocials />
        </div>
    )
};


export default Hero;