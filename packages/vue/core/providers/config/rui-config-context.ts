import type { CreateToasterReturn } from '@ark-ui/vue'
import type {
  IconifyIcon,
  IconifyJSON,
  PartialIconifyAPIConfig,
} from '@iconify/vue'
import type { ComputedRef } from 'vue'
import type { ThemeProps } from '../theme/theme-props'
import { createContext } from '@ark-ui/vue'

export interface RUIConfigContext {
  'theme'?: ThemeProps
  'tooltip'?: {
    closeDelay?: number
    openDelay?: number
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'hover-card'?: {
    closeDelay?: number
    openDelay?: number
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'dialog'?: {
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'popover'?: {
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'menu'?: {
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'select'?: {
    lazyMount?: boolean
    unmountOnExit?: boolean
  }
  'iconify'?: {
    addIcons?: Array<[string, IconifyIcon | null]>
    addCollections?: Array<[IconifyJSON, string | undefined]>
    addAPIProviders?: Array<[string, PartialIconifyAPIConfig]>
  }
  'toasters'?: {
    toasters: { toaster: CreateToasterReturn }[]
  }
}

export const [provideRUIConfigContext, injectRUIConfigContext]
  = createContext<ComputedRef<RUIConfigContext>>('RUIConfigContext')
