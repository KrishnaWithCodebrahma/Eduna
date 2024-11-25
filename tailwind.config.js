/** @type {import('tailwindcss').Config} */


module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				red: '#df4343',
				gray: '#5f5d5d',
				violet: '#543ee8',
				black: '#011c1a',
				yellow: '#ffcd20',
			},
			fontFamily: {
				X : ["Rubik Doodle Triangles", 'system-ui'],
				poppins: ["Poppins", 'sans-serif'], 
				aeonik: ['Aeonik Pro TRIAL', 'sans-serif'], 
			  },
		}
	},
	plugins: [require("tailwindcss-animate")],
}
