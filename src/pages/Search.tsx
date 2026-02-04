import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const latestSearches = [
    '648364844',
    '2457878',
    '923659920',
    '985537890',
    '243699875',
  ];

  return (
    <MobileLayout>
      <div className="px-5 py-8 animate-fade-in">
        {/* Search Input */}
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter Prescription Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-6 rounded-full border-border bg-card text-base"
          />
        </div>

        {/* Latest Searches */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-4">Latest Searches</h2>
          <div className="flex flex-wrap gap-3">
            {latestSearches.map((search, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(search)}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:bg-secondary transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Search;
