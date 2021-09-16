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
      links: [
        { path: '/learning', title: 'Aprendendo' },
        { path: '/summary', title: 'Resumos' },
      ],
    },
    sidebar: [
      {
        name: 'learning',
        sections: [
          {
            title: 'Aprendendo',
            items: [
              '/learning/',
              '/learning/backend-para-iniciantes/',
              '/learning/conceitos-docker/',
              '/learning/higher/',
              '/learning/introducao-a-computacao/',
              '/learning/solid/',
            ],
          },
        ],
      },
      {
        name: 'summary',
        sections: [
          {
            title: 'Resumos',
            items: [
              '/summary/',
              '/summary/como-escrever-bem/',
              '/summary/como-escrever-introducoes/',
              '/summary/devo-fazer-faculdade/',
              '/summary/expansion-week-01/',
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
