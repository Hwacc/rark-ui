<script lang="ts">
export interface RatingGroupProps extends RatingGroupRootBaseProps, Theme {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { RatingGroupRootBaseProps, RatingGroupRootEmits } from '@ark-ui/vue/rating-group'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { RatingGroup, useRatingGroup } from '@ark-ui/vue/rating-group'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ui, ...props } = defineProps<RatingGroupProps>()
const emit = defineEmits<RatingGroupRootEmits>()
const ratingGroup = useRatingGroup(useForwardProps(props), emit)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvRatingGroup())

// expose
defineExpose({ $api: ratingGroup })
useForwardExpose()
</script>

<template>
  <RatingGroup.RootProvider
    :value="ratingGroup"
    :class="crafts.root({ class: [ui?.root, propsClass], ...theme })"
  >
    <ThemeProvider :value="theme">
      <slot name="prefix" />
      <RatingGroup.Control :class="crafts.control({ class: ui?.control, ...theme })">
        <slot :items="ratingGroup.items" />
      </RatingGroup.Control>
      <slot name="suffix" />
    </ThemeProvider>
  </RatingGroup.RootProvider>
</template>
