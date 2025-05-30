import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: 'John Guan',
  description: 'Personal website of John Guan (管宁川).',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'About', link: '/en/about/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnGuan' },
      { icon: 'x', link: 'https://x.com/GuanNingchuan' },
    ],

    footer: {
      copyright: 'Copyright © 2025 John Guan (管宁川)',
    },
  },
})
