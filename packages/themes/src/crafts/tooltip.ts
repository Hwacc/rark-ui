import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-tooltip'

export const tvTooltip = tv(
  {
    slots: {
      content: [
        'rounded',
        'motion-opacity-in',
        'motion-scale-in-95',
        'data-[placement=bottom]:motion-translate-y-in-[8px]',
        'data-[placement=top]:-motion-translate-y-in-[8px]',
        'data-[placement=left]:motion-translate-x-in-[8px]',
        'data-[placement=right]:-motion-translate-x-in-[8px]',
        'data-[state=closed]:motion-opacity-out',
        'data-[state=closed]:motion-scale-out-95',
      ],
      contentInner: ['relative', 'rounded', 'z-10'],
      arrow: 'rotate-45 z-0',
    },
    variants: {
      size: {
        base: '',
        sm: '',
        lg: '',
      },
      bordered: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        class: {
          contentInner: 'px-1.5 py-0.5 text-xs',
        },
      },
      {
        size: 'base',
        class: {
          contentInner: 'px-2 py-1 text-sm',
        },
      },
      {
        size: 'lg',
        class: {
          contentInner: 'px-2.5 py-1.5 text-base',
        },
      },
      {
        bordered: true,
        class: {
          content: 'border',
          arrow: 'border',
        },
      },
    ],
  },
  {
    slots: {
      content: `${prefix}-content`,
      contentInner: `${prefix}-content-inner`,
      arrow: `${prefix}-arrow`,
    },
  },
)

export type TooltipVariants = VariantProps<typeof tvTooltip>
