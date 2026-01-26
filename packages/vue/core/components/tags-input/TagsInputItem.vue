<script lang="ts">
export interface TagsInputItemProps extends TagsInputItemBaseProps, ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { TagsInputItemBaseProps } from '@ark-ui/vue/tags-input'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { TagsInput, useTagsInputContext } from '@ark-ui/vue/tags-input'
import { tvTagsInput } from '@rui-ark/themes/crafts/tags-input'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { X } from 'lucide-vue-next'
import { useTemplateRef, watchEffect } from 'vue'

const {
  class: propsClass,
  size,
  unstyled = undefined,
  ...props
} = defineProps<TagsInputItemProps>()
const forwarded = useForwardProps(props)
const context = useTagsInputContext()

const preview = useTemplateRef('preview')
watchEffect(
  () => {
    if (context.value.getItemState(forwarded.value).highlighted) {
      preview.value?.$el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  },
  { flush: 'post' },
)

// theme
const theme = useTheme(() => ({ size, unstyled }))
const { itemPreview, itemText } = tvTagsInput()
</script>

<template>
  <TagsInput.Item v-bind="forwarded">
    <TagsInput.ItemPreview
      ref="preview"
      :class="itemPreview({ ...theme })"
    >
      <TagsInput.ItemText>{{ value }}</TagsInput.ItemText>
      <TagsInput.ItemDeleteTrigger><X /></TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
    <TagsInput.ItemInput />
  </TagsInput.Item>
</template>
