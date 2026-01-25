import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ControlledAndContextExample from './examples/controlled-and-context.vue'
import CustomContentExample from './examples/custom-content.vue'
import DelaysAndPositioningExample from './examples/delays-and-positioning.vue'
import ThemesAndVariantsExample from './examples/themes-and-variants.vue'

const meta: Meta = {
  title: 'Components/HoverCard',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const DelaysAndPositioning = {
  render: () => ({
    components: { Component: DelaysAndPositioningExample },
    template: '<Component />',
  }),
}

export const ControlledAndContext = {
  render: () => ({
    components: { Component: ControlledAndContextExample },
    template: '<Component />',
  }),
}

export const ThemesAndVariants = {
  render: () => ({
    components: { Component: ThemesAndVariantsExample },
    template: '<Component />',
  }),
}

export const CustomContent = {
  render: () => ({
    components: { Component: CustomContentExample },
    template: '<Component />',
  }),
}

