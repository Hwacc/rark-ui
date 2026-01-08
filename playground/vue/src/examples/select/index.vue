<script setup lang="ts">
import { createListCollection } from '@ark-ui/vue/select'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@rui-ark/vue-core/components/select'

const collection = createListCollection({
  items: ['React', 'Vue', 'Angular'],
})
</script>

<template>
  <Select :collection="collection">
    <SelectTrigger>
      <SelectValueText>Select a Framework</SelectValueText>
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="item in collection.items" :key="item" :item="item">
        {{ item }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
