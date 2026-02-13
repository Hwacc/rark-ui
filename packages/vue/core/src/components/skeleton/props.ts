import type { SkeletonVariants } from '@rark-ui/themes/default'
import type { ThemeCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface SkeletonProps extends ThemeCrafts<'tvSkeleton'> {
  class?: HTMLAttributes['class']
  variant?: SkeletonVariants['variant']
  shape?: SkeletonVariants['shape']
}
