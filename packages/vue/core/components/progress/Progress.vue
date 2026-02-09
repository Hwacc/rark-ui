<script lang="ts">
export interface ProgressProps extends ProgressRootBaseProps, Theme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { ProgressRootBaseProps, ProgressRootEmits } from '@ark-ui/vue/progress'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue'
import { Progress, useProgress } from '@ark-ui/vue/progress'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<ProgressProps>()
const emit = defineEmits<ProgressRootEmits>()
const forwarded = useForwardProps(props)
const progress = useProgress(forwarded, emit)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvProgress())

// expose
defineExpose({ $api: progress })
useForwardExpose()
</script>

<template>
  <Progress.RootProvider
    :value="progress"
    :class="
      crafts.root({ class: propsClass, orientation: forwarded.orientation ?? 'horizontal', ...theme })
    "
  >
    <ThemeProvider :value="theme">
      <slot />
    </ThemeProvider>
  </Progress.RootProvider>
</template>
