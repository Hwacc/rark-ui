import type { VariantProps } from '../../../shared/utils/tv'
import { tv } from '../../../shared/utils/tv'

const prefix = 'rui-icon'

export const tvIcon = tv(
  {
    base: 'size-[1lh]',
  },
  {
    class: prefix,
  },
)

export type IconVariants = VariantProps<typeof tvIcon>
