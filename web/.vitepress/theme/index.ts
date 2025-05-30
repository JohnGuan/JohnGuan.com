import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import 'virtual:uno.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  // eslint-disable-next-line unused-imports/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} as Theme
