import React from 'react';
import { X, Globe, Moon, Sun, Palette } from 'lucide-react';
import { useApp, Language, ColorTheme } from './context/AppContext';
import { translations } from './translations';

export function SettingsPanel() {
  const { 
    language, 
    setLanguage, 
    theme, 
    setTheme, 
    colorTheme, 
    setColorTheme, 
    isSettingsOpen, 
    setIsSettingsOpen 
  } = useApp();
  
  const t = translations[language];

  if (!isSettingsOpen) return null;

  const colorOptions: { value: ColorTheme; label: string; color: string }[] = [
    { value: 'blue', label: t.blue, color: '#3b82f6' },
    { value: 'green', label: t.green, color: '#10b981' },
    { value: 'purple', label: t.purple, color: '#8b5cf6' },
    { value: 'orange', label: t.orange, color: '#f97316' },
    { value: 'red', label: t.red, color: '#ef4444' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setIsSettingsOpen(false)}>
      <div 
        className="fixed right-0 top-0 h-full w-80 bg-background border-l border-border shadow-xl transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-foreground">{t.settingsTitle}</h2>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="p-2 hover:bg-accent rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Language Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-foreground">{t.language}</h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`w-full p-3 rounded-lg border text-left transition-colors ${
                    language === 'es' 
                      ? 'border-primary bg-primary/10 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  {t.spanish}
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full p-3 rounded-lg border text-left transition-colors ${
                    language === 'en' 
                      ? 'border-primary bg-primary/10 text-primary' 
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  {t.english}
                </button>
              </div>
            </div>

            {/* Dark Mode Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                {theme === 'dark' ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
                <h3 className="font-medium text-foreground">{t.darkMode}</h3>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-full p-3 rounded-lg border text-left transition-colors ${
                  theme === 'dark' 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-border hover:bg-accent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{theme === 'dark' ? 'Activado' : 'Desactivado'}</span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-primary' : 'bg-muted'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform mt-0.5 ${
                      theme === 'dark' ? 'ml-6' : 'ml-0.5'
                    }`} />
                  </div>
                </div>
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}