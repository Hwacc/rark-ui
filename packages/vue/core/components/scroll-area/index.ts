import type { ScrollAreaVariants } from '@rui-ark/themes/crafts/scroll-area'
import type { ThemeProps } from '@rui-ark/vue/providers/theme'

export { default as ScrollArea } from './ScrollArea.vue'
export type { ScrollAreaProps } from './ScrollArea.vue'

export { default as ScrollAreaCorner } from './ScrollAreaCorner.vue'
export type { ScrollAreaCornerProps } from './ScrollAreaCorner.vue'

export { default as ScrollAreaScrollbar } from './ScrollAreaScrollbar.vue'
export type { ScrollAreaScrollbarProps } from './ScrollAreaScrollbar.vue'

export interface ScrollAreaTheme extends Omit<ThemeProps, 'size'> {
  size?: ScrollAreaVariants['size']
}
