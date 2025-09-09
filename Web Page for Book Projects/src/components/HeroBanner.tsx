import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './context/AppContext';
import { translations } from './translations';
import singlePersonImage from 'figma:asset/6e041c23bbe6d39a19f5b5fe17d32d55e02bb0f5.png';
import coupleImage from 'figma:asset/40c136565aae146ebb76d4c8c8c7a84ad25bd9fb.png';

const bannerImages = {
  default: 'https://images.unsplash.com/photo-1737222957291-d92d49afbc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBib29rJTIwY292ZXIlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzU3MzkyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  cronologia: 'https://images.unsplash.com/photo-1677104165819-2e5ab9a0821f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGJvb2slMjBteXN0ZXJpb3VzfGVufDF8fHx8MTc1NzM5MjY2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  fanfiction: coupleImage,
  proximamente: 'https://images.unsplash.com/photo-1754477041518-c5f2a3e3166a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGNoYXJhY3RlciUyMHBvcnRyYWl0JTIwY2luZW1hdGljfGVufDF8fHx8MTc1NzM5MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  universo: singlePersonImage
};

interface HeroBannerProps {
  onUniverseClick: () => void;
}

export function HeroBanner({ onUniverseClick }: HeroBannerProps) {
  const { language } = useApp();
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState('default');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const menuItems = [
    { 
      key: 'cronologia',
      title: language === 'es' ? 'Cronología Hillgrave' : 'Hillgrave Timeline',
      subtitle: language === 'es' ? 'El universo narrativo completo' : 'The complete narrative universe',
      isClickable: false
    },
    { 
      key: 'fanfiction',
      title: 'JOW ORIGINALS: FAN-FICTION MODE',
      subtitle: language === 'es' ? 'Donde las historias cobran vida' : 'Where stories come to life',
      isNew: true,
      isClickable: false
    },
    { 
      key: 'proximamente',
      title: language === 'es' ? 'Próximamente' : 'Coming Soon',
      subtitle: language === 'es' ? 'Nuevas historias por revelar' : 'New stories to be revealed',
      isClickable: false
    },
    { 
      key: 'universo',
      title: language === 'es' ? 'Universo Watthom' : 'Watthom Universe',
      subtitle: language === 'es' ? 'Un cosmos en expansión' : 'An expanding cosmos',
      isClickable: true,
      onClick: onUniverseClick
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url('${bannerImages[activeImage as keyof typeof bannerImages]}')`,
            transform: `translateY(${parallaxOffset}px)`
          }}
        />
      </AnimatePresence>
      
      {/* Elegant gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" 
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          {/* Interactive Menu Items */}
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                onMouseEnter={() => setActiveImage(item.key)}
                onMouseLeave={() => setActiveImage('default')}
                onClick={item.isClickable ? item.onClick : undefined}
                className={`group ${item.isClickable ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <motion.h2 
                    className="text-4xl lg:text-6xl text-white leading-tight transition-all duration-500"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    whileHover={item.isClickable ? { 
                      x: 20,
                      color: '#ffffff',
                      textShadow: '0 0 30px rgba(255,255,255,0.6)'
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h2>
                  {item.isNew && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                      className="bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.75rem' }}
                    >
                      {language === 'es' ? 'Nuevo' : 'New'}
                    </motion.span>
                  )}
                </div>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 text-lg ml-5 overflow-hidden group-hover:opacity-100"
                  style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
                >
                  {item.subtitle}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Elegant scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}