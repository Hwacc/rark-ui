import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CustomSlotsExample from './examples/custom-slots.vue'
import SizesExample from './examples/sizes.vue'
import StatesAndOrientationExample from './examples/states-and-orientation.vue'
import VariantsExample from './examples/variants.vue'

const meta: Meta = {
  title: 'Components/RadioGroup',
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

export const StatesAndOrientation = {
  render: () => ({
    components: { Component: StatesAndOrientationExample },
    template: '<Component />',
  }),
}

export const CustomSlots = {
  render: () => ({
    components: { Component: CustomSlotsExample },
    template: '<Component />',
  }),
}

