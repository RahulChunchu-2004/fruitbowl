import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFloat: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  // Corrected phone number to match user's request
  const phoneNumber = "9182781986";
  const message = "Hello, I'm interested in your fresh fruit bowls!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    if (isClicked) return;

    setIsClicked(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
    >
      {/* Ripple ring animation */}
      {!isClicked && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-md"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      {/* Floating WhatsApp button */}
      <motion.a
        href={whatsappUrl}
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center w-16 h-16" // Fixed size for smooth icon transition
        whileHover={{ scale: 1.15, rotate: isClicked ? 0 : 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isClicked ? (
            <motion.svg
              key="check"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="whatsapp"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path d="M16.003 3.005A12.96 12.96 0 0 0 3.043 15.96c0 2.288.608 4.53 1.76 6.5l-1.84 6.708 6.88-1.804a12.92 12.92 0 0 0 6.16 1.57h.008a12.96 12.96 0 0 0 12.956-12.953 12.93 12.93 0 0 0-3.804-9.156 12.93 12.93 0 0 0-9.156-3.82zm.003 23.498h-.006a10.74 10.74 0 0 1-5.48-1.506l-.394-.233-4.084 1.072 1.088-3.978-.258-.408a10.73 10.73 0 0 1-1.666-5.774A10.79 10.79 0 0 1 16 5.222a10.75 10.75 0 0 1 7.624 3.16 10.7 10.7 0 0 1 3.156 7.628 10.79 10.79 0 0 1-10.774 10.493zm5.89-8.09c-.322-.162-1.911-.945-2.207-1.053-.297-.108-.513-.162-.729.162-.216.324-.836 1.053-1.026 1.27-.189.216-.378.243-.7.081-.322-.162-1.36-.5-2.59-1.594-.957-.853-1.602-1.907-1.791-2.229-.189-.324-.02-.5.143-.662.147-.147.324-.378.486-.567.162-.189.216-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.729-1.756-.999-2.4-.263-.632-.532-.545-.729-.554l-.622-.01c-.202 0-.532.081-.81.405s-1.06 1.036-1.06 2.527 1.086 2.934 1.238 3.141c.162.216 2.138 3.265 5.182 4.572.725.313 1.29.5 1.73.64.727.232 1.388.199 1.91.121.584-.087 1.911-.782 2.18-1.538.27-.756.27-1.404.189-1.537-.081-.135-.294-.216-.616-.378z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloat;