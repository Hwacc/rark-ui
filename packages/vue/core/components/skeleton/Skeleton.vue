<script lang="ts">
export interface SkeletonProps extends ThemeCrafts<'tvSkeleton'> {
  class?: HTMLAttributes['class']
  variant?: SkeletonVariants['variant']
  shape?: SkeletonVariants['shape']
}
</script>

<script setup lang="ts">
import type { SkeletonVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  variant = 'pulse',
  shape = 'rect',
  theme: propsTheme,
} = defineProps<SkeletonProps>()

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts)
</script>

<template>
  <div
    :class="crafts.tvSkeleton({ class: [propsClass], variant, shape, ...theme })"
    :data-shape="shape"
    :data-variant="variant"
  >
    <slot />
  </div>
</template>
