import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact.tsx'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { ToastContainer } from 'react-toastify'

function App() {
	const [menuOpen, setMenuOpen] = useState(false)

	const footerSocialMediaLinks = [
		{
			iconName: 'line-md:twitter-x',
			link: 'https://x.com/glo__ri',
			ariaLabel: 'Navigate to Twitter',
		},
		{
			iconName: 'line-md:instagram',
			link: 'https://www.instagram.com/gloryarisah/',
			ariaLabel: 'Navigate to Instagram',
		},
		{
			iconName: 'line-md:linkedin',
			link: 'https://www.linkedin.com/in/gloryarisah/',
			ariaLabel: 'Navigate to LinkedIn',
		},
	]

	return (
		<>
			<div
				className="min-h-screen transition-opacity duration-700
					 opacity-100
				 bg-black text-gray-100"
			>
				<Navbar
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<Home />
				<About />
				<Projects />
				<Contact />
				<footer className="py-6 px-6 md:px-8 border-t border-white/10">
					<div className="flex justify-between items-center">
						<ul className="list-none ml-2 flex gap-5">
							{footerSocialMediaLinks.map((footerContent, index) => (
								<li
									className="not-last-of-type:mr-1"
									key={index}
								>
									<a
										href={footerContent.link}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={footerContent.ariaLabel}
										className="border-none bg-transparent transition-transform cursor-pointer rounded-[50%] outline-none text-[#222222] touch-manipulation inline-block appearance-none relative
									transform active:scale-[calc(34/32)] hover:scale-[calc(34/32)] before:content-[] before:block before:absolute before:rounded-[50%] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-1/2 hover:before:bg-white/30 
									"
									>
										<Icon
											icon={footerContent.iconName}
											color="white"
										/>
									</a>
								</li>
							))}
						</ul>

						<div className="flex items-center gap-2 text-sm">
							<Icon icon="material-symbols:copyright" />
							{new Date().getFullYear()} Glory's Portfolio
						</div>
					</div>
				</footer>
			</div>
			<ToastContainer />
		</>
	)
}

export default App
