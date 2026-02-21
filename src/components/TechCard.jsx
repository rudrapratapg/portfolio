import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.5)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 450,
        }}
        className='xs:w-[120px] w-[120px] h-[120px]'
      >
        <div className='bg-gradient-to-b from-tertiary to-black-100 p-4 rounded-2xl h-full flex items-center justify-center relative overflow-hidden group'>
          {/* Background glow effect on hover */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300' />
          
          {/* Tech icon/image */}
          <img
            src={icon}
            alt={name}
            className='w-16 h-16 object-contain z-10 transition-transform duration-300 group-hover:scale-110'
          />
          
          {/* Hover label */}
          <div className='absolute bottom-0 left-0 right-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-2 text-center'>
            <p className='text-white text-xs font-semibold truncate'>{name}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default TechCard;
