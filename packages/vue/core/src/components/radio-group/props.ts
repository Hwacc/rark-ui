import type { RadioGroupItemBaseProps, RadioGroupRootBaseProps } from '@ark-ui/vue'
import type { RadioGroupVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts, ThemeNoCrafts } from '@rui-ark/vue/providers'
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
