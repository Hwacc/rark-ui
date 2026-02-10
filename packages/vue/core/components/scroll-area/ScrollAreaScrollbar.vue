<script lang="ts">
export interface ScrollAreaScrollbarProps extends ScrollAreaScrollbarBaseProps {
  class?: HTMLAttributes['class']
  theme?: Omit<ScrollAreaTheme, 'crafts'>
  ui?: {
    root?: HTMLAttributes['class']
    thumb?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { ScrollAreaScrollbarBaseProps } from '@ark-ui/vue/scroll-area'
import type { HTMLAttributes } from 'vue'
import type { ScrollAreaTheme } from '.'
import { useForwardProps } from '@ark-ui/vue'
import { ScrollArea } from '@ark-ui/vue/scroll-area'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  ui,
  ...props
} = defineProps<ScrollAreaScrollbarProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme<ScrollAreaTheme>(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvScrollArea())
</script>

<template>
  <ScrollArea.Scrollbar
    v-bind="forwarded"
    :class="
      crafts.scrollbar({
        class: [ui?.root, propsClass],
        orientation: forwarded.orientation ?? 'vertical',
        ...theme,
      })
    "
  >
    <ScrollArea.Thumb
      :class="
        crafts.thumb({
          class: ui?.thumb,
          orientation: forwarded.orientation ?? 'vertical',
          ...theme,
        })
      "
    />
  </ScrollArea.Scrollbar>
</template>
