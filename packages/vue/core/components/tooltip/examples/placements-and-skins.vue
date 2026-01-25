<script setup lang="ts">
import { Button } from '../../button'
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from '../index'
</script>

<template>
  <div class="w-full flex flex-wrap items-center gap-4">
    <Tooltip skin="dark" :positioning="{ placement: 'top' }">
      <TooltipTrigger as-child>
        <Button size="sm" variant="outline">
          top (dark)
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        placement=top
      </TooltipContent>
    </Tooltip>

    <Tooltip skin="razer" :positioning="{ placement: 'right' }">
      <TooltipTrigger as-child>
        <Button size="sm" variant="outline">
          right (razer)
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        placement=right
      </TooltipContent>
    </Tooltip>

    <Tooltip :positioning="{ placement: 'bottom' }">
      <TooltipTrigger as-child>
        <Button size="sm" variant="outline">
          bottom (default)
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        placement=bottom
      </TooltipContent>
    </Tooltip>
  </div>
</template>

