import './App.css';
import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import Trash from "./assets/icons/trash.png"

type ItemsMenuType = { icon: React.ReactNode, description: string }[]
const itemsMenu: ItemsMenuType = [{ icon: Trash, description: "Trash" }]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="App h-screen">
      <main onClick={() => setIsMenuOpen(false)} className='flex flex-col h-[94.5vh] relative'>
        <div>
          <img src={Trash} alt="" />
        </div>
        {/* <Modal /> */}
      </main>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
