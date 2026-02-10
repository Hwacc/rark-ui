<script lang="ts">
export interface FloatingPanelOpacityTriggerProps extends PolymorphicProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { PolymorphicProps } from '@ark-ui/vue/factory'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { ark } from '@ark-ui/vue/factory'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'
import { injectFloatingPanelAppearanceContext } from './floating-panel-appearance-context'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<FloatingPanelOpacityTriggerProps>()
const forwarded = useForwardProps(props)

const { opacity, setOpacity } = injectFloatingPanelAppearanceContext()
// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvFloatingPanel())
</script>

<template>
  <ark.button
    v-bind="forwarded"
    :class="crafts.trigger({ class: [propsClass], ...theme })"
  >
    <slot v-bind="{ opacity, opacityGetter: () => opacity, setOpacity }" />
  </ark.button>
</template>
