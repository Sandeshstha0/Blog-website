

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#3e81c5',
            'primary-dark': '#007297',
        },
    },
    fontFamily: {
        sans: ['Roboto', 'sans-serif'],
    },
},
plugins: [],
};
