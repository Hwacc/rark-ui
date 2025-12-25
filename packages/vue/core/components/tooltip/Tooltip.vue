<script lang="ts">
export interface TooltipProps extends TooltipRootProps {
  size?: TooltipVariants['size']
  bordered?: TooltipVariants['bordered']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { TooltipRootProps } from '@ark-ui/vue/tooltip'
import type { TooltipVariants } from '@rui-ark/themes/crafts/tooltip'
import { TooltipRoot } from '@ark-ui/vue/tooltip'
import { useForwardProps } from '@ark-ui/vue/utils'
import ThemeProvider from '@rui-ark/vue-core/providers/theme/ThemeProvider.vue'

const { size, bordered, unstyled, ...props } = defineProps<TooltipProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <TooltipRoot v-bind="forwarded">
    <ThemeProvider :value="{ size, bordered, unstyled }">
      <slot />
    </ThemeProvider>
  </TooltipRoot>
</template>
