import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import EventsExample from './examples/events.vue'
import PlaceholderExample from './examples/placeholder.vue'
import SizesExample from './examples/sizes.vue'
import StatesExample from './examples/states.vue'

const meta: Meta = {
  title: 'Components/Hotkey',
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

export const Placeholder = {
  render: () => ({
    components: { Component: PlaceholderExample },
    template: '<Component />',
  }),
}

export const Events = {
  render: () => ({
    components: { Component: EventsExample },
    template: '<Component />',
  }),
}
