import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-tabs'

export const tvTabs = tv({
  slots: {
    root: '',
    list: ['flex', 'items-center', 'relative', 'overflow-hidden'],
    trigger: [
      'inline-flex',
      'items-center',
      'justify-center',
      'whitespace-nowrap',
      'rounded',
      'transition-all',
      'outline-offset-[-2px]',
      'disabled:pointer-events-none',
      'disabled:opacity-(--disabled-opacity)',
    ],
    content: ['mt-2', 'data-[state=active]:animate-duration-200'],
  },

  variants: {
    size: {
      base: {
        trigger: 'px-3.75 py-2.5 text-sm',
      },
      sm: {
        trigger: 'px-3 py-2 text-xs',
      },
      lg: {
        trigger: 'px-4.5 py-3 text-base',
      },
    },
  },
  defaultVariants: {
    size: 'base',
  },
}, {
  slots: {
    root: prefix,
    list: `${prefix}-list`,
    trigger: `${prefix}-trigger`,
    content: `${prefix}-content`,
  },
})

export type TabsVariants = VariantProps<typeof tvTabs>
