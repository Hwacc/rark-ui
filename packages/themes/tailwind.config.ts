import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/default/**/*.{ts}',
    './src/razer/**/*.{ts}',
    '../vue/core/src/**/*.{vue,ts,tsx}',
    '../vue/addons/**/*.{vue,ts,tsx}',
  ],
} satisfies Config
