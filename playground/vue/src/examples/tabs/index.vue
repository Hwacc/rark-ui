<script setup lang="ts">
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from '@rui-ark/vue-core/components/tabs'
import { ref } from 'vue'

const tab = ref('tab-7')
</script>

<template>
  <div class="flex items-center gap-2">
    <Tabs v-model="tab">
      <TabsList class="w-50">
        <TabsTrigger v-for="index in 10" :key="index" :value="`tab-${index}`">
          Tab {{ index }}
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent v-for="index in 10" :key="index" :value="`tab-${index}`">
        Content {{ index }}
      </TabsContent>
    </Tabs>
  </div>
</template>
