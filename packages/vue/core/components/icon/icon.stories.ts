import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ColorAndClassExample from './examples/color-and-class.vue'
import SizesExample from './examples/sizes.vue'

const meta: Meta = {
  title: 'Components/Icon',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const ColorAndClass = {
  render: () => ({
    components: { Component: ColorAndClassExample },
    template: '<Component />',
  }),
}

