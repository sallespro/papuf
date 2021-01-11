const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  pathPrefix: "/buffon",
  siteMetadata: {
    title: "Gatsby Starter Tailwind CSS",
    author: "Rafael Rocco Salles",
    description: "A Gatsby starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Optimate",
        short_name: "Gatsby Starter",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.blue[500],
        icon: "static/icon.svg",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    }
  ]
}
