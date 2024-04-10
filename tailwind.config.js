/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./error.vue",
    "./modules/**/components/**/*.{js,vue,ts}",
    "./modules/**/pages/*.{js,vue,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

