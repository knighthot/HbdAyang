import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';  // Mengimpor komponen utama App
import GiftPage from './components/GiftPage';  // Mengimpor komponen GiftPage
import './index.css';  // Mengimpor stylesheet utama

// Merender aplikasi React ke dalam elemen dengan id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  // Rute utama yang memuat komponen App
        <Route path="/gift" element={<GiftPage />} />  // Rute untuk halaman GiftPage
      </Routes>
    </Router>
  </React.StrictMode>
);
