// import { BrowserRouter } from "react-router-dom";
// import { PortfolioProvider } from './context/PortfolioContext';
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   Stars,
// } from "./components";

// import "./App.css";

// const App = () => {
//   return (
//     <PortfolioProvider>
//       <BrowserRouter>
//         <div className='relative z-0 bg-primary'>
//           <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//             <Navbar />
//             <Hero />
//           </div>
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           <Feedbacks />
//           <div className='relative z-0'>
//             <Contact />
//             <Stars />
//           </div>
//         </div>
//       </BrowserRouter>
//     </PortfolioProvider>
//   );
// };

// export default App;
// const [portfolioData, setPortfolioData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchPortfolioData = async () => {
//     console.log("fetchPortfolioData::",fetchPortfolioData);
//     try {
//       setLoading(true);
//       let data = null;

//       if (PORTFOLIO_CONFIG.PORTFOLIO_DATA_URL) {
//         // Fetch from GitHub
//         try {
//           const response = await fetch(PORTFOLIO_CONFIG.PORTFOLIO_DATA_URL);
//           console.log("response::",response);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch from GitHub: ${response.status}`);
//           }
//           data = await response.json();
//           console.log('Portfolio data loaded from GitHub', data);
//         } catch (err) {
//           console.warn('Failed to fetch from GitHub, falling back to local data:', err.message);
//           // Fall back to local data
//           const localResponse = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
//           data = await localResponse.json();
//           console.log('Portfolio data loaded from local file');
//         }
//       } else {
//         // Use local data
//         const response = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
//         if (!response.ok) {
//           throw new Error(`Failed to load local data: ${response.status}`);
//         }
//         data = await response.json();
//         console.log('Portfolio data loaded from local file', data);
//       }

//       setPortfolioData(data);
//       setError(null);
//     } catch (err) {
//       console.error('Error loading portfolio data:', err);
//       setError(err.message);
//       // Use static data as final fallback
//       setPortfolioData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchPortfolioData();
// }, []);

// const PortfolioDataContext = React.createContext();
// src/App.jsx

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PortfolioProvider } from './context/PortfolioContext';
import usePortfolioData from './hooks/usePortfolioData';

// Lazy load heavy components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Contact = lazy(() => import('./components/Contact'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

// Eagerly load Hero and Navbar (critical path)
import { Hero, Navbar } from './components';
import { PORTFOLIO_CONFIG } from './config/portfolioConfig';
import { getConstantsData } from './constants/dataLoader';
import * as staticConstants from './constants';

import './App.css';

// Simple loading fallback
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center bg-tertiary rounded-lg">
    <div className="text-gray-400 text-sm">Loading section...</div>
  </div>
);

const App = () => {
  const [portfolioData, setPortfolioData] = useState(staticConstants);
  const { data: fetchedData, loading, error } = usePortfolioData(import.meta.env.VITE_PORTFOLIO_DATA_URL);

  // Single effect to handle data fetching and merging
  useEffect(() => {
    if (fetchedData) {
      const mergedData = {
        ...staticConstants,
        ...getConstantsData(fetchedData),
      };
      setPortfolioData(mergedData);
    } else if (!loading && !error) {
      // Fallback to local JSON
      fetch('/portfolio-data.json')
        .then(response => response.json())
        .then(localData => {
          const mergedData = {
            ...staticConstants,
            ...getConstantsData(localData),
          };
          setPortfolioData(mergedData);
        })
        .catch(err => {
          console.error('Error fetching fallback data:', err);
          setPortfolioData(staticConstants);
        });
    }
  }, [fetchedData, loading, error]);

  return (
    <PortfolioProvider value={portfolioData}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* Hero Section - Critical Path, Loads Immediately */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          
          {/* Lazy Loaded Sections with Suspense Boundaries */}
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Tech />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Works />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Feedbacks />
          </Suspense>
          
          <div className='relative z-0'>
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </PortfolioProvider>
  );
};

export default App; 