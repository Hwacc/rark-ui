import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ControlledExample from './examples/controlled.vue'
import MarkersAndTooltipsExample from './examples/markers-and-tooltips.vue'
import RangeExample from './examples/range.vue'
import SizesExample from './examples/sizes.vue'
import VerticalAndDisabledExample from './examples/vertical-and-disabled.vue'

const meta: Meta = {
  title: 'Components/Slider',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const Range = {
  render: () => ({
    components: { Component: RangeExample },
    template: '<Component />',
  }),
}

export const MarkersAndTooltips = {
  render: () => ({
    components: { Component: MarkersAndTooltipsExample },
    template: '<Component />',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Component: SizesExample },
    template: '<Component />',
  }),
}

export const VerticalAndDisabled = {
  render: () => ({
    components: { Component: VerticalAndDisabledExample },
    template: '<Component />',
  }),
}

export const Controlled = {
  render: () => ({
    components: { Component: ControlledExample },
    template: '<Component />',
  }),
}

