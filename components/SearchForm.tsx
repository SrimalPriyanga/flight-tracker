'use client';

import { useState } from 'react';
import { Search, Loader2, Plane } from 'lucide-react';
import { searchFlights } from '@/app/actions';
import { Flight } from '@/lib/mockData';
import { FlightCard } from './FlightCard';

export function SearchForm() {
  const [query, setQuery] = useState('');
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    try {
      const results = await searchFlights(query);
      setFlights(results);
    } catch (error) {
      console.error('Failed to fetch flights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="relative mb-12 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative flex items-center bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 focus-within:ring-blue-500/50 transition-all duration-300">
          <div className="pl-4 text-zinc-400">
            <Search className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter flight number (e.g., AA123)"
            className="w-full bg-transparent border-none text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-0 px-4 py-4 text-xl font-medium outline-none tracking-wide"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-zinc-900 dark:bg-white text-white dark:text-black p-4 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Plane className="w-6 h-6" />
            )}
          </button>
        </div>
      </form>

      <div className="space-y-8 flex flex-col items-center">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div key={flight.id} className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <FlightCard flight={flight} />
            </div>
          ))
        ) : hasSearched && !loading ? (
          <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-100 dark:bg-white/5 mb-6 border border-zinc-200 dark:border-white/5">
              <Plane className="w-10 h-10 text-zinc-400 dark:text-zinc-600 rotate-45" />
            </div>
            <h3 className="text-zinc-900 dark:text-zinc-300 font-medium mb-2 text-lg">No flights found</h3>
            <p className="text-zinc-500">We couldn't find any flights matching "{query}"</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
