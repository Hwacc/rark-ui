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
    content: ['mt-2', 'data-[state=open]:motion-translate-x-in', 'data-[state=closed]:motion-translate-x-out'],
    indicator: [],
  },

  variants: {
    size: {
      base: {
        trigger: 'text-sm',
      },
      sm: {
        trigger: 'text-xs',
      },
      lg: {
        trigger: 'text-base',
      },
    },
    orientation: {
      horizontal: {
        indicator: 'w-(--width) bottom-0',
      },
      vertical: {
        indicator: 'h-(--height)',
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'base',
      class: {
        trigger: 'px-3.75 py-2.5',
        indicator: 'h-1',
      },
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      class: {
        trigger: 'px-3 py-2',
        indicator: 'h-0.75',
      },
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: {
        trigger: 'px-4.5 py-3',
        indicator: 'h-1.5',
      },
    },
  ],
  defaultVariants: {
    size: 'base',
  },
}, {
  slots: {
    root: prefix,
    list: `${prefix}-list`,
    trigger: `${prefix}-trigger`,
    content: `${prefix}-content`,
    indicator: `${prefix}-indicator`,
  },
})

export type TabsVariants = VariantProps<typeof tvTabs>
