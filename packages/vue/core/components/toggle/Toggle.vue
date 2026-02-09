<script lang="ts">
export interface ToggleProps extends ToggleRootBaseProps, Theme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { ToggleRootBaseProps, ToggleRootEmits } from '@ark-ui/vue/toggle'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardPropsEmits } from '@ark-ui/vue'
import { Toggle } from '@ark-ui/vue/toggle'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<ToggleProps>()
const emit = defineEmits<ToggleRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts)
</script>

<template>
  <Toggle.Root v-bind="forwarded" :class="crafts.tvToggle({ class: [propsClass], ...theme })">
    <slot />
  </Toggle.Root>
</template>
