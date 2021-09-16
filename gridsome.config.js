module.exports = {
  siteName: 'Suridocz',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: 'https://docz.felipesuri.com',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [{ path: '/docs/', title: 'Docz' }],
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Aprendendo',
            items: [
              '/docs/learning/backend-para-iniciantes/',
              '/docs/learning/conceitos-docer/',
              '/docs/learning/higher/',
              '/docs/leaning/introducao-a-computacao/',
              '/docs/learning/solid/',
            ],
          },
          {
            title: 'Resumos',
            items: [
              '/docs/summary/como-escrever-bem/',
              '/docs/summary/como-escrever-introducoes/',
              '/docs/summary/devo-fazer-faculdade/',
              '/docs/summary/expansion-week-01/',
              '/docs/summary/zeno-book',
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
}
