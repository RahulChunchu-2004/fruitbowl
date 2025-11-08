import React, { useRef, useState, useEffect, useCallback } from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-scroll';

const images = [
    'https://images.unsplash.com/photo-1543224713-36b6a03142ce?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1920&auto=format&fit=crop'
];

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

const Hero: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextImage = useCallback(() => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(nextImage, AUTOPLAY_INTERVAL);
  }, [nextImage]);

  useEffect(() => {
    startAutoplay();
    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
  }, [startAutoplay]);
    
  const targetRef = useRef<HTMLDivElement>(null);
  // useScroll hook to track scroll progress within the target element (the hero section)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // useTransform to create the parallax effect.
  // As scrollYProgress goes from 0 to 1, the background image's y position
  // will move from 0% to 50%, creating a slower scroll effect.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // FIX: Explicitly type textVariants with Variants to fix typing error with 'ease' property.
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex} // Key is crucial for AnimatePresence to detect changes
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${images[imageIndex]})`,
            y
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white p-6">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
        >
          Your Daily Dose of Freshness.
        </motion.h1>
        <motion.p 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl mb-8 drop-shadow-md"
        >
          Craft your own vibrant fruit bowl, made fresh every day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="products"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Explore Bowls
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;