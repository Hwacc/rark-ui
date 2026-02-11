import type { SkeletonVariants } from '@rui-ark/themes/default'
import type { ThemeCrafts } from '@rui-ark/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface SkeletonProps extends ThemeCrafts<'tvSkeleton'> {
  class?: HTMLAttributes['class']
  variant?: SkeletonVariants['variant']
  shape?: SkeletonVariants['shape']
}
