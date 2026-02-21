/**
 * Constants Loader
 * This module exports functions to get data from either GitHub or local JSON
 */

import {
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
  threejs,
  openai,
  rest,
  junit,
  spring,
  java,
  microservices,
  oauth,
  security,
  aws,
  azure,
  kafka,
  redis,
  database,
  cicd,
  testing,
  playwright,
  kubernetes,
  mobile,
  backend,
  creator,
  web,
  linkedin,
  email,
  cognizant,
  newgen,
  wheebox,
  codeslipi,
  optum,
  promptHub,
  springAI,
  onlineAssessment
} from '../assets';

const iconMap = {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  'react js': reactjs,
  redux,
  tailwind,
  nodejs,
  'node js': nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  'three js': threejs,
  openai,
  rest,
  junit,
  spring,
  java,
  microservices,
  oauth,
  security,
  aws,
  azure,
  kafka,
  redis,
  database,
  cicd,
  testing,
  playwright,
  kubernetes,
  mobile,
  backend,
  creator,
  web,
  linkedin,
  email,
  cognizant,
  newgen,
  wheebox,
  codeslipi,
  optum,
  promptHub,
  springAI,
  onlineAssessment
};

const resolveIcon = (iconName) => {
  if (!iconName) return null;
  
  const normalizedName = iconName.toLowerCase().trim();
  const resolved = iconMap[normalizedName] || iconMap[iconName];
  
  // Validate that the resolved icon is a string (valid path)
  if (resolved && typeof resolved === 'string') {
    return resolved;
  }
  
  return null;
};

export const getConstantsData = (fetchedData) => {
  console.log('fetcheddata :: ', fetchedData);
  if (!fetchedData) return {};

  const {
    personalInfo = {},
    services = [],
    technologies = [],
    experiences = [],
    testimonials = [],
    projects = [],
    contacts = personalInfo?.contacts || [],
  } = fetchedData;

  const resolvedTechnologies = technologies
    .map(tech => ({
      ...tech,
      icon: resolveIcon(tech.icon)
    }))
    .filter(tech => tech.icon); // Only keep technologies with valid icons

  const resolvedServices = services
    .map(service => ({
      ...service,
      icon: resolveIcon(service.icon)
    }))
    .filter(service => service.icon); // Only keep services with valid icons

  const resolvedExperiences = experiences.map(experience => ({
    ...experience,
    icon: resolveIcon(experience.icon)
  }));

  const resolvedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    image: resolveIcon(testimonial.image) || ''
  }));

  const resolvedProjects = projects.map(project => ({
    ...project,
    image: resolveIcon(project.image) || ''
  }));

  const resolvedContacts = contacts.map(contact => ({
    ...contact,
    icon: resolveIcon(contact.icon)
  }));

  return {
    personalInfo,
    services: resolvedServices,
    technologies: resolvedTechnologies,
    experiences: resolvedExperiences,
    testimonials: resolvedTestimonials,
    projects: resolvedProjects,
    contacts: resolvedContacts
  };
};