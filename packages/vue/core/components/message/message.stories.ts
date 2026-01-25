import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import CustomRenderExample from './examples/custom-render.vue'
import MessagerPropsExample from './examples/messager-props.vue'
import PromiseExample from './examples/promise.vue'
import SizesAndCloseExample from './examples/sizes-and-close.vue'

const meta: Meta = {
  title: 'Components/Message',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const SizesAndClose = {
  render: () => ({
    components: { Component: SizesAndCloseExample },
    template: '<Component />',
  }),
}

export const CustomRender = {
  render: () => ({
    components: { Component: CustomRenderExample },
    template: '<Component />',
  }),
}

export const Promise = {
  render: () => ({
    components: { Component: PromiseExample },
    template: '<Component />',
  }),
}

export const MessagerProps = {
  render: () => ({
    components: { Component: MessagerPropsExample },
    template: '<Component />',
  }),
}

