import type { ComputedRef } from 'vue'

export { default as TagsInput, type TagsInputProps } from './TagsInput.vue'
export { default as TagsInputItem, type TagsInputItemProps } from './TagsInputItem.vue'

export const TAGS_INPUT_PROVIDE_KEY = Symbol('TagsInputProvideKey')
export type TagsInputProvide = {
  inline: ComputedRef<boolean>
}
