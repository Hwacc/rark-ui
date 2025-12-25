import type { MaybeRefOrGetter } from 'vue'
import type { RUIConfigContext } from '../providers/config/rui-config-context'
import { merge } from 'lodash-es'
import { computed, toValue } from 'vue'
import { injectRUIConfigContext } from '../providers/config/rui-config-context'

export function useConfig(props?: MaybeRefOrGetter<RUIConfigContext>) {
  const config = injectRUIConfigContext()
  const propsConfig = toValue(props ?? {})
  const defaultConfig: RUIConfigContext = {
    theme: {
      size: 'base',
      unstyled: false,
      bordered: true,
    },
    tooltip: {
      openDelay: 0,
      closeDelay: 0,
      lazyMount: false,
      unmountOnExit: false,
    },
  }
  return computed<RUIConfigContext>(() => {
    return merge(defaultConfig, config.value ?? {}, propsConfig)
  })
}
