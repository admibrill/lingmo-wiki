import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: nav(),
    editLink: {
      pattern: 'https://github.com/LingmoOS/lingmo-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Licensed under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>.',
      copyright: 'Copyright © 2024-present Lingmo OS Team',
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
      { text: 'Home', link: '/' }
  ]
}
