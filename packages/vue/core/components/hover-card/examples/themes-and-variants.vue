<script setup lang="ts">
import { Button } from '../../button'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '../index'
</script>

<template>
  <div class="w-full flex flex-wrap items-center gap-6">
    <HoverCard size="sm" :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button variant="outline">
          sm
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        Small content
      </HoverCardContent>
    </HoverCard>

    <HoverCard size="base" :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button variant="outline">
          base
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        Base content
      </HoverCardContent>
    </HoverCard>

    <HoverCard size="lg" :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button variant="outline">
          lg
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        Large content
      </HoverCardContent>
    </HoverCard>

    <HoverCard :bordered="false" :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button variant="outline">
          no border
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        bordered=false
      </HoverCardContent>
    </HoverCard>

    <HoverCard skin="dark" :positioning="{ placement: 'top' }">
      <HoverCardTrigger as-child>
        <Button variant="outline">
          dark skin
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        skin=dark
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
