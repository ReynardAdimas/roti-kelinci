/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#FFECE9',
				primaryTxt:'#D43C06',
			},
		},
	},
	plugins: [],
}
