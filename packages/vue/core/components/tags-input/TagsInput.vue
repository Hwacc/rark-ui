<script lang="ts">
export interface TagsInputProps extends TagsInputRootBaseProps, ThemeProps {
  class?: HTMLAttributes['class']
  inline?: TagsInputVariantProps['inline']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    input?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { TagsInputRootBaseProps, TagsInputRootEmits } from '@ark-ui/vue/tags-input'
import type { TagsInputVariantProps } from '@rui-ark/themes/crafts/tags-input'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardExpose, useForwardProps } from '@ark-ui/vue'
import { TagsInput, useTagsInput } from '@ark-ui/vue/tags-input'
import { tvTagsInput } from '@rui-ark/themes/crafts/tags-input'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'
import { nextTick, unref, useTemplateRef, watch } from 'vue'
import { ScrollArea, ScrollAreaScrollbar } from '../scroll-area'

const {
  class: propsClass,
  size,
  unstyled = undefined,
  inline = true,
  ui,
  ...props
} = defineProps<TagsInputProps>()
const emits = defineEmits<TagsInputRootEmits>()
const forwarded = useForwardProps(props)
const tagsInput = useTagsInput(forwarded, emits)

const scrollAreaRef = useTemplateRef('scrollArea')
watch(
  () => tagsInput.value.value,
  (newValue, oldValue) => {
    nextTick(() => {
      if (newValue.length > oldValue.length) {
        // add items
        scrollAreaRef.value?.$el.querySelector('[data-part="viewport"]')?.scrollTo({
          left: 9999,
          behavior: 'smooth',
        })
      }
    })
  },
)

// theme
const theme = useTheme(() => ({ size, unstyled }))
const {
  root,
  control,
  input,
  scrollArea: tvScrollArea,
  scrollAreaContent: tvScrollAreaContent,
} = tvTagsInput()

// expose
defineExpose({ $api: tagsInput })
useForwardExpose()
</script>

<template>
  <TagsInput.RootProvider
    :value="tagsInput"
    :class="root({ class: [ui?.root, propsClass], ...theme })"
  >
    <ThemeProvider :value="theme">
      <slot name="prefix" />
      <TagsInput.Control :class="control({ class: ui?.control, ...theme })">
        <ScrollArea
          v-if="inline"
          ref="scrollArea"
          :class="tvScrollArea()"
          :ui="{ content: tvScrollAreaContent() }"
        >
          <slot :items="tagsInput.value" />
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
        <slot
          v-else
          :items="tagsInput.value"
        />
        <TagsInput.Input :class="input({ class: ui?.input, ...theme })" />
      </TagsInput.Control>
      <slot name="suffix" />
    </ThemeProvider>
    <TagsInput.HiddenInput />
  </TagsInput.RootProvider>
</template>
