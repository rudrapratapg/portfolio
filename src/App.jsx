import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './components/canvas';
import { PortfolioProvider } from './context/PortfolioContext';
import { PORTFOLIO_CONFIG } from './config/portfolioConfig';
import { getConstantsData } from './constants/dataLoader';
import * as staticConstants from './constants';

import './App.css';

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        let data = null;

        if (PORTFOLIO_CONFIG.PORTFOLIO_DATA_URL) {
          // Fetch from GitHub
          try {
            const response = await fetch(PORTFOLIO_CONFIG.PORTFOLIO_DATA_URL);
            if (!response.ok) {
              throw new Error(`Failed to fetch from GitHub: ${response.status}`);
            }
            data = await response.json();
            console.log('Portfolio data loaded from GitHub');
          } catch (err) {
            console.warn('Failed to fetch from GitHub, falling back to local data:', err.message);
            // Fall back to local data
            const localResponse = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
            data = await localResponse.json();
            console.log('Portfolio data loaded from local file');
          }
        } else {
          // Use local data
          const response = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
          if (!response.ok) {
            throw new Error(`Failed to load local data: ${response.status}`);
          }
          data = await response.json();
          console.log('Portfolio data loaded from local file');
        }

        setPortfolioData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading portfolio data:', err);
        setError(err.message);
        // Use static data as final fallback
        setPortfolioData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Merge fetched data with static constants
  const mergedData = {
    ...staticConstants,
    ...getConstantsData(portfolioData),
  };

  return (
    <PortfolioProvider value={{ ...mergedData, loading, error }}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </PortfolioProvider>
  )
}

export default App