<script setup lang="ts">
import { ToggleContext } from '@ark-ui/vue'
import { Button } from '@rui-ark/vue-core/components/button'
import { Icon } from '@rui-ark/vue-core/components/icon'
import { Toggle } from '@rui-ark/vue-core/components/toggle'
</script>

<template>
  <div class="w-full flex flex-col items-center gap-4">
    <div class="w-full flex items-center gap-4">
      <Button> Default </Button>
      <Button variant="normal">
        Normal
      </Button>
      <Button loading>
        Loading
      </Button>
      <Button variant="outline">
        Outline
      </Button>
      <Button variant="text">
        Text
      </Button>
      <Button variant="icon">
        <Icon icon="lucide:plus" />
      </Button>
      <Button ripple>
        Ripple
      </Button>
    </div>
    <div class="w-full flex items-center gap-4">
      <Button size="sm">
        Small
      </Button>
      <Button size="base">
        Base
      </Button>
      <Button size="lg">
        Large
      </Button>
    </div>
    <div class="w-full flex items-center gap-4">
      <Toggle>
        <ToggleContext v-slot="{ pressed }">
          <Icon :icon="pressed ? 'lucide:volume-2' : 'lucide:volume-off'" />
          Toggle
        </ToggleContext>
      </Toggle>
    </div>
  </div>
</template>
