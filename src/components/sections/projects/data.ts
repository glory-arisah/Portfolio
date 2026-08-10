interface Project {
	id: string
	title: string
	description: string
	tags: string[]
	liveLink: string | null
	githubLink?: string
}

export const professionalWork: Project[] = [
	{
		id: crypto.randomUUID(),
		title: 'Clancommerce (In development)',
		description:
			'A SaaS platform that unifies commerce operations into a single subscription-based application. It brings sales, purchasing, waybill management, CRM, payments, and approvals together in one place, giving businesses a complete view of their operations without juggling separate tools.',
		tags: [
			'saas',
			'vue.js',
			'vue-router',
			'vuex',
			'typescript',
			'composition api',
			'options api',
			'react-email',
			'node.js',
			'express.js',
			'tailwindcss',
			'apex-charts',
		],
		liveLink: null,
	},
	{
		id: crypto.randomUUID(),
		title: 'Brooi Properties',
		description:
			'A web application designed to streamline property onboarding, standardize pricing, and boost property visibility—empowering users across Africa to easily discover and book rental properties',
		tags: [
			'property-tech',
			'vue.js',
			'nuxt',
			'vue-router',
			'vuex',
			'pinia',
			'google-maps',
			'micro-frontends',
			'module-federation',
			'graphql',
			'scss',
		],
		liveLink: 'https://brooi.com/',
	},
	{
		id: crypto.randomUUID(),
		title: 'CornieHealth (In development)',
		description:
			'A web application that solves healthcare inefficiencies for providers, payers, individuals, and employers by enabling patients to find and interact with healthcare services and help providers and payers simplify operations, optimize costs, and deliver delightful experiences.',
		tags: [
			'health-tech',
			'vue.js',
			'vue-router',
			'vuex',
			'typescript',
			'composition api',
			'options api',
			'tailwindcss',
		],
		liveLink: null,
	},
]

export const personalProjects: Project[] = [
	{
		id: crypto.randomUUID(),
		title: 'Food Court',
		description:
			'FoodCourt is a feature-rich, user-friendly web application designed to bring culinary inspiration straight to your screen. Whether you are looking for quick weeknight dinners, baking ideas, or international cuisines, FoodCourt organizes a vast collection of delicious recipes into easily browsable categories, making meal planning effortless.',
		tags: [
			'react.js',
			'react-router',
			'axios',
			'react-toastify',
			'tailwindcss',
			'lucide-react',
		],
		liveLink: 'https://food-basketz.netlify.app/meals',
		githubLink: 'https://github.com/glory-arisah/Food-Court',
	},
]
