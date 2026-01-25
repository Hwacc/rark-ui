import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import GroupExample from './examples/group.vue'
import SizesExample from './examples/sizes.vue'
import SlotsAndUiExample from './examples/slots-and-ui.vue'
import StatesExample from './examples/states.vue'

const meta: Meta = {
  title: 'Components/Checkbox',
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

export const Group = {
  render: () => ({
    components: { Component: GroupExample },
    template: '<Component />',
  }),
}

export const SlotsAndUi = {
  render: () => ({
    components: { Component: SlotsAndUiExample },
    template: '<Component />',
  }),
}

