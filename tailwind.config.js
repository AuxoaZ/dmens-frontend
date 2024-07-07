const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  dark : "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : "#f79400",
        secondary : "#ffaa2b",
        dark_primary : "#212226",
        dark_secondary : "#94a3b8",
        slate_800: "#1c2333",
        slate_900: "#243140",
        slate_950: "#1a222b"
        
      }
    },
  },
  plugins: [],
});