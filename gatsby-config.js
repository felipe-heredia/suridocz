module.exports = {
  siteMetadata: {
    siteTitle: `SuriDocz`,
    defaultTitle: `SuriDocz`,
    siteTitleShort: `SuriDocz`,
    siteDescription: `Um simples sites para listar meus arquivos de estudos e aprendizados.`,
    siteUrl: `https://docz.felipesuri.com`,
    siteAuthor: `@_felipesuri`,
    siteLanguage: `pt-BR`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SuriDocz`,
        short_name: `SuriDocz`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docz.felipesuri.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
