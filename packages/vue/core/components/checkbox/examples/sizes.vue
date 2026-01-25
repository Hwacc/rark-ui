<script lang="ts" setup>
import { Checkbox } from '../index'
</script>

<template>
  <div class="w-full flex items-center gap-6">
    <Checkbox size="sm" label="Small" />
    <Checkbox size="base" label="Base" />
    <Checkbox size="lg" label="Large" />
    <Checkbox size="lg" label="Large (disabled)" disabled />
  </div>
</template>

