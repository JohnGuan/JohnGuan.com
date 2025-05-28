import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import emojiRegex from 'emoji-regex'


export const shared = defineConfig({
  // title: 'JohnGuan',
  // description: 'Undefinable',

  // themeConfig: {
  //   nav: [
  //     { text: 'Home', link: '/' },
  //   ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/JohnGuan' },
  //     { icon: 'x', link: 'https://x.com/GuanNingchuan' },
  //   ],

  //   footer: {
  //     copyright: 'Copyright © 1996-present John Guan',
  //   },
  // },

  markdown:{
    anchor:{
      slugify: (str) => {
        // Remove all emojis
        str =  str.replace(emojiRegex(), '')

        return str.trim()
      }
    }
  },

  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
