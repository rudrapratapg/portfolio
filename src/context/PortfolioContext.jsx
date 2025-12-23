import { createContext, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children, value }) => {
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioContext must be used within PortfolioProvider');
  }
  return context;
};

export default PortfolioContext;
