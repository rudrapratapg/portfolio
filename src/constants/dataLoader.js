/**
 * Constants Loader
 * This module exports functions to get data from either GitHub or local JSON
 */

// Import the static data as fallback
import * as staticConstants from './index';

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

  return {
    personalInfo,
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    contacts: personalInfo.contacts || [],
  };
};

export default getConstantsData;
