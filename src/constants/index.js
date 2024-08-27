import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,

    promptHub,
    onlineAssessment,
    springAI,


    threejs,
    linkedin,
    email,
    cognizant,
    newgen,
    wheebox,
    codeslipi,
    openai,
    rest,
    junit,
    spring,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const contacts = [
    {
      title: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/deepak-gola/",
      linkType: "url",
    },
    {
      title: "Email",
      icon: email,
      link: "er.deepakgola@gmail.com",
      linkType: "email",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "OpenAI",
      icon: openai,
    },
    {
      name: "Rest API",
      icon: rest,
    },
    // {
    //   name: "JUnit",
    //   icon: junit,
    // },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
        "title": "Software Developer",
        "company_name": "Cognizant",
        "icon": cognizant,
        "iconBg": "#2E2E2E",
        "date": "Jul 2023 - Aug 2024",
        "points": [
            "Developed widgets based on React JS to migrate from salesforce as per Adobe Illustrator designs.",
            "Developed automation scripts using the Playwright framework for a Salesforce-to-React JS migration project.",
            "Ensured timely delivery of project milestones with a focus on quality and minimal issues.",
            "Collaborated with the client team to resolve blockers and provide clarifications.",
            "Mentored team members on the Playwright framework to enhance team capabilities."
        ]
    },
    {
      "title": "Associate Projects",
      "company_name": "Cognizant",
      "icon": cognizant,
      "iconBg": "#2E2E2E",
      "date": "Apr 2022 - Jul 2023",
      "points": [
          "Upgraded legacy project from Java 1.4/WebLogic 8.1 to Java 11/WebLogic 14c with modern IDE support and coding practices",
          "Replaced outdated packages, wrote multi-cluster deployment scripts, and resolved Java Swing UI issues.",
          "Delivered high-quality milestones with zero post-production bugs, leading to six additional projects awarded by the client.",
          "Ensured timely delivery of project milestones with a focus on quality and minimal issues.",
          "Collaborated with the client team to resolve blockers and provide clarifications.",
      ]
    },
    {
        "title": "Software Developer",
        "company_name": "Newgen",
        "icon": newgen,
        "iconBg": "#383E56",
        "date": "Dec 2020 - Mar 2022",
        "points": [
            "Developed a web application from scratch using React JS, enabling users to create customizable portals without coding.",
            "Recreated and developed custom components with features like localization, theming, and responsive design.",
            "Implemented drag-and-drop functionality for dynamic form components with up to two levels of nesting.",
            "Migrated the legacy Spring MVC based backend to Spring Boot and made it scalable."
        ]
    },
    {
        "title": "Java Developer",
        "company_name": "Wheebox",
        "icon": wheebox,
        "iconBg": "#E6DEDD",
        "date": "Oct 2019 - Dec 2020",
        "points": [
            "Developed and implemented new features for an online assessment system, including bulk registration and detailed reporting.",
            "Coordinated with clients to understand and implement custom requirements.",
            "Applied best practices for coding, unit testing, and defect resolution, and contributed to product improvement suggestions."
        ]
    },
    {
        "title": "Java Developer",
        "company_name": "CodesLipi Infotech",
        "icon": codeslipi,
        "iconBg": "#383E56",
        "date": "Sep 2018 - Oct 2019",
        "points": [
            "Contributed to the development of a hospital management system, managing doctor, staff, patient records, and hospital operations.",
            "Engaged in coding, unit testing, defect resolution, and knowledge transfer documentation.",
            "Supported production and provided assistance during the warranty period."
        ]
    },
    {
        "title": "Java Developer",
        "company_name": "CodesLipi Infotech",
        "icon": codeslipi,
        "iconBg": "#E6DEDD",
        "date": "Sep 2018 - Oct 2019",
        "points": [
            "Developed a training center management system, handling staff and student registration, course management, and salary management.",
            "Applied best practices in coding, unit testing, and defect resolution, and prepared knowledge transfer documentation.",
            "Addressed queries, provided assistance during production, and made necessary code changes."
        ]
    }
  ];
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  const testimonials = [
    {
      testimonial:
        "Deepak's ability to solve complex technical issues and deliver on time is unmatched. His work led to zero post-production defects and five new SOWs for our team. We couldn't have asked for a better performer.",
      name: "Rekha Ravichandran",
      designation: "Manager at",
      company: "Cognizant",
      image: "",
    },
    {
      testimonial:
        "Deepak's exceptional problem-solving skills and dedication were key to our success. His contributions not only resolved complex issues but also earned him a well-deserved award. His work consistently exceeded expectations.",
      name: "Mohit",
      designation: "Manager at",
      company: "Newgen",
      image: "",
    },
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "PromptHub",
      description:
        "Developed a web application that enables users to share, create, edit, and manage prompts. The application requires user authentication via Google accounts, implemented using NextAuth. The platform allows seamless collaboration and prompt sharing among users, fostering a community-driven environment for prompt-based content creation",
      tags: [
        {
          name: "next_js",
          color: "blue-text-gradient",
        },
        {
          name: "next_auth",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promptHub,
      source_code_link: "https://github.com/rudrapratapg/Project_promptopia?tab=readme-ov-file",
    },
    {
      name: "Spring AI",
      description:
        "Designed and implemented the backend for an AI-driven project utilizing Java and Spring Boot. Leveraged Spring AI and ChatGPT to generate dynamic responses through a series of customized prompts and templates. Developed RESTful APIs to facilitate interaction with the GPT model, ensuring tailored and contextually relevant AI-generated content.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "spring_ai",
          color: "green-text-gradient",
        },
        {
          name: "spring_boot",
          color: "blue-text-gradient",
        },
        {
          name: "rest_api",
          color: "pink-text-gradient",
        },
      ],
      image: springAI,
      source_code_link: "https://github.com/rudrapratapg/Project_promptopia?tab=readme-ov-file",
    },
    
    {
      name: "Online Assessment",
      description:
      "Engineered a comprehensive online assessment platform featuring role-based access control for Super Admins, Sub Admins, Test Creators, Teachers, and Students. The system provides a dashboard for administrators to manage user roles, create and organize question banks, and oversee the creation and distribution of assessments. This robust platform supports extensive role management allowing admins to promote or demote user and appoint or dismiss sub-admins with ease.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "jsp",
          color: "green-text-gradient",
        },
        {
          name: "spring_mvc",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: onlineAssessment,
      source_code_link: "https://github.com/DarkHavoc/Olympiad",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, contacts };