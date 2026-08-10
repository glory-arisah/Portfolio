import { RevealOnScroll } from '@/components/shared/RevealOnScroll.js'
import { frontendSkills, softSkills, workExperiences } from './data'

const About = () => {
	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-autp px-4">
					<h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
						About me
					</h2>

					<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6">
							I'm a Frontend Engineer who's spent the past few years building
							interfaces in fast-moving, product-driven environments — from
							health-tech to property platforms — where requirements shift often
							and shipping something usable matters more than shipping something
							perfect. Vue.js is where I do my deepest work, but I've also built
							production features in React and TypeScript, and I care as much
							about how a codebase is structured as how it looks on screen —
							which is part of why I've been investing time in testing (Jest)
							and frontend architecture. Outside of day-to-day feature work, I'm
							expanding what I can own end-to-end: picking up Next.js, learning
							Playwright for proper E2E coverage, and starting to build backend
							and database fundamentals. My goal is to keep growing into an
							engineer who can take a project from idea to shipped product, not
							just style the screens in between.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="rounded-xl py-6 px-0 sm:px-6 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">Frontend skills</h3>
								<div className="flex flex-wrap gap-2">
									{frontendSkills.map((skill) => (
										<span
											key={skill}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
                  "
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							<div className="rounded-xl py-6 px-0 sm:px-6 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">Soft skills</h3>
								<div className="flex flex-wrap gap-2">
									{softSkills.map((skill) => (
										<span
											key={skill}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
                  "
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all space-y-6">
							<div>
								<h3 className="text-xl font-bold mb-4">Education</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-2">
									<li>
										<strong>
											B.Eng. in Electrical And Electronics Engineering
										</strong>
										- Federal university of Technology, Owerri (2015-2021)
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-4">Certifications</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-2">
									<li>
										<strong>JavaSript Algorithms and Data Structures</strong>-
										freeCodeCamp (Issued May 2022)
									</li>
								</ul>
							</div>
						</div>

						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4">Work Experience</h3>
							<div className="space-y-6 text-gray-300">
								{workExperiences.map((exp) => (
									<div key={exp.id}>
										<h4 className="font-semibold text-[17px] mb-1">
											{exp.title}
										</h4>
										<p>{exp.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	)
}

export default About
