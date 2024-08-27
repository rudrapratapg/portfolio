import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from '../hoc/SectionWrapper'
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Experienced and motivated developer with a strong background in design and development. Adept at adapting to both independent and collaborative work environments, with a focus on delivering high-quality results. Passionate about learning new technologies and implementing innovative solutions. Quick to grasp new concepts and eager to work with the latest technologies. Let's collaborate to turn your ideas into reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title+'_'+index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");