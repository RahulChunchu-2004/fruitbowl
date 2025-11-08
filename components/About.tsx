
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

  return (
    <AnimatedSection id="about" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="overflow-hidden rounded-lg shadow-xl">
            <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop" alt="A vibrant assortment of fresh fruits" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Passion for Freshness</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Fruuta started with a love for simple, vibrant, and wholesome food. We believe that a perfect meal can be both delicious and incredibly healthy. Our mission is to bring you the best nature has to offer, one beautiful fruit bowl at a time.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We work closely with local farmers to hand-pick the freshest, seasonal fruits. Every bowl is a work of art, crafted with care by our team to deliver a burst of flavor and a wealth of nutrients. It's more than just food; it's a celebration of freshness.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
