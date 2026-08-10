interface WorkExperience {
	id: string
	title: string
	description: string
}

export const workExperiences: WorkExperience[] = [
	{
		id: crypto.randomUUID(),
		title: 'Frontend developer at Scelloo (2024 - Current)',
		description:
			"Owned the CRM module on Clancommerce, a B2B SaaS platform unifying sales, purchasing, waybill management, payments, and approvals into a single subscription-based app. Built a metrics dashboard with data visualizations (charts) and a customer register scoped to each organization's logged-in users, using Vue.js. Also contributed backend functionality with Node.js/Express, including a service for sending test emails — supporting end-to-end ownership of the module.",
	},
	{
		id: crypto.randomUUID(),
		title: 'Frontend developer at Brooi Properties (2023 - Current)',
		description:
			"Led development of the interaction calendar — the application's most complex feature — engineering it for flexibility so it could later be reused in another segment of the platform. Owned end-to-end Google Maps API integration, powering location-based interactions across 11 pages. Implemented real-time messaging using WebSockets and GraphQL subscriptions, alongside ongoing feature development and codebase maintenance with Vue.js, Vuex, and Vue Router.",
	},
]

export const frontendSkills = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'TailwindCSS',
	'Git/Github',
	'Vue',
	'React',
	'ApexCharts',
]

export const softSkills = [
	'Attention to detail',
	'Problem solving',
	'Collaboration',
	'Customer Service Orientation',
	'Continuous learning',
]
