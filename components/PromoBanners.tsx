import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

const bannerData = [
  {
    bgColor: 'bg-lime-500',
    subtitle: 'Premium',
    title: 'Juicy Fruits',
    image: 'https://i.imgur.com/391GJdC.png',
    imgClass: 'w-48 md:w-56 lg:w-64 -bottom-8 -right-8',
    alt: 'Avocado'
  },
  {
    bgColor: 'bg-yellow-400',
    subtitle: 'FLAT 20% OFF FRUITS',
    title: 'Healthy Food',
    image: 'https://i.imgur.com/M5232lV.png',
    imgClass: 'w-48 md:w-56 lg:w-64 -bottom-10 -right-12',
    alt: 'Dragon Fruit'
  },
  {
    bgColor: 'bg-orange-500',
    subtitle: 'BIG SEASON SALE',
    title: 'Fresh Papaya',
    image: 'https://i.imgur.com/39A2s6s.png',
    imgClass: 'w-48 md:w-56 lg:w-72 -bottom-8 -right-10',
    alt: 'Papaya'
  }
];

const PromoBanners: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly type itemVariants with Variants to fix typing error with 'ease' property.
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-12 bg-slate-50">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {bannerData.map((banner, index) => (
          <motion.div
            key={index}
            className={`relative ${banner.bgColor} rounded-xl p-8 text-gray-800 overflow-hidden min-h-[250px] flex flex-col justify-center items-start`}
            variants={itemVariants}
          >
            <div className="relative z-10">
              <p className="font-medium">{banner.subtitle}</p>
              <h3 className="text-3xl lg:text-4xl font-bold my-2">{banner.title}</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                SHOP NOW
              </motion.button>
            </div>
            <img
              src={banner.image}
              alt={banner.alt}
              className={`absolute ${banner.imgClass} object-contain pointer-events-none`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PromoBanners;
