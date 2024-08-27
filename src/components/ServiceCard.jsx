import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon, link, linkType }) => (
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
          {
            link && linkType && 
            <a 
                href={linkType==="email"?`mailto:${link}`:link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='ml-2 text-blue-500 underline'
            >
                Link
            </a>
          }
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;