/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green1: 'var(--green-1)',
        green2: 'var(--green-2)',
      muted: 'var(--muted)',
      bg: 'var(--bg)',
      card: 'var(--card)'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
}