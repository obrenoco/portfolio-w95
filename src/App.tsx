import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import IntroSound from "./assets/sound/intro-sound.mp3"
import Draggable from 'react-draggable'
import CloseIcon from "./assets/icons/close-icon.png"
import MaximizeIcon from "./assets/icons/maximize-icon.png"
import MinimizeIcon from "./assets/icons/minimize-icon.png"
import MyComputerIcon from "./assets/icons/my-computer.png"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App h-screen">
      <audio id="intro-sound" src={IntroSound} preload="auto" muted={true} style={{ display: "none" }} />
      <main onClick={() => setIsMenuOpen(false)} className='flex flex-col h-[94.5vh] justify-center items-center'>
        <Draggable>
          <div className='w-full max-w-4xl z-10 py-0.5 bg-gray border-white border-2 text-black'>
            <header className='bg-gray-dark flex justify-between px-2 py-1'>
              <div className='flex items-center gap-1'>
                <img src={MyComputerIcon} alt="" />
                <h2 className='text-gray-300 font-bold'>My Portfolio</h2>
              </div>
              <ul className='list-none flex items-center gap-1'>
                <li className='flex'>
                  <button>
                    <img src={MinimizeIcon} alt="" />
                  </button>
                </li>
                <li className='flex'>
                  <button>
                    <img src={MaximizeIcon} alt="" />
                  </button>
                </li>
                <li className='flex'>
                  <button>
                    <img src={CloseIcon} alt="" />
                  </button>
                </li>
              </ul>
            </header>

            <div>
              <ul className='flex gap-4'>
                <li>File</li>
                <li>File</li>
                <li>File</li>
                <li>File</li>
              </ul>
            </div>
            <section className='bg-white h-60 border-l-black border-t-black border-2 p-2'>
              This is my content
            </section>
            <footer className='bg-gray'>
              <div className='border-black border-1 bg-gray'>8 object(s)</div>
              <div></div>
            </footer>
          </div>
        </Draggable>
      </main>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
