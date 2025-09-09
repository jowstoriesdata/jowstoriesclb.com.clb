import React, { useEffect, useState } from 'react';
import { useApp } from './context/AppContext';
import { translations } from './translations';
import imgBanner from "figma:asset/6e041c23bbe6d39a19f5b5fe17d32d55e02bb0f5.png";

export function ParallaxBanner() {
  const { language } = useApp();
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="relative h-[764px] w-full overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-[120%]"
        style={{ 
          backgroundImage: `url('${imgBanner}')`,
          transform: `translateY(${parallaxOffset}px)`,
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            <span className="font-medium tracking-wide">{t.seeMore}</span>
          </button>
        </div>
      </div>
    </div>
  );
}