import type { Meta } from 'storybook-vue3-rsbuild'

import BasicExample from './examples/basic.vue'
import ContentCloseExample from './examples/content-close.vue'
import ControlledAndEventsExample from './examples/controlled-and-events.vue'
import FooterWidgetExample from './examples/footer-widget.vue'
import FunctionalExample from './examples/functional.vue'
import ScrollableExample from './examples/scrollable.vue'
import VariantsExample from './examples/variants.vue'

const meta: Meta = {
  title: 'Components/Dialog',
}

export default meta

export const Basic = {
  render: () => ({
    components: { Component: BasicExample },
    template: '<Component />',
  }),
}

export const ControlledAndEvents = {
  render: () => ({
    components: { Component: ControlledAndEventsExample },
    template: '<Component />',
  }),
}

export const Variants = {
  render: () => ({
    components: { Component: VariantsExample },
    template: '<Component />',
  }),
}

export const Scrollable = {
  render: () => ({
    components: { Component: ScrollableExample },
    template: '<Component />',
  }),
}

export const ContentClose = {
  render: () => ({
    components: { Component: ContentCloseExample },
    template: '<Component />',
  }),
}

export const FooterWidget = {
  render: () => ({
    components: { Component: FooterWidgetExample },
    template: '<Component />',
  }),
}

export const Functional = {
  render: () => ({
    components: { Component: FunctionalExample },
    template: '<Component />',
  }),
}
