type ButtonType = {
  Icon: string;
  text: string;
  alt: string;
  className?: string;
  isFocused?: boolean;
  onClick?: () => void;
};

export const Button = ({
  Icon,
  text,
  onClick,
  isFocused = false,
  className = "",
  alt = "",
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 h-fit px-2 py-1   border-3 font-bold cursor-pointer ${
        isFocused
          ? "bg-gray-200 border-t-black border-l-black border-b-gray-300 border-r-gray-300"
          : "border-r-black border-b-black"
      } ${className}`}
    >
      <img src={Icon} alt={alt} />
      <span className="text-lg">{text}</span>
    </button>
  );
};
