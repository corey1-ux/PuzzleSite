import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="glass-card">
        <h2>About SD Puzzles</h2>
        <p>
          We are a small, San Diego-based business born from a love for photography and the mindful process of puzzle-building. Each puzzle is a piece of art, a photograph carefully selected to capture the unique light and spirit of our city. Our puzzles are crafted with premium, eco-friendly materials to provide a satisfying, high-quality experience from the first piece to the last.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
