import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-scroll-area'

export const tvScrollArea = tv({
  slots: {
    root: 'overflow-hidden',
    viewport: 'size-full scrollbar-none scrollbar-none::-webkit-scrollbar',
    content: '',
    scrollbar: '',
    thumb: 'rounded-full',
    corner: '',
  },

  variants: {
    size: {
      base: '',
      sm: '',
      lg: '',
      xs: '',
    },
    orientation: {
      vertical: {
        scrollbar: 'px-0.25',
      },
      horizontal: {
        scrollbar: 'py-0.25',
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      size: 'base',
      class: {
        scrollbar: 'w-2',
        thumb: 'w-1.5',
      },
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: {
        scrollbar: 'w-1.5',
        thumb: 'w-1',
      },
    },
    {
      orientation: 'vertical',
      size: 'xs',
      class: {
        scrollbar: 'w-1',
        thumb: 'w-0.5',
      },
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: {
        scrollbar: 'w-2.5',
        thumb: 'w-2',
      },
    },
    {
      orientation: 'horizontal',
      size: 'base',
      class: {
        scrollbar: 'h-2',
        thumb: 'h-1.5',
      },
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      class: {
        scrollbar: 'h-1.5',
        thumb: 'h-1',
      },
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: {
        scrollbar: 'h-2.5',
        thumb: 'h-2',
      },
    },
    {
      orientation: 'horizontal',
      size: 'xs',
      class: {
        scrollbar: 'h-1',
        thumb: 'h-0.5',
      },
    },
  ],

  defaultVariants: {
    size: 'base',
    orientation: 'vertical',
  },
}, {
  slots: {
    root: prefix,
    viewport: `${prefix}-viewport`,
    content: `${prefix}-content`,
    scrollbar: `${prefix}-scrollbar`,
    thumb: `${prefix}-thumb`,
    corner: `${prefix}-corner`,
  },
})

export type ScrollAreaVariantProps = VariantProps<typeof tvScrollArea>
