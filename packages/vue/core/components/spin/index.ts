import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'

export { default as Spin, type SpinProps } from './Spin.vue'
export { default as SpinProvider } from './SpinProvider.vue'

export interface SpinRenderProps extends Theme {
  class?: HTMLAttributes['class']
  mode?: 'fullscreen' | 'inline'
}
