import type { VariantProps } from '../../utils/tv'
import { tv } from '../../utils/tv'

const prefix = 'rui-toggle'

export const tvToggle = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'px-4',
    'gap-2',
    'rounded',
    'border',
    'transition-all',
    'disabled:pointer-events-none',
    'disabled:opacity-(--disabled-opacity)',
    '[&_svg]:pointer-events-none',
    '[&_svg]:shrink-0',
  ],
  variants: {
    size: {
      base: 'h-[1.75rem] text-sm',
      sm: 'h-[1.5rem] text-xs',
      lg: 'h-[2rem] text-base',
    },
  },
  defaultVariants: {
    size: 'base',
  },
}, {
  class: prefix,
})

export type ToggleVariants = VariantProps<typeof tvToggle>
