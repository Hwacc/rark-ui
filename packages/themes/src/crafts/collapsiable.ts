import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-collapsiable'

export const tvCollapsiable = tv({
  slots: {
    root: [],
    trigger: [],
    content: [
      'overflow-hidden',
      'transition-all',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',
    ],
  },
}, {
  slots: {
    root: prefix,
    trigger: `${prefix}-trigger`,
    content: `${prefix}-content`,
  },
})

export type CollapsiableVariants = VariantProps<typeof tvCollapsiable>
