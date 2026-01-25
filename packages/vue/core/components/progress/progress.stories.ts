import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CircleAndArcExample from './examples/circle-and-arc.vue'
import CustomUiExample from './examples/custom-ui.vue'
import LinearVariantsExample from './examples/linear-variants.vue'
import SizesAndOrientationExample from './examples/sizes-and-orientation.vue'

const meta: Meta = {
  title: 'Components/Progress',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const LinearVariants = {
  render: () => ({
    components: { Component: LinearVariantsExample },
    template: '<Component />',
  }),
}

export const SizesAndOrientation = {
  render: () => ({
    components: { Component: SizesAndOrientationExample },
    template: '<Component />',
  }),
}

export const CircleAndArc = {
  render: () => ({
    components: { Component: CircleAndArcExample },
    template: '<Component />',
  }),
}

export const CustomUi = {
  render: () => ({
    components: { Component: CustomUiExample },
    template: '<Component />',
  }),
}

