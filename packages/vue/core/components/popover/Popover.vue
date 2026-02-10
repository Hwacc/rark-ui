<script lang="ts">
export interface PopoverProps extends PopoverRootProps, ThemeCrafts<'tvPopover'> {}
</script>

<script setup lang="ts">
import type { PopoverRootEmits, PopoverRootProps, UsePopoverReturn } from '@ark-ui/vue/popover'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import { Popover, usePopover } from '@ark-ui/vue/popover'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue/utils'
import { useConfig } from '@rui-ark/vue/composables/useConfig'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'

const {
  theme: propsTheme,
  unmountOnExit = undefined,
  lazyMount = undefined,
  ...props
} = defineProps<PopoverProps>()
const emit = defineEmits<PopoverRootEmits>()
const popoverConfig = useConfig('popover', () => ({ unmountOnExit, lazyMount }))
const popover = usePopover(useForwardProps(props), emit)

// theme
const theme = useTheme(() => propsTheme)

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
