<script lang="ts">
export interface MenuCheckboxItemProps extends MenuCheckboxItemBaseProps {
  class?: HTMLAttributes['class']
  size?: MenuVariants['size']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { MenuCheckboxItemBaseProps, MenuCheckboxItemEmits } from '@ark-ui/vue/menu'
import type { MenuVariants } from '@rui-ark/themes/crafts/menu'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardPropsEmits } from '@ark-ui/vue/utils'
import { tvMenu } from '@rui-ark/themes/crafts/menu'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  size,
  unstyled,
  ...props
} = defineProps<MenuCheckboxItemProps>()
const emit = defineEmits<MenuCheckboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emit)
const theme = useTheme({ size, unstyled })
</script>

<template>
  <Menu.CheckboxItem v-bind="forwarded">
    <Menu.ItemIndicator>√</Menu.ItemIndicator>
    <slot />
  </Menu.CheckboxItem>
</template>
