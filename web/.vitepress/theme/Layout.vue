<script setup lang="ts">
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watchEffect } from 'vue'
import JohnGuanHero from './components/JohnGuanHero.vue'

const { localeIndex, site } = useData()

watchEffect(() => {
  if (inBrowser) {
    if (localeIndex.value === 'root') {
      // Get the saved locale or the browser's locale
      let savedLocale = localStorage.getItem('savedLocale')
      if (!savedLocale) {
        savedLocale = navigator.language.split('-')[0]
      }
      // Redirect to the locale if it exists in the site locales
      if (Object.keys(site.value.locales).includes(savedLocale)) {
        document.location.href = `/${savedLocale}/`
      }
    }
    else {
      // Save the locale when it's changed
      if (localeIndex.value !== localStorage.getItem('savedLocale')) {
        localStorage.setItem('savedLocale', localeIndex.value)
      }
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <JohnGuanHero />
    </template>
  </DefaultTheme.Layout>
</template>
