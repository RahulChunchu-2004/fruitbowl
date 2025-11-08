
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

// Data for customization options
const SIZES = {
  Small: { price: 300, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
  Medium: { price: 400, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop' },
  Large: { price: 500, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop' },
};

const FRUITS = [
  { name: 'Strawberry', price: 50, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=150&auto=format&fit=crop' },
  { name: 'Blueberry', price: 60, image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=150&auto=format&fit=crop' },
  { name: 'Kiwi', price: 40, image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=150&auto=format&fit=crop' },
  { name: 'Mango', price: 70, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=150&auto=format&fit=crop' },
  { name: 'Banana', price: 30, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=150&auto=format&fit=crop' },
  { name: 'Pineapple', price: 60, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=150&auto=format&fit=crop' },
];

const TOPPINGS = [
  { name: 'Granola', price: 30, image: 'https://www.splenda.com/wp-content/uploads/2023/01/Easy-Chocolate-Granola-thumbnail-8160.jpg' },
  { name: 'Chia Seeds', price: 20, image: 'https://images.healthshots.com/healthshots/en/uploads/2024/04/04200817/Chia-seeds-1.jpg' },
  { name: 'Coconut Flakes', price: 25, image: 'https://rukminim2.flixcart.com/image/480/480/xif0q/nut-dry-fruit/p/6/b/100-fresh-grated-coconut-coconut-flakes-gola-laccha-for-sweets-original-imah42rcznu3wyjp.jpeg?q=90' },
  { name: 'Honey Drizzle', price: 35, image: 'https://media.istockphoto.com/id/1371327390/photo/honey-dripping-on-wooden-dipper.jpg?s=612x612&w=0&k=20&c=y2q7A6rYQuge5T4Nzn3jlNvVdio_IDzhkaJGOfifW5M=' },
];

type Size = keyof typeof SIZES;

interface SelectionItem {
  name: string;
  price: number;
  image: string;
}

const SelectionCard: React.FC<{ item: SelectionItem, isSelected: boolean, onSelect: () => void }> = ({ item, isSelected, onSelect }) => (
    <motion.div
      onClick={onSelect}
      className={`relative cursor-pointer rounded-xl border-2 p-3 text-center transition-all duration-300 ${isSelected ? 'border-red-500 bg-red-50 dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300'}`}
      whileHover={{ y: -5 }}
    >
      <img src={item.image} alt={item.name} className="w-16 h-16 mx-auto rounded-full object-cover mb-2" />
      <p className="font-semibold text-sm dark:text-gray-200">{item.name}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">₹{item.price}</p>
      {isSelected && (
        <motion.div initial={{scale:0}} animate={{scale:1}} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </motion.div>
      )}
    </motion.div>
);


const CustomizeBowl: React.FC = () => {
    const [size, setSize] = useState<Size>('Medium');
    const [selectedFruits, setSelectedFruits] = useState<string[]>(['Strawberry', 'Banana']);
    const [selectedToppings, setSelectedToppings] = useState<string[]>(['Granola']);

    const handleFruitToggle = (fruitName: string) => {
        setSelectedFruits(prev =>
            prev.includes(fruitName)
                ? prev.filter(f => f !== fruitName)
                : [...prev, fruitName]
        );
    };

    const handleToppingToggle = (toppingName: string) => {
        setSelectedToppings(prev =>
            prev.includes(toppingName)
                ? prev.filter(t => t !== toppingName)
                : [...prev, toppingName]
        );
    };

    const totalPrice = useMemo(() => {
        const sizePrice = SIZES[size].price;
        const fruitsPrice = selectedFruits.reduce((sum, fruitName) => {
            const fruit = FRUITS.find(f => f.name === fruitName);
            return sum + (fruit ? fruit.price : 0);
        }, 0);
        const toppingsPrice = selectedToppings.reduce((sum, toppingName) => {
            const topping = TOPPINGS.find(t => t.name === toppingName);
            return sum + (topping ? topping.price : 0);
        }, 0);
        return sizePrice + fruitsPrice + toppingsPrice;
    }, [size, selectedFruits, selectedToppings]);

    const handleOrder = () => {
        const phoneNumber = "9182781986";
        let message = `Hello Fruuta! I'd like to order a custom bowl:\n\n`;
        message += `*Size:* ${size}\n`;
        message += `*Fruits:* ${selectedFruits.join(', ') || 'None'}\n`;
        message += `*Toppings:* ${selectedToppings.join(', ') || 'None'}\n\n`;
        message += `*Total Price:* ₹${totalPrice}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

  return (
    <AnimatedSection id="custom" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Craft Your Perfect Bowl</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Follow the steps to create a fruit bowl that's uniquely yours. Freshness, just the way you like it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Preview and Price */}
          <motion.div className="sticky top-28" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-slate-100 dark:bg-gray-900/50 rounded-2xl p-6 shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={SIZES[size].image}
                        src={SIZES[size].image}
                        alt="Custom fruit bowl" 
                        className="w-full h-80 object-cover rounded-xl mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold dark:text-white">Your Total:</h3>
                    <div className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                         ₹<AnimatePresence mode="wait">
                            <motion.span
                                key={totalPrice}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="inline-block"
                            >
                                {totalPrice}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                 <motion.button
                    onClick={handleOrder}
                    className="w-full mt-6 bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Order on WhatsApp
                </motion.button>
            </div>
          </motion.div>
          {/* Right Side: Options */}
          <motion.div className="space-y-10" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            {/* Step 1: Size */}
            <div>
                <h4 className="text-2xl font-semibold mb-4 dark:text-gray-200">1. Choose your size</h4>
                <div className="grid grid-cols-3 gap-4">
                    {(Object.keys(SIZES) as Size[]).map(s => (
                        <div key={s} onClick={() => setSize(s)}
                            className={`cursor-pointer rounded-xl p-4 text-center border-2 transition-colors ${size === s ? 'border-red-500 bg-red-50 dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-700 hover:border-red-300'}`}
                        >
                            <p className="font-bold text-lg dark:text-white">{s}</p>
                            <p className="text-gray-500 dark:text-gray-400">₹{SIZES[s].price}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Step 2: Fruits */}
            <div>
                <h4 className="text-2xl font-semibold mb-4 dark:text-gray-200">2. Select your fruits</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {FRUITS.map(fruit => (
                       <SelectionCard 
                            key={fruit.name}
                            item={fruit}
                            isSelected={selectedFruits.includes(fruit.name)}
                            onSelect={() => handleFruitToggle(fruit.name)}
                       />
                    ))}
                </div>
            </div>
             {/* Step 3: Toppings */}
            <div>
                <h4 className="text-2xl font-semibold mb-4 dark:text-gray-200">3. Add toppings</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {TOPPINGS.map(topping => (
                         <SelectionCard 
                            key={topping.name}
                            item={topping}
                            isSelected={selectedToppings.includes(topping.name)}
                            onSelect={() => handleToppingToggle(topping.name)}
                       />
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CustomizeBowl;
