import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import type { RUIConfigContext } from '../providers/config/rui-config-context'
import { defaultsDeep } from 'lodash-es'
import { computed, unref } from 'vue'
import { injectRUIConfigContext } from '../providers/config/rui-config-context'

export function useConfig(
  props?: MaybeRefOrGetter<RUIConfigContext>,
): ComputedRef<RUIConfigContext> {
  const ruiConfig = injectRUIConfigContext(computed(() => ({})))
  return computed(() => defaultsDeep(unref(props), ruiConfig.value))
}
