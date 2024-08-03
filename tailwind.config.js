/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary": "#010066",
        "primary-light": "#00085d",
        "light": "#4169E1",
        "mute": "#f7f8fd",
        "dark-mute": "#a7aab1",
        "color-wrapper":"#f0f1f4"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        "hero": "url('https://demo.awaikenthemes.com/html-preview/weebix/images/hero-bg.png')",
        "wrapper":"url(https://demo.awaikenthemes.com/html-preview/weebix/images/page-header-bg.png)",
        "custom-gradient": "linear-gradient(106deg, rgba(246,246,246,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 53%, rgba(248,248,255,1) 78%, rgba(255,255,255,0) 90%);",
        "teamImg":"url(https://demo.awaikenthemes.com/html-preview/weebix/images/team-1.jpg)",
        "about": "url(https://demo.awaikenthemes.com/html-preview/weebix/images/about-us-img.jpg)"
      },

      display: ['before', 'after'],
      position: ['before', 'after'],
      top: ['before', 'after'],
      right: ['before', 'after'],
      bottom: ['before', 'after'],
      left: ['before', 'after'],
    },
  },
  plugins: [require("tailwindcss-animate")],
}