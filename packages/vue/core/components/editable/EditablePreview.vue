<script lang="ts">
export interface EditablePreviewProps extends EditablePreviewBaseProps, Theme {
  class?: string
}
</script>

<script setup lang="ts">
import type { EditablePreviewBaseProps } from '@ark-ui/vue/editable'
import type { Theme } from '@rui-ark/vue/providers/theme'
import { EditablePreview } from '@ark-ui/vue/editable'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<EditablePreviewProps>()
const forwarded = useForwardProps(props)

const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvEditable())
</script>

<template>
  <EditablePreview
    v-bind="forwarded"
    :class="
      crafts.preview({
        class: [propsClass],
        ...theme,
      })
    "
  >
    <slot />
  </EditablePreview>
</template>
