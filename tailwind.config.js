/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25:"#FBF9FE",
          50:"#F6F1FE",
          100: "#E5D7FE",
          200: "#CBB0FD",
          300: "#AC88F9",
          400: "#9169F4",
          500: "#693AED",
          600: "#502ACB",
          700: "#3A1DAA",
          800: "#281289",
          900: "#1A0B71",
      },
        succes: {
          25:"#FAFCF7",
          50:"#F8FCEF",
          100: "#F4FCCD",
          200: "#E6FA9C",
          300: "#D0F16A",
          400: "#B8E344",
          500: "#96D10E",
          600: "#7BB30A",
          700: "#629607",
          800: "#4A7904",
          900: "#3A6402",
      },
        info: {
          25:"#F9FCFE",
          50:"#F1F9FE",
          100: "#CBFCFE",
          200: "#98F3FD",
          300: "#64E1FA",
          400: "#3DCAF5",
          500: "#00A7EF",
          600: "#0081CD",
          700: "#0061AC",
          800: "#00458A",
          900: "#003172",
      },
        warning: {
          25:"#FFFDFA",
          50:"#FFFBF2",
          100: "#FFF2CE",
          200: "#FFE19D",
          300: "#FFCC6D",
          400: "#FFB848",
          500: "#FF960C",
          600: "#DB7708",
          700: "#B75B06",
          800: "#934203",
          900: "#7A3102",
      },
        danger: {
          25:"#FFFCFA",
          50:"#FFF6F2",
          100: "#FFE4D3",
          200: "#FFC2A8",
          300: "#FF997C",
          400: "#FF725C",
          500: "#FF3126",
          600: "#DB1B22",
          700: "#B71326",
          800: "#930C27",
          900: "#7A0728",
<<<<<<< HEAD
      },
    },
=======
      },neutral: {
        25:"#FCFCFD",
        50:"#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
    },},
>>>>>>> af5d8c178b7b41f97b6dfdde00f7e7b5424827a1
    },
  },
  plugins: [],
}