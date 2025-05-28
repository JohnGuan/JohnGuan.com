import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: 'John Guan',
  // description: 'Undefinable',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      // { text: 'Examples', link: '/en/markdown-examples' },
      { text: 'About', link: '/en/about/' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/en/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/en/api-examples' },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnGuan' },
      { icon: 'x', link: 'https://x.com/GuanNingchuan' },
    ],

    footer: {
      copyright: 'Copyright © 2025 John Guan (管宁川)',
    },
  },
})
