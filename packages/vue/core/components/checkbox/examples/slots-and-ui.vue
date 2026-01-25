<script lang="ts" setup>
import type { CheckedState } from '../index'
import { computed, ref } from 'vue'
import { Checkbox } from '../index'

const checked = ref<CheckedState>('indeterminate')
const text = computed(() => (checked.value === true ? 'checked' : checked.value === 'indeterminate' ? 'mixed' : 'unchecked'))
</script>

<template>
  <div class="w-full flex items-center gap-6">
    <Checkbox
      v-model:checked="checked"
      :ui="{
        control: 'border-rz-green data-[state=checked]:bg-rz-green data-[state=indeterminate]:bg-rz-green',
        label: 'select-none',
      }"
    >
      <template #indicator="{ checkedState }">
        <span class="text-[10px] font-bold leading-none text-black">
          {{ checkedState === 'indeterminate' ? '-' : checkedState ? '✓' : '' }}
        </span>
      </template>
      <template #label>
        <span class="text-sm">
          Custom slots ({{ text }})
        </span>
      </template>
    </Checkbox>

    <Checkbox
      label="Required + name/value"
      name="accept"
      value="yes"
      required
    />
  </div>
</template>
