<script lang="ts">
export interface MenuItemProps extends MenuItemBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { MenuItemBaseProps } from '@ark-ui/vue/menu'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { MenuItem } from '@ark-ui/vue/menu'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<MenuItemProps>()
const forwarded = useForwardProps<MenuItemProps, MenuItemBaseProps>(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvMenu())
</script>

<template>
  <MenuItem v-bind="forwarded" :class="crafts.item({ class: [propsClass], ...theme })">
    <slot />
  </MenuItem>
</template>
