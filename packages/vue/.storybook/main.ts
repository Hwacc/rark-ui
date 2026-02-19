import type { StorybookConfig } from 'storybook-vue3-rsbuild'
import { mergeRsbuildConfig } from '@rsbuild/core'

function patchVueDocgenRule(rules: any[] = []) {
  for (const rule of rules) {
    if (Array.isArray(rule.oneOf))
      patchVueDocgenRule(rule.oneOf)
    if (Array.isArray(rule.rules))
      patchVueDocgenRule(rule.rules)

    const uses = Array.isArray(rule.use)
      ? rule.use
      : rule.use
        ? [rule.use]
        : []

    const hasVueDocgen = uses.some((u: any) => {
      const loader = typeof u === 'string' ? u : (u?.loader ?? '')
      return String(loader).includes('vue-docgen-loader')
    })

    if (hasVueDocgen) {
      rule.resourceQuery = { not: [/raw$/] }
    }
  }
}

const config: StorybookConfig = {
  stories: [
    '../core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../addons/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: 'storybook-vue3-rsbuild',
    options: {},
  },
  rsbuildFinal(baseConfig) {
    const merged = mergeRsbuildConfig(baseConfig, {
      tools: {
        bundlerChain(chain, { CHAIN_ID }) {
          chain.module.rule(CHAIN_ID.RULE.VUE).resourceQuery({ not: /raw$/ })
          chain.module.rule('raw').resourceQuery(/raw$/).type('asset/source')
        },
      },
    })

    /**
     * 生成时, vue-docgen-loader warning 解析不了?raw结尾的引用
     * 这里merge出的config会在rsbuildFinal最终调用被rsbuildFinalDoc返回的config覆盖导致无法控制vue-docgen-loader
     *
     * see: https://github.com/rstackjs/storybook-rsbuild/blob/main/packages/framework-vue3/src/framework-preset-vue3.ts
     */
    return mergeRsbuildConfig(merged, {
      tools: {
        rspack(rspackConfig) {
          patchVueDocgenRule(rspackConfig.module?.rules as any[])
          return rspackConfig
        },
      },
    })
  },
}

export default config
