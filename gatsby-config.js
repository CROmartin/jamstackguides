require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jamstack Guides`,
    description: `Your every day guid for jamstack development`,
    author: `Martin Staresincic`,
    siteUrl: `https://jamstackguides.com/`,
    schema: `{
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Gljive",
      "url": "https://www.gljive.hr/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.gljive.hr/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`],
          placeholder: `none`,
          quality: 95,
          breakpoints: [768, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ZZ8TD5LWHV", // Google Analytics / GA
          //  "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //  "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds

        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jam-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                  context {
                    lastmoddate
                  }
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              lastmod: edge.node.context.lastmoddate,
            }
          }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gljive.hr",
        sitemap: "https://gljive.hr/sitemap.xml",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPOSITORY}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver:
          ({ node, key, value }) =>
          post =>
            `/${post.uid}`,
        schemas: {
          post: require("./prismic_schemas/post.json"),
          author: require("./prismic_schemas/author.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg", "jsx"],
      },
    },
    {
      resolve: "gatsby-plugin-minify-html",
      options: {
        debug: true, // debug optional, default false
        config: {
          // Enabled default by this plugin
          collapseWhitespace: true,
          minifyCSS: false,
          minifyJS: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          // Disabled default by html-minifier-terser
          sortAttributes: true,
          useShortDoctype: true,
        },
      },
    },
  ],
}
