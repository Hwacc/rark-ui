/**
 * 函数式唤起Dialog
 */

import type { UseDialogContext } from '@ark-ui/vue/dialog'
import type { DialogVariants } from '@rui-ark/themes/crafts/dialog'
import type { HTMLAttributes, PropType } from 'vue'
import type {
  DialogTriggerFrom,
  OpenChangeDetails,
} from './dialog-intercept-context'
import { DialogContext } from '@ark-ui/vue/dialog'
import { getCssVar } from '@rui-ark/shared/css'
import { createApp, defineComponent, ref } from 'vue'
import { Dialog, DialogBody, DialogContent, DialogHeader } from '.'

interface DialogOptions {
  title?: string | ((context: UseDialogContext) => any)
  content?: string | ((context: UseDialogContext) => any)
  footer?: (context: UseDialogContext) => any
  render?: (context: UseDialogContext) => any
  ui?: {
    backdrop?: HTMLAttributes['class']
    positioner?: HTMLAttributes['class']
    content?: HTMLAttributes['class']
    close?: HTMLAttributes['class']
    header?: HTMLAttributes['class']
    body?: HTMLAttributes['class']
    footer?: HTMLAttributes['class']
  }
  size?: DialogVariants['size']
  unstyled?: boolean
}

export function dialog(options: DialogOptions) {
  const open = ref(false)
  const DialogComponent = defineComponent({
    name: 'Dialog',
    props: {
      onClose: {
        type: Function as PropType<
          (details: OpenChangeDetails & { from: DialogTriggerFrom }) => void
        >,
        default: () => {},
      },
    },
    setup(props) {
      return () => {
        return (
          <Dialog
            v-model={[open.value, 'open']}
            onOpenChange={(details) => {
              if (!details.open) {
                props.onClose?.(details)
              }
            }}
          >
            <DialogContext>
              {{
                default: (context: UseDialogContext) => {
                  console.log('context', context)
                  const comps = []
                  comps.push(<DialogHeader>test</DialogHeader>)
                  comps.push(<DialogBody>test</DialogBody>)
                  return <DialogContent>{comps}</DialogContent>
                },
              }}
            </DialogContext>
          </Dialog>
        )
      }
    },
  })

  let dialogRootEl: HTMLDivElement | null = document.createElement('div')
  const dialogVueInstance = createApp(DialogComponent, {
    onClose: () => {
      /**
       * HACK: Because ark-ui dialog didn't expose Precense 'exitComplete' event,
       * so we need to wait for the motion duration to unmount the dialog.
       * see: https://github.com/chakra-ui/ark/blob/c8c7aeef49d3f7de0ff6ddf05fc328714b97b98d/packages/vue/src/components/dialog/dialog-positioner.vue
       * this is a temporary solution, maybe we should create a PR to solve it.
       */
      const motionDuration = getCssVar('--motion-duration', '0.2')
      setTimeout(() => {
        dialogRootEl = null
        dialogVueInstance.unmount()
      }, parseFloat(motionDuration) * 1000)
    },
  })
  dialogVueInstance.mount(dialogRootEl)
  open.value = true
  return {
    close: () => {
      open.value = false
    },
  }
}
