<script lang="ts">
export interface MenuRadioItemProps extends MenuRadioItemBaseProps {
  class?: HTMLAttributes['class']
  size?: MenuVariants['size']
  unstyled?: boolean
  variant?: RadioGroupVariants['variant']
  ui?: {
    root?: HTMLAttributes['class']
    indicator?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { MenuRadioItemBaseProps } from '@ark-ui/vue/menu'
import type { MenuVariants } from '@rui-ark/themes/crafts/menu'
import type { RadioGroupVariants } from '@rui-ark/themes/crafts/radio-group'
import type { HTMLAttributes } from 'vue'
import { Menu } from '@ark-ui/vue/menu'
import { useForwardProps } from '@ark-ui/vue/utils'
import { tvMenu } from '@rui-ark/themes/crafts/menu'
import { tvRadioGroup } from '@rui-ark/themes/crafts/radio-group'
import { cn } from '@rui-ark/themes/utils/cn'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { Check, Circle } from 'lucide-vue-next'
import MenuRadioItemContext from './MenuRadioItemContext.vue'

const {
  class: propsClass,
  size,
  unstyled,
  variant = 'default',
  ui,
  ...props
} = defineProps<MenuRadioItemProps>()
defineSlots<{
  default: (props: { checked: boolean | undefined }) => any
  indicator: (props: { checked: boolean | undefined }) => any
}>()
const forwarded = useForwardProps(props)

const theme = useTheme({ size, unstyled })
const { item } = tvMenu()
const { itemIndicator } = tvRadioGroup()
</script>

<template>
  <Menu.RadioItem
    v-bind="forwarded"
    :class="item({ class: [ui?.root, propsClass], ...theme })"
  >
    <MenuRadioItemContext v-slot="context">
      <slot name="indicator" :checked="context.checked">
        <Circle
          v-if="variant === 'default'"
          :class="cn(
            itemIndicator({ class: [ui?.indicator], variant, ...theme }),
            context.checked ? 'visible motion-scale-in-0' : 'invisible',
          )"
          data-part="indicator"
          :data-state="context.checked ? 'checked' : 'unchecked'"
          :data-variant="variant"
        />
        <Check
          v-if="variant === 'checkbox'"
          :class="cn(
            itemIndicator({ class: ui?.indicator, variant, ...theme }),
            context.checked ? 'visible [&>path]:animate-check-dash' : 'invisible',
          )"
          data-part="indicator"
          :data-state="context.checked ? 'checked' : 'unchecked'"
          :data-variant="variant"
        />
      </slot>
      <slot name="default" :checked="context.checked" />
    </MenuRadioItemContext>
  </Menu.RadioItem>
</template>
