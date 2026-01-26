import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'

export { default as Spin, type SpinProps } from './Spin.vue'
export { default as SpinProvider } from './SpinProvider.vue'

export interface SpinRenderProps {
  class?: HTMLAttributes['class']
  size?: ThemeProps['size']
  unstyled?: ThemeProps['unstyled']
  mode?: 'fullscreen' | 'inline'
}
