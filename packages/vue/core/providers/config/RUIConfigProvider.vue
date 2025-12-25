<script setup lang="ts">
import type { RUIConfigContext } from './rui-config-context'
import { computed } from 'vue'
import { provideRUIConfigContext } from './rui-config-context'

const props = defineProps<{
  value?: RUIConfigContext
}>()

provideRUIConfigContext(computed(() => props.value ?? {}))
</script>

<template>
  <slot />
</template>
