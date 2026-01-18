<script lang="ts">
export interface TabsIndicatorProps extends TabIndicatorBaseProps, ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { TabIndicatorBaseProps } from '@ark-ui/vue/tabs'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { Tabs } from '@ark-ui/vue/tabs'
import { tvTabs } from '@rui-ark/themes/crafts/tabs'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, size, unstyled, ...props } = defineProps<TabsIndicatorProps>()
const forwarded = useForwardProps(props)

const theme = useTheme(computed(() => ({ size, unstyled })))
const { indicator } = tvTabs()
</script>

<template>
  <Tabs.Indicator v-bind="forwarded" :class="indicator({ class: [propsClass], ...theme })">
    <slot />
  </Tabs.Indicator>
</template>
