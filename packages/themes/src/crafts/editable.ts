import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'
import { tvInput } from './input'

const prefix = 'rui-editable'

export const tvEditable = tv(
  {
    slots: {
      root: [],
      area: [],
      preview: [],
    },
    variants: {
      size: {
        base: '',
        sm: '',
        lg: '',
      },
    },
    defaultVariants: { size: 'base' },
  },
  {
    slots: {
      root: prefix,
      area: `${prefix}-area`,
      preview: `${prefix}-preview`,
    },
  },
)

export const tvEditableInput = tv(
  {
    extend: tvInput,
    compoundVariants: [
      {
        size: 'base',
        class: {
          clearable: 'size-3.5',
        },
      },
      {
        size: 'sm',
        class: {
          clearable: 'size-3',
        },
      },
      {
        size: 'lg',
        class: {
          clearable: 'size-4',
        },
      },
    ],
  },
  {
    slots: {
      root: `${prefix}-input`,
      inner: `${prefix}-input-inner`,
      clearable: `${prefix}-input-clearable`,
    },
  },
)

export type EditableVariants = VariantProps<typeof tvEditable>
export type EditableInputVariants = VariantProps<typeof tvEditableInput>
