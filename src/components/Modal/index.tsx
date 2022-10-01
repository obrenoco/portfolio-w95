import { Header } from "./header";
import { ModalBody } from "./body";
import { Menu } from "./menu";

export const Modal = ({ showModal }: { showModal: boolean }) => {
  return (
    <div
      className={`flex flex-col w-[100vw] h-[calc(100vh-54px)] z-10 py-0.5 bg-gray border-white border-2 text-black overflow-hidden ${
        showModal ? "" : "opacity-0"
      }`}
    >
      <Header />
      <Menu />
      <ModalBody />
    </div>
  );
};
