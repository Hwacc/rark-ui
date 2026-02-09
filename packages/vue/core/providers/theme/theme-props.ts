import type { ComputedRef } from 'vue'
import { createContext } from '@ark-ui/vue/utils'

export type Skin = 'razer' | 'shadcn'
export type Surface = 'light' | 'dark' | (string & {})
export type Crafts = typeof import('@rui-ark/themes/default').coreCrafts
export interface ThemeProps {
  skin?: Skin
  surface?: Surface
  size?: 'base' | 'sm' | 'lg' | 'xs' | undefined
  unstyled?: boolean
  bordered?: boolean
  crafts?: Partial<Crafts>
}
export interface Theme {
  theme?: ThemeProps
}
export interface ThemeCrafts<K extends keyof Crafts> {
  theme?: Omit<ThemeProps, 'crafts'> & { crafts?: Pick<Crafts, K> }
}
export interface ThemeNoCrafts {
  theme?: Omit<ThemeProps, 'crafts'>
}

export const [privideThemeContext, injectThemeContext]
  = createContext<ComputedRef<ThemeProps>>('theme')
