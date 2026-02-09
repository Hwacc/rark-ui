<script lang="ts">
export interface ScrollAreaCornerProps extends ScrollAreaCornerBaseProps {
  class?: HTMLAttributes['class']
  theme?: ScrollAreaTheme
}
</script>

<script setup lang="ts">
import type { ScrollAreaCornerBaseProps } from '@ark-ui/vue/scroll-area'
import type { HTMLAttributes } from 'vue'
import type { ScrollAreaTheme } from '.'
import { useForwardProps } from '@ark-ui/vue'
import { ScrollArea } from '@ark-ui/vue/scroll-area'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<ScrollAreaCornerProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme<ScrollAreaTheme>(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvScrollArea())
</script>

<template>
  <ScrollArea.Corner v-bind="forwarded" :class="crafts.corner({ class: propsClass, ...theme })" />
</template>
