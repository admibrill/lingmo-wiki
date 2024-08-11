import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: 'Lingmo Wiki',
  description: 'Lingmo OS 的官方 Wiki。',
  appearance:'dark',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
      link: '/Wiki/debian/zh/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/Wiki/debian/en/',
    },
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Wiki',
        items: [
          { text: 'Debian Lingmo', link: '/Wiki/debian/zh' },
          { text: 'Arch Lingmo', link: '/Wiki/arch/zh' },
        ]
      },
    ],
    sidebar: {
      '/Wiki/debian/zh/': [
        {
          text: 'Debian Lingmo',
          items: [
            { text: '索引', link: '/Wiki/debian/zh/index/'},
            { text: '安装教程', link: '/Wiki/debian/zh/installation/' },
            { text: '关于', link: '/Wiki/debian/zh/about/' },
            { text: '常见问题', link: '/Wiki/debian/zh/faq/' }
          ],
        },
      ],
      '/Wiki/debian/en/': [
        {
          text: 'Debian Linmo',
          items: [
            { text: 'Index', link: '/Wiki/debian/en/index/' },
            { text: 'Installation', link: '/Wiki/debian/en/installation/' },
            { text: 'About', link: '/Wiki/debian/en/about/' },
            { text: 'FAQ', link: '/Wiki/debian/en/faq/' }
          ],
        },
      ],
      '/Wiki/arch/zh/': [
        {
          text: 'Arch Lingmo',
          items: [
            { text: '安装教程', link: '/Wiki/arch/zh/index/' },
            { text: '关于', link: '/Wiki/arch/zh/about/' },
            { text: '常见问题', link: '/Wiki/arch/zh/faq/' }
          ],
        },
      ],
      '/Wiki/arch/en/': [
        {
          text: 'Arch Linmo',
          items: [
            { text: 'Installation', link: '/Wiki/arch/en/index/' },
            { text: 'About', link: '/Wiki/arch/en/about/' },
            { text: 'FAQ', link: '/Wiki/arch/en/faq/' }
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingmoOS/Lingmo-Wiki' }
    ],  
    search: { 
      provider: 'local'
    }, 
    footer: { 
      message: 'Released under the CC BY-NC-SA License.', 
      copyright: 'Copyright © 2024 Lingmo OS', 
    }, 
    
  }
})