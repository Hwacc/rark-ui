<script setup lang="ts">
import type { PinInputRootEmits } from '@ark-ui/vue'
import type { PinInputProps } from './props'
import { PinInput, useForwardProps, usePinInput } from '@ark-ui/vue'
import { useTheme } from '@rark-ui/vue/composables'
import { computed } from 'vue'

const {
  class: propsClass,
  ui,
  theme: propsTheme,
  count = 4,
  ...props
} = defineProps<PinInputProps>()
const emits = defineEmits<PinInputRootEmits>()
const forwarded = useForwardProps(props)
const pinInput = usePinInput(forwarded, emits)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvPinInput())
</script>

<template>
  <PinInput.RootProvider :value="pinInput">
    <slot name="prefix" />
    <PinInput.Control>
      <PinInput.Input v-for="i in count" :key="i" :index="i - 1" />
    </PinInput.Control>
    <slot name="suffix" />
  </PinInput.RootProvider>
</template>
