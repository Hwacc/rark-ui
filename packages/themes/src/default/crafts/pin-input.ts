import type { VariantProps } from '../../utils'
import { tv } from '../../utils'

const prefix = 'rui-pin-input'

export const tvPinInput = tv(
  {
    slots: {
      root: '',
      control: 'p-0',
      input: '',
    },
    variants: {
      size: {
        xs: {
          input: 'text-xs',
        },
        sm: {
          input: 'text-sm',
        },
        base: {
          input: 'text-base',
        },
        lg: {
          input: 'text-lg',
        },
      },
    },

    defaultVariants: {
      size: 'base',
    },
  },
  {
    slots: {
      root: prefix,
      control: `${prefix}-control`,
      input: `${prefix}-input`,
    },
  },
)

export type PinInputVariants = VariantProps<typeof tvPinInput>
