import WindowsIcon from "../../assets/icons/windows-icon.png";
import MyComputerIcon from "../../assets/icons/my-computer.png";
import { Button } from "./button";
import { Clock } from "./clock";

type FooterType = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Footer = ({
  isMenuOpen,
  setIsMenuOpen,
  showModal,
  setShowModal,
}: FooterType) => {
  return (
    <footer className="fixed bottom-0 bg-gray-light border-t-white border-2 w-full text-black p-1 h-[54px]">
      <div
        className={`fixed bottom-12 left-0 bg-gray border-b-black border-r-black border-2 w-[400px] h-[600px] z-50 ${
          isMenuOpen ? "" : "hidden"
        }`}
      ></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1">
          <Button Icon={WindowsIcon} alt="Windows button" text="Start" />
          <Button
            Icon={MyComputerIcon}
            alt="Folder window"
            text="Folder"
            isFocused={showModal}
            className={"w-[130px]"}
            onClick={() => setShowModal(!showModal)}
          />
        </div>
        <Clock />
      </div>
    </footer>
  );
};
