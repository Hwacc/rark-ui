<script lang="ts">
export interface CollapsiableProps extends CollapsibleRootProps {
  class?: string
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from '@ark-ui/vue/collapsible'
import { Collapsible, useCollapsible } from '@ark-ui/vue/collapsible'
import { tvCollapsiable } from '@rui-ark/themes/crafts/collapsiable'

const {
  class: propsClass,
  unstyled,
  ...props
} = defineProps<CollapsiableProps>()
const emit = defineEmits<CollapsibleRootEmits>()

const collapsiable = useCollapsible(props, emit)
console.log('collapsiable', collapsiable.value.getTriggerProps())

const { root } = tvCollapsiable()
</script>

<template>
  <Collapsible.Root :value="collapsiable" :class="root({ class: [propsClass], unstyled })">
    <slot v-bind="collapsiable" />
  </Collapsible.Root>
</template>
