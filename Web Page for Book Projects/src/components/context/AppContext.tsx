import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';
export type ColorTheme = 'blue' | 'green' | 'purple' | 'orange' | 'red';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (color: ColorTheme) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const colorThemes = {
  blue: {
    primary: '#3b82f6',
    secondary: '#1e40af',
    accent: '#60a5fa'
  },
  green: {
    primary: '#10b981',
    secondary: '#047857',
    accent: '#34d399'
  },
  purple: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a78bfa'
  },
  orange: {
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c'
  },
  red: {
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#f87171'
  }
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedLang = localStorage.getItem('language') as Language;
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedColor = localStorage.getItem('colorTheme') as ColorTheme;

    if (savedLang) setLanguage(savedLang);
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setColorTheme(savedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    const colors = colorThemes[colorTheme];
    document.documentElement.style.setProperty('--theme-primary', colors.primary);
    document.documentElement.style.setProperty('--theme-secondary', colors.secondary);
    document.documentElement.style.setProperty('--theme-accent', colors.accent);
  }, [colorTheme]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        colorTheme,
        setColorTheme,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}