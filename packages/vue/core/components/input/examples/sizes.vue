<script setup lang="ts">
import { Input } from '../index'
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <Input class="w-60" size="sm" placeholder="Small" />
    <Input class="w-60" size="base" placeholder="Base" />
    <Input class="w-60" size="lg" placeholder="Large" />
  </div>
</template>
