import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookFilter = () => {
  const { filter, setFilter } = useContext(BookContext);
  
  const filters = [
    { value: 'all', label: 'Semua Buku' },
    { value: 'owned', label: 'Dimiliki' },
    { value: 'reading', label: 'Sedang Dibaca' },
    { value: 'wishlist', label: 'Ingin Dibeli' }
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {filters.map(option => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
              filter === option.value
                ? 'bg-pink-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookFilter;