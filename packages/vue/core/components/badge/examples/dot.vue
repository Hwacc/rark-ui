<script lang="ts" setup>
import { inject } from 'vue'
import { Badge } from '../index'

const bgKey = inject('STORYBOOK_BG_KEY')
</script>

<template>
  <div class="flex items-center">
    <span :class="bgKey === 'dark' ? 'text-white' : 'text-black'">Dot</span>
    <Badge variant="dot" as="sup" />
  </div>
</template>
