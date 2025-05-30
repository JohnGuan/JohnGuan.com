import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: '管宁川 John',
  description: '管宁川 John 的个人网站。',
  themeConfig: {
    nav: [
      { text: '主页', link: '/zh/' },
      { text: '关于', link: '/zh/about/' },
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/8343970' },
      { icon: 'github', link: 'https://github.com/JohnGuan' },
      { icon: 'x', link: 'https://x.com/GuanNingchuan' },
    ],

    footer: {
      copyright: '版权所有 © 2025 管宁川 (John Guan)',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})
