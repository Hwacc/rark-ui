<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      背景图（<code>v-lazy:background-image</code>），loading 支持 gradient
    </p>
    <div
      v-lazy:background-image="{}"
      class="w-80 h-36 rounded border border-h55 bg-cover bg-center"
    />
  </div>
</template>
