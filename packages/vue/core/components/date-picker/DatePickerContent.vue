<script lang="ts">
export interface DatePickerContentProps extends DatePickerContentBaseProps, ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { DatePickerContentBaseProps } from '@ark-ui/vue'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { DatePicker } from '@ark-ui/vue'
import { ark } from '@ark-ui/vue/factory'
import { useForwardProps } from '@ark-ui/vue/utils'

const {
  class: propsClass,
  unstyled = undefined,
  bordered = undefined,
  ...props
} = defineProps<DatePickerContentProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <DatePicker.Positioner>
    <DatePicker.Content v-bind="forwarded">
      <slot name="prefix" />
      <ark.div data-scope="date-picker" data-part="content-panel">
        <slot />
      </ark.div>
      <slot name="suffix" />
    </DatePicker.Content>
  </DatePicker.Positioner>
</template>
