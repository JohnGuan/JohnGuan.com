import emojiRegex from 'emoji-regex'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  // title: 'JohnGuan',
  // description: 'Undefinable',

  markdown: {
    anchor: {
      slugify: (str) => {
        // Remove all emojis
        str = str.replace(emojiRegex(), '')

        return str.trim()
      },
    },
  },

  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
