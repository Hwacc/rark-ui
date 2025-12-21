<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@rui-ark/vue-core/components/collapsiable'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="w-fit flex items-center gap-2">
      <div>trigger</div>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <p>Hello</p>
    </CollapsibleContent>
  </Collapsible>
</template>
