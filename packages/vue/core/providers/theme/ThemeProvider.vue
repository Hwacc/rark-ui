<script setup lang="ts">
import type { ThemeContext } from './theme-context'
import { computed } from 'vue'
import { privideThemeContext } from './theme-context'

const props = defineProps<{
  value?: ThemeContext
}>()

privideThemeContext(computed(() => props.value ?? {}))
</script>

<template>
  <slot />
</template>
