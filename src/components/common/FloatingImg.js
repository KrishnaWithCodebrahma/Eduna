import React from 'react';
import { motion } from 'framer-motion';


const FloatingImage = ({
  src,
  top = 'auto', 
  left = 'auto', 
  right = 'auto', 
  bottom = 'auto', 
  animationY = null, 
   animationX = null, 
  opacity = 0.4, 
  duration = 10, 
  delay = 2, 
}) => {
  const animationProps = {};

  if (animationY) animationProps.y = animationY;

  if (animationX) animationProps.x = animationX;

  return (
    <motion.div
      className="absolute"
      style={{ top, left, right, bottom }}
      animate={{ ...animationProps, opacity }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
      }}
    >
      <img src={src} alt="Floating Shape" />
    </motion.div>
  );
};

export default FloatingImage;
