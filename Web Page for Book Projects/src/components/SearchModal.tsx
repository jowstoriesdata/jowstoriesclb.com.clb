import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useApp } from './context/AppContext';
import { translations } from './translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults = [
  {
    id: 1,
    title: 'Cronología Hillgrave: Capítulo 1',
    type: 'Historia',
    description: 'El inicio de una aventura extraordinaria'
  },
  {
    id: 2,
    title: 'J.O. Watthom',
    type: 'Personaje',
    description: 'El protagonista principal de nuestras historias'
  },
  {
    id: 3,
    title: 'El Universo Hillgrave',
    type: 'Mundo',
    description: 'Un cosmos narrativo lleno de misterios'
  }
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { language } = useApp();
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(mockSearchResults);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setResults(mockSearchResults);
    } else {
      const filtered = mockSearchResults.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filtered);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-background border border-border rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              <p className="text-sm text-muted-foreground px-2 py-1">
                {t.searchResults} ({results.length})
              </p>
              {results.map((result) => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-accent rounded cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground">{result.title}</h3>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">{t.noResults}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}