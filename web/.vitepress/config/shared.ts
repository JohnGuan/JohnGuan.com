import emojiRegex from 'emoji-regex'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  // For language detection page
  description: '个人网站 | Personal Website',

  markdown: {
    anchor: {
      slugify: (str) => {
        // Remove all emojis
        str = str.replace(emojiRegex(), '')

        return str.trim()
      },
    },
  },

  sitemap: {
    hostname: 'https://johnguan.com',
    transformItems: (items) => {
      // Remove the language detection page (root page) in item and its links
      items = items
        .filter(item => item.url !== '')
        .map((item) => {
          if (item.links) {
            item.links = item.links.filter(link => link.url !== '')
          }
          return item
        })

      return items
    },
  },

  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
