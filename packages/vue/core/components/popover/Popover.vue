<script lang="ts">
export interface PopoverProps extends PopoverRootProps, ThemeProps {}
</script>

<script setup lang="ts">
import type { PopoverRootEmits, PopoverRootProps, UsePopoverReturn } from '@ark-ui/vue/popover'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import { Popover, usePopover } from '@ark-ui/vue/popover'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue/utils'
import { useConfig } from '@rui-ark/vue-core/composables/useConfig'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'

const {
  size,
  unstyled = undefined,
  bordered = undefined,
  skin,
  unmountOnExit = undefined,
  lazyMount = undefined,
  ...props
} = defineProps<PopoverProps>()
const emit = defineEmits<PopoverRootEmits>()
const popoverConfig = useConfig('popover', () => ({ unmountOnExit, lazyMount }))
const popover = usePopover(useForwardProps(props), emit)

// theme
console.log('popover props', bordered)
const theme = useTheme(() => ({ size, unstyled, bordered, skin }))
console.log('popover theme', theme.value)

// expose
defineExpose({ $api: popover as UsePopoverReturn })
useForwardExpose()
</script>

<template>
  <Popover.RootProvider
    :value="popover"
    :lazy-mount="popoverConfig?.lazyMount"
    :unmount-on-exit="popoverConfig?.unmountOnExit"
  >
    <ThemeProvider :value="theme">
      <slot />
    </ThemeProvider>
  </Popover.RootProvider>
</template>
