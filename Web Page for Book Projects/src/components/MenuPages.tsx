import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { useApp } from './context/AppContext';
import { translations } from './translations';

interface MenuPageProps {
  title: string;
  onBack: () => void;
}

export function MenuPage({ title, onBack }: MenuPageProps) {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          <ArrowLeft className="w-5 h-5" />
          {language === 'es' ? 'Volver' : 'Back'}
        </motion.button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <Clock className="w-8 h-8 text-gray-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl lg:text-5xl text-black dark:text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
            >
              {language === 'es' 
                ? 'Ahora mismo esta pestaña no está funcionando, intenta entrar nuevamente más tarde.'
                : 'This tab is not working right now, please try again later.'}
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-500"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              {language === 'es' 
                ? 'Estamos trabajando para traerte contenido increíble pronto.'
                : 'We are working to bring you amazing content soon.'}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

interface UniversePageProps {
  onBack: () => void;
}

export function UniversePage({ onBack }: UniversePageProps) {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12"
          style={{ fontFamily: 'Crimson Text, serif' }}
        >
          <ArrowLeft className="w-5 h-5" />
          {language === 'es' ? 'Volver' : 'Back'}
        </motion.button>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl lg:text-6xl text-black dark:text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            {language === 'es' ? 'El Universo Watthom' : 'The Watthom Universe'}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-gray-500"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            <p className="text-sm">
              {language === 'es' ? 'Por' : 'By'} <span className="text-black dark:text-white">J.O. Watthom</span> • 
              {language === 'es' ? ' 15 de enero, 2025' : ' January 15, 2025'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            {language === 'es' ? (
              <>
                <p className="text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  El Universo Watthom es una narrativa cinematográfica que explora las complejidades 
                  del amor, la identidad y el crecimiento personal a través de múltiples historias 
                  interconectadas que trascienden el tiempo y el espacio.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  ¿Qué es el Universo Watthom?
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Concebido como una experiencia narrativa inmersiva, el Universo Watthom presenta 
                  historias que se desarrollan en diferentes épocas y realidades, pero que comparten 
                  temas universales sobre la condición humana. Cada relato es independiente, pero 
                  juntos forman un tapiz más amplio de experiencias emocionales y existenciales.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  La Visión del Creador
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  J.O. Watthom, el visionario detrás de este universo narrativo, busca crear 
                  contenido que no solo entretenga, sino que también inspire reflexión profunda 
                  sobre las relaciones humanas, la autoaceptación y el poder transformador del amor 
                  en todas sus formas.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Temas Centrales
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Las historias del Universo Watthom exploran temas como la diversidad sexual y 
                  de género, la superación de traumas, la búsqueda de identidad, y la importancia 
                  de la comunidad y la aceptación. Cada narrativa está diseñada para resonar con 
                  audiencias que buscan representación auténtica y narrativas significativas.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  El Futuro del Universo
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Con planes para expandirse a través de múltiples medios - desde literatura 
                  hasta contenido audiovisual - el Universo Watthom representa un compromiso 
                  duradero con la narrativa inclusiva y la exploración de la experiencia humana 
                  en toda su diversidad y complejidad.
                </p>
              </>
            ) : (
              <>
                <p className="text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  The Watthom Universe is a cinematic narrative that explores the complexities 
                  of love, identity, and personal growth through multiple interconnected stories 
                  that transcend time and space.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  What is the Watthom Universe?
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Conceived as an immersive narrative experience, the Watthom Universe presents 
                  stories that unfold across different eras and realities, but share universal 
                  themes about the human condition. Each story is independent, but together they 
                  form a broader tapestry of emotional and existential experiences.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Creator's Vision
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  J.O. Watthom, the visionary behind this narrative universe, seeks to create 
                  content that not only entertains but also inspires deep reflection on human 
                  relationships, self-acceptance, and the transformative power of love in all its forms.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Central Themes
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  The stories of the Watthom Universe explore themes such as sexual and gender 
                  diversity, overcoming trauma, the search for identity, and the importance of 
                  community and acceptance. Each narrative is designed to resonate with audiences 
                  seeking authentic representation and meaningful stories.
                </p>

                <h2 className="text-2xl font-medium mb-4 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Future of the Universe
                </h2>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  With plans to expand across multiple media - from literature to audiovisual 
                  content - the Watthom Universe represents a lasting commitment to inclusive 
                  storytelling and the exploration of human experience in all its diversity and complexity.
                </p>
              </>
            )}
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}