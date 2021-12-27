module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss/nesting")(
      require("postcss-nesting")
    ),
  ],
};
