import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#FFECE9',
				primaryTxt:'#D43C06',
				list:'#E82561',
				foot:'#FF66C4',
				catalog:'#F4A6C8'
			}, 
			fontFamily:{
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
