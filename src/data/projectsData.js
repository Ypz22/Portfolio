import LUMEN from '../assets/LUMEN.png';
import AutoSiglo from '../assets/AutoSiglo.png';
import GuessMyNumber from '../assets/GuessMyNumber.png';
import PigGame from '../assets/PigGame.png'
import ForestalZone from '../assets/ForestalZone.png'
import CinemaHub from '../assets/CinemaHub.png'

export const projects = [
    {
        img: LUMEN,
        name: "LUMEN",
        description: "Online store specializing in the management and sale of t-shirts and hoodies with exclusive designs.",
        technologies: [
            { label: "HTML5" },
            { label: "CSS3" },
            { label: "JavaScript" }
        ],
        links: {
            project: "https://ypz22.github.io/LUMEN/",
            github: "https://github.com/Ypz22/LUMEN"
        }
    },
    {
        img: AutoSiglo,
        name: "AutoSiglo",
        description: "Car rental web application with a modern interface, customizable search options, and user authentication.",
        technologies: [
            { label: "C#" },
            { label: "HTML5" },
            { label: "CSS3" },
            { label: "SQL Server" }
        ],
        links: {
            project: "",
            github: "https://github.com/Sebas-Parra/ProyectoFinalAlquilerAutos.git"
        }
    },
    {
        img: GuessMyNumber,
        name: "Guess My Number",
        description: "Guess My Number is an interactive web game where users try to guess a random number generated by the computer within a specific range.",
        technologies: [
            { label: "C#" },
            { label: "HTML5" },
            { label: "CSS3" }
        ],
        links: {
            project: "https://guess-my-number-nine-kappa.vercel.app/",
            github: "https://github.com/Ypz22/Guess-My-Number"
        }
    },
    {
        img: PigGame,
        name: "Pig Game",
        description: "Pig Game is a fun and interactive browser-based dice game for two players.        Players roll the die, accumulate points, and race to reach the target score without rolling a 1.",
        technologies: [
            { label: "HTML5" },
            { label: "CSS3" },
            { label: "JavaScript" }
        ],
        links: {
            project: "https://pig-game-three-flax.vercel.app/",
            github: "https://github.com/Ypz22/Pig-game"
        }
    },
    {
        img: ForestalZone,
        name: "Run Forest, Run!",
        description: "A web-based system developed using Java EE and Clean Architecture to manage forest zones, tree species, and conservation activities. The application includes geospatial features, interactive maps, and modern UI components for effective environmental data management.",
        technologies: [
            { label: "Java" },
            { label: "PostgreSQl" },
            { label: "HTML" },
            { label: "Tailwind CSS" },
        ],
        links: {
            project: "",
            github: "https://github.com/Cotbert2/ForestalJSP"
        }
    },

    {
        img: CinemaHub,
        name: "CinemaHub",
        description: "CinemaHub is designed to provide a seamless user experience for browsing movies. The application fetches data from a movie API and displays it in an organized manner. Users can view details about different movies, including titles, descriptions, and images.",
        technologies: [
            { label: "React" },
            { label: "Vite" },
            { label: "ESLint" },
            { label: "CSS3" },
        ],
        links: {
            project: "",
            github: "https://github.com/Ypz22/CinemaHub"
        }
    },

];
