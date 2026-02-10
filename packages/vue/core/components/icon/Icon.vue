<script lang="ts">
import type { IconifyIcon } from '@iconify/vue'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import { useTheme } from '@rui-ark/vue/composables/useTheme'

export interface IconProps extends Omit<ThemeCrafts<'tvIcon'>, 'size'> {
  icon: string | IconifyIcon
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue/utils'
import { Icon } from '@iconify/vue'

const { class: propsClass, theme: propsTheme, icon, ...props } = defineProps<IconProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
</script>

<template>
  <Icon
    v-bind="forwarded"
    :class="theme.crafts.tvIcon({ class: [propsClass], ...theme })"
    :icon="icon"
  />
</template>
