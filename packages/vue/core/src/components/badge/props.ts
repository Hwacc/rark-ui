import type { BadgeVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts } from '@rui-ark/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface BadgeProps extends ThemeCrafts<'tvBadge'> {
  class?: HTMLAttributes['class']
  variant?: BadgeVariants['variant']
  as?: 'div' | 'sup'
  asChild?: boolean
}
