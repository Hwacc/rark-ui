import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-radio-group'

export const tvRadioGroup = tv(
  {
    slots: {
      root: ['flex', 'items-center'],
      item: ['inline-flex', 'items-center', 'w-fit', 'gap-2', 'group/item'],
      itemControl: [
        'flex',
        'items-center',
        'justify-center',
        'aspect-square',
        'shrink-0',
        'rounded-full',
        'border',
      ],
      itemIndicator: '',
      itemText: '',
    },
    variants: {
      size: {
        sm: {
          itemControl: 'size-3',
          itemIndicator: 'size-1.5',
          itemText: 'text-xs',
        },
        base: {
          itemControl: 'size-3.5',
          itemIndicator: 'size-1.75',
          itemText: 'text-sm',
        },
        lg: {
          itemControl: 'size-4',
          itemIndicator: 'size-2',
          itemText: 'text-base',
        },
      },
      variant: {
        default: {
          itemIndicator: 'motion-scale-in-0',
        },
        checkbox: {
          itemIndicator: 'stroke-[.125rem] [&>path]:animate-check-dash',
        },
      },
    },
    defaultVariants: {
      size: 'base',
    },
    compoundVariants: [
      {
        size: 'sm',
        variant: 'checkbox',
        class: {
          itemIndicator: 'size-2',
        },
      },
      {
        size: 'base',
        variant: 'checkbox',
        class: {
          itemIndicator: 'size-2.5',
        },
      },
      {
        size: 'lg',
        variant: 'checkbox',
        class: {
          itemIndicator: 'size-3',
        },
      },
    ],
  },
  {
    slots: {
      root: prefix,
      item: `${prefix}-item`,
      itemControl: `${prefix}-item-control`,
      itemIndicator: `${prefix}-item-indicator`,
      itemText: `${prefix}-item-text`,
    },
  },
)

export type RadioGroupVariants = VariantProps<typeof tvRadioGroup>
