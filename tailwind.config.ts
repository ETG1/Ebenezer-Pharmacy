import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			ceruleanBlue: '#268fcd',
  			limeGreen: '#79b84e',
  			grayText: '#888888',
  			blackaccent: '#000000',
  			accentWhite: '#FFFFFF',
  			brightRed: '#EF3636',
  			neonGreen: '#41CE09',
  			bgLight: '#F5F5F5'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
