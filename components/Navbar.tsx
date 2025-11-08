
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'products', label: 'Products' },
  { to: 'benefits', label: 'Benefits' },
  { to: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ to: string, label: string }> = ({ to, label }) => (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors duration-300"
      activeClass="text-red-500 font-semibold"
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  const ThemeToggleButton: React.FC<{ className?: string }> = ({ className }) => (
    <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 ${className}`}>
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-md rounded-b-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="text-3xl font-bold text-red-500 cursor-pointer">
          Fruuta
        </Link>
        
        {/* Desktop Menu & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <NavLink key={link.to} {...link} />)}
          <ThemeToggleButton />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggleButton />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none" aria-label="Open menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-4">
            {navLinks.map(link => <NavLink key={link.to} {...link} />)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
