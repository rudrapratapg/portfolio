// import { createContext, useContext } from 'react';

// const PortfolioContext = createContext();

// export const PortfolioProvider = ({ children, value }) => {
//   console.log("PortfolioProvider value:: ",value)
//   return (
//     <PortfolioContext.Provider value={value}>
//       {children}
//     </PortfolioContext.Provider>
//   );
// };

// export const usePortfolioContext = () => {
//   const context = useContext(PortfolioContext);
//   if (!context) {
//     throw new Error('usePortfolioContext must be used within PortfolioProvider');
//   }
//   console.log("Context::",context);
//   return context;
// };

// export default PortfolioContext;

import React, { createContext, useContext } from 'react';

const PortfolioContext = createContext(null);

export const usePortfolioContext = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children, value }) => {
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};