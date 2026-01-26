import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-tags-input'

export const tvTagsInput = tv(
  {
    slots: {
      root: ['flex flex-col'],
      control: [
        'flex',
        'items-center',
        'rounded-md',
        'border',
        'rounded',
        'py-[.375rem]',
        'px-2',
        'gap-2',
        'overflow-hidden',
      ],
      scrollArea: '',
      scrollAreaContent: '',
      input: ['focus:outline-none', 'bg-transparent'],
      item: '',
      itemPreview: 'flex items-center gap-2',
      itemText: '',
    },

    variants: {
      size: {
        base: {
          input: 'text-sm',
        },
        sm: {
          input: 'text-xs',
        },
        lg: {
          input: 'text-base',
        },
      },
      inline: {
        true: {
          control: 'flex-nowrap',
          scrollArea: 'flex-shrink-0 max-w-[calc(100%-var(--spacing)*10)]',
          scrollAreaContent: 'flex flex-nowrap gap-2',
          input: 'flex-shrink-1 min-w-5',
        },
        false: {
          control: 'flex-wrap',
        },
      },
    },
    defaultVariants: {
      size: 'base',
      inline: true,
    },
  },
  {
    slots: {
      root: prefix,
      control: `${prefix}-control`,
      input: `${prefix}-input`,
      scrollArea: `${prefix}-scroll-area`,
      scrollAreaContent: `${prefix}-scroll-area-content`,
      item: `${prefix}-item`,
      itemPreview: `${prefix}-item-preview`,
      itemText: `${prefix}-item-text`,
    },
  },
)

export type TagsInputVariantProps = VariantProps<typeof tvTagsInput>
