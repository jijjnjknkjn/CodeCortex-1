import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { searchStocks, findStockByNameOrSymbol, stockDatabase } from '../data/stockDatabase';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const foundSymbol = findStockByNameOrSymbol(query);
      if (foundSymbol) {
        onSearch(foundSymbol);
      } else {
        onSearch(query.toUpperCase());
      }
      setQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearch(suggestion);
    setQuery('');
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      const results = searchStocks(value);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(query.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search by company name or symbol (e.g., Apple, AAPL, Tesla)"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {suggestions.map((symbol) => {
            const stock = stockDatabase[symbol];
            return (
            <button
              key={symbol}
              onClick={() => handleSuggestionClick(symbol)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-gray-900">{symbol}</div>
                  <div className="text-sm text-gray-600">{stock?.name}</div>
                </div>
                <div className="text-xs text-gray-500">
                  {stock?.sector}
                </div>
              </div>
            </button>
            );
          })}
        </div>
      )}
    </div>
  );
}