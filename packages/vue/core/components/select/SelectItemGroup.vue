<script lang="ts">
export interface SelectItemGroupProps extends SelectItemGroupBaseProps {
  class?: HTMLAttributes['class']
  size?: SelectVariants['size']
  unstyled?: boolean
  label?: string
  ui?: {
    root?: HTMLAttributes['class']
    label?: HTMLAttributes['class']
    marker?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { SelectItemGroupBaseProps } from '@ark-ui/vue/select'
import type { SelectVariants } from '@rui-ark/themes/crafts/select'
import type { HTMLAttributes } from 'vue'
import { Select } from '@ark-ui/vue/select'
import { useForwardProps } from '@ark-ui/vue/utils'
import { tvSelect } from '@rui-ark/themes/crafts/select'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  size,
  unstyled,
  label,
  ui,
  ...props
} = defineProps<SelectItemGroupProps>()
const forwarded = useForwardProps(props)
const theme = useTheme({ size, unstyled })

const { itemGroup, itemGroupLabel, itemGroupMarker } = tvSelect()
</script>

<template>
  <Select.ItemGroup
    v-bind="forwarded"
    :class="itemGroup({ class: [ui?.root, propsClass], ...theme })"
  >
    <slot name="label">
      <Select.ItemGroupLabel
        :class="itemGroupLabel({ class: [ui?.label], ...theme })"
      >
        <slot name="marker">
          <div
            :class="itemGroupMarker({ class: [ui?.marker], ...theme })"
            data-scope="select"
            data-part="item-group-marker"
          />
        </slot>
        {{ label }}
      </Select.ItemGroupLabel>
    </slot>
    <slot />
  </Select.ItemGroup>
</template>
