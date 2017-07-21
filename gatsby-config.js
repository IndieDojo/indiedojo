module.exports = {
  siteMetadata: {
    title: `IndieDojo`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-8858797-9',
      },
    },
  ],
}
