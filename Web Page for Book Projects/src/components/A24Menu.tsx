import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useApp } from './context/AppContext';
import { translations } from './translations';

interface A24MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPageSelect: (page: string) => void;
}

export function A24Menu({ isOpen, onClose, onPageSelect }: A24MenuProps) {
  const { language, setIsSettingsOpen } = useApp();
  const t = translations[language];

  const menuItems = [
    { id: 'stories', label: language === 'es' ? 'Historias' : 'Stories' },
    { id: 'characters', label: language === 'es' ? 'Personajes' : 'Characters' },
    { id: 'universes', label: language === 'es' ? 'Universos' : 'Universes' },
    { id: 'timeline', label: language === 'es' ? 'Cronología' : 'Timeline' },
    { id: 'news', label: language === 'es' ? 'Noticias' : 'News' },
    { id: 'about', label: language === 'es' ? 'Acerca' : 'About' }
  ];

  const handleItemClick = (itemId: string) => {
    onPageSelect(itemId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Animated Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Animated Menu Panel */}
          <motion.div 
            initial={{ x: -380 }}
            animate={{ x: 0 }}
            exit={{ x: -380 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute left-0 top-0 w-96 h-full bg-black text-white"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Close button with animation */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between mb-16"
              >
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  <X className="w-5 h-5" />
                  <span className="text-sm tracking-wide">CLOSE</span>
                </motion.button>
              </motion.div>

              {/* Animated Menu items */}
              <nav className="space-y-10 flex-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ 
                      x: 15,
                      color: '#ffffff',
                      transition: { duration: 0.2 }
                    }}
                    onClick={() => handleItemClick(item.id)}
                    className="block text-4xl text-gray-300 hover:text-white transition-colors cursor-pointer text-left w-full"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Animated bottom section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border-t border-gray-800 pt-6"
              >
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    setIsSettingsOpen(true);
                    onClose();
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors mb-6 block"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {t.settings}
                </motion.button>
                
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {t.company}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}