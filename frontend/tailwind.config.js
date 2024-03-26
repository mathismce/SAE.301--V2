/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist:["bg-button"],
  theme: {
    extend: {
      colors:{
        "button" : "var(--button-bg)",
        "button-secondary" : "var(--button-bg-secondary)",
        "button-txt" : "var(--button-text)",
        "button-hover" : "var(--button-bg-hover)",
        "button-secondary-hover" : "var(--button-bg-secondary-hover)",
        "button-square": "var(--primary-gray)", 
        "button-square-hover" : "var(--primary-yellow)",
        "search-bar" : "var(--secondary-gray)",
        "search-bar-focus" : "var(--primary-yellow)",
        "search-bar-bg-focus" : "var(--primary-gray)",
        

            }
    },
    fontFamily: {
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
};
