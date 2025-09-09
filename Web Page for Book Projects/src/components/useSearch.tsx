import { useState, useEffect } from 'react';
import { searchData } from './SearchData';

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(searchData);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item => {
      const term = searchTerm.toLowerCase();
      
      // Search for exact matches only
      return (
        item.title.toLowerCase() === term ||
        item.tags.some(tag => tag.toLowerCase() === term)
      );
    });

    // Sort by relevance (title matches first, then description, then content)
    const sorted = filtered.sort((a, b) => {
      const term = searchTerm.toLowerCase();
      
      const aInTitle = a.title.toLowerCase().includes(term);
      const bInTitle = b.title.toLowerCase().includes(term);
      
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      
      const aInDescription = a.description.toLowerCase().includes(term);
      const bInDescription = b.description.toLowerCase().includes(term);
      
      if (aInDescription && !bInDescription) return -1;
      if (!aInDescription && bInDescription) return 1;
      
      return 0;
    });

    setSearchResults(sorted);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, searchResults };
}