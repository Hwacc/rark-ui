import type { RadioGroupItemBaseProps, RadioGroupRootBaseProps } from '@ark-ui/vue'
import type { RadioGroupVariants } from '@rark-ui/themes/default'
import type { ThemeCrafts, ThemeNoCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface RadioGroupProps extends RadioGroupRootBaseProps, ThemeCrafts<'tvRadioGroup'> {
  class?: HTMLAttributes['class']
}

export interface RadioGroupItemProps extends RadioGroupItemBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  label?: string
  variant?: RadioGroupVariants['variant']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    indicator?: HTMLAttributes['class']
    text?: HTMLAttributes['class']
  }
}
