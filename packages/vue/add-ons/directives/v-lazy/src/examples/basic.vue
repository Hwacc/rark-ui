<script setup lang="ts">
import { svgDataUri } from './_utils'

const loading = svgDataUri({ text: 'loading...', bg: '#444', fg: '#fff' })
const error = svgDataUri({ text: 'error', bg: '#7f1d1d', fg: '#fff' })
const src = svgDataUri({ text: 'v-lazy image', bg: '#14532d', fg: '#fff' })
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      基础用法（显式 bindType：<code>v-lazy:src</code>）
    </p>
    <img
      v-lazy:src="{
        src,
        loading,
        error,
      }"
      class="w-60 h-40 rounded border border-h55 object-cover"
      alt="lazy"
    >
  </div>
</template>
