import { Header } from "./header";

import { ModalBody } from "./body";

export const Modal = ({ showModal }: { showModal: boolean }) => {
  return (
    <div
      className={`absolute flex flex-col w-[90vw] h-[500px] z-10 py-0.5 bg-gray border-white border-2 text-black left-[15%] top-[10vh] overflow-hidden ${
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
  );
};
