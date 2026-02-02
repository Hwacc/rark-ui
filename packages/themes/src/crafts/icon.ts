import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-icon'

export const tvIcon = tv(
  {
    base: 'w-[1em] w-[1lh] h-[1em] h-[1lh]',
  },
  {
    class: prefix,
  },
)

export type IconVariants = VariantProps<typeof tvIcon>
