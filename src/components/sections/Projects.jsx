import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
	return (
		<section
			id="projects"
			className="min-h-screen flex items-center justify-center
  py-20
  "
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
						Featured Projects
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition-all
          "
						>
							<h3 className="text-xl font-bold mb-2">
								Brooi Properties (In development)
							</h3>
							<p className="text-gray-400 mb-4">
								A web application designed to streamline property onboarding,
								standardize pricing, and boost property visibility—empowering
								users across Africa to easily discover and book rental
								properties
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{['vue.js', 'vue-router', 'vuex', 'google-maps'].map(
									(tech, key) => (
										<span
											key={key}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
              "
										>
											{tech}
										</span>
									)
								)}
							</div>

							<div className="flex justify-between items-center py-4">
								<button
									disabled
									className="text-gray-200 rounded border border-gray-500/50 p-3 hover:cursor-not-allowed"
								>
									View Project &rarr;
								</button>
							</div>
						</div>

						<div
							className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition-all
          "
						>
							<h3 className="text-xl font-bold mb-2">
								CornieHealth (In development)
							</h3>
							<p className="text-gray-400 mb-4">
								A web application that solves healthcare inefficiencies for
								providers, payers, individuals, and employers by enabling
								patients to find and interact with healthcare services and help
								providers and payers simplify operations, optimize costs, and
								deliver delightful experiences.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{[
									'vue.js',
									'vue-router',
									'vuex',
									'typescript',
									'composition api',
								].map((tech, key) => (
									<span
										key={key}
										className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
              "
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center py-4">
								<button
									disabled
									className="text-gray-200 rounded border border-gray-500/50 p-3 hover:cursor-not-allowed"
								>
									View Project &rarr;
								</button>
							</div>
						</div>

						<div
							className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition-all
          "
						>
							<h3 className="text-xl font-bold mb-2">Quiz App</h3>
							<p className="text-gray-400 mb-4">
								An application designed for users to partake in quizzes like
								math, sport, celebrities, animals, e.t.c.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{[
									'vue.js',
									'composition api',
									'typescript',
									'vue-router',
									'scss',
									'pinia',
								].map((tech, key) => (
									<span
										key={key}
										className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
              "
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex gap-4 items-center py-4">
								<a
									href="https://quiz-pp.netlify.app/"
									target="_blank"
									className="text-blue-400 hover:text-blue-300 transition-colors rounded border border-blue-500/50 p-3"
								>
									View Project &rarr;
								</a>

								<a
									href="https://github.com/glory-arisah/quiz-app"
									target="_blank"
									className="text-blue-400 hover:text-blue-300 transition-colors rounded border border-blue-500/50 p-3"
								>
									View Github &rarr;
								</a>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	)
}
