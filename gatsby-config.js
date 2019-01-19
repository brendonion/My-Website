const autoprefixer = require('autoprefixer');
const path = require(`path`)
module.exports = {
  pathPrefix: "/", //Change if adding CNAME
  siteMetadata: {
    title: 'Brendan Walker',
    description: 'Brendan Walker',
    author: '@brendonion',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions', 'not ie 10'],
            grid: true,
          })
        ],
        precision: 8,
        includePaths: ['src/layouts'] // includes your scss files
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    
  ],
}
