<script lang="ts">
export interface TooltipContentProps extends ArkTooltipContentProps {
  class?: HTMLAttributes['class']
  size?: TooltipVariants['size']
  unstyled?: boolean
  ui?: {
    positioner?: HTMLAttributes['class']
    content?: HTMLAttributes['class']
    inner?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type {
  TooltipContentProps as ArkTooltipContentProps,
  UseTooltipProps,
} from '@ark-ui/vue/tooltip'
import type { TooltipVariants } from '@rui-ark/themes/crafts/tooltip'
import type { HTMLAttributes } from 'vue'
import { TooltipContent, TooltipPositioner } from '@ark-ui/vue/tooltip'
import { useForwardProps } from '@ark-ui/vue/utils'
import { tvTooltip } from '@rui-ark/themes/crafts/tooltip'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { useSlots } from 'vue'

const {
  class: propsClass,
  size,
  unstyled,
  ui,
  ...props
} = defineProps<TooltipContentProps>()
const slots = useSlots()
const forwarded = useForwardProps<TooltipContentProps, UseTooltipProps>(props)

const defaultSlots = slots.default?.()
const arrowNode
  = defaultSlots?.find(n => (n.type as any).__name === 'TooltipArrow') ?? null
const otherNodes = defaultSlots?.filter(n => n !== arrowNode) ?? []

const theme = useTheme({ size, unstyled })
const { content, contentInner } = tvTooltip()
</script>

<template>
  <TooltipPositioner
    :class="ui?.positioner"
    :style="{ zIndex: `var(--z-tooltip, --z-index)` }"
  >
    <TooltipContent
      v-bind="forwarded"
      :class="content({ class: [ui?.content, propsClass], ...theme })"
      :data-bordered="theme.bordered ? 'true' : undefined"
    >
      <template v-if="arrowNode">
        <component :is="arrowNode" />
      </template>
      <div :class="contentInner({ class: [ui?.inner], ...theme })">
        <template
          v-for="node in otherNodes"
          :key="node.key"
        >
          <component :is="node" />
        </template>
      </div>
    </TooltipContent>
  </TooltipPositioner>
</template>
