<script lang="ts">
export interface SliderProps extends SliderRootBaseProps, ThemeCrafts<'tvSlider'> {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    track?: HTMLAttributes['class']
    range?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { SliderRootBaseProps, SliderRootEmits } from '@ark-ui/vue/slider'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue'
import { Slider, useSlider } from '@ark-ui/vue/slider'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'
import { computed, useTemplateRef } from 'vue'
import SliderBoundaryProvider from './SliderBoundaryProvider.vue'

const { class: propsClass, theme: propsTheme, ui, ...props } = defineProps<SliderProps>()
const emit = defineEmits<SliderRootEmits>()
const forwarded = useForwardProps(props)

const slider = useSlider(forwarded, emit)
const controlRef = useTemplateRef('control')

const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvSlider())

// expose
defineExpose({ $api: slider })
useForwardExpose()
</script>

<template>
  <Slider.RootProvider
    :value="slider"
    :class="
      crafts.root({
        class: [ui?.root, propsClass],
        orientation: forwarded.orientation ?? 'horizontal',
        ...theme,
      })
    "
  >
    <ThemeProvider :value="theme">
      <SliderBoundaryProvider :boundary="controlRef?.$el ?? 'clipping-ancestors'">
        <slot name="prefix" />
        <Slider.Control
          ref="control"
          :class="
            crafts.control({
              class: ui?.control,
              orientation: forwarded.orientation ?? 'horizontal',
              ...theme,
            })
          "
        >
          <Slider.Track
            :class="
              crafts.track({
                class: ui?.track,
                orientation: forwarded.orientation ?? 'horizontal',
                ...theme,
              })
            "
          >
            <Slider.Range
              :class="
                crafts.range({
                  class: ui?.range,
                  orientation: forwarded.orientation ?? 'horizontal',
                  ...theme,
                })
              "
            />
          </Slider.Track>
          <slot />
        </Slider.Control>
        <slot name="suffix" />
      </SliderBoundaryProvider>
    </ThemeProvider>
  </Slider.RootProvider>
</template>
