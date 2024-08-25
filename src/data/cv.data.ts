import { 
  EducationInterface,
  ProjectInterface,
  SkillInterface,
  TechnologyInterface,
  WorkExperience 
} from "../interfaces/cv.interfaces";

import {
    node,
    python,
    reactIcon,
    js,
    ts,
    php,
    css,
    html,
    mysql,
    windows,
    linux,
    millenium,
    weekSchedule,
    spotifyClone,
    ordunte,
    planner,
    angular,
    vue,
    git,
    nextjsWhite,
    mysqlWhite,     
} from '../assets/';

export const workExperiences: WorkExperience[] = [
    {
      position: 'Full-Stack Developer',
      company: 'Semilla Proyectos Internet',
      months: 12,
      technologies: [
        {
          name: 'JavaScript',
          imgUrl: js, 
        },
        {
          name: 'Php',
          imgUrl: php, 
        },
        {
          name: 'HTML',
          imgUrl: html, 
      },
      {
          name: 'MySQL',
          imgUrl: mysql, 
      },
      ],
      description:
        'Designed and implemented websites, enhanced a real estate CRM with batch actions, optimized code by creating reusable components, and managed project requirements to meet client expectations.',
    },
    {
      position: 'Frontend Developer',
      company: 'I-logica',
      months: 6,
      technologies: [
        {
          name: 'TypeScript',
          imgUrl: ts, 
        },
        {
          name: 'HTML',
          imgUrl: html, 
      },
      {
          name: 'CSS',
          imgUrl: css, 
      },
      ],
      description:
        'Developed dynamic web pages using JavaScript, TypeScript, CSS, and HTML, created a landing page for a burger restaurant, and honed coding best practices while collaborating on team projects.',
    },
    {
      position: 'Data Center Operator',
      company: 'ASAC',
      months: 3,
      technologies: [
        {
          name: 'Windows',
          imgUrl: windows, 
        },
        {
            name: 'Linux',
            imgUrl: linux, 
        },
      ],
      description:
        'Managed data center operations, overseeing hardware and network systems to ensure efficient data handling and system uptime.',
    },
    {
      position: 'IT Technician',
      company: 'Seresco',
      technologies: [
        {
          name: 'Windows',
          imgUrl: windows, 
        },
        {
            name: 'Linux',
            imgUrl: linux, 
        },
      ],
      months: 6,
      description:
        'Enhanced technical skills in IT support and troubleshooting, delivering solutions and maintenance for diverse IT systems.',
    },
  ];


export const technologies: TechnologyInterface [] = [
    {
        name: 'JavaScript',
        imgUrl: js, 
    },
    {
        name: 'TypeScript',
        imgUrl: ts, 
    },
    {
        name: 'React',
        imgUrl: reactIcon, 
    },
    {
        name: 'Node',
        imgUrl: node, 
    },
    {
        name: 'Python',
        imgUrl: python, 
    },
    {
        name: 'Php',
        imgUrl: php, 
    },
    {
        name: 'CSS',
        imgUrl: css, 
    },
    {
        name: 'HTML',
        imgUrl: html, 
    },
    {
        name: 'MySQL',
        imgUrl: mysql, 
    },
    {
        name: 'Windows',
        imgUrl: windows, 
    },
    {
        name: 'Linux',
        imgUrl: linux, 
    },
    
]


export const educationData: EducationInterface [] = [
  {
    degree: 'Higher Technician in Web Application Development',
    institution: ' C.I.F.P Avilés',
    year: 2021,
    details: `During my studies as a Higher Technician in Web Application
    Development at C.I.F.P. Avilés, I acquired a solid foundation in
    the design, development, and maintenance of web
    applications`,
  },
  {
    degree: `Higher Technician in Operating Systems and
    Network Administration`,
    institution: ' C.I.F.P Avilés',
    year: 2019,
    details: `n the Higher Technician in Operating Systems and Network
    Administration program at C.I.F.P. Avilés, I received
    comprehensive training in managing and administering
    computer systems and networks`,
  },
]

export const projectsData: ProjectInterface [] = [
  {
    name: 'Millenium Luxury Properties',
    description: 'During my previous job, I was instrumental in developing this real estate application using JavaScript, PHP, MySQL, CSS, and HTML. It serves as a robust platform for property listings and real estate services, reflecting my skills in full-stack development',
    projectImg: millenium,
    projectUrl: 'https://www.millenniumluxuryproperties.com/',
  },
  {
    name: 'Spotify Clone',
    description: 'For my Higher Technician certification, I developed a Spotify clone that was both challenging and rewarding. Starting with Nextjs, I integrated features like user authentication, playlist management, and song searching via the Deezer API. This project highlights my adaptability and growth in using TypeScript and modern web frameworks.',
    projectImg: spotifyClone,
  },
  {
    name: 'Your Rounded Week',
    description: 'I created this application from scratch to help me organize my weekly schedule more effectively and to showcase my skills in React and TypeScript. I used it as an opportunity to practice React after not using it for a long time and to explore new libraries like ThreeJS and ExcelJS.',
    projectImg: weekSchedule,
    projectUrl: 'https://your-rounded-week.netlify.app/',
  },
  {
    name: 'Expense Planner',
    description: 'This application, created while learning Vue, helps users manage and track their expenses effectively. It allows you to input, categorize, and visualize your spending, making it easier to budget and plan your finances. The app features an intuitive interface and dynamic charts to provide clear insights into your financial habits, demonstrating my ability to build functional and user-friendly applications with Vue js.',
    projectImg: planner,
    projectUrl: 'https://administrador-gastos-kgs.netlify.app/',
  },
  {
    name: 'Inmobiliaria Ordunte',
    description: 'In my previous job, I significantly contributed to Ordunte, an ambitious project that, although unfinished by me, showcases my ability to collaborate effectively and manage complex project requirements.',
    projectImg: ordunte,
    projectUrl: 'https://www.ordunte.com/',
  },
]


export const skillsData: SkillInterface[] = [
  {
    ability: 90,
    tech: {
      name: 'JavaScript',
      imgUrl: js,
    }
  },
  {
    ability: 85,
    tech: {
      name: 'TypeScript',
      imgUrl: ts,
    }
  },
  {
    ability: 80,
    tech: {
      name: 'Node',
      imgUrl: node,
    }
  },
  {
    ability: 75,
    tech: {
      name: 'Python',
      imgUrl: python,
    }
  },
  {
    ability: 85,
    tech: {
      name: 'HTML',
      imgUrl: html,
    }
  },
  {
    ability: 85,
    tech: {
      name: 'CSS',
      imgUrl: css,
    }
  },
  {
    ability: 75,
    tech: {
      name: 'MySQL',
      imgUrl: mysqlWhite,
    }
  },
  {
    ability: 65,
    tech: {
      name: 'Angular',
      imgUrl: angular,
    }
  },
  {
    ability: 65,
    tech: {
      name: 'Vue',
      imgUrl: vue,
    }
  },
  {
    ability: 70,
    tech: {
      name: 'Git',
      imgUrl: git,
    }
  },
  {
    ability: 70,
    tech: {
      name: 'NextJS',
      imgUrl: nextjsWhite,
    }
  },
  {
    ability: 80,
    tech: {
      name: 'React',
      imgUrl: reactIcon,
    }
  },
]