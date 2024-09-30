import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Lingmo Wiki',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Wiki',
            items: [
              { text: 'LingmoOS Docs', link: '/docs/about' },
            ]
          },
        ],
        footer: {
          message: 'Licensed under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>.',
          copyright: 'Copyright © 2024-present Lingmo OS Team',
        }
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingmoOS/Lingmo-Wiki' }
    ],
    search: {
      provider: 'local'
    },
    outline: [2, 6]
  }
})
