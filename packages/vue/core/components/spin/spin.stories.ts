import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CustomIconExample from './examples/custom-icon.vue'
import DelayAndTextExample from './examples/delay-and-text.vue'
import ModesExample from './examples/modes.vue'
import SizesExample from './examples/sizes.vue'

const meta: Meta = {
  title: 'Components/Spin',
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

export const Modes = {
  render: () => ({
    components: { Component: ModesExample },
    template: '<Component />',
  }),
}

export const DelayAndText = {
  render: () => ({
    components: { Component: DelayAndTextExample },
    template: '<Component />',
  }),
}

export const CustomIcon = {
  render: () => ({
    components: { Component: CustomIconExample },
    template: '<Component />',
  }),
}
