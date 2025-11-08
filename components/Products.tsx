import React, { useState, useMemo } from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface Product {
  name: string;
  description: string;
  image: string;
  category: 'Tropical' | 'Berry' | 'Green';
  price: number;
}

const products: Product[] = [
  {
    name: 'Tropical Sunrise Bowl',
    description: 'A vibrant mix of mango, pineapple, and banana, topped with coconut flakes.',
    image: 'https://t3.ftcdn.net/jpg/01/62/46/22/360_F_162462284_rmr3e5bZdvTkyLd0Bpy9xHWtQer2I2l0.jpg',
    category: 'Tropical',
    price: 1099,
  },
  {
    name: 'Berry Bliss Bowl',
    description: 'A classic blend of strawberries, blueberries, and raspberries with a sprinkle of granola.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuuMfw3Hl633qNvBV8WRxUbI1es4jK8h8cg&s',
    category: 'Berry',
    price: 999,
  },
  {
    name: 'Green Power Bowl',
    description: 'A nutrient-packed bowl with kiwi, green grapes, and a hint of fresh mint.',
    image: 'https://i.pinimg.com/736x/b6/bc/80/b6bc804d98a3ad672716191dde14d3ef.jpg',
    category: 'Green',
    price: 1149,
  },
  {
    name: 'Acai Antioxidant Bowl',
    description: 'Rich acai puree blended with banana, topped with fresh berries and chia seeds.',
    image: 'https://globalprimenews.com/wp-content/uploads/2020/08/IMG_20200819_035837.jpg',
    category: 'Berry',
    price: 1299,
  },
  {
    name: 'Citrus Burst Bowl',
    description: 'A zesty combination of orange, grapefruit, and passion fruit with a honey drizzle.',
    image: 'https://resize.indiatvnews.com/en/resize/gallery/840_-/2025/01/fruit-bowl-of-india-1736312821.jpg',
    category: 'Tropical',
    price: 1049,
  },
  {
    name: 'Avocado Dream Bowl',
    description: 'Creamy avocado and spinach base, topped with sliced banana and crunchy almonds.',
    image: 'https://img.freepik.com/free-photo/fruit-salad-blue-bowl-isolated-white-background_123827-32692.jpg?semt=ais_hybrid&w=740&q=80',
    category: 'Green',
    price: 1199,
  },
];

const ingredientImages = [
    'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=150&auto=format&fit=crop', // Strawberry
    'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=150&auto=format&fit=crop', // Kiwi
    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=150&auto=format&fit=crop', // Pineapple
    'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=150&auto=format&fit=crop', // Mango
    'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=150&auto=format&fit=crop', // Banana
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
    };

    const phoneNumber = "9182781986"; // Replace with your WhatsApp number
    const orderMessage = `Hello Fruuta! I'd like to order this bowl:\n\n*Name:* ${product.name}\n*Price:* ₹${product.price}\n*Description:* ${product.description}\n\nThank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;

    const handleOrderClick = () => {
        if (showConfirmation) return; // Prevent multiple clicks

        setShowConfirmation(true);
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000);
    };

    return (
        <motion.div
            layout
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group flex flex-col"
        >
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center mt-4 relative">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">₹{product.price}</span>
                    <motion.button
                        onClick={handleOrderClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300"
                    >
                        Order Now
                    </motion.button>
                     <AnimatePresence>
                        {showConfirmation && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -bottom-10 right-0 flex items-center gap-2 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200 text-sm font-medium px-3 py-1 rounded-full shadow-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Redirecting...
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const Products: React.FC = () => {
    const galleryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
    };
    
    // FIX: Explicitly type imageItemVariants with Variants to fix typing error with 'ease' property.
    const imageItemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };
    
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('default');
    const categories = ['All', 'Tropical', 'Berry', 'Green'];

    const displayedProducts = useMemo(() => {
        const filtered = activeCategory === 'All' 
            ? products 
            : products.filter(p => p.category === activeCategory);

        const sorted = [...filtered];
        if (sortOrder === 'price-asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-desc') {
            sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
    }, [activeCategory, sortOrder]);


  return (
    <AnimatedSection id="products">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 dark:text-gray-100"
        >
          Explore Our Signature Bowls
        </motion.h2>

        <motion.div 
            className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12"
            variants={galleryContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          {ingredientImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Ingredient ${index + 1}`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-2 md:border-4 border-white dark:border-gray-700"
              variants={imageItemVariants}
            />
          ))}
        </motion.div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-2 flex-wrap justify-center">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${activeCategory === category ? 'bg-red-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="relative">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-400 dark:text-gray-300"
                    aria-label="Sort products"
                >
                    <option value="default">Default Sort</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
            <AnimatePresence>
              {displayedProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Products;