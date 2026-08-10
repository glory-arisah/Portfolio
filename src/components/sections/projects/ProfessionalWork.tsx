import { RevealOnScroll } from '@/components/shared/RevealOnScroll'
import { professionalWork } from './data'

const ProfessionalWork = () => {
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
						Professional Work
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{professionalWork.map((project) => (
							<div
								key={project.id}
								className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition-all
          "
							>
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tech) => (
										<span
											key={tech}
											className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
										hover:shadow-[0_2px_8px_rgba(59,130,246,0.2))] transition
										"
										>
											{tech}
										</span>
									))}
								</div>

								{project.liveLink && (
									<div className="flex justify-between items-center py-4">
										<a
											href={project.liveLink}
											className="text-gray-200 rounded border border-gray-500/50 p-3"
										>
											View Project &rarr;
										</a>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</RevealOnScroll>
		</section>
	)
}

export default ProfessionalWork
