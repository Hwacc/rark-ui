<script setup lang="ts">
import { svgDataUri } from './_utils'

const loading = svgDataUri({ text: 'loading...', bg: '#444', fg: '#fff' })
const error = svgDataUri({ text: 'error', bg: '#7f1d1d', fg: '#fff' })
const good = svgDataUri({ text: 'array src (fallback)', bg: '#14532d', fg: '#fff' })

// 第一个为空触发“加载下一个”的逻辑
const src = ['', good]
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      数组 src（内部会依次尝试，命中后缓存）
    </p>
    <img
      v-lazy:src="{
        src,
        loading,
        error,
      }"
      class="w-72 h-40 rounded border border-h55 object-cover"
      alt="array-src"
    >
  </div>
</template>
