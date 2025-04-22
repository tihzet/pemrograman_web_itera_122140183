import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import BookForm from './pages/BookForm';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <div className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;