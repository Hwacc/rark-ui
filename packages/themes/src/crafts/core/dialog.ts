import type { VariantProps } from '../../utils/tv'
import { tv } from '../../utils/tv'

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
      positioner: ['fixed', 'inset-0', 'z-(--z-modal)', 'flex', 'items-center', 'justify-center'],
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
      close: '',
      header: ['flex', 'items-center', 'justify-between'],
      title: [],
      body: ['flex-1', 'overflow-y-auto'],
      footer: ['flex', 'items-center', 'justify-end'],
    },
    variants: {
      size: {
        base: {
          body: 'p-5 text-sm',
          footer: 'p-4 gap-5 text-sm',
          header: 'py-2.5 pl-5 pr-4 text-sm',
          close: [
            'p-0.5',
            'text-sm',
            'data-[variant=content-close]:p-0',
            'data-[variant=content-close]:pt-2',
            'data-[variant=content-close]:pr-2',
          ],
        },
        sm: {
          body: 'p-6 text-xl',
          footer: 'p-4 text-base',
          header: 'py-2.5 pl-6 pr-4 text-base',
          close: [
            'text-base',
            'data-[variant=content-close]:pt-2.5',
            'data-[variant=content-close]:pr-2.5',
          ],
        },
        lg: {
          body: 'p-6 text-xl',
          footer: 'p-4 text-base',
          header: 'py-2.5 pl-6 pr-4 text-base',
          close: [
            'text-base',
            'data-[variant=content-close]:pt-2.5',
            'data-[variant=content-close]:pr-2.5',
          ],
        },
      },
    },
    defaultVariants: {
      size: 'base',
    },
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
