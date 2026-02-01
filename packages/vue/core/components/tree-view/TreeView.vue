<script lang="ts">
export interface TreeViewProps<T> extends TreeViewRootBaseProps<T>, Theme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts" generic="T = TreeNode">
import type { TreeNode, TreeViewRootBaseProps } from '@ark-ui/vue/tree-view'
import type { Theme } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import type { TreeViewRootEmits } from './tree-view.types'
import { useForwardProps } from '@ark-ui/vue'
import { TreeView, useTreeView } from '@ark-ui/vue/tree-view'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'

const { theme, ...props } = defineProps<TreeViewProps<T>>()
const emits = defineEmits<TreeViewRootEmits<T>>()
const forwarded = useForwardProps<TreeViewProps<T>, any>(props)
const treeView = useTreeView<T>(forwarded, emits)
</script>

<template>
  <TreeView.RootProvider :value="treeView">
    <ThemeProvider>
      <slot />
    </ThemeProvider>
  </TreeView.RootProvider>
</template>
