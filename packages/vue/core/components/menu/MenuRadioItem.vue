<script lang="ts">
export interface MenuRadioItemProps extends MenuRadioItemBaseProps, Theme {
  class?: HTMLAttributes['class']
  variant?: RadioGroupVariants['variant']
  ui?: {
    root?: HTMLAttributes['class']
    indicator?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { MenuRadioItemBaseProps, UseMenuItemContext } from '@ark-ui/vue/menu'
import type { RadioGroupVariants } from '@rui-ark/themes/default/crafts/core'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes, UnwrapRef } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardProps } from '@ark-ui/vue/utils'
import { cn } from '@rui-ark/themes/default'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { Check, Circle } from 'lucide-vue-next'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  variant = 'default',
  ui,
  ...props
} = defineProps<MenuRadioItemProps>()
defineSlots<{
  default: (props: UnwrapRef<UseMenuItemContext>) => any
  indicator: (props: UnwrapRef<UseMenuItemContext>) => any
}>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvMenu())
const radioCrafts = computed(() => theme.value.crafts.tvRadioGroup())
</script>

<template>
  <Menu.RadioItem
    v-bind="forwarded"
    :class="
      cn(crafts.item({ ...theme }), crafts.radioItem({ class: [ui?.root, propsClass], ...theme }))
    "
  >
    <Menu.ItemContext v-slot="context">
      <slot
        name="default"
        v-bind="context"
      />
      <slot
        name="indicator"
        v-bind="context"
      >
        <Circle
          v-if="variant === 'default'"
          :class="radioCrafts.itemIndicator({ class: [ui?.indicator], variant, ...theme })"
          data-part="indicator"
          :data-state="context.checked ? 'checked' : 'unchecked'"
          :data-variant="variant"
          :hidden="context.checked ? undefined : true"
        />
        <Check
          v-if="variant === 'checkbox'"
          :class="radioCrafts.itemIndicator({ class: ui?.indicator, variant, ...theme })"
          data-part="indicator"
          :data-state="context.checked ? 'checked' : 'unchecked'"
          :data-variant="variant"
          :hidden="context.checked ? undefined : true"
        />
      </slot>
    </Menu.ItemContext>
  </Menu.RadioItem>
</template>
