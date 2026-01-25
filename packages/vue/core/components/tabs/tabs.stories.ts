import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ControlledExample from './examples/controlled.vue'
import DisabledAndNoIndicatorExample from './examples/disabled-and-no-indicator.vue'
import ScrollableListExample from './examples/scrollable-list.vue'
import SizesExample from './examples/sizes.vue'

const meta: Meta = {
  title: 'Components/Tabs',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Controlled = {
  render: () => ({
    components: { Component: ControlledExample },
    template: '<Component />',
  }),
}

export const ScrollableList = {
  render: () => ({
    components: { Component: ScrollableListExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const DisabledAndNoIndicator = {
  render: () => ({
    components: { Component: DisabledAndNoIndicatorExample },
    template: '<Component />',
  }),
}

