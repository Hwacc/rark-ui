import type { TreeViewRootBaseProps } from '@ark-ui/vue'
import type { ThemeCrafts } from '@rark-ui/vue/providers'
import type { HTMLAttributes } from 'vue'

export interface TreeProps<T> extends TreeViewRootBaseProps<T>, ThemeCrafts<'tvTree'> {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    tree?: HTMLAttributes['class']
  }
}
