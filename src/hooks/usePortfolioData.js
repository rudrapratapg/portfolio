import { useState, useEffect } from 'react';

/**
 * Hook to fetch portfolio data from GitHub
 * @param {string} githubUrl - Raw GitHub URL to the portfolio data JSON file
 * @returns {object} - { data, loading, error }
 */
export const usePortfolioData = (githubUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(githubUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch portfolio data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (githubUrl) {
      fetchData();
    }
  }, [githubUrl]);

  return { data, loading, error };
};

export default usePortfolioData;
