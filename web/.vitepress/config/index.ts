import { defineConfig } from 'vitepress'
import { en } from './en'
import { shared } from './shared'
import { zh } from './zh'

export default defineConfig({
  description: '个人网站 | Personal Website',
  ...shared,
  locales: {
    zh: {
      label: '中文',
      ...zh,
    },
    en: {
      label: 'English',
      ...en,
    },
  },
})
