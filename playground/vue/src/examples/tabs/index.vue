<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@rui-ark/vue-core/components/tabs'
import { ref } from 'vue'

const tab = ref('tab-1')
</script>

<template>
  <div class="flex items-center gap-2">
    <Tabs v-model="tab">
      <TabsList class="w-50">
        <TabsTrigger v-for="index in 10" :key="index" :value="`tab-${index}`">
          Tab {{ index }}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        Content 1
      </TabsContent>
      <TabsContent value="tab-2">
        Content 2
      </TabsContent>
      <TabsContent value="tab-3">
        Content 3
      </TabsContent>
    </Tabs>
  </div>
</template>
