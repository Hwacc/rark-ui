<script lang="ts">
export interface SelectContentProps extends ArkSelectContentProps {
  class?: HTMLAttributes['class']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { SelectContentProps as ArkSelectContentProps } from '@ark-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select } from '@ark-ui/vue/select'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  unstyled,
  ...props
} = defineProps<SelectContentProps>()
const forwarded = useForwardProps(props)

const theme = useTheme({ unstyled })
</script>

<template>
  <Select.Positioner>
    <Select.Content v-bind="forwarded">
      <slot />
    </Select.Content>
  </Select.Positioner>
</template>
