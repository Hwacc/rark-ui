import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CheckboxExample from './examples/checkbox.vue'
import ContextTriggerExample from './examples/context-trigger.vue'
import ControlledOpenExample from './examples/controlled-open.vue'
import RadioExample from './examples/radio.vue'
import SubmenuExample from './examples/submenu.vue'

const meta: Meta = {
  title: 'Components/Menu',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Submenu = {
  render: () => ({
    components: { Component: SubmenuExample },
    template: '<Component />',
  }),
}

export const Checkbox = {
  render: () => ({
    components: { Component: CheckboxExample },
    template: '<Component />',
  }),
}

export const Radio = {
  render: () => ({
    components: { Component: RadioExample },
    template: '<Component />',
  }),
}

export const ContextTrigger = {
  render: () => ({
    components: { Component: ContextTriggerExample },
    template: '<Component />',
  }),
}

export const ControlledOpen = {
  render: () => ({
    components: { Component: ControlledOpenExample },
    template: '<Component />',
  }),
}

