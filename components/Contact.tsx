
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 dark:text-gray-100">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Have a question, a suggestion for a new bowl, or a catering inquiry? We'd love to hear from you. Drop us a line and we'll get back to you soon!</p>
        
        <motion.form 
            variants={formVariants}
            className="max-w-xl mx-auto text-left"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500/50 focus:border-red-500 dark:focus:border-red-500 dark:bg-gray-700 dark:text-gray-200 outline-none transition-shadow" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500/50 focus:border-red-500 dark:focus:border-red-500 dark:bg-gray-700 dark:text-gray-200 outline-none transition-shadow" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500/50 focus:border-red-500 dark:focus:border-red-500 dark:bg-gray-700 dark:text-gray-200 outline-none transition-shadow" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: '#EF4444' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
