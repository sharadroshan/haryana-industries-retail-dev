/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#2563eb',
      'secondary': '#16243d',
      'primary-light':"#dfe9ff",
      'white': '#fff',
      'black': '#000',
      'blue': '#2563eb',
      'red': '#FF0000',
      'muted': '#97a2b7',
      'orange': '#ff7849',
      'green': '#13ce66',
      'green100': "#c5fec5",
      'green500': "#00ce00",
      'gray-dark': '#273444',
      'gray': '#f3f4f6',
      'gray500': '#bebebe',
      'gray400': '#dedede',
      'gray300': '#fafafa',
      'gray-light': '#d3dce6',
      'bg-light':"#f1f1f1"
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Sans', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        2: '2.2rem',
        3: '3.3rem',
        4: '4.4rem',
        5: '5.5rem',
        6: '6.6rem',
        7: '7.7rem',
        8: '8.8rem',
        9: '9.9rem',
        // 10: '10.10rem',
      },
      padding: {
        // 10: '10.10rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
