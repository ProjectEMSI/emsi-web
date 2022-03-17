import adapter from '@sveltejs/adapter-auto';
import md from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [
		md.mdsvex({
			extensions: ['.svx'],
			smartypants: {
				dashes: 'oldschool'
			}
		})
	]
};

export default config;
