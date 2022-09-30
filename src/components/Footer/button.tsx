type ButtonType = {
  Icon: string;
  text: string;
  className: string;
  alt: string;
  onClick?: () => void;
};

export const Button = ({
  Icon,
  text,
  onClick,
  className = "",
  alt = "",
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 h-fit border-2 border-r-black border-b-black px-2 py-1 ${className}`}
    >
      <img src={Icon} alt={alt} />
      <span className="text-xl">{text}</span>
    </button>
  );
};
