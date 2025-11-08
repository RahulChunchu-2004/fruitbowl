
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PromoBanners from './components/PromoBanners';
import { ThemeProvider } from './contexts/ThemeContext';
import WhatsAppFloat from './components/WhatsAppFloat';
import CustomizeBowl from './components/CustomizeBowl';

const AppContent: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 antialiased selection:bg-yellow-200 selection:text-yellow-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PromoBanners />
        <Products />
        <CustomizeBowl />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;