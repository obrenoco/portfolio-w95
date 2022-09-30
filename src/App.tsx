import { useState } from "react";
import "./App.css";
import { Desktop } from "./components/Desktop";

import { Footer } from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App h-screen overflow-hidden">
      <Desktop showModal={showModal} setShowMenu={setShowMenu} />
      <Footer
        isMenuOpen={showMenu}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsMenuOpen={setShowMenu}
      />
    </div>
  );
}

export default App;
