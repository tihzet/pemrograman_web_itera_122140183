import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookCard = ({ book }) => {
  const { deleteBook } = useContext(BookContext);
  const navigate = useNavigate();
  
  const statusColors = {
    owned: 'bg-emerald-100 text-emerald-800',
    reading: 'bg-pink-100 text-pink-800',
    wishlist: 'bg-amber-100 text-amber-800',
  };
  
  const statusText = {
    owned: 'Dimiliki',
    reading: 'Sedang Dibaca',
    wishlist: 'Ingin Dibeli',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
          <p className="text-gray-600 mt-1">{book.author}</p>
          <span className={`px-3 py-1 rounded-full text-sm font-medium mt-3 inline-block ${statusColors[book.status]}`}>
            {statusText[book.status]}
          </span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => navigate(`/edit/${book.id}`)} 
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-md transition"
          >
            Edit
          </button>
          <button 
            onClick={() => deleteBook(book.id)} 
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['owned', 'reading', 'wishlist']).isRequired
  }).isRequired
};

export default BookCard;