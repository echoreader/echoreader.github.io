import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  content: {
    pipeline: {
      include: [
        './_layouts/**/*.html',
        './_includes/**/*.html',
        './posts/**/*.md',
        './*.html',
        './blog/**/*.html'
      ],
    },
  },
  preflights: [
    {
      getCSS: () => `
        body {
          font-family: 'Open Sans', system-ui, sans-serif;
        }
      `,
    },
  ],
})
