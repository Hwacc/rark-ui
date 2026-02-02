<script lang="ts">
export interface SelectValueProps extends Theme {
  class?: HTMLAttributes['class']
  placeholder?: string
  asChild?: boolean
}
</script>

<script setup lang="ts">
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { Select } from '@ark-ui/vue/select'
import { tvSelect } from '@rui-ark/themes/crafts/core/select'
import { useTheme } from '@rui-ark/vue/composables/useTheme'

const {
  class: propsClass,
  theme: propsTheme,
  asChild,
  placeholder,
} = defineProps<SelectValueProps>()

const theme = useTheme(() => propsTheme)
const { value: tvValue } = tvSelect()
</script>

<template>
  <ark.span
    :class="tvValue({ class: [propsClass], ...theme })"
    :as-child="asChild"
  >
    <slot>
      <Select.ValueText :placeholder="placeholder" />
    </slot>
  </ark.span>
</template>
