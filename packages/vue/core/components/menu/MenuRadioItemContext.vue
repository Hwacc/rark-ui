<script lang="ts" setup>
import { useMenuItemContext } from '@ark-ui/vue'

const context = useMenuItemContext()
</script>

<template>
  <slot v-bind="context" />
</template>
