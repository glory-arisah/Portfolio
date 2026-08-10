import './index.css'
import Navbar from '@/components/layout/Navbar.js'
import Footer from '@/components/layout/Footer'
import Home from '@/components/sections/Home'
import About from '@/components/sections/about/About'
import ProfessionalWork from '@/components/sections/projects/ProfessionalWork'
import IndependentProjects from '@/components/sections/projects/IndependentProjects'
import Contact from '@/components/sections/Contact'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
	const [menuOpen, setMenuOpen] = useState(false)

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

				<Home />

				<About />

				<ProfessionalWork />

				<IndependentProjects />

				<Contact />

				<Footer />
			</div>

			<ToastContainer />
		</>
	)
}

export default App
