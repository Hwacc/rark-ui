import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import PrefixSuffixAndUiExample from './examples/prefix-suffix-and-ui.vue'
import SizesExample from './examples/sizes.vue'
import StatesExample from './examples/states.vue'

const meta: Meta = {
  title: 'Components/Input',
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

export const PrefixSuffixAndUi = {
  render: () => ({
    components: { Component: PrefixSuffixAndUiExample },
    template: '<Component />',
  }),
}

