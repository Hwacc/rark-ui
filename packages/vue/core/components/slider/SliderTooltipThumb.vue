<script lang="ts">
export interface SliderTooltipThumbProps extends SliderThumbBaseProps {
  class?: HTMLAttributes['class']
  size?: SliderVariants['size']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { SliderThumbBaseProps } from '@ark-ui/vue/slider'
import type { SliderVariants } from '@rui-ark/themes/crafts/slider'
import type { HTMLAttributes } from 'vue'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue'
import { Slider, useSliderContext } from '@ark-ui/vue/slider'
import { TooltipRootProvider, useTooltip } from '@ark-ui/vue/tooltip'
import { findParentElementByScope } from '@rui-ark/shared/dom'
import { tvSlider } from '@rui-ark/themes/crafts/slider'
import {
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from '@rui-ark/vue-core/components/tooltip'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { computed, ref, watch } from 'vue'

const {
  class: propsClass,
  size,
  unstyled,
  ...props
} = defineProps<SliderTooltipThumbProps>()
const forwarded = useForwardProps(props)
const context = useSliderContext()
const { forwardRef, currentElement } = useForwardExpose()

// TODO: mark boundary type
const boundary = ref()
watch(currentElement, (val) => {
  boundary.value
    = findParentElementByScope(val, 'slider', 'root') ?? 'clipping-ancestors'
})

// TODO: make custom tooltip configs
const tooltip = useTooltip(
  computed(() => ({
    open: context.value.dragging,
    positioning: {
      boundary: boundary.value,
      overflowPadding: 0,
      placement: 'top',
      shift: 0,
      flip: false,
    },
  })),
)

watch(
  () => context.value.value,
  () => {
    // we reposition when the value changes, it will be smoother when thumb fast dragging
    tooltip.value.reposition()
  },
)

const theme = useTheme({ size, unstyled })
const { thumb: tvThumb } = tvSlider()
</script>

<template>
  <Slider.Context v-slot="{ getThumbValue }">
    <TooltipRootProvider :value="tooltip">
      <TooltipTrigger as-child>
        <Slider.Thumb
          :ref="forwardRef"
          v-bind="forwarded"
          :class="tvThumb({ class: [propsClass], ...theme })"
          :data-size="theme.size"
        >
          <Slider.HiddenInput />
        </Slider.Thumb>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        {{ getThumbValue(forwarded.index) }}
      </TooltipContent>
    </TooltipRootProvider>
  </Slider.Context>
</template>
