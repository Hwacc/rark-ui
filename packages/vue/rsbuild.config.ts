import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '@rui-ark/vue': './core/src',
      '@rui-ark/shared': '../shared/src',
      '@rui-ark/themes': '../themes/src',
    },
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: ['node_modules/**/*'],
    }),
    pluginVueJsx(),
    pluginVue(),
  ],
})
