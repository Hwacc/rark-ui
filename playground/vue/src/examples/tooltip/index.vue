<script setup lang="ts">
import { PopoverContext } from '@ark-ui/vue/popover'
import { Button } from '@rark-ui/vue/components/button'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '@rark-ui/vue/components/hover-card'
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverIndicator,
  PopoverTrigger,
} from '@rark-ui/vue/components/popover'
import { Switch } from '@rark-ui/vue/components/switch'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from '@rark-ui/vue/components/tooltip'
import { ref } from 'vue'

const toggle = ref(true)
</script>

<template>
  <div class="flex items-center gap-4">
    <Tooltip
      :positioning="{
        placement: 'bottom-start',
      }"
    >
      <TooltipTrigger>
        <Button>Hover Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        content
      </TooltipContent>
    </Tooltip>

    <HoverCard :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button>Hover Card</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        content
      </HoverCardContent>
    </HoverCard>

    <Popover :positioning="{ placement: 'bottom-start' }">
      <PopoverTrigger as-child>
        <Button>Click Dark Popover <PopoverIndicator /></Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <div class="flex flex-col gap-2">
          <PopoverClose />
          Popover content
        </div>
      </PopoverContent>
    </Popover>

    <Popover
      :theme="{ surface: 'light' }"
      :positioning="{ placement: 'bottom-start' }"
    >
      <PopoverTrigger as-child>
        <Button>Click Light Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverContext v-slot="context">
          <div class="flex flex-col gap-2">
            <PopoverClose />
            Popover content {{ context.open ? 'open' : 'closed' }}
            <p v-if="toggle">
              test toggle
            </p>
            <Switch v-model:checked="toggle" />
          </div>
        </PopoverContext>
      </PopoverContent>
    </Popover>
  </div>
</template>
