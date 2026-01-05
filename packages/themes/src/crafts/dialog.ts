import type { VariantProps } from '../utils/tv'
import { tv } from '../utils/tv'

const prefix = 'rui-dialog'

export const tvDialog = tv(
  {
    slots: {
      backdrop: [
        'fixed',
        'inset-0',
        'z-(--z-overlay)',
        'data-[state=open]:motion-opacity-in',
        'data-[state=open]:animate-backdrop-blur-in',
        'data-[state=closed]:motion-opacity-out',
        'data-[state=closed]:animate-backdrop-blur-out',
      ],
      positioner: [
        'fixed',
        'inset-0',
        'z-(--z-modal)',
        'flex',
        'items-center',
        'justify-center',
      ],
      content: [
        'relative',
        'max-w-full',
        'md:max-w-[80vw]',
        'border',
        'rounded',
        'data-[state=open]:motion-opacity-in',
        'data-[state=open]:motion-translate-y-in',
        'data-[state=closed]:motion-opacity-out',
        'data-[state=closed]:motion-translate-y-out',
      ],
      close: [
        'p-0.5',
        '[&_svg]:size-4',
        'data-[variant=content-close]:p-0',
        'data-[variant=content-close]:pt-2',
        'data-[variant=content-close]:pr-2',
      ],
      header: [
        'flex',
        'items-center',
        'justify-between',
        'py-2.5',
        'pl-5',
        'pr-4',
        'text-sm',
      ],
      title: [],
      body: ['flex-1', 'p-5', 'text-base', 'overflow-y-auto'],
      footer: [
        'flex',
        'items-center',
        'justify-end',
        'gap-5',
        'p-4',
        'text-sm',
      ],
    },
    variants: {
      size: {
        base: '',
        sm: '',
        lg: '',
      },
    },

    compoundVariants: [
      {
        size: 'sm',
        class: {
          body: 'p-4 text-sm',
          footer: 'p-3 text-xs',
          header: 'py-1.5 pl-4 pr-3 text-xs',
          close: [
            '[&_svg]:size-3',
            'data-[variant=content-close]:pt-1.5',
            'data-[variant=content-close]:pr-1.5',
          ],
        },
      },
      {
        size: 'lg',
        class: {
          body: 'p-6 text-xl',
          footer: 'p-4 text-base',
          header: 'py-2.5 pl-6 pr-4 text-base',
          close: [
            '[&_svg]:size-4.5',
            'data-[variant=content-close]:pt-2.5',
            'data-[variant=content-close]:pr-2.5',
          ],
        },
      },
    ],
  },
  {
    slots: {
      backdrop: `${prefix}-backdrop`,
      positioner: `${prefix}-positioner`,
      content: `${prefix}-content`,
      header: `${prefix}-header`,
      close: `${prefix}-close`,
      title: `${prefix}-title`,
      body: `${prefix}-body`,
      footer: `${prefix}-footer`,
    },
  },
)

export type DialogVariants = VariantProps<typeof tvDialog>
