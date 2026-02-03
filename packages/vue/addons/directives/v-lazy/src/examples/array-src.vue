<script setup lang="ts">
// 第一个为空触发“加载下一个”的逻辑
const src = ['']
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      数组 src（内部会依次尝试，命中后缓存）
    </p>
    <img
      v-lazy:src="{}"
      class="w-72 h-40 rounded border border-h55 object-cover"
      alt="array-src"
    >
  </div>
</template>
