import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: '管宁川 John',
  // description: '不可定义',
  themeConfig: {
    nav: [
      { text: '主页', link: '/zh/' },
      { text: '示例', link: '/zh/markdown-examples' },
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/zh/markdown-examples' },
          { text: '运行时 API 示例', link: '/zh/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnGuan' },
      { icon: 'x', link: 'https://x.com/GuanNingchuan' },
    ],

    footer: {
      copyright: '版权所有 © 2025 管宁川 (John Guan)',
    },
  },
})
