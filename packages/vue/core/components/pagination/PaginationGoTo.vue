<script setup lang="ts">
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'

export interface PaginationGotoProps extends ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
const { class: propsClass, ...props } = defineProps<PaginationGotoProps>()
</script>

<template>
  <div :class="propsClass">
    <input v-model="page" type="number">
  </div>
</template>
