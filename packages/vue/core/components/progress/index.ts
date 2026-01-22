import type { ProgressVariantProps } from '@rui-ark/themes/crafts/progress'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'

export { default as Progress, type ProgressProps } from './Progress.vue'
export { default as ProgressArc, type ProgressArcProps } from './ProgressArc.vue'
export { default as ProgressCircle, type ProgressCircleProps } from './ProgressCircle.vue'
export { default as ProgressLinear, type ProgressLinearProps } from './ProgressLinear.vue'

export interface ProgressCircleTheme extends Omit<ThemeProps, 'size'> {
  size?: ProgressVariantProps['size'] | number
}
