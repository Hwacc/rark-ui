import type { VariantProps } from '../../utils/tv'
import { tv } from '../../utils/tv'

const prefix = 'rui-v-title'

export const tvVTitle = tv({
  base: [
    'absolute',
    'max-w-125',
    'rounded',
    'break-words',
    'border',
    'z-(--z-devtools)',
  ],
  variants: {
    size: {
      base: 'text-xs px-1 py-0.5',
      lg: 'text-sm px-2 py-1.25',
    },
    hidden: {
      true: '',
      false: '',
    },
    visible: {
      true: 'visible',
      false: 'invisible',
    },
  },
  defaultVariants: {
    size: 'base',
    hidden: true,
    visible: false,
  },
}, {
  class: prefix,
})

export type VTitleVariants = VariantProps<typeof tvVTitle>
