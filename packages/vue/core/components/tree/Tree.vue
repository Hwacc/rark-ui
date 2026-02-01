<script lang="ts">
export interface TreeProps<T> extends TreeViewRootBaseProps<T>, Theme {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts" generic="T = TreeNode">
import type { TreeNode, TreeViewRootBaseProps } from '@ark-ui/vue/tree-view'
import type { Theme } from '@rui-ark/vue-core/providers/theme'
import type { HTMLAttributes } from 'vue'
import type { TreeViewRootEmits } from './tree'
import { useForwardProps } from '@ark-ui/vue'
import { TreeView, useTreeView } from '@ark-ui/vue/tree-view'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'

const { theme, ...props } = defineProps<TreeProps<T>>()
const emits = defineEmits<TreeViewRootEmits<T>>()
const forwarded = useForwardProps<TreeProps<T>, any>(props)
const treeView = useTreeView<T>(forwarded, emits)
</script>

<template>
  <TreeView.RootProvider :value="treeView">
    <ThemeProvider>
      <slot name="prefix" />
      <TreeView.Tree>
        <slot />
      </TreeView.Tree>
      <slot name="suffix" />
    </ThemeProvider>
  </TreeView.RootProvider>
</template>
