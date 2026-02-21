// // Data loading and fallback logic
// import { getConstantsData } from './dataLoader';
// import fallbackData from '../../public/portfolio-data.json';

// /**
//  * Loads portfolio data from remote source or falls back to local JSON
//  * @returns {Promise<Object>} Transformed portfolio data with resolved icons
//  */
// export async function loadPortfolioData() {
//   try {
//     // Try to fetch from remote URL (configure this URL as needed)
//     // You can use import.meta.env.VITE_API_URL for environment-specific URLs
//     const response = await fetch('https://your-api-url.com/portfolio-data.json');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const fetchedData = await response.json();
//     return getConstantsData(fetchedData);
//   } catch (error) {
//     console.warn('Could not fetch remote data, using local fallback:', error);
//     // Use and transform fallback data
//     return getConstantsData(fallbackData);
//   }
// }

// // Export the fallback data synchronously for immediate use if needed
// export const fallbackPortfolioData = getConstantsData(fallbackData);

// // Export the raw fallback data for debugging
// export const rawFallbackData = fallbackData;

// // Re-export getConstantsData for direct use if needed
// export { getConstantsData } from './dataLoader';

//
// Import all assets
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

// Services data
export const services = [
  { title: "Web Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Full Stack Developer", icon: creator }
];

// Technologies data - merged from portfolio-data.json
export const technologies = [
  { name: "Java 17 / 21", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "Microservices", icon: microservices },
  { name: "React JS", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "REST APIs", icon: rest },
  { name: "Spring Security", icon: security },
  { name: "OAuth2 & JWT", icon: oauth },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Kafka & RabbitMQ", icon: kafka },
  { name: "Redis", icon: redis },
  { name: "PostgreSQL & MySQL", icon: database },
  { name: "Database", icon: database },
  { name: "MongoDB", icon: mongodb },
  { name: "CI/CD (GitHub Actions, Jenkins)", icon: cicd },
  { name: "GitHub", icon: git },
  { name: "JUnit & Mockito", icon: testing },
  { name: "Playwright", icon: playwright },
  { name: "ChatGPT", icon: openai },
  { name: "Spring AI", icon: springAI }
];

const navLinks = [
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

export {navLinks}