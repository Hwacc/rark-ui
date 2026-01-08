<script lang="ts">
export interface SelectTriggerProps extends ArkSelectTriggerProps {
  class?: HTMLAttributes['class']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { SelectTriggerProps as ArkSelectTriggerProps } from '@ark-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select } from '@ark-ui/vue/select'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { ChevronDown } from 'lucide-vue-next'

const {
  class: propsClass,
  unstyled,
  ...props
} = defineProps<SelectTriggerProps>()
const forwarded = useForwardProps(props)
const theme = useTheme({ unstyled })
</script>

<template>
  <Select.Control>
    <Select.Trigger v-bind="forwarded">
      <Select.ValueText />
      <Select.Indicator>
        <slot name="indicator">
          <ChevronDown />
        </slot>
      </Select.Indicator>
    </Select.Trigger>
  </Select.Control>
</template>
