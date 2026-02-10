<script lang="ts">
export interface DialogBackdropProps extends ArkDialogBackdropProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { DialogBackdropProps as ArkDialogBackdropProps } from '@ark-ui/vue/dialog'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from '@ark-ui/vue'
import { Dialog } from '@ark-ui/vue/dialog'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { computed } from 'vue'

const { class: propsClass, theme: propsTheme, ...props } = defineProps<DialogBackdropProps>()
const forwarded = useForwardProps(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvDialog())
</script>

<template>
  <Dialog.Backdrop v-bind="forwarded" :class="crafts.backdrop({ class: propsClass, ...theme })">
    <slot />
  </Dialog.Backdrop>
</template>
