import Draggable from 'react-draggable'
import CloseIcon from "../assets/icons/close-icon.png"
import MaximizeIcon from "../assets/icons/maximize-icon.png"
import MinimizeIcon from "../assets/icons/minimize-icon.png"
import MyComputerIcon from "../assets/icons/my-computer.png"

const startYear = 2019
const currentYear = new Date().getFullYear()

export const Modal = () => {
	return (
		<Draggable>
			<div className='w-full max-w-4xl z-10 py-0.5 bg-gray border-white border-2 text-black'>
				<header className='bg-gray-dark flex justify-between px-2 py-1'>
					<div className='flex items-center gap-1'>
						<img src={MyComputerIcon} alt="" />
						<h2 className='text-gray-300 font-bold'>My Portfolio</h2>
					</div>
					<ul className='list-none flex items-center gap-1'>
						<li className='flex'>
							<button>
								<img src={MinimizeIcon} alt="" />
							</button>
						</li>
						<li className='flex'>
							<button>
								<img src={MaximizeIcon} alt="" />
							</button>
						</li>
						<li className='flex'>
							<button>
								<img src={CloseIcon} alt="" />
							</button>
						</li>
					</ul>
				</header>

				<div>
					<ul className='flex'>
						<li className='px-4 hover:bg-blue-500 hover:text-white transition-colors'>File</li>
						<li className='px-4 hover:bg-blue-500 hover:text-white transition-colors'>File</li>
						<li className='px-4 hover:bg-blue-500 hover:text-white transition-colors'>File</li>
						<li className='px-4 hover:bg-blue-500 hover:text-white transition-colors'>File</li>
					</ul>
				</div>
				<section className='flex gap-10 bg-white overflow-auto max-h-[60vh] border-l-black border-t-black border-2 p-2'>
					<div>
						<div className='w-40 h-40 bg-red-800'></div>
					</div>
					<div>
						<h1 className='text-3xl font-bold'>Breno Romeiro</h1>
						<p>Hello, I'm Breno Romeiro</p>
						<p>I'm a multilingual Front-end developer with {currentYear - startYear} years of proven experience in helping companies create and maintain amazing software. Passionate about learning and developing with a desire to apply skills on real world challenges.</p>
						<p className='py-2 font-bold'>My current stack:</p>
						<ul className='list-inside'>
							<li>🧡 HTML</li>
							<li>💙 CSS</li>
							<li>💛 Javascript | TypeScript</li>
							<li>⚛️ React</li>
							<li>🎨 Greensock/GSAP (animation)</li>
							<li>🧪 Cypress.io</li>
							<li>🌎 Browser API's</li>
						</ul>
						<p className='py-2 font-bold'>Skills:</p>
						<ul className='list-inside'>
							<li>📱Mobile First</li>
							<li>🙋User Experience</li>
							<li>🏃‍♀️Agile</li>
						</ul>
						bsromeiro@gmail.com
						𝘽𝙧𝙚𝙣𝙤
					</div>

				</section>
				<footer className='bg-gray grid grid-cols-2'>
					<div className=' border-black border-1 bg-gray px-2'>8 object(s)</div>
					<div className='border-black border-1 border-l-0 bg-gray px-2'></div>
				</footer>
			</div>
		</Draggable>
	)
}
