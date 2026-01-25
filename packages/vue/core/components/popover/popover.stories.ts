import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ContextAndInteractiveExample from './examples/context-and-interactive.vue'
import ControlledOpenExample from './examples/controlled-open.vue'
import PositioningExample from './examples/positioning.vue'
import SkinsAndVariantsExample from './examples/skins-and-variants.vue'

const meta: Meta = {
  title: 'Components/Popover',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const SkinsAndVariants = {
  render: () => ({
    components: { Component: SkinsAndVariantsExample },
    template: '<Component />',
  }),
}

export const Positioning = {
  render: () => ({
    components: { Component: PositioningExample },
    template: '<Component />',
  }),
}

export const ContextAndInteractive = {
  render: () => ({
    components: { Component: ContextAndInteractiveExample },
    template: '<Component />',
  }),
}

export const ControlledOpen = {
  render: () => ({
    components: { Component: ControlledOpenExample },
    template: '<Component />',
  }),
}

