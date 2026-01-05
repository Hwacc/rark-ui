<script setup lang="tsx">
import { Button } from '@rui-ark/vue-core/components/button'
import {
  Dialog,
  dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@rui-ark/vue-core/components/dialog'
import { ThemeProvider } from '@rui-ark/vue-core/providers/theme'
import { ref } from 'vue'

function handleOpenChange(details: any) {
  console.log('open change', details)
}

function handleEscapeKeyDown(event: KeyboardEvent) {
  console.log('escape key down', event)
}

const open = ref(false)
function handleVModelOpen() {
  open.value = true
  console.log('handleVModelOpen', open.value)
}

function handleOpenDialog() {
  dialog({
    title: 'Functional Dialog',
    content: () => <div>Render Content</div>,
    onOpenChange: (details) => {
      console.log('functional dialog onOpenChange', details)
    },
    onOk: () => {
      console.log('im ok')
    },
    onCancel: () => {
      console.log('im cancel')
    },
  })
}
</script>

<template>
  <div class="flex items-center gap-4">
    <Dialog
      :lazy-mount="true"
      :unmount-on-exit="true"
      @open-change="handleOpenChange"
      @escape-key-down="handleEscapeKeyDown"
    >
      <DialogTrigger as-child>
        <Button class="w-fit">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent class="w-100">
        <DialogHeader> Dialog Title </DialogHeader>
        <DialogBody> Dialog Body </DialogBody>
        <DialogFooter />
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger as-child>
        <Button class="w-fit">
          Open No Header Dialog
        </Button>
      </DialogTrigger>
      <DialogContent class="w-100">
        <DialogBody> Dialog Body </DialogBody>
        <DialogFooter />
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger as-child>
        <Button class="w-fit">
          Open Small Dialog
        </Button>
      </DialogTrigger>
      <ThemeProvider :value="{ size: 'sm' }">
        <DialogContent class="w-100">
          <DialogHeader> Dialog Title </DialogHeader>
          <DialogBody> Dialog Body </DialogBody>
          <DialogFooter />
        </DialogContent>
      </ThemeProvider>
    </Dialog>

    <Button @click="handleVModelOpen">
      Open V-Model Dialog
    </Button>
    <Dialog v-model:open="open">
      <DialogContent class="w-100">
        <DialogHeader> Dialog Title </DialogHeader>
        <DialogBody> Dialog Body </DialogBody>
        <DialogFooter />
      </DialogContent>
    </Dialog>

    <Button @click="handleOpenDialog">
      Open Functional Dialog
    </Button>
  </div>
</template>
