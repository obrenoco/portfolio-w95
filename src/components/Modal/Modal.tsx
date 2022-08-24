import Draggable from "react-draggable";
import CloseIcon from "../../assets/icons/close-icon.png";
import MaximizeIcon from "../../assets/icons/maximize-icon.png";
import MinimizeIcon from "../../assets/icons/minimize-icon.png";
import MyComputerIcon from "../../assets/icons/my-computer.png";
import { ModalBody } from "./ModalBody";

export const Modal = () => {
  return (
    <Draggable>
      <div className="absolute w-full max-w-4xl z-10 py-0.5 bg-gray border-white border-2 text-black left-[35%] top-[15%]">
        <header
          className="flex justify-between px-2 py-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,28,90,1) 28%, rgba(190,204,232,1) 96%)",
          }}
        >
          <div className="flex items-center gap-1">
            <img src={MyComputerIcon} alt="" />
            <h2 className="text-gray-300 font-bold">My Portfolio</h2>
          </div>
          <ul className="list-none flex items-center gap-1">
            <li className="flex">
              <button>
                <img src={MinimizeIcon} alt="" />
              </button>
            </li>
            <li className="flex">
              <button>
                <img src={MaximizeIcon} alt="" />
              </button>
            </li>
            <li className="flex">
              <button>
                <img src={CloseIcon} alt="" />
              </button>
            </li>
          </ul>
        </header>
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
