import React, { useState, useEffect } from "react";

import TechCard from "./TechCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { usePortfolioContext } from "../context/PortfolioContext";
import ErrorBoundary from "./ErrorBoundary";

const Tech = () => {
  const { technologies } = usePortfolioContext() || { technologies: [] };
  const [visibleCount, setVisibleCount] = useState(8);

  // Progressive rendering: render more items as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 30) {
        setVisibleCount(Math.min(technologies.length, 12));
      }
      if (scrollPercentage > 50) {
        setVisibleCount(Math.min(technologies.length, 16));
      }
      if (scrollPercentage > 70) {
        setVisibleCount(technologies.length);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [technologies.length]);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-8'>
      {technologies && technologies.length > 0 ? (
        technologies.slice(0, visibleCount).map((technology, index) => (
          <ErrorBoundary key={technology.name}>
            <TechCard index={index} name={technology.name} icon={technology.icon} />
          </ErrorBoundary>
        ))
      ) : (
        <p className='text-white'>Loading technologies...</p>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");