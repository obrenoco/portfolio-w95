import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App h-screen">
      <main onClick={() => setIsMenuOpen(false)} className='flex flex-col h-[94.5vh] justify-center items-center'>
        <Modal />
      </main>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
