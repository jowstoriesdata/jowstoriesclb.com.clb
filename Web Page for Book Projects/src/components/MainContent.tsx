import React from 'react';
import { motion } from 'motion/react';
import { useApp } from './context/AppContext';
import { translations } from './translations';

interface MainContentProps {
  searchTerm: string;
  searchResults: Array<{
    id: number;
    title: string;
    type: string;
    description: string;
    content?: string;
  }>;
}

export function MainContent({ searchTerm, searchResults }: MainContentProps) {
  const { language } = useApp();
  const t = translations[language];

  // If there's a search term, show search results A24 style
  if (searchTerm.trim()) {
    return (
      <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-gray-500 mb-2 tracking-wide uppercase">
              {t.searchResults} "{searchTerm}"
            </h2>
            <p className="text-xs text-gray-400">
              {searchResults.length} {searchResults.length === 1 ? 'resultado' : 'resultados'}
            </p>
          </motion.div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((result, index) => (
                <motion.article
                  key={result.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[3/4] bg-gray-100 dark:bg-gray-900 mb-4 overflow-hidden rounded-lg"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <motion.span 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-4xl text-gray-400"
                      >
                        📖
                      </motion.span>
                    </div>
                  </motion.div>
                  <div className="space-y-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {result.type}
                    </span>
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      className="text-xl font-light text-black dark:text-white transition-colors"
                    >
                      {result.title}
                    </motion.h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-light text-black dark:text-white mb-4">{t.noResults}</h3>
              <p className="text-gray-500">
                {language === 'es' ? 'Intenta con otros términos' : 'Try different search terms'}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Default content - minimal and elegant
  return (
    <div className="bg-white dark:bg-black">
      {/* Elegant info section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl text-black dark:text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {t.waitCalmly}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            {t.checkLater}
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}