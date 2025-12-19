<script lang="ts">
export interface ButtonProps {
  variant?: ButtonVariants['variant'] | string
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  disabled?: boolean
  checked?: boolean
  tooltip?: string
  unstyled?: boolean
  ripple?: boolean
  loading?: boolean
  ui?: {}
}
</script>

<script setup lang="ts">
import type { ButtonVariants } from '@rui-ark/themes/mould/button'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { tvButton } from '@rui-ark/themes/mould/button'
import { useTemplateRef } from 'vue'

const {
  variant = 'default',
  size = 'base',
  class: propsClass,
  disabled,
  checked = false,
  unstyled,
  ripple = false,
  loading = false,
  tooltip,
  ui,
} = defineProps<ButtonProps>()

const buttonRef = useTemplateRef<{ $el: HTMLButtonElement } | null>('button')

const { base } = tvButton()
</script>

<template>
  <ark.button
    ref="button"
    :class="base({
      variant: variant as ButtonVariants['variant'],
      size,
      unstyled,
      loading,
      class: [propsClass],
    })"
    :disabled="disabled"
    :data-variant="variant"
    :data-ripple="ripple ? true : undefined"
    :data-loading="loading ? true : undefined"
    :data-switch-state="
      variant === 'switch' ? (checked ? 'checked' : 'unchecked') : undefined
    "
    :data-size="size"
  >
    <slot />
  </ark.button>
</template>
