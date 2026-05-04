import type { SiteContent } from '../types'

import github from '../assets/nav/github.svg?react';
import instagram from '../assets/nav/instagram.svg?react';
import linkedin from '../assets/nav/linkedin.svg?react';
import twitter from '../assets/nav/twitter.svg?react';

import AppleCloneImg from '../assets/work/apple-clone.png';
import Eventsdashboard1 from '../assets/work/events-dashboard1.png';
import Eventsdashboard2 from '../assets/work/events-dashboard2.png';
import FlickWeatherDesktop from '../assets/work/flick-desktop.png';
import FlickMobile1 from '../assets/work/flick-mobile1.png';
import FlickMobile2 from '../assets/work/flick-mobile2.png';
import FlickMobile3 from '../assets/work/flick-mobile3.png';
import ReactChessyImg from '../assets/work/react-chessy.png';
import sikabox1 from '../assets/work/sikabox.png';
import Web3Img from '../assets/work/web3.png';
import wetuliDesktop from '../assets/work/wetuli-desktop.png';
import wetuliMobile from '../assets/work/wetuli-mobile.png';
import wetuliWebResponsive from '../assets/work/wetuli-web-responsive.png';
import wetuliWeb from '../assets/work/wetuli-web.png';

export const OWNER = {
  name: 'Blessing Alfred',
  title: 'Senior Frontend & Mobile Engineer',
  email: 'blealf@gmail.com',
  phone: '+234 803 982 9130',
  linkedin: 'https://linkedin.com/in/blealf',
  github: 'https://github.com/blealf',
  portfolio: 'https://blessingalfred.vercel.app',
  resume: 'https://blessingalfred.vercel.app/resume.pdf',
  location: 'Lagos, Nigeria',
  availability: 'Available immediately for remote roles (UK, EU, US)',
} as const

