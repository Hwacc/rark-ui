import type { Meta } from 'storybook-vue3-rsbuild'

import ArraySrcExample from './examples/array-src.vue'
import BackgroundExample from './examples/background.vue'
import BasicExample from './examples/basic.vue'
import ScrollContainerExample from './examples/scroll-container.vue'

const meta: Meta = {
  title: 'Addons/Directives/v-lazy',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Background = {
  render: () => ({
    components: { Component: BackgroundExample },
    template: '<Component />',
  }),
}

export const ScrollContainer = {
  render: () => ({
    components: { Component: ScrollContainerExample },
    template: '<Component />',
  }),
}

export const ArraySrc = {
  render: () => ({
    components: { Component: ArraySrcExample },
    template: '<Component />',
  }),
}
