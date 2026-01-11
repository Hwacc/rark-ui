<script setup lang="ts">
import { createToaster, Toaster } from '@ark-ui/vue/toast'
import { useConfig } from '@rui-ark/vue-core/composables/useConfig'
import { watch } from 'vue'

const toaster = createToaster({
  placement: 'top-end',
})

const config = useConfig('toasters')

watch(config, (newVal) => {
  console.log('config', newVal)
})
defineExpose({
  toaster,
})
</script>

<template>
  <Toaster :toaster="toaster">
    <slot />
  </Toaster>
</template>
