import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ControlledOpenAndHighlightExample from './examples/controlled-open-and-highlight.vue'
import GroupsAndDisabledExample from './examples/groups-and-disabled.vue'
import MultipleAndClearableExample from './examples/multiple-and-clearable.vue'
import SizesExample from './examples/sizes.vue'

const meta: Meta = {
  title: 'Components/Select',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const GroupsAndDisabled = {
  render: () => ({
    components: { Component: GroupsAndDisabledExample },
    template: '<Component />',
  }),
}

export const MultipleAndClearable = {
  render: () => ({
    components: { Component: MultipleAndClearableExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const ControlledOpenAndHighlight = {
  render: () => ({
    components: { Component: ControlledOpenAndHighlightExample },
    template: '<Component />',
  }),
}

