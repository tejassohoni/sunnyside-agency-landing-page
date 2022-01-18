module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        libre: ["libre Franklin", "sans-serif"],
        secular: ["Secular One", "sans-serif"],
      },
      colors: {
        lightBlue: "#3dbefd",
      },
      height: {
        sm: "40rem",
        md: "55rem",
        lg: "80rem",
      },
      width: {
        sm: "40rem",
        md: "65rem",
        lg: "70rem",
        xl: "100%",
      },
    },
    plugins: [],
  },
};
