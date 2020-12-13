module.exports = {
  siteMetadata: {
    title: `Juan Pablo Castano`,
    description: `Juan Pablo's Personal Website`,
    author: `@JuanPabloC`,
    menuLinks: [
      {
        name: `About Me`,
        link: `/about`
      },
      {
        name: `Resume`,
        link:  `/resume`
      },
      {
        name: `Awards`,
        link: `/awards`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab\:300,400,500,300b,500b`,
          `Roboto\:300,400,500`
        ],
        display: 'swap'
      }
    }
  ],
}
