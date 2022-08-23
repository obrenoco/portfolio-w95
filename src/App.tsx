import React, { useState } from "react";
import "./App.css";
import Computer from "./assets/icons/computer.png";
import Folder from "./assets/icons/folder.png";
import Trash from "./assets/icons/trash.png";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

type ItemsMenuType = {
  icon: React.ReactNode;
  description: string;
}[];
const itemsMenu: ItemsMenuType = [
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Folder,
    description: "Folder",
  },
  {
    icon: Computer,
    description: "Computer",
  },
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Trash,
    description: "Trash",
  },
  {
    icon: Trash,
    description: "Trash",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App h-screen">
      <main
        onClick={() => setIsMenuOpen(false)}
        className="grid grid-rows-6 grid-cols-12 grid-flow-col gap-5 p-6 h-[94.5vh] relative"
      >
        {itemsMenu.map((x) => (
          <button
            key={x.description}
            className={`flex flex-col items-center w-fit gap-2 self-center focus:bg-blue-400 p-3 `}
          >
            <img src={x.icon as any} alt={x.description} />
            <p>{x.description}</p>
          </button>
        ))}
        <Modal />
      </main>
      <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
