import React from "react";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { usePortfolioContext } from "../context/PortfolioContext";
import ErrorBoundary from "./ErrorBoundary";

const Tech = () => {
  const { technologies } = usePortfolioContext() || { technologies: [] };

  // Limit to 8 canvas elements to avoid WebGL context exhaustion
  const visibleTechnologies = technologies && technologies.length > 0 
    ? technologies.slice(0, 8) 
    : [];

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {visibleTechnologies && visibleTechnologies.length > 0 ? (
        visibleTechnologies.map((technology) => (
          <ErrorBoundary key={technology.name}>
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>
          </ErrorBoundary>
        ))
      ) : (
        <p className='text-white'>Loading technologies...</p>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");