import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import IntroSound from "./assets/sound/intro-sound.mp3"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App h-screen">
      <audio id="intro-sound" src={IntroSound} preload="auto" muted={true} style={{ display: "none" }} />
      <main onClick={() => setIsMenuOpen(false)} className='flex flex-col h-[94.5vh] justify-end'>
      </main>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
