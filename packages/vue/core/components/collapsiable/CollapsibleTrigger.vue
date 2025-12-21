<script lang="ts">
export interface CollapsibleTriggerProps extends ArkCollapsibleTriggerProps {
  class?: string
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { CollapsibleTriggerProps as ArkCollapsibleTriggerProps } from '@ark-ui/vue/collapsible'
import { useForwardProps } from '@ark-ui/vue'
import { Collapsible, useCollapsibleContext } from '@ark-ui/vue/collapsible'
import { tvCollapsiable } from '@rui-ark/themes/crafts/collapsiable'
import { ChevronDown } from 'lucide-vue-next'

const {
  class: propsClass,
  unstyled,
  ...props
} = defineProps<CollapsibleTriggerProps>()

const context = useCollapsibleContext()

console.log('context', context.value, context.value.getTriggerProps())

const forwarded = useForwardProps(props)
const { trigger } = tvCollapsiable()
</script>

<template>
  <Collapsible.Trigger :class="trigger({ class: [propsClass], unstyled })">
    <slot v-bind="{ open: context.open, visible: context.visible }" />
    <slot name="indicator" v-bind="{ open: context.open, visible: context.visible }">
      <Collapsible.Indicator>
        <ChevronDown />
      </Collapsible.Indicator>
    </slot>
  </Collapsible.Trigger>
</template>
