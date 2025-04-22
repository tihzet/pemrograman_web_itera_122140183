import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">Halaman Tidak Ditemukan</p>
        <p className="text-gray-600 mt-2">Halaman yang Anda cari tidak tersedia.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;