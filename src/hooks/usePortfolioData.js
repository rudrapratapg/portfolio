import { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export const usePortfolioData = (githubUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;

        if (githubUrl) {
          // Fetch from GitHub
          response = await fetch(githubUrl);
          console.log("response::",response)
          
          if (!response.ok) {
            throw new Error(`Failed to fetch from GitHub: ${response.status}`);
          }
        } else {
          // Use local data
          response = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
          if (!response.ok) {
            throw new Error(`Failed to load local data: ${response.status}`);
          }
        }

        const jsonData = await response.json();
        console.log('jsonData::', jsonData);  // Debug line

        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch portfolio data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    // Always try to fetch data - either from GitHub or local
    if (githubUrl || PORTFOLIO_CONFIG.LOCAL_DATA_PATH) {
      fetchData();
    } else {
      setLoading(false);
      setError('No data source available');
    }
  }, [githubUrl]);

  return { data, loading, error };
};

export default usePortfolioData;