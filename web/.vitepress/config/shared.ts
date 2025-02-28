import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'JohnGuan',
  description: 'Undefinable',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnGuan' },
      { icon: 'x', link: 'https://x.com/GuanNingchuan' },
    ],

    footer: {
      copyright: 'Copyright © 1996-present John Guan',
    },
  },

  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
