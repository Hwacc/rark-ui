<script setup lang="tsx">
import type { VNode } from 'vue'
import type { SpinRenderProps } from '.'
import { ark } from '@ark-ui/vue/factory'
import { LoaderCircle } from 'lucide-vue-next'
import { computed, provide } from 'vue'

const slots = defineSlots<{
  default: () => VNode
  icon: (props: SpinRenderProps) => VNode | null | undefined
}>()

function renderIcon(props: SpinRenderProps) {
  const icon = slots?.icon?.(props)
  const crafts = computed(() => props.theme?.crafts?.tvSpin?.())
  if (icon) {
    return (
      <ark.span
        class={crafts.value?.icon({
          class: props.class,
          ...props.theme,
        })}
        as-child
        data-variant="custom"
      >
        {icon}
      </ark.span>
    )
  }
  return (
    <LoaderCircle
      class={crafts.value?.icon({
        class: ['animate-spin', props.class],
        ...props.theme,
      })}
      data-variant="default"
    />
  )
}

provide('SpinProvider', { renderIcon })
</script>

<template>
  <slot />
</template>
