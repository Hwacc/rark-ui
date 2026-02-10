<script setup lang="ts">
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed, useId } from 'vue'

const { class: propsClass, theme: propsTheme } = defineProps<
  { class?: HTMLAttributes['class'] } & ThemeNoCrafts
>()

const id = useId()
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvDialog())
</script>

<template>
  <ark.div
    :id="`dialog:${id}:body`"
    data-scope="dialog"
    data-part="body"
    :class="crafts.body({ class: propsClass, ...theme })"
  >
    <slot />
  </ark.div>
</template>
