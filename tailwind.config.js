module.exports = {
  content: ["./**/*.html", "./**/*.md", "config.toml"],
  darkMode: "class",
  theme: {
    textColor: "#404040",
    fontFamily: {
      'sans': ["GT Walsheim", 'sans-serif'] 
    },
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
