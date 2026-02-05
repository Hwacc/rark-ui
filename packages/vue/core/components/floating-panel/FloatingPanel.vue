<script lang="ts">
export interface FloatingPanelProps extends FloatingPanelRootBaseProps, Theme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { FloatingPanelRootBaseProps, FloatingPanelRootEmits } from '@ark-ui/vue'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { FloatingPanel, useFloatingPanel, useForwardProps } from '@ark-ui/vue'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'

const {
  class: propsClass,
  theme: propsTheme,
  lazyMount = undefined,
  unmountOnExit = undefined,
  ...props
} = defineProps<FloatingPanelProps>()
const emit = defineEmits<FloatingPanelRootEmits>()
const floatingPanel = useFloatingPanel(useForwardProps(props), emit)

// theme
const theme = useTheme(() => propsTheme)
</script>

<template>
  <FloatingPanel.RootProvider :value="floatingPanel">
    <ThemeProvider :value="theme">
      <slot />
    </ThemeProvider>
  </FloatingPanel.RootProvider>
</template>
