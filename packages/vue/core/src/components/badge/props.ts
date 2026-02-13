import type { BadgeVariants } from '@rark-ui/themes/default'
import type { ThemeCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface BadgeProps extends ThemeCrafts<'tvBadge'> {
  class?: HTMLAttributes['class']
  variant?: BadgeVariants['variant']
  as?: 'div' | 'sup'
  asChild?: boolean
}
