<script lang="ts">
export interface MessagerProps
  extends Omit<ToastStoreProps, 'placement'>,
  ThemeCrafts<'tvMessage'> {
  showClose?: boolean
}
</script>

<script setup lang="ts">
import type { ToastStoreProps } from '@ark-ui/vue/toast'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import type { MessageOptions } from '.'
import { createToaster, Toaster } from '@ark-ui/vue/toast'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'
import { defaults } from 'es-toolkit/compat'

const { theme: propsTheme, showClose = true, ...props } = defineProps<MessagerProps>()
defineSlots<{
  default: (props: { message: MessageOptions }) => any
}>()
const messager = createToaster({
  ...props,
  placement: 'top',
})

// theme
const theme = useTheme(() => propsTheme)

// expose
defineExpose({
  messager,
})
</script>

<template>
  <Toaster
    v-slot="message"
    :toaster="messager"
  >
    <ThemeProvider :value="theme">
      <slot :message="defaults(message, { showClose })" />
    </ThemeProvider>
  </Toaster>
</template>
