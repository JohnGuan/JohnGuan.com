import { defineConfig } from 'vitepress'
import { en } from './en'
import { shared } from './shared'
import { zh } from './zh'

export default defineConfig({
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
