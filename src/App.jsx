import React, { useState, useEffect } from 'react';
import GiftCard from './components/Gift'; // Misalnya, GiftCard adalah komponen utama
import hbd from './assets/hbd.mp3'
const App = () => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio(hbd);
    newAudio.loop = true;
    setAudio(newAudio);
  }, []);

  const startMusic = () => {
    if (audio) {
      audio.play();
    }
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
    }
  };

  return (
    <GiftCard startMusic={startMusic} stopMusic={stopMusic} /> // Menampilkan GiftCard di halaman utama
  );
};

export default App;
