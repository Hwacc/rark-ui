import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import SizesExample from './examples/sizes.vue'
import VariantsExample from './examples/variants.vue'

const meta: Meta = {
  title: 'Components/Button',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Variants = {
  render: () => ({
    components: { Component: VariantsExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}
