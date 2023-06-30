/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#864cff",
      },
      fontFamily: {
        poppins: ["poppins"],
        "poppins-bold": ["poppinsBold"],
        "poppins-italic": ["poppinsItalic"],
        "poppins-extra-bold": ["poppinsExtraBold"],
        "poppins-bold-italic": ["poppinsBoldItalic"],
        "poppins-extra-bold-italic": ["poppinsExtraBoldItalic"],
      },
    },
  },
  plugins: [],
};
