<script lang="ts">
export interface RadioGroupItemProps extends RadioGroupItemBaseProps, ThemeNoCrafts {
  class?: HTMLAttributes['class']
  label?: string
  variant?: RadioGroupVariants['variant']
  ui?: {
    root?: HTMLAttributes['class']
    control?: HTMLAttributes['class']
    indicator?: HTMLAttributes['class']
    text?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts">
import type { RadioGroupItemBaseProps, UseRadioGroupItemContext } from '@ark-ui/vue/radio-group'
import type { RadioGroupVariants } from '@rui-ark/themes/default/crafts/core'
import type { ThemeNoCrafts } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes, UnwrapRef } from 'vue'
import { RadioGroup } from '@ark-ui/vue/radio-group'
import { useForwardProps } from '@ark-ui/vue/utils'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { Check, Circle } from 'lucide-vue-next'
import { computed } from 'vue'

const {
  class: propsClass,
  theme: propsTheme,
  label,
  ui,
  variant = 'default',
  ...props
} = defineProps<RadioGroupItemProps>()
defineSlots<{
  control: (props: UnwrapRef<UseRadioGroupItemContext>) => any
  default: (props: UnwrapRef<UseRadioGroupItemContext>) => any
}>()
const forwarded = useForwardProps<RadioGroupItemProps, RadioGroupItemBaseProps>(props)

// theme
const theme = useTheme(() => propsTheme)
const crafts = computed(() => theme.value.crafts.tvRadioGroup())
</script>

<template>
  <RadioGroup.Item
    v-bind="forwarded"
    :class="crafts.item({ class: [ui?.root, propsClass], ...theme })"
  >
    <RadioGroup.ItemContext v-slot="context">
      <slot
        name="control"
        v-bind="context"
      >
        <RadioGroup.ItemControl
          :class="crafts.itemControl({ class: ui?.control, variant, ...theme })"
          :data-variant="variant"
        >
          <Circle
            v-if="variant === 'default'"
            :class="crafts.itemIndicator({ class: ui?.indicator, variant, ...theme })"
            :data-state="context.checked ? 'checked' : 'unchecked'"
            :data-variant="variant"
            :hidden="context.checked ? undefined : true"
          />
          <Check
            v-if="variant === 'checkbox'"
            :class="crafts.itemIndicator({ class: ui?.indicator, variant, ...theme })"
            :data-state="context.checked ? 'checked' : 'unchecked'"
            :data-variant="variant"
            :hidden="context.checked ? undefined : true"
          />
        </RadioGroup.ItemControl>
      </slot>
      <slot
        name="default"
        v-bind="context"
      >
        <RadioGroup.ItemText
          v-if="label"
          :class="crafts.itemText({ class: ui?.text, ...theme })"
        >
          {{ label }}
        </RadioGroup.ItemText>
      </slot>
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.ItemContext>
  </RadioGroup.Item>
</template>
