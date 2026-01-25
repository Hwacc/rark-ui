import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import DelaysAndControlledOpenExample from './examples/delays-and-controlled-open.vue'
import PlacementsAndSkinsExample from './examples/placements-and-skins.vue'
import SizesAndBorderedExample from './examples/sizes-and-bordered.vue'
import UiAndFixedStrategyExample from './examples/ui-and-fixed-strategy.vue'

const meta: Meta = {
  title: 'Components/Tooltip',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const PlacementsAndSkins = {
  render: () => ({
    components: { Component: PlacementsAndSkinsExample },
    template: '<Component />',
  }),
}

export const SizesAndBordered = {
  render: () => ({
    components: { Component: SizesAndBorderedExample },
    template: '<Component />',
  }),
}

export const DelaysAndControlledOpen = {
  render: () => ({
    components: { Component: DelaysAndControlledOpenExample },
    template: '<Component />',
  }),
}

export const UiAndFixedStrategy = {
  render: () => ({
    components: { Component: UiAndFixedStrategyExample },
    template: '<Component />',
  }),
}

