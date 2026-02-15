import type { Config } from 'tailwindcss'

export default {
  content: [
    './crafts/**/*.{ts}',
    '../../../vue/core/src/**/*.{vue,ts,tsx}',
    '../../../vue/addons/**/*.{vue,ts,tsx}',
  ],
} satisfies Config
