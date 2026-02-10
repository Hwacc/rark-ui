<script lang="ts">
export interface MenuTriggerItemProps extends MenuTriggerItemBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { MenuTriggerItemBaseProps } from '@ark-ui/vue/menu'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardProps } from '@ark-ui/vue/utils'
import { cn } from '@rui-ark/themes/default'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ...props
} = defineProps<MenuTriggerItemProps>()
const forwarded = useForwardProps<
  MenuTriggerItemProps,
  MenuTriggerItemBaseProps
>(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvMenu())
</script>

<template>
  <Menu.TriggerItem
    v-bind="forwarded"
    :class="
      cn(crafts.item({ class: [propsClass], ...theme }), crafts.triggerItem({ ...theme }))
    "
  >
    <Menu.ItemText>
      <slot />
    </Menu.ItemText>
    <Menu.Indicator :class="crafts.triggerItemIndicator({ ...theme })">
      <ChevronRight :style="{ width: '1lh', height: '1lh' }" />
    </Menu.Indicator>
  </Menu.TriggerItem>
</template>
