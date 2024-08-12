import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: 'Lingmo Wiki',
  description: 'Lingmo OS Wiki',
  appearance:'dark',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          {
            text: 'Wiki',
            items: [
              { text: 'Debian Lingmo', link: '/Wiki/debian/about' },
              { text: 'Arch Lingmo', link: '/Wiki/arch/about' },
            ]
          },
        ],
        sidebar: {
          '/Wiki/debian/': [
            {
              text: 'Debian Lingmo',
              items: [
                { text: '关于', link: '/Wiki/debian/about/' },
                {
                  text: '系统相关',
                  collapsed: true,
                  items:[
                    { text: '安装教程', link: '/Wiki/debian/installation/' },
                    { text: '初探界面', link: '/Wiki/debian/UI-1'}
                  ]
                },
                { text: '常见问题', link: '/Wiki/debian/faq/' }
              ],
            },
          ],
          '/Wiki/arch/': [
            {
              text: 'Arch Lingmo',
              items: [
                { text: '关于', link: '/Wiki/arch/about/' },
                {
                  text: '系统相关',
                  collapsed: true,
                  items: [
                    { text: '系统安装', link: '/Wiki/arch/installation' }
                  ]
                },
                { text: '常见问题', link: '/Wiki/arch/faq/' }
              ],
            },
          ],
        },
        footer: {
          message: '遵循CC BY-NC-SA协议',
          copyright: 'Copyright © 2024 Lingmo OS',
        },
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/lingmoOS/lingmo-wiki/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '页面导航',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Wiki',
            items: [
              { text: 'Debian Lingmo', link: '/en/Wiki/debian/about' },
              { text: 'Arch Lingmo', link: '/en/Wiki/arch/about' },
            ]
          },
        ],
        sidebar: {
          '/en/Wiki/debian/': [
            {
              text: 'Debian Lingmo',
              items: [
                { text: 'About', link: '/en/Wiki/debian/zh/about/' },
                {
                  text: 'System',
                  collapsed: true,
                  items: [
                    { text: 'Installation', link: '/en/Wiki/debian/installation' }
                  ]
                },
                { text: 'F&Q', link: '/Wiki/debian/zh/faq/' }
              ],
            },
          ],
          '/en/Wiki/arch/': [
            {
              text: 'Arch Lingmo',
              items: [
                { text: 'About', link: '/en/Wiki/arch/zh/about/' },
                {
                  text: 'System',
                  collapsed: true,
                  items: [
                    { text: 'Installation', link: '/en/Wiki/arch/installation' }
                  ]
                },
                { text: 'F&Q', link: '/Wiki/arch/zh/faq/' }
              ],
            },
          ],
        },
        footer: {
          message: 'Released under the CC BY-NC-SA License.',
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