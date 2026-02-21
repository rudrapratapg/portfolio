import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { usePortfolioContext } from "../context/PortfolioContext";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
// import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const portfolioData = usePortfolioContext();

  const { personalInfo = {}, services = [] } = portfolioData || {};

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>
          {personalInfo?.about || "Software Engineering Lead with 8+ years of experience building scalable SaaS and enterprise systems across healthcare and fintech domains. Expert in Java 17/21, Spring Boot, Microservices, and ReactJS, with hands-on experience on AWS and Azure. Proven leader of cross-functional teams delivering secure, high-availability platforms serving 2M+ users."}
        </p>
      </motion.div>
      <div className="mt-8 flex gap-4">
        <a 
          href={personalInfo?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary py-3 px-6 rounded-xl outline-none border-none font-bold text-white shadow-md hover:bg-opacity-90 transition-all cursor-pointer inline-block"
        >
          View Resume
        </a>
        <button 
          className="bg-transparent py-3 px-6 rounded-xl outline-none border-2 border-tertiary font-bold text-white shadow-md hover:bg-tertiary hover:bg-opacity-20 transition-all"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Me
        </button>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");