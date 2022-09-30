import SoundIcon from "../../assets/icons/sound.png";
const currentTime = new Date().toLocaleTimeString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
export const Clock = () => {
  return (
    <div className="flex gap-2 bg-gray p-1.5 px-2 rounded-sm border-2 border-l-gray-dark border-t-gray-dark ">
      <img src={SoundIcon} alt="" />
      <span>{currentTime}</span>
    </div>
  );
};
