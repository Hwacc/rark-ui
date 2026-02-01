<script lang="ts">
import type { Theme } from '@rui-ark/vue-core/providers/theme'

interface Node {
  id: string
  name: string
  children?: Node[]
}

export interface TreeNodeProps<T = Node> extends Theme {
  node: T
  indexPath: number[]
  keyMap?: {
    id: keyof T
    name: keyof T
    children: keyof T
  }
}
</script>

<script setup lang="ts">
import { TreeView } from '@ark-ui/vue'

const {
  node,
  indexPath,
  keyMap = { id: 'id', name: 'name', children: 'children' },
} = defineProps<TreeNodeProps>()
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <TreeView.NodeContext>
      {{ node[keyMap.name] }}
    </TreeView.NodeContext>
  </TreeView.NodeProvider>
</template>
