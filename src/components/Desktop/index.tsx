import React, { useState } from "react";
import { Modal } from "../Modal";
import Computer from "../../assets/icons/computer.png";
import Folder from "../../assets/icons/folder.png";
import Trash from "../../assets/icons/trash.png";

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
];

type DesktopType = {
  showModal: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Desktop = ({ showModal, setShowMenu }: DesktopType) => {
  return (
    <main
      onClick={() => setShowMenu(false)}
      className="grid grid-rows-7 grid-cols-12 grid-flow-col p-6 relative"
    >
      <Modal showModal={showModal} />
      {itemsMenu.map((x) => (
        <button
          key={x.description}
          className={`flex flex-col items-center w-fit gap-2 self-center focus:bg-blue-400 p-2 `}
        >
          <img src={x.icon as any} alt={x.description} />
          <p>{x.description}</p>
        </button>
      ))}
    </main>
  );
};
