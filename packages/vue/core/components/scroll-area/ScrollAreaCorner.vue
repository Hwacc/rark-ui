<script lang="ts">
export interface ScrollAreaCornerProps extends ScrollAreaCornerBaseProps, ScrollAreaTheme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { ScrollAreaCornerBaseProps } from '@ark-ui/vue/scroll-area'
import type { HTMLAttributes } from 'vue'
import type { ScrollAreaTheme } from '.'
import { useForwardProps } from '@ark-ui/vue'
import { ScrollArea } from '@ark-ui/vue/scroll-area'
import { tvScrollArea } from '@rui-ark/themes/crafts/scroll-area'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  size,
  unstyled = undefined,
  ...props
} = defineProps<ScrollAreaCornerProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme<ScrollAreaTheme>(() => ({ size, unstyled }))
const { corner } = tvScrollArea()
</script>

<template>
  <ScrollArea.Corner v-bind="forwarded" :class="corner({ class: propsClass, ...theme })" />
</template>
