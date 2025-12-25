import type { MaybeRefOrGetter } from 'vue'
import type { ThemeContext } from '../providers/theme/theme-context'
import { merge } from 'lodash-es'
import { computed, toValue } from 'vue'
import { injectThemeContext } from '../providers/theme/theme-context'

export function useTheme(props?: MaybeRefOrGetter<ThemeContext>) {
  const theme = toValue(props ?? {})
  const contextTheme = injectThemeContext()
  return computed<ThemeContext>(() => {
    return merge(
      {
        size: 'base',
        unstyled: false,
        bordered: true,
      },
      contextTheme?.value ?? {},
      theme,
    )
  })
}
