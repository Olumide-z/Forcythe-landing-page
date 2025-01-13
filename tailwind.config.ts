import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forcythe: {
          darkBg: '#030416',
          blueLighter: '#5ca1e2',
          blueLight: '#62a6e8',
          blueDark: '#386696',
          blueDark2: '#0c2745',
          blueLighter2: '#b8cfee',
          blueLight2: '#b2d0f2',
          darkGrey: '#1b1d2d',
          greyText: '#a2a8b9',
          customGradient: 'linear-gradient(to right, #5ea6e9, #64a4e2)'
        }
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
