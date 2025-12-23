/**
 * Constants Loader
 * This module exports functions to get data from either GitHub or local JSON
 */

// Import the static data as fallback
import * as staticConstants from './index';

// Import all available icons
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
} from '../assets';

// Icon mapping from string names to actual imported assets
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
};

// Function to resolve icon name to actual image path/module
const resolveIcon = (iconName) => {
  if (!iconName) return null;
  
  const normalizedName = iconName.toLowerCase().trim();
  return iconMap[normalizedName] || null;
};

export const getConstantsData = (fetchedData) => {
  if (!fetchedData) {
    // Return static data if no data is fetched yet
    return staticConstants;
  }

  // Transform fetched data to match the current component interface
  const {
    personalInfo = {},
    services = [],
    technologies = [],
    experiences = [],
    testimonials = [],
    projects = [],
  } = fetchedData;

  // Resolve icon references in technologies
  const resolvedTechnologies = technologies.map(tech => ({
    ...tech,
    icon: resolveIcon(tech.icon) || tech.icon, // Use resolved icon or fall back to original string
  }));

  // Resolve icon references in services
  const resolvedServices = services.map(service => ({
    ...service,
    icon: resolveIcon(service.icon) || service.icon,
  }));

  // Resolve icon references in experiences
  const resolvedExperiences = experiences.map(exp => ({
    ...exp,
    icon: resolveIcon(exp.icon) || exp.icon,
  }));

  // Resolve icon references in testimonials
  const resolvedTestimonials = testimonials.map(test => ({
    ...test,
    image: resolveIcon(test.image) || test.image,
  }));

  // Resolve icon references in projects
  const resolvedProjects = projects.map(project => ({
    ...project,
    image: resolveIcon(project.image) || project.image,
  }));

  // Resolve contact icons
  const resolvedContacts = (personalInfo.contacts || []).map(contact => ({
    ...contact,
    icon: resolveIcon(contact.icon) || contact.icon,
  }));

  const resolvedPersonalInfo = {
    ...personalInfo,
    contacts: resolvedContacts,
  };

  return {
    personalInfo: resolvedPersonalInfo,
    services: resolvedServices,
    technologies: resolvedTechnologies,
    experiences: resolvedExperiences,
    testimonials: resolvedTestimonials,
    projects: resolvedProjects,
    contacts: resolvedContacts,
  };
};

export default getConstantsData;
