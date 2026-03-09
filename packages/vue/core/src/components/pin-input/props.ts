import type { PinInputRootBaseProps } from '@ark-ui/vue'
import type { ThemeCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface PinInputProps extends PinInputRootBaseProps, ThemeCrafts<'tvPinInput'> {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    input?: HTMLAttributes['class']
  }
  count: number
}
