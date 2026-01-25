import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CustomControlsExample from './examples/custom-controls.vue'
import SizesExample from './examples/sizes.vue'
import StatesExample from './examples/states.vue'

const meta: Meta = {
  title: 'Components/Editable',
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

export const States = {
  render: () => ({
    components: { Component: StatesExample },
    template: '<Component />',
  }),
}

export const CustomControls = {
  render: () => ({
    components: { Component: CustomControlsExample },
    template: '<Component />',
  }),
}

