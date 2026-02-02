<script setup lang="ts">
import { svgDataUri } from './_utils'

const loading = 'linear-gradient(90deg, rgba(255,255,255,.08), rgba(255,255,255,.18), rgba(255,255,255,.08))'
const error = svgDataUri({ text: 'error', bg: '#7f1d1d', fg: '#fff' })
const src = svgDataUri({ text: 'background-image', bg: '#0f172a', fg: '#fff' })
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-hcc">
      背景图（<code>v-lazy:background-image</code>），loading 支持 gradient
    </p>
    <div
      v-lazy:background-image="{
        src,
        loading,
        error,
      }"
      class="w-80 h-36 rounded border border-h55 bg-cover bg-center"
    />
  </div>
</template>
