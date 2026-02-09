<script lang="ts">
export interface BadgeProps extends ThemeCrafts<'tvBadge'> {
  class?: HTMLAttributes['class']
  variant?: BadgeVariants['variant']
  as?: 'div' | 'sup'
  asChild?: boolean
}
</script>

<script setup lang="ts">
import type { BadgeVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { useForwardProps } from '@rui-ark/vue/libs/useForwardProps'

const {
  variant,
  class: propsClass,
  theme: propsTheme,
  as = 'div',
  asChild,
  ...props
} = defineProps<BadgeProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
</script>

<template>
  <component
    :is="as === 'div' ? ark.div : ark.sup"
    v-bind="forwarded"
    :class="theme.crafts.tvBadge({ variant, class: propsClass, ...theme })"
    :data-variant="variant"
    :as-child="asChild"
  >
    <slot />
  </component>
</template>
