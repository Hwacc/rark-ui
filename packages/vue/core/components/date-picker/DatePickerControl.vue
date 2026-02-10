<script lang="ts">
export interface DatePickerControlProps extends DatePickerControlBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { DatePickerControlBaseProps } from '@ark-ui/vue'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { DatePicker } from '@ark-ui/vue'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<DatePickerControlProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvDatePicker())
</script>

<template>
  <DatePicker.Control v-bind="forwarded" :class="crafts.control({ class: propsClass, ...theme })">
    <slot />
  </DatePicker.Control>
</template>
