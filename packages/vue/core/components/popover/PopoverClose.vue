<script lang="ts">
export interface PopoverCloseProps extends Theme {
  class?: HTMLAttributes['class']
  asChild?: boolean
}
</script>

<script lang="ts" setup>
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { PopoverCloseTrigger } from '@ark-ui/vue/popover'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { X } from 'lucide-vue-next'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  asChild,
} = defineProps<PopoverCloseProps>()

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvPopover())
</script>

<template>
  <PopoverCloseTrigger as-child>
    <slot>
      <ark.button
        v-bind="$attrs"
        :class="crafts.close({ class: propsClass, ...theme })"
        :as-child="asChild"
        :data-theme-skin="theme.skin"
        :data-theme-surface="theme.surface"
      >
        <X :style="{ width: '1lh', height: '1lh' }" />
      </ark.button>
    </slot>
  </PopoverCloseTrigger>
</template>
