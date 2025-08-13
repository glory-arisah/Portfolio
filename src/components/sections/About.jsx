import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
	const frontendSkills = [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'TailwindCSS',
		'Git/Github',
		'Vue',
		'React',
	]

	const softSkills = [
		'Attention to detail',
		'Problem solving',
		'Collaboration',
		'Customer Service Orientation',
		'Continuous learning',
	]

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
							Passionate developer with expertise in building scalable web
							applications.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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

							<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
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
							<div className="space-y-4 text-gray-300">
								<div>
									<h4 className="font-semibold">
										Frontend developer at Scelloo (2024 - Current)
									</h4>
									<p>
										Collaborated with Product Managers and backend teams to
										build new features. Developed and maintained code for a
										healthcare application and an ERP application, ensuring
										reliability and adherence to project requirements. Managed
										version control with Git/GitHub.
									</p>
								</div>

								<div>
									<h4 className="font-semibold">
										Frontend developer at Brooi Properties (2023 - 2025)
									</h4>
									<p>
										Built new features and maintained a clean Vue.js codebase
										with Vuex and Vue Router in collaboration with
										cross-functional teams.
									</p>
								</div>

								<div>
									<h4 className="font-semibold">
										Application Development and Support Trainee at ipNX (2022 -
										2023)
									</h4>
									<p>
										Assisted in maintaining application uptime and building
										internal tools with PHP/MySQL, while learning collaboration
										tools like Zoho.
									</p>
								</div>

								<div>
									<h4 className="font-semibold">
										Ruby on rails intern at Corna.io (2020)
									</h4>
									<p>
										Used TDD with RSpec to build backend features and explored
										React.js to understand frontend flow.
									</p>
								</div>

								<div>
									<h4 className="font-semibold">
										Information Technology Operations Intern at Chevron Nigeria
										Limited (2019)
									</h4>
									<p>
										Built low-code solutions and supported IT operations while
										gaining proficiency in PowerApps, Flow, SharePoint, and
										Forms.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	)
}
