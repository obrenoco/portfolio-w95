import WindowsIcon from "../assets/windows-icon.png"
import SoundIcon from "../assets/sound.png";

const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: true })

type FooterType = {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Footer = ({ isMenuOpen, setIsMenuOpen }: FooterType) => {

    return (
        <footer className='fixed bottom-0 bg-[#C0C0C0] border-t-white border-2 w-full text-black p-1 '>
            <div className={`fixed bottom-12 left-0 bg-[#b8b7b7] border-b-black border-r-black border-2 w-[400px] h-[600px] z-10 ${isMenuOpen ? "" : "hidden"}`}>
            </div>
            <div className='flex items-center justify-between w-full'>
                <button className='flex items-center gap-2 h-fit border-2 border-r-black border-b-black px-2 py-1 font-bold' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={WindowsIcon} alt="Windows button" />
                    <span>Start</span>
                </button>
                <div className='flex gap-3 bg-[#b8b7b7] p-1 px-2 rounded-sm border-2 border-l-[#7f7f7f] border-t-[#7f7f7f] '>
                    <img src={SoundIcon} alt="" />
                    <span>{currentTime}</span>
                </div>
            </div>
        </footer>
    )
}