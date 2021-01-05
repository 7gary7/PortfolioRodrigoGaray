import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rodrigo Garay', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Bienvenido a mi portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Mi nombre es',
  name: 'Rodrigo',
  subtitle: 'Soy estudiante de la carrera Analista Programador Universitario',
  cta: 'Más sobre mí',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Vivo en Comodoro Rivadavia (Chubut) junto a mi pareja.',
  paragraphTwo: 'Actualmente curso el tercer y último año de la carrera Analista Programador Universitario en la Universidad Nacional de la Patagonia San Juan Bosco que se encuentra en esta ciudad.',
  paragraphThree: 'Busco mi primer trabajo bajo relación de dependencia como programador full stack.',
  resume: 'https://drive.google.com/file/d/1qnJSnG_Oyxh2GDvedal6rX5TsDk6KuCH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'garyYcris.jpg',
    title: 'Gary & Cris',
    info: 'Blog de la pareja',
    info2: '',
    url: 'https://7gary7.github.io/Gary-Cris/',
    repo: 'https://github.com/7gary7/Gary-Cris', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pipperman.jpg',
    title: 'Pipperman',
    info: 'Juego en desarrollo',
    info2: 'Creado con Java utilizando el patrón Modelo-Vista-Controlador',
    url: '',
    repo: 'https://eljuegito.sourceforge.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '¿Quisieras contactarme? Escribe un email!',
  btn: 'Contactame',
  email: 'rodri_25193@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'wa.link/rp8vho',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rodrigo-garay-b589bb100/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'github.com/7gary7/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
