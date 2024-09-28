import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en',
  title: 'Lingmo Wiki',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  appearance:'dark',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
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
          message: 'Released under the CC BY-SA License.',
          copyright: 'Copyright © 2024 Lingmo OS',
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
