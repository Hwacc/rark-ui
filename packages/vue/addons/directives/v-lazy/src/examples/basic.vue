<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      基础用法（显式 bindType：<code>v-lazy:src</code>）
    </p>
    <img
      v-lazy:src="{}"
      class="w-60 h-40 rounded border border-h55 object-cover"
      alt="lazy"
    >
  </div>
</template>
