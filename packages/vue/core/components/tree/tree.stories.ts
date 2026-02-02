import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'

const meta: Meta = {
  title: 'Components/Tree',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}
