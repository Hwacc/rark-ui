import { Checkbox as ArkCheckbox, useCheckboxContext, useCheckboxGroup, useCheckboxGroupContext } from '@ark-ui/vue/checkbox'

const { Group, GroupProvider } = ArkCheckbox

export {
  default as Checkbox,
  type CheckboxProps,
  type CheckedState,
} from './Checkbox.vue'

export {
  Group as CheckboxGroup,
  GroupProvider as CheckboxGroupProvider,
  useCheckboxContext,
  useCheckboxGroup,
  useCheckboxGroupContext,
}
