<script lang="ts">
export interface FloatingPanelHeaderProps extends FloatingPanelHeaderBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    title?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { FloatingPanelHeaderBaseProps } from '@ark-ui/vue'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { FloatingPanel, useForwardProps } from '@ark-ui/vue'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ui,
  ...props
} = defineProps<FloatingPanelHeaderProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvFloatingPanel())
</script>

<template>
  <FloatingPanel.DragTrigger>
    <FloatingPanel.Header
      v-bind="forwarded"
      :class="crafts.header({ class: [ui?.root, propsClass], ...theme })"
    >
      <FloatingPanel.Title :class="crafts.title({ class: ui?.title, ...theme })">
        <slot />
      </FloatingPanel.Title>
      <FloatingPanel.Control :class="crafts.control({ class: ui?.control, ...theme })">
        <slot name="control" />
      </FloatingPanel.Control>
    </FloatingPanel.Header>
  </FloatingPanel.DragTrigger>
</template>
