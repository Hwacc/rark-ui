import type { CheckboxRootProps } from '@ark-ui/vue/checkbox'
import type { ThemeCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export type CheckedState = boolean | 'indeterminate'
export interface CheckboxProps extends CheckboxRootProps, ThemeCrafts<'tvCheckbox'> {
  label?: string
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    indicator?: HTMLAttributes['class']
    label?: HTMLAttributes['class']
  }
}
