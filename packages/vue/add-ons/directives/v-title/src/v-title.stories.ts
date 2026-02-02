import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'

const meta: Meta = {
  title: 'Add-ons/Directives/v-title',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}
