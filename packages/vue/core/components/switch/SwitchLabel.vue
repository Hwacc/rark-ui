<script lang="ts">
export interface SwitchLabelProps extends ThemeProps {
  class?: HTMLAttributes['class']
  asChild?: boolean
}
</script>

<script setup lang="ts">
import type { ThemeProps } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Switch } from '@ark-ui/vue/switch'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, size, unstyled = undefined, asChild } = defineProps<SwitchLabelProps>()

// theme
const theme = useTheme(() => ({ size, unstyled }))
const crafts = computed(() => theme.value.crafts.tvSwitch())
</script>

<template>
  <Switch.Label
    :class="crafts.label({ class: [propsClass], ...theme })"
    :as-child="asChild"
  >
    <slot />
  </Switch.Label>
</template>
