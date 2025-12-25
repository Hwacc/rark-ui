<script lang="ts">
export interface TooltipArrowProps extends ArkTooltipArrowProps {
  class?: HTMLAttributes['class']
  size?: TooltipVariants['size']
  bordered?: TooltipVariants['bordered']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { TooltipArrowProps as ArkTooltipArrowProps } from '@ark-ui/vue/tooltip'
import type { TooltipVariants } from '@rui-ark/themes/crafts/tooltip'
import type { HTMLAttributes } from 'vue'
import { TooltipArrow } from '@ark-ui/vue/tooltip'
import { useForwardProps } from '@ark-ui/vue/utils'
import { tvTooltip } from '@rui-ark/themes/crafts/tooltip'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  size,
  unstyled,
  bordered,
  ...props
} = defineProps<TooltipArrowProps>()
const forwarded = useForwardProps<
  TooltipArrowProps,
  {
    asChild?: boolean
    class?: HTMLAttributes['class']
  }
>(props)

const theme = useTheme({ size, unstyled, bordered })
const { arrow } = tvTooltip()
</script>

<template>
  <TooltipArrow
    v-bind="forwarded"
    :class="arrow({ class: propsClass, ...theme })"
    :data-bordered="theme.bordered ? 'true' : undefined"
  >
    <slot />
  </TooltipArrow>
</template>
