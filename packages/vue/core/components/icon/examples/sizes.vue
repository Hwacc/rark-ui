<script setup lang="ts">
import { Icon } from '../index'
</script>

<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2">
      <Icon icon="lucide:star" size="sm" />
      <span class="text-xs text-hff">sm</span>
    </div>
    <div class="flex items-center gap-2">
      <Icon icon="lucide:star" size="base" />
      <span class="text-xs text-hff">base</span>
    </div>
    <div class="flex items-center gap-2">
      <Icon icon="lucide:star" size="lg" />
      <span class="text-xs text-hff">lg</span>
    </div>
  </div>
</template>
