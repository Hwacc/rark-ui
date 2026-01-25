import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CustomRenderExample from './examples/custom-render.vue'
import PlacementsExample from './examples/placements.vue'
import PromiseExample from './examples/promise.vue'
import SlotsAndUiExample from './examples/slots-and-ui.vue'

const meta: Meta = {
  title: 'Components/Toast',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Placements = {
  render: () => ({
    components: { Component: PlacementsExample },
    template: '<Component />',
  }),
}

export const Promise = {
  render: () => ({
    components: { Component: PromiseExample },
    template: '<Component />',
  }),
}

export const CustomRender = {
  render: () => ({
    components: { Component: CustomRenderExample },
    template: '<Component />',
  }),
}

export const SlotsAndUi = {
  render: () => ({
    components: { Component: SlotsAndUiExample },
    template: '<Component />',
  }),
}

