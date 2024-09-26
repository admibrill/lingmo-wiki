import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: 'Lingmo Wiki',
  description: 'Lingmo OS Wiki',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  appearance:'dark',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],
  ignoreDeadLinks: true,
  locales: {
    zh: {
      label: '简体中文',
      lang: 'Zh_CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/' },
          {
            text: 'Wiki',
            items: [
              { text: 'Debian Lingmo', link: '/zh/debian/about' },
              { text: 'Arch Lingmo', link: '/zh/arch/about' },
            ]
          },
        ],
        sidebar: {
          '/zh/debian/': [
            {
              text: 'Debian Lingmo',
              items: [
                { text: '关于', link: '/zh/debian/about' },
                {
                  text: '系统相关',
                  collapsed: true,
                  items:[
                    { text: '安装教程', link: '/zh/debian/system/installation' },
                    { text: '日期和时间', link: '/zh/debian/system/time' }
                  ]
                },
                {
                  text: '软件管理',
                  collapsed: true,
                  items: [
                    { text: '应用商店', link: '/zh/debian/software/app-store' },
                    //{ text: 'lpm包管理工具', link: '/zh/debian/software/lpm' },
                    //{ text: 'apt和dpkg', link: '/zh/debian/software/apt-dpkg' }
                  ]
                },
                { text: '常见问题', link: '/zh/debian/faq' }
              ],
            },
          ],
          '/zh/arch/': [
            {
              text: 'Arch Lingmo',
              items: [
                { text: '关于', link: '/zh/arch/about' },
                {
                  text: '系统相关',
                  collapsed: true,
                  items: [
                    { text: '系统安装', link: '/zh/arch/system/installation' }
                  ]
                },
                { text: '常见问题', link: '/zh/arch/faq' }
              ],
            },
          ],
        },
        footer: {
          message: '遵循CC BY-SA协议',
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
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Wiki',
            items: [
              { text: 'Debian Lingmo', link: '/en/debian/about' },
              { text: 'Arch Lingmo', link: '/en/arch/about' },
            ]
          },
        ],
        sidebar: {
          '/en/debian/': [
            {
              text: 'Debian Lingmo',
              items: [
                { text: 'About', link: '/en/debian/about' },
                {
                  text: 'System',
                  collapsed: true,
                  items: [
                    { text: 'Installation', link: '/en/debian/system/installation' }
                  ]
                },
                { text: 'F&Q', link: '/en/debian/faq' }
              ],
            },
          ],
          '/en/arch/': [
            {
              text: 'Arch Lingmo',
              items: [
                { text: 'About', link: '/en/arch/zh/about' },
                {
                  text: 'System',
                  collapsed: true,
                  items: [
                    { text: 'Installation', link: '/en/system/arch/installation' }
                  ]
                },
                { text: 'F&Q', link: '/en/arch/faq' }
              ],
            },
          ],
        },
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
