import type { Config } from 'tailwindcss'

export default {
  content: [
    '../default/**/*.{ts}',
    '../razer/**/*.{ts}',
    '../../vue/core/**/*.{vue,ts,tsx}',
    '../../vue/addons/**/*.{vue,ts,tsx}',
  ],
} satisfies Config
