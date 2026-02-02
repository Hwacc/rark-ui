import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import PtTargetExample from './examples/pt-target.vue'

const meta: Meta = {
  title: 'Add-ons/Directives/v-aria',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const PtTarget = {
  render: () => ({
    components: { Component: PtTargetExample },
    template: '<Component />',
  }),
}

