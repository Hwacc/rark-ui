<script setup lang="ts">
import type { ToastOptions } from '../index'
import { Button } from '../../button'
import { Toast, Toaster, ToasterManager, useToast } from '../index'

const { toast } = useToast()

function create(options: ToastOptions) {
  toast.create({
    title: 'Hello, world!',
    description: 'This is a toast.',
    ...options,
  })
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button size="sm" @click="() => create({ type: 'info' })">
      Info
    </Button>
    <Button size="sm" @click="() => create({ type: 'success' })">
      Success
    </Button>
    <Button size="sm" @click="() => create({ type: 'warning' })">
      Warning
    </Button>
    <Button size="sm" @click="() => create({ type: 'error' })">
      Error
    </Button>
    <Button size="sm" @click="() => create({ type: 'loading' })">
      Loading
    </Button>
    <Button size="sm" variant="outline" @click="() => create({ size: 'sm' })">
      size=sm
    </Button>
    <Button size="sm" variant="outline" @click="() => create({ size: 'base' })">
      size=base
    </Button>
    <Button size="sm" variant="outline" @click="() => create({ size: 'lg' })">
      size=lg
    </Button>
  </div>
</template>
