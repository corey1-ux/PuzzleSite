import React from 'react';
import { motion } from 'framer-motion';
import puzzle1 from '../assets/puzzle1.jpg';
import puzzle2 from '../assets/puzzle2.jpg';
import puzzle3 from '../assets/puzzle3.jpg';

const puzzles = [
  { id: 1, title: 'Balboa Park in Bloom', pieces: '1000 Pieces', image: puzzle1 },
  { id: 2, title: 'La Jolla Cove Sunset', pieces: '750 Pieces', image: puzzle2 },
  { id: 3, title: 'Coronado Bridge Lights', pieces: '1000 Pieces', image: puzzle3 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    },
  }),
};

const PuzzleGallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Our Collection</h2>
      <div className="puzzle-grid">
        {puzzles.map((puzzle, i) => (
          <motion.div
            key={puzzle.id}
            className="puzzle-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <img src={puzzle.image} alt={puzzle.title} />
            <div className="puzzle-info">
              <h3>{puzzle.title}</h3>
              <p>{puzzle.pieces}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PuzzleGallery;
