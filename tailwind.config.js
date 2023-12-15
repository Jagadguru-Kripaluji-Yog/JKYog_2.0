/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ptserif: ['var(--font-ptserif)'],
        'olga-ctt': ['Olga-Ctt'],
        'satoshi-light': ['Satoshi-Light'], // 300
        'satoshi-regular': ['Satoshi-Regular'], // 400
        'satoshi-medium': ['Satoshi-Medium'], // 500
        'satoshi-bold': ['Satoshi-Bold'], // 700
        'satoshi-black': ['Satoshi-Black'], // 900
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'meet-section-bg': 'url(/images/meet-section-bg.png)',
        'book-section-bg': 'url(/images/book-section-bg.png)',
        'bg-flowers-mobile': 'url(/images/bg-flowers-mobile.png)',
      },
      colors: {
        'primary': '#645743',
        'heading': '#291900',
        'border-primary': '#F0EBE1',
        'border-secondary': '#DAD3C8',
        'section-bg': '#fbe5c4',
        'bg-secondary': '#FFF3DD',
        'bg-light': '#FFFBF2',
        'bg-green': '#EDF3E5',
        'button-primary': '#EF6F1F',
        'badge-dark': '#FDF3E4',
        'light-text': '#3A2D27B2',
        'events-section-bg': '#FBE5C44D',
      },
    },
  },
  plugins: [],
};
