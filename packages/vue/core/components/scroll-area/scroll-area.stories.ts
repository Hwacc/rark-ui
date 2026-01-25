import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import BothAxesExample from './examples/both-axes.vue'
import CustomUiExample from './examples/custom-ui.vue'
import SizesExample from './examples/sizes.vue'

const meta: Meta = {
  title: 'Components/ScrollArea',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const BothAxes = {
  render: () => ({
    components: { Component: BothAxesExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const CustomUi = {
  render: () => ({
    components: { Component: CustomUiExample },
    template: '<Component />',
  }),
}

