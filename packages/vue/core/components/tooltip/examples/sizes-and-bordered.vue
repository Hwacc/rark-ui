<script setup lang="ts">
import { Button } from '../../button'
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from '../index'
</script>

<template>
  <div class="w-full flex flex-wrap items-center gap-4">
    <Tooltip size="sm" :positioning="{ placement: 'top' }">
      <TooltipTrigger as-child>
        <Button size="sm">
          size=sm
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        Small tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip size="base" :positioning="{ placement: 'top' }">
      <TooltipTrigger as-child>
        <Button size="sm">
          size=base
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        Base tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip size="lg" :positioning="{ placement: 'top' }">
      <TooltipTrigger as-child>
        <Button size="sm">
          size=lg
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        Large tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip :positioning="{ placement: 'top' }">
      <TooltipTrigger as-child>
        <Button size="sm" variant="outline">
          bordered=false
        </Button>
      </TooltipTrigger>
      <TooltipContent :bordered="false">
        Borderless tooltip
      </TooltipContent>
    </Tooltip>
  </div>
</template>

