import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ControlledExample from './examples/controlled.vue'
import MultipleExample from './examples/multiple.vue'
import OrientationAndDisabledExample from './examples/orientation-and-disabled.vue'
import SizesExample from './examples/sizes.vue'
import WithIconsExample from './examples/with-icons.vue'

const meta: Meta = {
  title: 'Components/ToggleGroup',
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

export const OrientationAndDisabled = {
  render: () => ({
    components: { Component: OrientationAndDisabledExample },
    template: '<Component />',
  }),
}

export const Multiple = {
  render: () => ({
    components: { Component: MultipleExample },
    template: '<Component />',
  }),
}

export const WithIcons = {
  render: () => ({
    components: { Component: WithIconsExample },
    template: '<Component />',
  }),
}

export const Controlled = {
  render: () => ({
    components: { Component: ControlledExample },
    template: '<Component />',
  }),
}

