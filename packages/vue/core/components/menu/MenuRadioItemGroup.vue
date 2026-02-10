<script lang="ts">
export interface MenuRadioItemGroupProps extends ArkMenuRadioItemGroupProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type {
  MenuRadioItemGroupProps as ArkMenuRadioItemGroupProps,
  MenuRadioItemGroupEmits,
} from '@ark-ui/vue/menu'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardPropsEmits } from '@ark-ui/vue/utils'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<MenuRadioItemGroupProps>()
const emit = defineEmits<MenuRadioItemGroupEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <Menu.RadioItemGroup v-bind="forwarded">
    <slot />
  </Menu.RadioItemGroup>
</template>
