import type { CreateToasterReturn, ToastRootBaseProps, ToastStoreProps } from '@ark-ui/vue'
import type { ThemeCrafts, ThemeNoCrafts } from '@rark-ui/vue/providers'
import type * as toast from '@zag-js/toast'
import type * as ZagToast from '@zag-js/toast'
import type {
  ComputedRef,
  CSSProperties,
  HTMLAttributes,
  NativeElements,
  ReservedProps,
  UnwrapRef,
  VNode,
  VNodeChild,
} from 'vue'

type Attrs<T> = T & ReservedProps
type PropTypes = NativeElements & {
  element: Attrs<HTMLAttributes>
  style: CSSProperties
}
export interface UseToastContext extends ComputedRef<ZagToast.Api<PropTypes>> {}
export interface ToastOptions<T = any> extends Omit<toast.Options<T>, 'title' | 'description'> {
  placement?: toast.Placement
  theme?: ThemeNoCrafts['theme']
  title?: VNodeChild | ((context: UnwrapRef<UseToastContext>) => VNode)
  description?: VNodeChild | ((context: UnwrapRef<UseToastContext>) => VNode)
  render?: (context: UnwrapRef<UseToastContext>) => any
}

export const DEFAULT_TOASTER_ID = 'default-toaster'
export interface ToasterManagerExpose {
  toasters: ToasterWrap[]
}
export interface ToasterWrap {
  toasterId?: string
  toaster: CreateToasterReturn
}

export interface ToastProps extends ToastRootBaseProps, ThemeNoCrafts {
  options: ToastOptions
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    content?: HTMLAttributes['class']
    inner?: HTMLAttributes['class']
    title?: HTMLAttributes['class']
    description?: HTMLAttributes['class']
    icon?: HTMLAttributes['class']
    close?: HTMLAttributes['class']
  }
}
export interface ToasterProps extends /* @vue-ignore */ ToastStoreProps, ThemeCrafts<'tvToast'> {
  toasterId?: string
}
export interface ToasterManagerProps {
  disableDefaultToaster?: boolean
  defaultToasterProps?: ToasterProps
}
