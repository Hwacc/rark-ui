<script lang="ts">
export interface CollapsibleContentProps extends ArkCollapsibleContentProps {
  class?: string
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { CollapsibleContentProps as ArkCollapsibleContentProps } from '@ark-ui/vue/collapsible'
import { useForwardProps } from '@ark-ui/vue'
import { Collapsible } from '@ark-ui/vue/collapsible'
import { tvCollapsiable } from '@rui-ark/themes/crafts/collapsiable'

const {
  class: propsClass,
  unstyled,
  ...props
} = defineProps<CollapsibleContentProps>()

const forwarded = useForwardProps(props)
const { content } = tvCollapsiable()
</script>

<template>
  <Collapsible.Content v-bind="forwarded" :class="content({ class: [propsClass], unstyled })">
    <slot />
  </Collapsible.Content>
</template>
