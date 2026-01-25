import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ReadMoreExample from './examples/read-more.vue'
import SizesExample from './examples/sizes.vue'
import StatesExample from './examples/states.vue'
import TriggerAndSlotsExample from './examples/trigger-and-slots.vue'

const meta: Meta = {
  title: 'Components/Collapsible',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const States = {
  render: () => ({
    components: { Component: StatesExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const TriggerAndSlots = {
  render: () => ({
    components: { Component: TriggerAndSlotsExample },
    template: '<Component />',
  }),
}

export const ReadMore = {
  render: () => ({
    components: { Component: ReadMoreExample },
    template: '<Component />',
  }),
}
