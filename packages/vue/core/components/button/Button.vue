<script lang="ts">
export interface ButtonProps extends ThemeCrafts<'tvButton'> {
  variant?: ButtonVariants['variant'] | string
  class?: HTMLAttributes['class']
  disabled?: boolean
  tooltip?: string
  ripple?: boolean
  loading?: boolean
  asChild?: boolean
  ui?: {
    root?: {
      class?: HTMLAttributes['class']
    }
    loading?: {
      class?: HTMLAttributes['class']
    }
  }
}
</script>

<script setup lang="ts">
import type { ButtonVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'
import { getNodeCssVar } from '@rui-ark/shared/css'
import { useRipple } from '@rui-ark/vue/composables/useRipple'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { useForwardExpose } from '@rui-ark/vue/libs/useForwardExpose'
import { LoaderCircle } from 'lucide-vue-next'
import { computed } from 'vue'

const {
  variant = 'default',
  class: propsClass,
  theme: propsTheme,
  disabled,
  ripple = false,
  loading = false,
  asChild = false,
  ui,
} = defineProps<ButtonProps>()

const emits = defineEmits<{
  click: [event: MouseEvent]
}>()
const slots = defineSlots<{
  default?: () => any
  tooltip?: () => any
  loading?: () => any
}>()

const { forwardRef, currentElement } = useForwardExpose()
const rippleColor = computed(() => {
  return getNodeCssVar(currentElement.value, '--rui-ripple-color', 'transparent')
})
const {
  onRipple,
  referenceRef: rippleReferenceRef,
  Ripple,
} = useRipple({
  color: rippleColor,
})

function onClick(event: MouseEvent) {
  onRipple(event)
  emits('click', event)
}

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvButton())
</script>

<template>
  <ark.button
    :ref="
      (r) => {
        forwardRef(r)
        rippleReferenceRef = r
      }
    "
    :class="crafts.root({
      variant: variant as ButtonVariants['variant'],
      loading,
      class: [ui?.root?.class, propsClass],
      ...theme,
    })"
    :disabled="disabled"
    :data-variant="variant"
    :data-ripple="ripple ? true : undefined"
    :data-loading="loading ? true : undefined"
    :data-theme-size="theme.size"
    :as-child="asChild"
    @click="onClick"
  >
    <slot
      v-if="loading"
      name="loading"
    >
      <LoaderCircle
        :class="crafts.loading({
          variant: variant as ButtonVariants['variant'],
          loading,
          class: [ui?.loading?.class],
          ...theme,
        })"
      />
    </slot>
    <slot />
    <Ripple v-if="ripple" />
  </ark.button>
</template>
