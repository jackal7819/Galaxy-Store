/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Fira Sans', 'sans-serif'],
			},
		},
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: ['retro', 'coffee'],
	},
};
