<script lang="ts">
export interface TabsProps extends TabsRootBaseProps, ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { TabsRootBaseProps, TabsRootEmits } from '@ark-ui/vue/tabs'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { Tabs, useTabs } from '@ark-ui/vue/tabs'
import { tvTabs } from '@rui-ark/themes/crafts/tabs'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'
import { computed } from 'vue'

const { class: propsClass, size, unstyled, ...props } = defineProps<TabsProps>()
const emit = defineEmits<TabsRootEmits>()
const forwarded = useForwardProps(props)

const tabs = useTabs(forwarded, emit)

console.log('tabs', tabs.value)

const theme = useTheme(computed(() => ({ size, unstyled })))
const { root } = tvTabs()
</script>

<template>
  <Tabs.RootProvider :value="tabs" :class="root({ class: [propsClass], ...theme })">
    <ThemeProvider :value="theme">
      <slot />
    </ThemeProvider>
  </Tabs.RootProvider>
</template>
