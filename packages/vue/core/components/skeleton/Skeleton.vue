<script lang="ts">
export interface SkeletonProps extends ThemeProps {
  class?: HTMLAttributes['class']
  variant?: SkeletonVariants['variant']
  shape?: SkeletonVariants['shape']
}
</script>

<script setup lang="ts">
import type { SkeletonVariants } from '@rui-ark/themes/crafts/skeleton'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { tvSkeleton } from '@rui-ark/themes/crafts/skeleton'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  variant = 'pulse',
  shape = 'rect',
  unstyled,
} = defineProps<SkeletonProps>()

const theme = useTheme(() => ({ unstyled }))
</script>

<template>
  <div
    :class="tvSkeleton({ class: [propsClass], variant, shape, ...theme })"
    :data-shape="shape"
    :data-variant="variant"
  >
    <slot />
  </div>
</template>
