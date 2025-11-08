import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const SocialIcon: React.FC<{ href: string, path: string, ariaLabel: string }> = ({ href, path, ariaLabel }) => (
  <motion.a 
    href={href} 
    aria-label={ariaLabel} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
    whileHover={{ y: -3, scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg
  </motion.a>
);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  });
  
  // Creates a parallax effect on the newsletter box
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const titleText = "Stay Fresh!";
  const titleContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.12 } }
  };
  const titleWordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const listContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.footer 
        ref={footerRef}
        className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <motion.div 
            style={{ y: parallaxY, opacity: scrollYProgress }}
            className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg -mt-32 mb-16 relative z-10 text-center"
        >
            <motion.h3 
                className="text-3xl font-bold mb-3 text-gray-800 dark:text-white"
                variants={titleContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {titleText.split(" ").map((word, index) => (
                    <motion.span key={index} variants={titleWordVariants} className="inline-block mr-3">
                        {word}
                    </motion.span>
                ))}
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Subscribe to our newsletter for the latest deals and new bowl announcements.
            </motion.p>
            <motion.form 
                className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
            >
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500/50 focus:border-red-500 dark:focus:border-red-500 dark:bg-gray-800 dark:text-gray-200 outline-none transition-shadow" 
                    required 
                    aria-label="Email for newsletter"
                />
                <motion.button 
                    type="submit" 
                    className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-md w-full sm:w-auto flex-shrink-0"
                    whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    Subscribe
                </motion.button>
            </motion.form>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listContainerVariants}
        >
          {/* Column 1: Brand & Social */}
          <motion.div className="md:col-span-2" variants={listItemVariants}>
            <h4 className="text-3xl font-bold text-red-500 mb-4">Fruuta</h4>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
              Your daily dose of freshness. Craft your own vibrant fruit bowl, made fresh every day.
            </p>
            <div className="flex space-x-5">
                <SocialIcon href="#" ariaLabel="Facebook" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                <SocialIcon href="#" ariaLabel="Instagram" path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                <SocialIcon href="#" ariaLabel="Twitter" path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={listItemVariants}>
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {[ {to: "home", label: "Home", offset: 0}, {to: "about", label: "About", offset: -70}, {to: "products", label: "Products", offset: -70}, {to: "contact", label: "Contact", offset: -70} ].map(link => (
                  <li key={link.to}>
                      <motion.div whileHover={{ x: 5, color: 'rgb(239 68 68)' }} transition={{ type: 'spring', stiffness: 400 }}>
                          <Link to={link.to} smooth={true} duration={500} offset={link.offset} className="text-gray-600 dark:text-gray-400 cursor-pointer">
                              {link.label}
                          </Link>
                      </motion.div>
                  </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={listItemVariants}>
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">Contact Us</h5>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    <span>hello@fruuta.com</span>
                </li>
                <li className="flex items-center gap-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.034 11.034 0 006.364 6.364l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    <span>(123) 456-7890</span>
                </li>
                 <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span>123 Fruit Lane, Freshville, 90210</span>
                </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
            className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-gray-500 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Fruuta. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;