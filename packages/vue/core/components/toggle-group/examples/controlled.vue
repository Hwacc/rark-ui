<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../button'
import { ToggleGroup, ToggleGroupItem } from '../index'

const value = ref<string[]>(['b'])
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <Button size="sm" variant="outline" @click="value = ['a']">
        Set A
      </Button>
      <Button size="sm" variant="outline" @click="value = ['b']">
        Set B
      </Button>
      <Button size="sm" variant="outline" @click="value = ['c']">
        Set C
      </Button>
      <span class="text-sm text-hff">value: {{ value }}</span>
    </div>

    <ToggleGroup v-model="value" type="single">
      <ToggleGroupItem value="a">
        A
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        C
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
</template>
