<script lang="ts">
export interface TabsContentProps extends TabContentBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { TabContentBaseProps } from '@ark-ui/vue/tabs'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { Tabs } from '@ark-ui/vue/tabs'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed, ref, watch } from 'vue'
import { injectTabsContextEx } from './TabsProviderEx.vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<TabsContentProps>()
const forwarded = useForwardProps(props)
const contextEx = injectTabsContextEx()
const direction = ref(0)
watch(() => contextEx.value.index, (index, oldIndex) => {
  direction.value = index - oldIndex
})

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvTabs())
</script>

<template>
  <Tabs.Content
    v-bind="forwarded"
    :class="crafts.content({
      class: [propsClass],
      prev: direction < 0,
      next: direction > 0,
      ...theme,
    })"
  >
    <slot />
  </Tabs.Content>
</template>
