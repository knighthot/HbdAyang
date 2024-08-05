import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GiftCard = ({ startMusic, stopMusic }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [buttonRunning, setButtonRunning] = useState(false);
  const [giftSelected, setGiftSelected] = useState(false);
  const navigate = useNavigate();

  const handleClaimClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = () => {
    setButtonRunning(true);

    startMusic(); // Memulai musik dari App

    // Tombol lari-lari selama 5 detik sebelum menunjukkan hadiah
    setTimeout(() => {
      setButtonRunning(false);
      setShowOptions(false);
      setGiftSelected(true); // Tampilkan hadiah setelah tombol berhenti lari-lari

      stopMusic(); // Hentikan musik sebelum navigasi
      navigate('/gift'); // Navigasi ke halaman hadiah
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-red-200 to-yellow-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
        {giftSelected ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">🎁 Hadiah Ulang Tahunmu! 🎁</h2>
            <p className="text-gray-700 mb-4">Ini adalah hadiah spesial untukmu. Nikmati harimu dan semoga ini menjadi awal dari banyak momen indah lainnya! 🎉</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-2">💖 Selamat Ulang Tahun, Sayang! 💖</h2>
            <p className="text-gray-700 mb-4">Aku berharap semua impianmu menjadi kenyataan. Terima kasih telah menjadi bagian dari hidupku. Aku mencintaimu! 💕</p>
            <div className="mt-4">
              {!showOptions && (
                <button 
                  onClick={handleClaimClick} 
                  className="bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition-colors"
                >
                  Klaim Hadiahmu
                </button>
              )}
              {showOptions && (
                <div className="space-y-4">
                  <button 
                    onClick={handleOptionClick} 
                    className={`bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors ${buttonRunning ? 'absolute left-0 right-0 mt-2' : ''}`}
                    style={buttonRunning ? { position: 'absolute', top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` } : {}}
                  >
                    Pilih Hadiah A
                  </button>
                  <button 
                    onClick={handleOptionClick} 
                    className={`bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors ${buttonRunning ? 'absolute left-0 right-0 mt-2' : ''}`}
                    style={buttonRunning ? { position: 'absolute', top: `${Math.random() * 90}%`, left: `${Math.random* 90}%` } : {}}
                  >
                    Pilih Hadiah B
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {!giftSelected && (
          <div className="mt-6 flex justify-center">
            <img src="https://media.tenor.com/U0P4h3x9Z2IAAAAj/rocky7.gif" alt="Romantic Gift" className="rounded-full shadow-md"/>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftCard;
