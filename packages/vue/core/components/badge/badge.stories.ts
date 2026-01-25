import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import DotExample from './examples/dot.vue'
import SecondaryExample from './examples/secondary.vue'

const meta: Meta = {
  title: 'Components/Badge',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Secondary = {
  render: () => ({
    components: { Component: SecondaryExample },
    template: '<Component />',
  }),
}

export const Dot = {
  render: () => ({
    components: { Component: DotExample },
    template: '<Component />',
  }),
}
