import { useState, useEffect, useContext } from 'react';
import { BookContext } from '../context/BookContext';

const useFilteredBooks = () => {
  const { books, searchTerm, filter } = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    let result = books;
    
    // Apply filter by status
    if (filter !== 'all') {
      result = result.filter(book => book.status === filter);
    }
    
    // Apply search term filter
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchLower) || 
        book.author.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredBooks(result);
  }, [books, searchTerm, filter]);

  return filteredBooks;
};

export default useFilteredBooks;