export const CONTENT = {
  owner: OWNER,
  navLinks: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  heroTagline: 'Pixel-perfect interfaces. Reliable delivery. Remote-first collaboration.',
  heroSummary: `I build high-performance, accessible web and mobile experiences with React,
    TypeScript, and modern tooling — partnering closely with design and backend teams across time zones.`,
  aboutParagraphs: [
    `Hi, I'm Blessing Alfred — a Senior Frontend & Mobile Engineer with several years of experience
    shipping scalable, data-intensive web and mobile applications for startups and growing teams across the US, EU, and Africa.`,
    `I specialize in crafting responsive, accessible interfaces using React, React Native, Vue, TypeScript,
    and frameworks like Next.js and Nuxt. I enjoy translating complex product requirements into calm,
    predictable UX with strong performance budgets.`,
    `Beyond UI work, I've contributed to API integration, real-time features, and AI-assisted workflows,
    and I care deeply about code review culture, mentoring, and measurable improvements to stability and velocity.`,
  ],
  stats: [
    { id: 'years', label: 'Years shipping production UI', value: 6, suffix: '+' },
    { id: 'products', label: 'Products & platforms contributed to', value: 12, suffix: '+' },
    { id: 'regions', label: 'Regions collaborated across', value: 4, suffix: '' },
  ],
  stackPills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript (ESNext)', 'HTML5', 'CSS3', 'SCSS'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Tailwind CSS', 'React Native'],
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'NestJS', 'REST', 'GraphQL', 'WebSockets', 'Ruby on Rails'],
    },
    {
      category: 'Quality',
      items: ['Cypress', 'WCAG', 'CI/CD', 'Git', 'Performance tuning'],
    },
  ],
  skills: [
    {
      title: 'Interface engineering',
      description: 'Component architecture, design systems, and polish under real-world constraints.',
      metrics: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Vue / Nuxt', level: 88 },
        { name: 'React Native', level: 82 },
        { name: 'Accessibility', level: 90 },
      ],
    },
    {
      title: 'Performance & DX',
      description: 'Bundling, caching, profiling, and predictable delivery pipelines.',
      metrics: [
        { name: 'Web performance', level: 88 },
        { name: 'TypeScript', level: 92 },
        { name: 'Testing & QA', level: 85 },
        { name: 'Collaboration', level: 93 },
      ],
    },
  ],
  experience: [
    {
      id: 'glover',
      title: 'Frontend Engineer & Deputy Manager',
      company: 'Glover (Techstars ’22)',
      period: 'June 2022 — Present',
      responsibilities: [
        'Building and maintaining responsive web apps with Vue, Nuxt.js, TypeScript, and Cypress.',
        'Integrating REST and GraphQL APIs with a focus on resilient loading and error handling.',
        'Leading performance initiatives and mentoring engineers through reviews and pairing.',
      ],
    },
    {
      id: 'wetuli',
      title: 'Technical Consultant — Web, Mobile & AI Systems',
      company: 'WeTuli',
      period: 'October 2024 — November 2025',
      responsibilities: [
        'Architecting roadmap and infrastructure modernization for reliability and operational clarity.',
        'Shipping real-time features with Next.js 14, NestJS, WebSockets, and React Query.',
        'Introducing AI-assisted workflows and mentoring engineers on automation and quality gates.',
      ],
    },
    {
      id: 'resoudre',
      title: 'Frontend Engineer (Contract)',
      company: 'Resoudre',
      period: 'May 2024 — September 2024',
      responsibilities: [
        'Enterprise analytics platform with Vue 3, Nuxt, Tailwind CSS, and SignalR.',
        'SEO and WCAG 2.1 improvements alongside latency reductions on heavy data views.',
      ],
    },
    {
      id: 'patricia',
      title: 'Frontend Engineer',
      company: 'Patricia Technologies',
      period: 'July 2021 — June 2022',
      responsibilities: [
        'Delivered React and Next.js experiences with TypeScript and rigorous API integrations.',
        'Championed accessibility improvements and cross-functional delivery rituals.',
      ],
    },
    {
      id: 'dj-agency',
      title: 'Frontend Intern',
      company: 'DJ Agency',
      period: 'June 2020 — July 2020',
      responsibilities: [
        'Contributed to a 3D modeling platform using React and WebGL-focused tooling.',
      ],
    },
    {
      id: 'dmu',
      title: 'Research Assistant',
      company: 'De Montfort University',
      period: 'June 2016 — December 2016',
      responsibilities: [
        'Time series analysis of spatial data using neural networks; MATLAB and Python pipelines.',
      ],
    },
  ],
  projects: [
    {
      id: 'wetuli-app',
      name: 'WeTuli',
      description:
        'Cross-platform learning product spanning responsive web, mobile, and desktop with real-time collaboration.',
      techs: ['Next.js', 'NestJS', 'TypeScript', 'React Native', 'Electron', 'AI'],
      link: 'https://app.wetuli.com',
      // imageSrc: wetuliDesktop,
    },
    {
      id: 'sikabox',
      name: 'SikaBox',
      description:
        'Animated marketing site for FX settlement tooling aimed at businesses in emerging markets.',
      techs: ['Next.js', 'TypeScript', 'React', 'GSAP'],
      link: 'https://mysikabox.com',
    },
    {
      id: 'react-chessy',
      name: 'React Chess Game',
      description:
        'Interactive chess board with move validation, check detection, and Redux-powered game state.',
      techs: ['React', 'Redux', 'JavaScript'],
      github: 'https://github.com/blealf/react-chessy',
      link: 'https://react-chessy.netlify.app',
    },
    {
      id: 'flick-weather',
      name: 'Flick Weather',
      description:
        'Location-aware forecast experience optimized from desktop to mobile breakpoints.',
      techs: ['Vue 3', 'Pinia', 'JavaScript'],
      github: 'https://github.com/blealf/flick-weather',
      link: 'https://flick-weather.netlify.app',
    },
    {
      id: 'events-dashboard',
      name: 'Events Dashboard',
      description:
        'Analytics-oriented dashboard UI with charts for attendance and campaign performance.',
      techs: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
      github: 'https://github.com/blealf/events-dashboard',
      link: 'https://events-dashboard-alpha.netlify.app/',
    },
    {
      id: 'apple-clone',
      name: 'Apple Website Clone',
      description:
        'High-fidelity responsive recreation of Apple marketing layouts using React.',
      techs: ['React', 'JavaScript'],
      github: 'https://github.com/blealf/apple-website-clone',
      link: 'https://apple-website-clone-alpha-nine.vercel.app/',
    },
  ],
  timeline: [
    {
      year: '2022',
      title: 'Joined Glover',
      detail: 'Scaled frontend practice across Vue/Nuxt with emphasis on quality and velocity.',
    },
    {
      year: '2021',
      title: 'Frontend at Patricia',
      detail: 'Deepened React/Next.js delivery with API-heavy financial UX.',
    },
    {
      year: '2020',
      title: 'Internship — 3D web',
      detail: 'Cut teeth on immersive interfaces and strict component hierarchies.',
    },
    {
      year: '2016',
      title: 'Research — De Montfort',
      detail: 'Applied ML methods to spatial ecological datasets.',
    },
  ],
} satisfies SiteContent
