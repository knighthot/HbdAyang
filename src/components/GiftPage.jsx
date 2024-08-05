import React, { useState, useEffect } from 'react';
import Video1 from "../assets/videoplayback.mp4";
import Video2 from "../assets/videoplaybac.mp4"; // Misalnya ini adalah video kedua
import Gambar from "../assets/FOTO.jpeg";
const GiftPage = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    // Timer untuk mengganti video pertama dengan video kedua setelah 15 detik
    if (currentVideo === 1) {
      const timer1 = setTimeout(() => {
        setCurrentVideo(2);
      }, 15000); // Durasi 15 detik

      return () => clearTimeout(timer1); // Membersihkan timer jika komponen di-unmount
    }

    // Timer untuk mengganti video kedua dengan gambar setelah 15 detik
    if (currentVideo === 2) {
      const timer2 = setTimeout(() => {
        setShowVideo(false);
      }, 15200); // Durasi 15 detik

      return () => clearTimeout(timer2); // Membersihkan timer jika komponen di-unmount
    }
  }, [currentVideo]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
        {showVideo ? (
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              {currentVideo === 1 ? "🎥 Hadiah dari kak gem 🎥" : "🎥 Band meme kasi hadiah juga 🎥"}
            </h2>
            <video 
              src={currentVideo === 1 ? Video1 : Video2} 
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-md mb-4"
            />
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">🎁 Hadiah Ulang Tahunmu! 🎁</h2>
            <img 
              src={Gambar}
              alt="Hadiah Ulang Tahun" 
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-700 mb-4">Esok hadiahnya kamu pilih sendiri,intinya HBD SAYANGGG KUU MENYALAAAA 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftPage;
