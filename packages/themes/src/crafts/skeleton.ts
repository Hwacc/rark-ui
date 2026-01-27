import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-skeleton'

export const tvSkeleton = tv(
  {
    base: '',
    variants: {
      variant: {
        pulse: 'animate-pulse',
        wave: 'animate-skeleton-wave animate-infinite',
      },
      shape: {
        rect: 'rounded',
        circle: 'rounded-full',
      },
    },
  },
  { class: prefix },
)

export type SkeletonVariants = VariantProps<typeof tvSkeleton>
