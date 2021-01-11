module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'render': "url('./images/render.jpg')",
 
       })
    },
  },
  variants: {},
  plugins: [],
}
