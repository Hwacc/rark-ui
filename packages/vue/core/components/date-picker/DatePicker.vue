<script lang="ts">
import type * as ZagDatePicker from '@zag-js/date-picker'
import { useTheme } from '@rui-ark/vue/composables/useTheme'

export interface DatePickerProps extends DatePickerRootBaseProps, Theme {}
export type DatePickerRootEmits = {
  'focusChange': [details: ZagDatePicker.FocusChangeDetails]
  'openChange': [details: ZagDatePicker.OpenChangeDetails]
  'valueChange': [details: ZagDatePicker.ValueChangeDetails]
  'viewChange': [details: ZagDatePicker.ViewChangeDetails]
  'update:modelValue': [value: ZagDatePicker.DateValue[]]
  'update:open': [open: boolean]
  'update:view': [view: ZagDatePicker.DateView]
  'update:focusedValue': [focusedValue: ZagDatePicker.DateValue]
}
</script>

<script setup lang="ts">
import type { DatePickerRootBaseProps, UseDatePickerProps } from '@ark-ui/vue'
import type { Theme } from '@rui-ark/vue/providers/theme'
import { DatePicker, useDatePicker, useForwardExpose, useForwardProps } from '@ark-ui/vue'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'

const { theme: themeProps, ...props } = defineProps<DatePickerProps>()
const emit = defineEmits<DatePickerRootEmits>()
const datePicker = useDatePicker(useForwardProps<DatePickerProps, UseDatePickerProps>(props), emit)

// theme
console.log('themeProps', themeProps)
const theme = useTheme(() => themeProps)

// expose
defineExpose({ $api: datePicker })
useForwardExpose()
</script>

<template>
  <DatePicker.RootProvider :value="datePicker">
    <ThemeProvider :value="theme">
      <slot />
    </ThemeProvider>
  </DatePicker.RootProvider>
</template>
