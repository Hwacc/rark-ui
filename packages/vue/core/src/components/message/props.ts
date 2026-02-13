import type {
  CreateToasterReturn,
  ToastRootBaseProps,
  ToastStoreProps,
  UseToastContext,
} from '@ark-ui/vue'
import type { ThemeCrafts, ThemeNoCrafts } from '@rark-ui/vue/providers'
import type * as toast from '@zag-js/toast'
import type { HTMLAttributes, UnwrapRef, VNode, VNodeChild } from 'vue'

export interface MessagerExpose {
  messager: CreateToasterReturn
}

export interface MessageOptions<T = any> extends Omit<toast.Options<T>, 'title' | 'description'> {
  theme?: ThemeNoCrafts['theme']
  description?: VNodeChild | ((context: UnwrapRef<UseToastContext>) => VNode)
  render?: (context: UnwrapRef<UseToastContext>) => any
  showClose?: boolean
}

export interface MessageProps extends ToastRootBaseProps, ThemeNoCrafts {
  options: MessageOptions
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    content?: HTMLAttributes['class']
    description?: HTMLAttributes['class']
    icon?: HTMLAttributes['class']
    close?: HTMLAttributes['class']
  }
}

export interface MessagerProps
  extends /* @vue-ignore */ Omit<ToastStoreProps, 'placement'>,
  ThemeCrafts<'tvMessage'> {
  showClose?: boolean
}
