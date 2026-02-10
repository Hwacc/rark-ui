<script lang="ts">
export interface SelectItemGroupProps extends SelectItemGroupBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  label?: string
  ui?: {
    root?: HTMLAttributes['class']
    label?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { SelectItemGroupBaseProps } from '@ark-ui/vue/select'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Select } from '@ark-ui/vue/select'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  label,
  ui,
  ...props
} = defineProps<SelectItemGroupProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvSelect())
</script>

<template>
  <Select.ItemGroup
    v-bind="forwarded"
    :class="crafts.itemGroup({ class: [ui?.root, propsClass], ...theme })"
  >
    <slot name="label">
      <Select.ItemGroupLabel :class="crafts.itemGroupLabel({ class: [ui?.label], ...theme })">
        {{ label }}
      </Select.ItemGroupLabel>
    </slot>
    <slot />
  </Select.ItemGroup>
</template>
