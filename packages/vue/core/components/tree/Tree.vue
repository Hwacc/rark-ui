<script lang="ts">
export interface TreeProps<T> extends TreeViewRootBaseProps<T>, Theme {
  class?: HTMLAttributes['class']
  ui?: {
    root?: HTMLAttributes['class']
    tree?: HTMLAttributes['class']
  }
}
</script>

<script setup lang="ts" generic="T = TreeNode">
import type { TreeNode, TreeViewRootBaseProps } from '@ark-ui/vue/tree-view'
import type { Theme } from '@rui-ark/vue/providers/theme'
import type { HTMLAttributes } from 'vue'
import type { TreeViewRootEmits } from './tree'
import { useForwardProps } from '@ark-ui/vue'
import { TreeView, useTreeView } from '@ark-ui/vue/tree-view'
import { tvTree } from '@rui-ark/themes/crafts/core/tree'
import { useTheme } from '@rui-ark/vue/composables/useTheme'
import { ThemeProvider } from '@rui-ark/vue/providers/theme'

const { class: propsClass, theme: propsTheme, ui, ...props } = defineProps<TreeProps<T>>()
const emits = defineEmits<TreeViewRootEmits<T>>()
const forwarded = useForwardProps<TreeProps<T>, any>(props)
const treeView = useTreeView<T>(forwarded, emits)

// theme
const theme = useTheme(() => propsTheme)
const { root, tree } = tvTree()
</script>

<template>
  <TreeView.RootProvider
    :value="treeView"
    :class="root({ class: [ui?.root, propsClass], ...theme })"
  >
    <ThemeProvider :value="theme">
      <slot name="prefix" />
      <TreeView.Tree :class="tree({ class: ui?.tree, ...theme })">
        <slot />
      </TreeView.Tree>
      <slot name="suffix" />
    </ThemeProvider>
  </TreeView.RootProvider>
</template>
