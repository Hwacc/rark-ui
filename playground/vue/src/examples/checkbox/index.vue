<script setup lang="ts">
import { Checkbox, CheckboxGroup } from '@rui-ark/vue-core/components/checkbox'
import { ref, watch } from 'vue'

const checkboxState = ref<boolean | 'indeterminate'>(false)

const groupItems = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
]
const groupState = ref<string[]>([])

watch(groupState, (newVal) => {
  console.log('groupState', newVal)
})
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox
      v-model:checked="checkboxState"
      label="Checkbox"
    />
    <Checkbox default-checked="indeterminate" label="Checkbox" />
    <Checkbox
      label="Checkbox"
      disabled
    />
    <CheckboxGroup v-model:value="groupState">
      <Checkbox v-for="item in groupItems" :key="item.value" :label="item.label" :name="item.value" :value="item.value" />
    </CheckboxGroup>
  </div>
</template>
