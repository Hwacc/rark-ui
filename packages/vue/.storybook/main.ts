import type { StorybookConfig } from 'storybook-vue3-rsbuild'
import { mergeRsbuildConfig } from '@rsbuild/core'

const config: StorybookConfig = {
  stories: ['../core/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: 'storybook-vue3-rsbuild',
    options: {},
  },
  // rsbuildFinal: (config) => {
  //   const newConfig = mergeRsbuildConfig(config, {
  //     server: {
  //       port: 4399,
  //     },
  //   })
  //   console.log('newConfig', newConfig)
  //   return newConfig
  // },
}

export default config
