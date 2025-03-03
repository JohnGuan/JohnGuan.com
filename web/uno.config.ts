import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Outfit',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
