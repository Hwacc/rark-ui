import type { ProgressVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'

export { default as Progress, type ProgressProps } from './Progress.vue'
export { default as ProgressArc, type ProgressArcProps } from './ProgressArc.vue'
export { default as ProgressCircle, type ProgressCircleProps } from './ProgressCircle.vue'
export { default as ProgressLinear, type ProgressLinearProps } from './ProgressLinear.vue'

export { ProgressLabel, ProgressValueText, ProgressView } from '@ark-ui/vue/progress'
export interface ProgressCircleTheme extends Omit<ThemeNoCrafts, 'size'> {
  size?: ProgressVariants['size'] | number
}
