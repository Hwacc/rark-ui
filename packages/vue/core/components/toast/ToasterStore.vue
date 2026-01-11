<script setup lang="ts">
import type { CreateToasterReturn } from '@ark-ui/vue'
import type { VNode } from 'vue'
import { isEmpty, isNil } from 'lodash-es'
import { computed, ref, useSlots } from 'vue'
import { Toaster } from '.'

const slots = useSlots()
let defaultSlots = slots.default?.()
// if default-slot is a slot with children
if (!isEmpty(defaultSlots) && isNil(defaultSlots?.[0].component) && !isEmpty(defaultSlots?.[0].children)) {
  defaultSlots = defaultSlots?.[0].children as VNode[]
}
else {
  defaultSlots = []
}

const slotsToasters = ref<{ toaster: any }[]>([])
const defaultToaster = ref<{ toaster: CreateToasterReturn }>()

defineExpose({
  toasters: computed(() => [...slotsToasters.value, defaultToaster.value].filter(r => r && r.toaster)),
})
</script>

<template>
  <template v-if="defaultSlots?.length">
    <component
      :is="slot"
      v-for="(slot, index) in defaultSlots"
      :key="slot.key"
      :ref="(el: { toaster: CreateToasterReturn }) => { slotsToasters[index] = el }"
    />
  </template>
  <template v-else>
    <Toaster ref="defaultToaster" />
  </template>
</template>
