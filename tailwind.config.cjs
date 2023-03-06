/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      "space-grotesk": ["Space Grotesk", "sans-serif"],
    },
    extend: {
      screens: {
        "xs": "475px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
