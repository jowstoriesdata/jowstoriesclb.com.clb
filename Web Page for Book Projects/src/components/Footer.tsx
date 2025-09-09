import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from './context/AppContext';
import { translations } from './translations';
import { imgLogo } from '../imports/svg-z2nfn';

export function Footer() {
  const { language } = useApp();
  const t = translations[language];
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Elegant footer layout with serif typography */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Logo and company */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ width: '75px', height: '22px' }} 
                className="mb-6"
              >
                <img 
                  className="w-full h-full object-contain" 
                  src={imgLogo} 
                  alt="JOW Logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 leading-relaxed"
                style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
              >
                {t.subtitle}
              </motion.p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 
                className="text-white text-lg mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {language === 'es' ? 'Navegar' : 'Navigate'}
              </h4>
              <div className="space-y-3">
                {[
                  language === 'es' ? 'Historias' : 'Stories',
                  language === 'es' ? 'Personajes' : 'Characters',
                  language === 'es' ? 'Universos' : 'Universes',
                  t.terms,
                  t.policies
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, color: '#ffffff' }}
                    className="block text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 
                className="text-white text-lg mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {language === 'es' ? 'Mantente informado' : 'Stay informed'}
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.enterEmail}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Crimson Text, serif', textTransform: 'uppercase', letterSpacing: '1px' }}
                >
                  {t.receive}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom section with elegant typography */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 }}
                className="text-gray-500 text-xs"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {t.rightsReserved}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="text-gray-500 text-xs"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {t.company}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}