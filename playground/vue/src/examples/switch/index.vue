<script setup lang="ts">
import { Switch, SwitchLabel } from '@rui-ark/vue-core/components/switch'
</script>

<template>
  <div class="flex items-center gap-2">
    <Switch />
    <Switch size="sm" />
    <Switch size="lg" />
    <Switch disabled />
    <Switch disabled checked />
    <Switch>
      <SwitchLabel>Switch with label</SwitchLabel>
    </Switch>
  </div>
</template>
