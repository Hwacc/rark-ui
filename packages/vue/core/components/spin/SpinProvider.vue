<script setup lang="tsx">
import type { VNode } from 'vue'
import type { SpinRenderProps } from '.'
import { ark } from '@ark-ui/vue/factory'
import { tvSpin } from '@rui-ark/themes/crafts/core/spin'
import { LoaderCircle } from 'lucide-vue-next'
import { provide } from 'vue'

const slots = defineSlots<{
  default: () => VNode
  icon: (props: SpinRenderProps) => VNode | null | undefined
}>()

function renderIcon(props: SpinRenderProps) {
  const icon = slots?.icon?.(props)
  const { icon: tvIcon } = tvSpin()
  console.log('theme', props.theme)
  if (icon) {
    return (
      <ark.span
        class={tvIcon({
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
      class={tvIcon({
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
