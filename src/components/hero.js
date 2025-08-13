import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        San Diego, One Piece at a Time.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Discover stunning, high-quality jigsaw puzzles featuring iconic scenes from America's Finest City.
      </motion.p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Explore Puzzles
      </motion.button>
    </div>
  );
};

export default Hero;
