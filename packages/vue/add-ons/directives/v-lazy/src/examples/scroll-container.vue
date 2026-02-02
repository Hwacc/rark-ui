<script setup lang="ts">
import { svgDataUri } from './_utils'

const loading = svgDataUri({ text: 'loading...', bg: '#444', fg: '#fff' })
const error = svgDataUri({ text: 'error', bg: '#7f1d1d', fg: '#fff' })

const srcs = Array.from({ length: 8 }, (_, i) =>
  svgDataUri({ text: `item ${i + 1}`, bg: '#1f2937', fg: '#fff' }))
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      自定义滚动容器：<code>v-lazy.scroller:src</code>（modifier 名即容器 ref）
    </p>

    <div class="h-52 w-80 overflow-auto rounded border border-h55 p-3">
      <div class="flex flex-col gap-6">
        <img
          v-for="(src, i) in srcs"
          :key="src"
          v-lazy.scroller:src="{
            src,
            loading,
            error,
          }"
          class="w-full h-28 rounded border border-h55 object-cover"
          :alt="`lazy-${i}`"
        >
      </div>
    </div>
  </div>
</template>
