/** @type {import('tailwindcss').Config} */
import tailwindcssRadixColors from 'tailwindcss-radix-colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFF',
			primary: {
				1: '#FCFEFD',
				2: '#F5FAF9',
				3: '#E9F5F3',
				4: '#DCEEEB',
				5: '#CCE5E1',
				6: '#B9D8D3',
				7: '#9FC7C1',
				8: '#81B0A9',
				9: '#6A9791',
				10: '#5E8B85',
				11: '#49756F',
				12: '#273836'
			},
			accent: {
				1: '#FBFDFC',
				2: '#F6FAF8',
				3: '#EBF3F0',
				4: '#E1EBE8',
				5: '#D7E4DF',
				6: '#CCDBD6',
				7: '#BDCFC9',
				8: '#A5BCB4',
				9: '#819D94',
				10: '#769188',
				11: '#516C64',
				12: '#1A2823'
			},
			black: {
				DEFAULT: '#000',
				1: '#FCFCFC',
				2: '#F9F9F9',
				3: '#F0F0F0',
				4: '#E8E8E8',
				5: '#E1E1E1',
				6: '#D9D9D9',
				7: '#CECECE',
				8: '#BBBBBB',
				9: '#8C8C8C',
				10: '#818181',
				11: '#636363',
				12: '#1F1F1F'
			},
			red:'#E5484D',
			redlight:'#FEEBEC'
		},
		extend: {
			spacing: {
				'xs': '4px',
				'sm': '8px',
				'md': '16px',
				'lg': '24px',
				'xl': '36px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '128px'
			}
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '940px',
			// => @media (min-width: 768px) { ... }

			lg: '1064px',
			// => @media (min-width: 1024px) { ... }

			xl: '1320px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [tailwindcssRadixColors]
};
