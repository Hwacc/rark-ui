<script setup lang="ts">
import { fakerEN } from '@faker-js/faker'
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '../index'

const items = Array.from({ length: 5 }, () => {
  const cat = fakerEN.animal.cat()
  return { label: cat, value: cat }
})
const value = ref<string | undefined>(items[0]?.value)
</script>

<template>
  <div class="w-full flex flex-col gap-3">
    <div class="text-sm text-hff">
      value: {{ value }}
    </div>

    <RadioGroup v-model="value">
      <RadioGroupItem
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </RadioGroup>
  </div>
</template>
