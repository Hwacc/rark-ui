<script lang="ts">
export interface MenuCheckboxItemProps extends MenuCheckboxItemBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    checkbox?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type {
  MenuCheckboxItemBaseProps,
  MenuCheckboxItemEmits,
} from '@ark-ui/vue/menu'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardPropsEmits } from '@ark-ui/vue/utils'
import { Checkbox } from '@rui-ark/vue/components/checkbox'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ui,
  ...props
} = defineProps<MenuCheckboxItemProps>()
const emit = defineEmits<MenuCheckboxItemEmits>()
defineSlots<{
  default: (props: { checked: boolean }) => any
  indicator: (props: { checked: boolean }) => any
}>()
const forwarded = useForwardPropsEmits(props, emit)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvMenu())
</script>

<template>
  <Menu.CheckboxItem
    v-bind="forwarded"
    :class="crafts.item({ class: [ui?.root, propsClass], ...theme })"
  >
    <slot name="indicator" v-bind="{ checked: forwarded.checked }">
      <Checkbox
        :class="ui?.checkbox"
        :checked="forwarded.checked"
        :theme="theme"
      />
    </slot>
    <slot name="default" v-bind="{ checked: forwarded.checked }" />
  </Menu.CheckboxItem>
</template>
