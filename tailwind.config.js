module.exports = {
  content: [
  '../testgo/layouts/**/*.html',
'../testgo/assets/js/*.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms')({strategy: 'class',}),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/line-clamp'),
  ],
}
