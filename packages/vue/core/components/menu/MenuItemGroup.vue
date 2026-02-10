<script lang="ts">
export interface MenuItemGroupProps extends MenuItemGroupBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  label?: string
  ui?: {
    root?: HTMLAttributes['class']
    label?: HTMLAttributes['class']
    marker?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { MenuItemGroupBaseProps } from '@ark-ui/vue/menu'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  label,
  ui,
  ...props
} = defineProps<MenuItemGroupProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvMenu())
</script>

<template>
  <Menu.ItemGroup
    v-bind="forwarded"
    :class="crafts.itemGroup({ class: [ui?.root, propsClass], ...theme })"
  >
    <slot name="label">
      <Menu.ItemGroupLabel
        :class="crafts.itemGroupLabel({ class: ui?.label, ...theme })"
      >
        {{ label }}
      </Menu.ItemGroupLabel>
    </slot>
    <slot />
  </Menu.ItemGroup>
</template>
