import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from './AnimatedSection';

const fruits = [
  { name: "Apple", image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Banana", image: "https://fruitfortheoffice.co.uk/media/.renditions/wysiwyg/42e9as7nataai4a6jcufwg.jpeg" },
  { name: "Orange", image: "https://png.pngtree.com/png-clipart/20240404/original/pngtree-fresh-single-orange-fruit-isolated-on-transparent-background-png-image_14754004.png" },
  { name: "Kiwi", image: "https://www.realsimple.com/thmb/R7Kl1qBAa2LAT05n9ZVC2CyP5jQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-eat-kiwi-GettyImages-2147529648-024b80b6e2ef4d7181914c48bf536550.jpg" },
  { name: "Mango", image: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg" },
  { name: "Strawberry", image: "https://cdn.mos.cms.futurecdn.net/4wwQNKxhra9z9oUaPfwkP3.jpg" },
  { name: "Blueberry", image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-12-03/Fresh_Blueberry.jpg" },
  { name: "Pineapple", image: "https://img.freepik.com/free-photo/pineapple-fruit_1203-7746.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Grapes", image: "https://png.pngtree.com/png-clipart/20250104/original/pngtree-delicious-black-grapes-png-image_20004046.png" },
  { name: "Watermelon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTn9mIiFqW_tqIhD1fi5nLBV--vF1fGLrEQ&s" },
  { name: "Peach", image: "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?q=80&w=150&auto=format&fit=crop" },
  { name: "Pomegranate", image: "https://images.unsplash.com/photo-1614300489955-f203a3288b56?q=80&w=150&auto=format&fit=crop" },
  { name: "Cherry", image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=150&auto=format&fit=crop" },
  { name: "Papaya", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=150&auto=format&fit=crop" },
  { name: "Avocado", image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=150&auto=format&fit=crop" },
];

const FruitCard: React.FC<{ fruit: { name: string; image: string } }> = ({ fruit }) => (
    <div
      className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all w-48 h-48 flex-shrink-0"
    >
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-20 h-20 object-contain mb-3"
      />
      <p className="text-gray-800 dark:text-gray-200 font-medium text-center">{fruit.name}</p>
    </div>
);


const Benefits: React.FC = () => {
  const column1Fruits = fruits.slice(0, 5);
  const column2Fruits = fruits.slice(5, 10);
  const column3Fruits = fruits.slice(10, 15);

  const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
      <AnimatedSection id="benefits" className="bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Left side: Text content */}
                  <motion.div variants={itemVariants}>
                       <span className="text-sm font-semibold tracking-wide text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-300 px-3 py-1 rounded-full">
                          FRESH & HEALTHY
                       </span>
                       <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                         Eat Fresh, Stay <span className="text-green-600">Healthy</span>
                       </h2>
                       <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Each fruit in your bowl brings unique health benefits. From Vitamin C-packed oranges to antioxidant-rich berries, enjoy the perfect balance of taste and nutrition every day.
                       </p>
                       <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                         Our commitment to quality means you get the freshest ingredients, sourced locally whenever possible, for a vibrant and delicious experience.
                       </p>
                       <motion.button 
                          className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                         Explore Benefits
                       </motion.button>
                  </motion.div>

                  {/* Right side: Scrolling fruit images */}
                  <motion.div variants={itemVariants} className="relative h-[36rem] overflow-hidden hidden md:block">
                      <div className="absolute top-0 left-0 right-0 h-full [mask-image:_linear-gradient(to_bottom,transparent_0,_black_4rem,_black_calc(100%-4rem),transparent_100%)]">
                         <div className="h-full w-full flex justify-center gap-8">
                              {/* Column 1 - scrolls up */}
                              <div className="w-48">
                                  <div className="animate-scroll-y group-hover:[animation-play-state:paused]">
                                      <ul className="flex flex-col space-y-8 pb-8">
                                          {column1Fruits.map((fruit, index) => <li key={`c1-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                      <ul className="flex flex-col space-y-8 pb-8" aria-hidden="true">
                                          {column1Fruits.map((fruit, index) => <li key={`c1-dup-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                  </div>
                              </div>
                              {/* Column 2 - scrolls down */}
                              <div className="w-48">
                                  <div className="animate-scroll-y-reverse group-hover:[animation-play-state:paused]">
                                      <ul className="flex flex-col space-y-8 pb-8">
                                          {column2Fruits.map((fruit, index) => <li key={`c2-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                      <ul className="flex flex-col space-y-8 pb-8" aria-hidden="true">
                                          {column2Fruits.map((fruit, index) => <li key={`c2-dup-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                  </div>
                              </div>
                               {/* Column 3 - scrolls up */}
                              <div className="w-48">
                                  <div className="animate-scroll-y group-hover:[animation-play-state:paused]">
                                      <ul className="flex flex-col space-y-8 pb-8">
                                          {column3Fruits.map((fruit, index) => <li key={`c3-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                      <ul className="flex flex-col space-y-8 pb-8" aria-hidden="true">
                                          {column3Fruits.map((fruit, index) => <li key={`c3-dup-${index}`}><FruitCard fruit={fruit} /></li>)}
                                      </ul>
                                  </div>
                              </div>
                         </div>
                      </div>
                  </motion.div>
              </div>
          </div>
      </AnimatedSection>
  );
};

export default Benefits;