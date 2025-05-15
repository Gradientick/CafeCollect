/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F5EFE6",
          DEFAULT: "#A68B7B",
          dark: "#4B2E28",
        },
        accent: "#2ECC71",
        "accent-dark": "#D2691E",
        neutral: { 700: "#334155" },
      },
    },
  },
  plugins: [],
};
// /* eslint-env node */
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           light: "#F5EFE6",
//           DEFAULT: "#A68B7B",
//           dark: "#4B2E28",
//         },
//         accent: "#2ECC71",
//         "accent-dark": "#D2691E",
//         neutral: { 700: "#334155" },
//       },
//     },
//   },
//   plugins: [],
// };