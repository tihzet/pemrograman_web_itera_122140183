import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookFilter from '../components/BookFilter';
import SearchBar from '../components/SearchBar';
import useFilteredBooks from '../hooks/useFilteredBooks';

const Home = () => {
  const filteredBooks = useFilteredBooks();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Buku Pribadi</h1>
        <Link 
          to="/add" 
          className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Tambah Buku
        </Link>
      </div>
      
      <SearchBar />
      <BookFilter />
      
      {filteredBooks.length > 0 ? (
        <div className="mt-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Tidak ada buku yang ditemukan</h3>
          <p className="mt-1 text-gray-500">Coba ubah filter atau tambahkan buku baru.</p>
        </div>
      )}
    </div>
  );
};

export default Home;