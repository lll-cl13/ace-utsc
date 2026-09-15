import React from 'react';
import { motion } from 'framer-motion';

const ShinyText = ({
  text,
  speed = 2,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  const duration = speed;
  const shineWidth = spread; // percentage

  // Direction: left means shine moves from left to right? 
  // Typically "left" direction means the shine travels leftward across text.
  const fromX = direction === 'right' ? '-100%' : '100%';
  const toX = direction === 'right' ? '100%' : '-100%';

  const animateX = yoyo 
    ? [fromX, toX, fromX] 
    : [fromX, toX];

  const transition = {
    duration,
    delay,
    repeat: Infinity,
    repeatType: yoyo ? 'reverse' : 'loop',
    ease: 'linear',
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <span
      className="relative inline-block"
      style={{ color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${shineColor}, transparent)`,
          backgroundSize: `${shineWidth}% 100%`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={{ x: fromX }}
        animate={isPaused ? { x: fromX } : { x: animateX }}
        transition={transition}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default ShinyText;
