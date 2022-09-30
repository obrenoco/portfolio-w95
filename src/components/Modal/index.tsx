import Draggable from "react-draggable";
import { Header } from "./header";

import { ModalBody } from "./body";

export const Modal = ({ showModal }: { showModal: boolean }) => {
  return (
    <Draggable disabled>
      <div
        className={`absolute w-[90%] max-w-4xl h-[75%] z-10 py-0.5 bg-gray border-white border-2 text-black left-[5%] top-[10vh] ${
          showModal ? "" : "opacity-0"
        }`}
      >
        <Header />
        <div>
          <ul className="flex">
            <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
              <u>F</u>ile
            </li>
            <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
              <u>E</u>dit
            </li>
            <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
              For<u>m</u>at
            </li>
            <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
              <u>H</u>elp
            </li>
          </ul>
        </div>
        <ModalBody />
        {/* <footer className="bg-gray grid grid-cols-2">
          <div className=" border-black border-1 bg-gray px-2">8 object(s)</div>
          <div className="border-black border-1 border-l-0 bg-gray px-2"></div>
        </footer> */}
      </div>
    </Draggable>
  );
};
