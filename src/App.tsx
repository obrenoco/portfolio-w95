import { useState } from "react";
import "./App.css";
import { Desktop } from "./components/Desktop";
import SplashMobile from "./assets/images/splash-mobile.png";
import { Footer } from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDesktop, setShowDesktop] = useState(false);

  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setShowDesktop(true);
    }, 4000);
  });

  return (
    <div className="App h-screen overflow-hidden">
      <img
        src={SplashMobile}
        alt="Windows splash screen"
        className={`fixed z-30 ${
          loading ? "" : "opacity-0 hidden"
        } transition-opacity duration-500`}
      />
      {showDesktop && (
        <Desktop showModal={showModal} setShowMenu={setShowMenu} />
      )}
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
