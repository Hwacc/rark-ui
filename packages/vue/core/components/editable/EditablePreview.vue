<script lang="ts">
export interface EditablePreviewProps extends ArkEditablePreviewProps {
  class?: string
  size?: EditableVariants['size']
  unstyled?: boolean
}
</script>

<script setup lang="ts">
import type { EditablePreviewProps as ArkEditablePreviewProps } from '@ark-ui/vue/editable'
import type { EditableVariants } from '@rui-ark/themes/crafts/editable'
import { EditablePreview } from '@ark-ui/vue/editable'
import { useForwardProps } from '@ark-ui/vue/utils'
import { tvEditable } from '@rui-ark/themes/crafts/editable'

const {
  class: propsClass,
  unstyled,
  size = 'base',
  ...props
} = defineProps<EditablePreviewProps>()

const forwarded = useForwardProps(props)
const { preview } = tvEditable()
</script>

<template>
  <EditablePreview
    v-bind="forwarded"
    :class="preview({ class: [propsClass], unstyled, size })"
  >
    <slot />
  </EditablePreview>
</template>
