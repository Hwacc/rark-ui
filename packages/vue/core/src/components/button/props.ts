import type { ButtonVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts } from '@rui-ark/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface ButtonProps extends ThemeCrafts<'tvButton'> {
  variant?: ButtonVariants['variant'] | string
  class?: HTMLAttributes['class']
  disabled?: boolean
  tooltip?: string
  ripple?: boolean
  loading?: boolean
  asChild?: boolean
  ui?: {
    root?: {
      class?: HTMLAttributes['class']
    }
    loading?: {
      class?: HTMLAttributes['class']
    }
  }
}
