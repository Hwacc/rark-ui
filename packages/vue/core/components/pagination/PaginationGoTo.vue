<script lang="ts">
export interface PaginationGotoProps extends PolymorphicProps, ThemeProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { PolymorphicProps } from '@ark-ui/vue/factory'
import type { ThemeProps } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { useTheme } from '@rui-ark/vue-core/composables/useTheme'

const {
  class: propsClass,
  size,
  unstyled = undefined,
  ...props
} = defineProps<PaginationGotoProps>()

const theme = useTheme(() => ({ size, unstyled }))
</script>

<template>
  <ark.div
    data-scope="pagination"
    data-part="goto"
  >
    <input type="number">
  </ark.div>
</template>
