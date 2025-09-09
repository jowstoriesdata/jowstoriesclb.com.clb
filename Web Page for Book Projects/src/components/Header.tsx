import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Settings, X, Menu } from 'lucide-react';
import { useApp } from './context/AppContext';
import { translations } from './translations';
import { imgLogo } from '../imports/svg-z2nfn';

interface HeaderProps {
  isSearchExpanded: boolean;
  onSearchToggle: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onMenuToggle: () => void;
}

export function Header({ isSearchExpanded, onSearchToggle, searchTerm, onSearchChange, onMenuToggle }: HeaderProps) {
  const { language, setIsSettingsOpen } = useApp();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-500 ${
        isSearchExpanded 
          ? 'h-24 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800' 
          : `h-16 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`
      }`}
    >
      <div className="h-full flex items-center justify-between px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isSearchExpanded ? (
            // Animated search mode
            <motion.div
              key="search-mode"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSearchToggle}
                className="text-black dark:text-white hover:opacity-70 transition-opacity"
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <div className="flex-1 max-w-2xl">
                <motion.input
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-0 py-2 text-2xl font-light bg-transparent border-none outline-none text-black dark:text-white placeholder-gray-500"
                  autoFocus
                />
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="h-px bg-black dark:bg-white mt-2 origin-left"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSettingsOpen(true)}
                className="text-black dark:text-white hover:opacity-70 transition-opacity"
                title={t.settings}
              >
                <Settings className="w-6 h-6" />
              </motion.button>
            </motion.div>
          ) : (
            // Animated normal mode
            <motion.div
              key="normal-mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center justify-between"
            >
              {/* Menu button */}
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onMenuToggle}
                className="text-white hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-medium tracking-wide hidden sm:block">MENU</span>
              </motion.button>

              {/* Animated Logo - centered, preserved size */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div style={{ width: '75px', height: '22px' }}>
                  <img 
                    className="w-full h-full object-contain" 
                    src={imgLogo} 
                    alt="JOW Logo"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </motion.div>

              {/* Search button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSearchToggle}
                className="text-white hover:opacity-70 transition-opacity"
                title={t.search}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}