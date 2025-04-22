import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create context
export const BookContext = createContext();

// Sample initial books for testing
const initialBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'owned' },
  { id: 2, title: '1984', author: 'George Orwell', status: 'reading' },
  { id: 3, title: 'Dune', author: 'Frank Herbert', status: 'wishlist' },
];

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    // Try to get books from localStorage
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Save books to localStorage whenever books state changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  
  // Add a new book
  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now() // Simple ID generation
    };
    setBooks([...books, newBook]);
  };
  
  // Edit a book
  const editBook = (updatedBook) => {
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
  };
  
  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };
  
  return (
    <BookContext.Provider value={{
      books,
      searchTerm,
      filter,
      setSearchTerm,
      setFilter,
      addBook,
      editBook,
      deleteBook
    }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired
};