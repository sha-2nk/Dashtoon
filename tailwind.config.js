/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ["Rampart One", "cursive"],
      'handwritten':[ 'Kalam', "cursive"],
      'Button':['IBM Plex Sans', 'sans-serif'],
      'handwritten2':['Playpen Sans', 'cursive']
    },
    backgroundImage: {
      back: "url('/src/Images/back.jpg')",
      back2: "url('/src/Images/back2.jpeg')",
      img1:"url('/src/Images/Static/1.png')",
      img2:"url('/src/Images/Static/2.jpg')",
      img3:"url('/src/Images/Static/3.jpg')",
      img4:"url('/src/Images/Static/4.png')",
      img5:"url('/src/Images/Static/5.png')",
      img6:"url('/src/Images/Static/6.jpg')",
    },
  },
  plugins: [],
})