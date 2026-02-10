<script lang="ts">
export interface SliderThumbProps extends SliderThumbBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { SliderThumbBaseProps } from '@ark-ui/vue/slider'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { Slider } from '@ark-ui/vue/slider'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<SliderThumbProps>()
const forwarded = useForwardProps(props)

const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvSlider())
</script>

<template>
  <Slider.Thumb
    v-bind="forwarded"
    :class="crafts.thumb({ class: [propsClass], ...theme })"
    :data-theme-size="theme.size"
  >
    <Slider.HiddenInput />
  </Slider.Thumb>
</template>
