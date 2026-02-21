import { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

/**
 * Hook to fetch specific sections of portfolio data progressively
 * This allows sections to load in priority order rather than all at once
 */
export const useSectionData = (section) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        setLoading(true);
        let response;

        // Try to fetch from GitHub first
        if (import.meta.env.VITE_PORTFOLIO_DATA_URL) {
          try {
            response = await fetch(import.meta.env.VITE_PORTFOLIO_DATA_URL);
            if (!response.ok) throw new Error('GitHub fetch failed');
          } catch {
            // Fallback to local data
            response = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
          }
        } else {
          // Use local data
          response = await fetch(PORTFOLIO_CONFIG.LOCAL_DATA_PATH);
        }

        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }

        const jsonData = await response.json();
        
        // Extract only the requested section
        const sectionData = section ? jsonData[section] : jsonData;
        setData(sectionData);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch section data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionData();
  }, [section]);

  return { data, loading, error };
};

export default useSectionData;
