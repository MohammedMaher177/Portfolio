/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  MySQL,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  weatherApp,
  freeGames,
  freshCart,
  avatar,
  bootstrap,
  next,
  REDUX
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  MySQL,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  weatherApp,
  bootstrap

};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  REDUX,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "My name is Mohammed, I'm 27 and a Graduate of the Faculty of Arabic Language, Al-Azhar University. I have a strong passion for the technologies related to the data base construction and UX.",

    "Outside of my regular activities, I'm into reading whenever I have some free time.",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Fresh Cart E-Comerce",
    description: `Fresh Cart is an e-commerce platform by React JS that makes shopping easy and fast. You can browse through a wide range of products and add them to your cart with a simple click. You can also edit your cart anytime, changing the quantity or removing items as you wish. Fresh Cart delivers your orders to your doorstep in no time. Shop with Fresh Cart and enjoy the convenience and quality of online shopping.`,
    image: freshCart,
    source_code_link: 'https://github.com/MohammedMaher177/fresh-carts',
    demo_link: 'https://mohammedmaher177.github.io/fresh-carts/',
  },
  {
    name: 'Weather API App',
    description: `Weather App is an online weather app that allows you to integrate APIs back end link with front end app,Weather App help you search for the weather in any country in the world with ease. It displays the maximum and minimum temperature for 3 days. Weather App helps you plan your trips and activities according to the weather conditions. Weather App is simple, fast and reliable. Browse Weather App today and stay updated with the weather around the world.`,
    image: weatherApp,
    source_code_link: 'https://github.com/MohammedMaher177/Weather-app',
    demo_link: 'https://mohammedmaher177.github.io/Weather-app/',
  },
  {
    name: 'Free Games App',
    description: 'Free Game App is an online app that allows you to integrate APIs back end link with front end app,Free Game App helps you find and download free games. You can browse through different categories of games, such as action, adventure, puzzle, racing and more. You can also read the description of each game and see the ratings. Free Game App is the ultimate app for gamers who love to play without paying. Browse Free Game App today and enjoy unlimited fun and entertainment.',
    image: freeGames,
    source_code_link: 'https://github.com/MohammedMaher177/free-games',
    demo_link: 'https://mohammedmaher177.github.io/free-games/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  // {
  //   id: 'java',
  //   title: 'Java',
  //   icon: javaIcon,
  //   description:
  //     'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  // },
  // {
  //   id: 'aws',
  //   title: 'Amazon Web Services',
  //   icon: awsIcon,
  //   description:
  //     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  // },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'MySQL',
    title: 'MySQL',
    icon: MySQL,
    description:
      'Ican use MySQL to create dynamic and interactive web applications, such as e-commerce, social media, blogs and more. To use MySQL,',
  },
  // {
  //   id: 'vite',
  //   title: 'Vite',
  //   icon: viteIcon,
  //   description:
  //     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  // },
  // {
  //   id: 'py',
  //   title: 'Python',
  //   icon: pyIcon,
  //   description:
  //     'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  // },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'Next JS',
    title: 'NEXT JS',
    icon: next,
    description:
      'i can use Next.js to build websites, blogs, e-commerce, dashboards and more. To use Next.js,',
  },
  {
    id: 'bootstrap',
    title: 'bootstrap',
    icon: bootstrap,
    description:
      ' i can use Bootstrap to design websites, landing pages, portfolios and more. To use Bootstrap, developers need to include the Bootstrap CDN links or files in their HTML head, add the Bootstrap classes and attributes to their HTML elements, and customize the styles and behaviors using CSS and JavaScritb.',
  },
  {
    id: 'REDUX',
    title: 'REDUX',
    icon: REDUX,
    description:
      ' i can use Bootstrap to design websites, landing pages, portfolios and more. To use Bootstrap, developers need to include the Bootstrap CDN links or files in their HTML head, add the Bootstrap classes and attributes to their HTML elements, and customize the styles and behaviors using CSS and JavaScritb.',
  },
  // {
  //   id: 'neo',
  //   title: 'Neo4j',
  //   icon: neoIcon,
  //   description:
  //     'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  // },
  // {
  //   id: 'raspi',
  //   title: 'Raspberry Pi',
  //   icon: raspIcon,
  //   description:
  //     'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  // },
  // {
  //   id: 'eslint',
  //   title: 'Eslint',
  //   icon: eslintIcon,
  //   description:
  //     'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  // },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
