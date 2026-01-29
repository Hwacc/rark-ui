import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import EventsExample from './examples/events.vue'
import FormatExample from './examples/format.vue'
import ProgrammaticExample from './examples/programmatic.vue'
import SizesExample from './examples/sizes.vue'
import StatesExample from './examples/states.vue'
import TriggersExample from './examples/triggers.vue'

const meta: Meta = {
  title: 'Components/NumberInput',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Triggers = {
  render: () => ({
    components: { Component: TriggersExample },
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

export const Format = {
  render: () => ({
    components: { Component: FormatExample },
    template: '<Component />',
  }),
}

export const Events = {
  render: () => ({
    components: { Component: EventsExample },
    template: '<Component />',
  }),
}

export const Programmatic = {
  render: () => ({
    components: { Component: ProgrammaticExample },
    template: '<Component />',
  }),
}
