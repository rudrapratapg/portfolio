/**
 * Portfolio Configuration
 * Update the PORTFOLIO_DATA_URL with your GitHub raw content URL
 */

// Example: https://raw.githubusercontent.com/username/portfolio-data/main/portfolio-data.json
export const PORTFOLIO_CONFIG = {
  // Use this if you have your data on GitHub
  PORTFOLIO_DATA_URL: import.meta.env.VITE_PORTFOLIO_DATA_URL || null,

  // Fallback: Use local JSON file if no GitHub URL is configured
  USE_LOCAL_DATA: !import.meta.env.VITE_PORTFOLIO_DATA_URL,

  // Local data file path (relative to public folder)
  LOCAL_DATA_PATH: '/portfolio-data.json',
};

/**
 * How to setup:
 * 
 * 1. Create a GitHub repository for your portfolio data
 * 2. Add the portfolio-data.json file to your repository
 * 3. Set the raw URL in your .env file:
 *    VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/your-username/your-repo/main/portfolio-data.json
 * 
 * OR
 * 
 * 4. Keep the portfolio-data.json file in the public folder for local fetching
 */
