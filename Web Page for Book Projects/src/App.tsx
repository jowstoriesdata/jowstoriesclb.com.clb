import React, { useState } from 'react';
import { AppProvider } from './components/context/AppContext';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { A24Menu } from './components/A24Menu';
import { MenuPage, UniversePage } from './components/MenuPages';
import { useSearch } from './components/useSearch';

function AppContent() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const { searchTerm, setSearchTerm, searchResults } = useSearch();

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchTerm(''); // Clear search when closing
    }
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageSelect = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage(null);
  };

  const handleUniverseClick = () => {
    setCurrentPage('universe');
  };

  // Render current page
  if (currentPage) {
    if (currentPage === 'universe') {
      return (
        <div className="min-h-screen bg-white dark:bg-black" style={{ fontFamily: 'Crimson Text, serif' }}>
          <Header 
            isSearchExpanded={false}
            onSearchToggle={() => {}}
            searchTerm=""
            onSearchChange={() => {}}
            onMenuToggle={handleMenuToggle}
          />
          <A24Menu 
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onPageSelect={handlePageSelect}
          />
          <UniversePage onBack={handleBackToHome} />
        </div>
      );
    } else {
      const pageTitle = getPageTitle(currentPage);
      return (
        <div className="min-h-screen bg-white dark:bg-black" style={{ fontFamily: 'Crimson Text, serif' }}>
          <Header 
            isSearchExpanded={false}
            onSearchToggle={() => {}}
            searchTerm=""
            onSearchChange={() => {}}
            onMenuToggle={handleMenuToggle}
          />
          <A24Menu 
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onPageSelect={handlePageSelect}
          />
          <MenuPage title={pageTitle} onBack={handleBackToHome} />
        </div>
      );
    }
  }

  // Home page
  return (
    <div className="min-h-screen bg-white dark:bg-black" style={{ fontFamily: 'Crimson Text, serif' }}>
      <Header 
        isSearchExpanded={isSearchExpanded}
        onSearchToggle={handleSearchToggle}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onMenuToggle={handleMenuToggle}
      />
      
      <A24Menu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onPageSelect={handlePageSelect}
      />
      
      <main>
        {!searchTerm && !isSearchExpanded && <HeroBanner onUniverseClick={handleUniverseClick} />}
        <MainContent 
          searchTerm={searchTerm}
          searchResults={searchResults}
        />
      </main>
      
      {!searchTerm && <Footer />}
      
      <SettingsPanel />
    </div>
  );
}

function getPageTitle(pageId: string): string {
  const titles: Record<string, string> = {
    stories: 'Historias',
    characters: 'Personajes', 
    universes: 'Universos',
    timeline: 'Cronología',
    news: 'Noticias',
    about: 'Acerca'
  };
  return titles[pageId] || 'Página';
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}