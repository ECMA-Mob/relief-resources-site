module.exports = {
  siteMetadata: {
    title: `Relief Resources Site`,
    description: `A Gatsby starter to help you kick off your local relief efforts for the COVID-19 situation.`,
    authorName: `Henry Quinn`,
    authorLink: `https://henryneeds.coffee`,
    authorTwitter: `Quinncuatro`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/images/heart.png`)
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bungee`
          }
        ]
      }
    },
    `gatsby-plugin-preact`
    // this seems to break our CSS
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: process.env.gatsby_log_level === `verbose`,
    //     develop: process.env.NODE_ENV !== `production`,
    //     tailwind: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
