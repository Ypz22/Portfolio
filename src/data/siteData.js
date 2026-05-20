import {
  faCloudArrowUp,
  faCode,
  faEnvelope,
  faLayerGroup,
  faLightbulb,
  faLocationDot,
  faPhone,
  faRocket,
  faServer,
  faScrewdriverWrench,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import LUMEN from '../assets/LUMEN.png'
import AutoSiglo from '../assets/AutoSiglo.png'
import GuessMyNumber from '../assets/GuessMyNumber.png'
import PigGame from '../assets/PigGame.png'
import ForestalZone from '../assets/ForestalZone.png'
import CinemaHub from '../assets/CinemaHub.png'

const sharedSocialLinks = {
  github: {
    href: 'https://github.com/ypz22',
    icon: faGithub,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/jefferson-yepez-ba361628b/',
    icon: faLinkedinIn,
  },
  email: {
    href: 'mailto:jeffersonyepez621@gmail.com',
    icon: faEnvelope,
  },
}

const sharedProjects = {
  lumen: {
    img: LUMEN,
    links: {
      project: 'https://ypz22.github.io/LUMEN/',
      github: 'https://github.com/Ypz22/LUMEN',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
  },
  autosiglo: {
    img: AutoSiglo,
    links: {
      project: '',
      github: 'https://github.com/Sebas-Parra/ProyectoFinalAlquilerAutos.git',
    },
    technologies: ['C#', 'HTML5', 'CSS3', 'SQL Server'],
  },
  guessMyNumber: {
    img: GuessMyNumber,
    links: {
      project: 'https://guess-my-number-nine-kappa.vercel.app/',
      github: 'https://github.com/Ypz22/Guess-My-Number',
    },
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
  },
  pigGame: {
    img: PigGame,
    links: {
      project: 'https://pig-game-three-flax.vercel.app/',
      github: 'https://github.com/Ypz22/Pig-game',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
  },
  forestal: {
    img: ForestalZone,
    links: {
      project: '',
      github: 'https://github.com/Cotbert2/ForestalJSP',
    },
    technologies: ['Java', 'PostgreSQL', 'HTML', 'Tailwind CSS'],
  },
  cinemaHub: {
    img: CinemaHub,
    links: {
      project: '',
      github: 'https://github.com/Ypz22/CinemaHub',
    },
    technologies: ['React', 'Vite', 'ESLint', 'CSS3'],
  },
}

export const siteContent = {
  en: {
    ui: {
      themeToggle: 'Switch between light and dark mode',
      languageToggle: 'Change language',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      socialLinksLabel: 'Social links',
      lightMode: 'Light',
      darkMode: 'Dark',
      workTogether: "Let's work together",
      downloadCv: 'Download CV',
      liveProject: 'Live project',
      sourceCode: 'Source code',
      toolsUnit: 'tools',
      availableBadge: 'Available for remote-friendly teams and freelance work',
    },
    navLinks: [
      { label: 'Home', href: '#Home' },
      { label: 'About', href: '#About' },
      { label: 'Skills', href: '#Skills' },
      { label: 'Projects', href: '#Projects' },
      { label: 'Contact', href: '#Contact' },
    ],
    hero: {
      badge: 'Available for remote-friendly teams and freelance work',
      title: 'Jefferson Yepez',
      titleAccent: 'building modern digital experiences.',
      role: 'Full Stack Developer',
      description:
        'I design and build products with a strong frontend presence, clean backend structure, and a practical focus on performance, usability, and real-world delivery.',
      stats: [
        { value: '6', label: 'Selected projects in this portfolio' },
        { value: '4', label: 'Core capability areas' },
        { value: 'Remote', label: 'Open to collaborative opportunities' },
      ],
      panelLabel: 'What I bring',
      panelTitle: 'Design-minded engineering with end-to-end ownership.',
      panelDescription:
        'From polished interfaces to API integrations and deployment workflows, I like shipping solutions that look intentional and feel reliable.',
      spotlights: [
        {
          title: 'Frontend systems',
          description: 'Responsive React interfaces, UI refinements, and interaction-focused experiences.',
        },
        {
          title: 'Backend thinking',
          description: 'Structured APIs, maintainable logic, and pragmatic architecture decisions.',
        },
        {
          title: 'Product mindset',
          description: 'Clear communication, collaborative delivery, and a habit of improving the last 10%.',
        },
      ],
    },
    socialLinks: [
      { label: 'GitHub', ...sharedSocialLinks.github },
      { label: 'LinkedIn', ...sharedSocialLinks.linkedin },
      { label: 'Email', ...sharedSocialLinks.email },
    ],
    sectionIntro: {
      about: {
        eyebrow: 'About',
        label: 'Building useful products with clarity and intent.',
        description:
          'I enjoy turning ideas into well-structured digital experiences, combining problem solving, modern development practices, and a constant push for cleaner implementation.',
      },
      skills: {
        eyebrow: 'Stack',
        label: 'Tools and technologies I rely on to ship solid work.',
        description:
          'A balanced toolkit across frontend, backend, cloud, and product collaboration lets me move from prototype to deployable solution with confidence.',
      },
      projects: {
        eyebrow: 'Projects',
        label: 'A portfolio focused on execution, not just concepts.',
        description:
          'These projects highlight different strengths: interface design, data handling, architecture, APIs, and user-centered problem solving.',
      },
      contact: {
        eyebrow: 'Contact',
        label: "Let's talk about your next product, feature, or collaboration.",
        description:
          "If you need someone who can improve UX, refactor code, or build full stack features with care, I'd be happy to connect.",
      },
    },
    aboutParagraphs: [
      'My path into development started with curiosity: understanding how software works, how products are shaped, and how thoughtful code can solve real problems.',
      'Today I focus on full stack development with React, Node.js, JavaScript, and backend-oriented technologies, always aiming for solutions that are scalable, clear, and pleasant to use.',
      'I care about collaboration just as much as implementation. I like refining interfaces, improving code structure, and helping ideas move from rough concept to something polished and dependable.',
    ],
    aboutHighlights: [
      {
        icon: faCode,
        label: 'Frontend Craft',
        description: 'Interfaces with stronger hierarchy, responsive behavior, and cleaner component structure.',
      },
      {
        icon: faRocket,
        label: 'Full Stack Delivery',
        description: 'Comfortable moving between UI, business logic, and integration work to ship complete flows.',
      },
      {
        icon: faUserGroup,
        label: 'Team Collaboration',
        description: 'Used to working with shared goals, iterative feedback, and practical communication.',
      },
      {
        icon: faLightbulb,
        label: 'Problem Solving',
        description: 'I enjoy debugging, simplifying systems, and finding maintainable solutions to messy problems.',
      },
    ],
    skills: [
      {
        label: 'Frontend',
        icon: faLayerGroup,
        summary: 'Interfaces that feel polished, responsive, and easy to navigate.',
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Angular'],
      },
      {
        label: 'Backend',
        icon: faServer,
        summary: 'API and server-side foundations for reliable product behavior.',
        skills: ['Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'SQL Server', 'Oracle'],
      },
      {
        label: 'Cloud & DevOps',
        icon: faCloudArrowUp,
        summary: 'Deployment and delivery practices that help projects move faster.',
        skills: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify'],
      },
      {
        label: 'Workflow & Tools',
        icon: faScrewdriverWrench,
        summary: 'The tools I use to design, test, version, and iterate efficiently.',
        skills: ['Git', 'VS Code', 'Figma', 'Postman'],
      },
    ],
    projects: [
      {
        name: 'LUMEN',
        type: 'E-commerce concept',
        highlight: 'UI-focused build',
        description:
          'An online storefront for apparel with a visually driven layout, product storytelling, and a stronger emphasis on presentation and browsing flow.',
        ...sharedProjects.lumen,
      },
      {
        name: 'AutoSiglo',
        type: 'Rental platform',
        highlight: 'Full stack workflow',
        description:
          'A car rental application with search flows, authentication, and booking-oriented interactions for a more complete user journey.',
        ...sharedProjects.autosiglo,
      },
      {
        name: 'Guess My Number',
        type: 'Browser game',
        highlight: 'Interactive logic',
        description:
          'A classic number-guessing game centered on game-state handling, feedback loops, and lightweight interaction design.',
        ...sharedProjects.guessMyNumber,
      },
      {
        name: 'Pig Game',
        type: 'Two-player game',
        highlight: 'UI behavior',
        description:
          'A turn-based browser game where players balance risk and reward, showcasing state transitions and clean event-driven logic.',
        ...sharedProjects.pigGame,
      },
      {
        name: 'Run Forest, Run!',
        type: 'Management system',
        highlight: 'Architecture-oriented',
        description:
          'A Java EE application with clean architecture ideas, geospatial context, and structured management for forest zones and conservation tasks.',
        ...sharedProjects.forestal,
      },
      {
        name: 'CinemaHub',
        type: 'Media explorer',
        highlight: 'React + API',
        description:
          'A React movie browsing experience powered by external data, focused on fetching, presenting, and organizing content in a user-friendly way.',
        ...sharedProjects.cinemaHub,
      },
    ],
    contact: {
      infoTitle: 'Contact information',
      infoDescription:
        "I'm open to new opportunities, freelance collaborations, and product work where design, code quality, and implementation details matter.",
      details: [
        {
          icon: faEnvelope,
          label: 'Email',
          content: 'jeffersonyepez621@gmail.com',
          href: 'mailto:jeffersonyepez621@gmail.com',
        },
        {
          icon: faPhone,
          label: 'Phone',
          content: '+593 97 939 5043',
          href: 'tel:+593979395043',
        },
        {
          icon: faLocationDot,
          label: 'Location',
          content: 'Ibarra, Ecuador',
        },
      ],
      form: {
        title: 'Send me a message',
        description:
          'Share a bit about your idea, the product, or the improvement you need and I will reply as soon as I can.',
        fields: {
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'you@example.com',
          subject: 'Subject',
          subjectPlaceholder: 'What would you like to build?',
          message: 'Message',
          messagePlaceholder: 'Tell me about your project, goals, or current challenge.',
        },
        submit: 'Send message',
        sending: 'Sending...',
        messages: {
          missingConfig: 'The contact form is not configured yet. Please add your EmailJS keys.',
          success: 'Message sent successfully!',
          error: 'There was a problem sending the message. Please try again.',
        },
      },
    },
    footer: {
      quickLinksTitle: 'Quick links',
      servicesTitle: 'Services',
      services: [
        'Full stack web development',
        'Frontend refactors and UI improvement',
        'API integrations and backend features',
        'Performance-minded implementation',
      ],
      note: 'Designed and developed with React, custom styling, and a strong focus on visual hierarchy.',
      rights: 'All rights reserved.',
    },
  },
  es: {
    ui: {
      themeToggle: 'Cambiar entre modo claro y oscuro',
      languageToggle: 'Cambiar idioma',
      openMenu: 'Abrir menu de navegacion',
      closeMenu: 'Cerrar menu de navegacion',
      socialLinksLabel: 'Enlaces sociales',
      lightMode: 'Claro',
      darkMode: 'Oscuro',
      workTogether: 'Trabajemos juntos',
      downloadCv: 'Descargar CV',
      liveProject: 'Ver proyecto',
      sourceCode: 'Codigo fuente',
      toolsUnit: 'herramientas',
      availableBadge: 'Disponible para equipos remotos y proyectos freelance',
    },
    navLinks: [
      { label: 'Inicio', href: '#Home' },
      { label: 'Sobre mi', href: '#About' },
      { label: 'Habilidades', href: '#Skills' },
      { label: 'Proyectos', href: '#Projects' },
      { label: 'Contacto', href: '#Contact' },
    ],
    hero: {
      badge: 'Disponible para equipos remotos y proyectos freelance',
      title: 'Jefferson Yepez',
      titleAccent: 'creando experiencias digitales modernas.',
      role: 'Desarrollador Full Stack',
      description:
        'Diseno y desarrollo productos con una fuerte presencia frontend, una base backend limpia y un enfoque practico en rendimiento, usabilidad y entrega real.',
      stats: [
        { value: '6', label: 'Proyectos destacados en este portafolio' },
        { value: '4', label: 'Areas principales de trabajo' },
        { value: 'Remoto', label: 'Abierto a nuevas oportunidades' },
      ],
      panelLabel: 'Lo que aporto',
      panelTitle: 'Ingenieria con enfoque visual y responsabilidad de punta a punta.',
      panelDescription:
        'Desde interfaces pulidas hasta integraciones de API y despliegues, me gusta entregar soluciones que se vean intencionales y funcionen con confianza.',
      spotlights: [
        {
          title: 'Sistemas frontend',
          description: 'Interfaces React responsivas, refinamiento visual y experiencias centradas en la interaccion.',
        },
        {
          title: 'Pensamiento backend',
          description: 'APIs estructuradas, logica mantenible y decisiones arquitectonicas practicas.',
        },
        {
          title: 'Mentalidad de producto',
          description: 'Comunicacion clara, entrega colaborativa y obsesion por mejorar el ultimo 10%.',
        },
      ],
    },
    socialLinks: [
      { label: 'GitHub', ...sharedSocialLinks.github },
      { label: 'LinkedIn', ...sharedSocialLinks.linkedin },
      { label: 'Correo', ...sharedSocialLinks.email },
    ],
    sectionIntro: {
      about: {
        eyebrow: 'Sobre mi',
        label: 'Construyendo productos utiles con claridad e intencion.',
        description:
          'Disfruto convertir ideas en experiencias digitales bien estructuradas, combinando resolucion de problemas, practicas modernas de desarrollo y una mejora constante del codigo.',
      },
      skills: {
        eyebrow: 'Stack',
        label: 'Herramientas y tecnologias con las que entrego trabajo solido.',
        description:
          'Un conjunto equilibrado entre frontend, backend, cloud y colaboracion de producto me permite avanzar desde el prototipo hasta una solucion lista para publicar.',
      },
      projects: {
        eyebrow: 'Proyectos',
        label: 'Un portafolio enfocado en ejecucion, no solo en ideas.',
        description:
          'Estos proyectos muestran diferentes fortalezas: diseno de interfaz, manejo de datos, arquitectura, APIs y resolucion de problemas centrada en usuarios.',
      },
      contact: {
        eyebrow: 'Contacto',
        label: 'Hablemos de tu siguiente producto, funcionalidad o colaboracion.',
        description:
          'Si necesitas a alguien que mejore UX, refactorice codigo o construya funcionalidades full stack con cuidado, estare encantado de conversar.',
      },
    },
    aboutParagraphs: [
      'Mi camino en el desarrollo comenzo con curiosidad: entender como funciona el software, como se construyen los productos y como un buen codigo puede resolver problemas reales.',
      'Hoy me enfoco en desarrollo full stack con React, Node.js, JavaScript y tecnologias orientadas a backend, buscando siempre soluciones escalables, claras y agradables de usar.',
      'Me importa tanto la colaboracion como la implementacion. Disfruto refinar interfaces, mejorar estructura de codigo y llevar ideas desde un concepto inicial hasta algo pulido y confiable.',
    ],
    aboutHighlights: [
      {
        icon: faCode,
        label: 'Criterio Frontend',
        description: 'Interfaces con mejor jerarquia visual, comportamiento responsive y una estructura de componentes mas limpia.',
      },
      {
        icon: faRocket,
        label: 'Entrega Full Stack',
        description: 'Comodidad para moverme entre UI, logica de negocio e integraciones para entregar flujos completos.',
      },
      {
        icon: faUserGroup,
        label: 'Trabajo en Equipo',
        description: 'Experiencia trabajando con objetivos compartidos, feedback iterativo y comunicacion practica.',
      },
      {
        icon: faLightbulb,
        label: 'Resolucion de Problemas',
        description: 'Me gusta depurar, simplificar sistemas y encontrar soluciones mantenibles para problemas complejos.',
      },
    ],
    skills: [
      {
        label: 'Frontend',
        icon: faLayerGroup,
        summary: 'Interfaces que se sienten pulidas, responsivas y faciles de recorrer.',
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Angular'],
      },
      {
        label: 'Backend',
        icon: faServer,
        summary: 'Bases solidas de API y servidor para comportamientos confiables del producto.',
        skills: ['Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'SQL Server', 'Oracle'],
      },
      {
        label: 'Cloud y DevOps',
        icon: faCloudArrowUp,
        summary: 'Practicas de despliegue y entrega que ayudan a que los proyectos avancen mejor.',
        skills: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify'],
      },
      {
        label: 'Flujo y Herramientas',
        icon: faScrewdriverWrench,
        summary: 'Herramientas que uso para disenar, probar, versionar e iterar de forma eficiente.',
        skills: ['Git', 'VS Code', 'Figma', 'Postman'],
      },
    ],
    projects: [
      {
        name: 'LUMEN',
        type: 'Concepto e-commerce',
        highlight: 'Enfoque visual',
        description:
          'Una tienda online para ropa con una presentacion visual fuerte, storytelling de producto y una experiencia pensada para explorar mejor el catalogo.',
        ...sharedProjects.lumen,
      },
      {
        name: 'AutoSiglo',
        type: 'Plataforma de alquiler',
        highlight: 'Flujo full stack',
        description:
          'Una aplicacion web para alquiler de autos con busquedas, autenticacion y flujos orientados a reserva para una experiencia mas completa.',
        ...sharedProjects.autosiglo,
      },
      {
        name: 'Guess My Number',
        type: 'Juego web',
        highlight: 'Logica interactiva',
        description:
          'Un clasico juego de adivinar el numero centrado en manejo de estado, retroalimentacion al usuario y una interaccion ligera pero efectiva.',
        ...sharedProjects.guessMyNumber,
      },
      {
        name: 'Pig Game',
        type: 'Juego para dos jugadores',
        highlight: 'Comportamiento de UI',
        description:
          'Un juego por turnos en navegador donde los jugadores equilibran riesgo y recompensa, mostrando transiciones de estado y eventos bien definidos.',
        ...sharedProjects.pigGame,
      },
      {
        name: 'Run Forest, Run!',
        type: 'Sistema de gestion',
        highlight: 'Orientado a arquitectura',
        description:
          'Una aplicacion Java EE con ideas de arquitectura limpia, contexto geoespacial y gestion estructurada de zonas forestales y tareas de conservacion.',
        ...sharedProjects.forestal,
      },
      {
        name: 'CinemaHub',
        type: 'Explorador multimedia',
        highlight: 'React + API',
        description:
          'Una experiencia React para explorar peliculas usando datos externos, enfocada en obtener, organizar y presentar contenido de forma amigable.',
        ...sharedProjects.cinemaHub,
      },
    ],
    contact: {
      infoTitle: 'Informacion de contacto',
      infoDescription:
        'Estoy abierto a nuevas oportunidades, colaboraciones freelance y trabajo de producto donde importen el diseno, la calidad del codigo y los detalles de implementacion.',
      details: [
        {
          icon: faEnvelope,
          label: 'Correo',
          content: 'jeffersonyepez621@gmail.com',
          href: 'mailto:jeffersonyepez621@gmail.com',
        },
        {
          icon: faPhone,
          label: 'Telefono',
          content: '+593 97 939 5043',
          href: 'tel:+593979395043',
        },
        {
          icon: faLocationDot,
          label: 'Ubicacion',
          content: 'Ibarra, Ecuador',
        },
      ],
      form: {
        title: 'Enviame un mensaje',
        description:
          'Cuéntame un poco sobre tu idea, producto o mejora que necesitas y te respondere lo antes posible.',
        fields: {
          name: 'Nombre',
          namePlaceholder: 'Tu nombre',
          email: 'Correo',
          emailPlaceholder: 'tu@correo.com',
          subject: 'Asunto',
          subjectPlaceholder: '¿Que te gustaria construir?',
          message: 'Mensaje',
          messagePlaceholder: 'Cuéntame sobre tu proyecto, objetivos o el reto actual.',
        },
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        messages: {
          missingConfig: 'El formulario de contacto aun no esta configurado. Agrega tus claves de EmailJS.',
          success: '¡Mensaje enviado correctamente!',
          error: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.',
        },
      },
    },
    footer: {
      quickLinksTitle: 'Enlaces rapidos',
      servicesTitle: 'Servicios',
      services: [
        'Desarrollo web full stack',
        'Refactorizacion frontend y mejora visual',
        'Integracion de APIs y funcionalidades backend',
        'Implementacion con enfoque en rendimiento',
      ],
      note: 'Disenado y desarrollado con React, estilos personalizados y un fuerte enfoque en jerarquia visual.',
      rights: 'Todos los derechos reservados.',
    },
  },
}
