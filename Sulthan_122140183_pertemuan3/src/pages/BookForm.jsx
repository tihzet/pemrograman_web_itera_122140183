import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addBook, editBook } = useContext(BookContext);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    status: 'owned'
  });
  
  const isEditMode = Boolean(id);
  
  // If editing, load book data
  useEffect(() => {
    if (isEditMode) {
      const bookToEdit = books.find(book => book.id === parseInt(id));
      if (bookToEdit) {
        setFormData(bookToEdit);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, books, isEditMode, navigate]);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Judul buku wajib diisi';
    if (!formData.author.trim()) newErrors.author = 'Nama penulis wajib diisi';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (isEditMode) {
      editBook(formData);
    } else {
      addBook(formData);
    }
    
    navigate('/');
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isEditMode ? 'Edit Buku' : 'Tambah Buku Baru'}
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Judul Buku
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Masukkan judul buku"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Penulis
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${errors.author ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Masukkan nama penulis"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
            Status Buku
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="owned">Dimiliki</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="wishlist">Ingin Dibeli</option>
          </select>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 text-gray-700 bg-pink-200 rounded-lg hover:bg-pink-300 transition"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            {isEditMode ? 'Simpan Perubahan' : 'Tambah Buku'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;