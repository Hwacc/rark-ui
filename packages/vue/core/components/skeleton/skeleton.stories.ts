import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ShapesExample from './examples/shapes.vue'
import VariantsExample from './examples/variants.vue'
import WithChildrenExample from './examples/with-children.vue'

const meta: Meta = {
  title: 'Components/Skeleton',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Variants = {
  render: () => ({
    components: { Component: VariantsExample },
    template: '<Component />',
  }),
}

export const Shapes = {
  render: () => ({
    components: { Component: ShapesExample },
    template: '<Component />',
  }),
}

export const WithChildren = {
  render: () => ({
    components: { Component: WithChildrenExample },
    template: '<Component />',
  }),
}

