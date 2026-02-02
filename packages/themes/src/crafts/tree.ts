import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-tree'

export const tvTree = tv(
  {
    slots: {
      root: '',
      tree: '',
    },
  },
  {
    slots: {
      root: prefix,
      tree: `${prefix}-tree`,
    },
  },
)

export type TreeVariants = VariantProps<typeof tvTree>

export const tvTreeBranch = tv(
  {
    slots: {
      root: '',
      control: 'flex items-center justify-between',
      title: '',
      text: '',
      icon: '',
      indicator: '',
      content: '',
      indentGuide: '',
    },

    variants: {
      size: {
        base: {
          title: 'text-sm',
          icon: 'size-4',
          indicator: 'size-4',
        },
        sm: {
          title: 'text-xs',
          icon: 'size-3.5',
          indicator: 'size-3.5',
        },
        lg: {
          title: 'text-base',
          icon: 'size-4.5',
          indicator: 'size-4.5',
        },
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
  {
    slots: {
      root: `${prefix}-branch-root`,
      control: `${prefix}-branch-control`,
      title: `${prefix}-branch-title`,
      text: `${prefix}-branch-text`,
      icon: `${prefix}-branch-icon`,
      indicator: `${prefix}-branch-indicator`,
      content: `${prefix}-branch-content`,
      indentGuide: `${prefix}-branch-indent-guide`,
    },
  },
)
