import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Outfit',
      },
    }),
    presetTypography(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
