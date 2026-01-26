import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'
import { tvInput } from './input'

const inputPrefix = 'rui-input'
const prefix = 'rui-hotkey'

const { root: inputRoot, inner: inputInner } = tvInput()
export const tvHotkey = tv(
  {
    slots: {
      root: [inputRoot({ unstyled: true }), 'relative'],
      inner: [inputInner({ unstyled: true })],
    },
    variants: {
      size: {
        base: {
          root: [inputRoot({ size: 'base', unstyled: true })],
          inner: [inputInner({ size: 'base', unstyled: true })],
        },
        sm: {
          root: [inputRoot({ size: 'sm', unstyled: true })],
          inner: [inputInner({ size: 'sm', unstyled: true })],
        },
        lg: {
          root: [inputRoot({ size: 'lg', unstyled: true })],
          inner: [inputInner({ size: 'lg', unstyled: true })],
        },
      },
    },
  },
  {
    slots: {
      root: [inputPrefix, prefix],
      inner: [`${inputPrefix}-inner`, `${prefix}-inner`],
    },
  },
)

export type HotkeyVariants = VariantProps<typeof tvHotkey>
