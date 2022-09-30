import CloseIcon from "../../assets/icons/close-icon.png";
import MaximizeIcon from "../../assets/icons/maximize-icon.png";
import MinimizeIcon from "../../assets/icons/minimize-icon.png";
import MyComputerIcon from "../../assets/icons/my-computer.png";
export const Header = () => (
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
);
