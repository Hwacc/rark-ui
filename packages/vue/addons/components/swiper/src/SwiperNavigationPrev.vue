<script setup lang="ts">
import type { NavigationEvents } from 'swiper/types'
import type { SwiperNavigationProps } from '.'
import { useForwardProps } from '@rark-ui/vue-addons-shared'
import { merge } from 'es-toolkit/compat'
import { ChevronLeft } from 'lucide-vue-next'
import { useSwiper } from 'swiper/vue'
import { twMerge } from 'tailwind-merge'
import { computed, onMounted, useTemplateRef, watch } from 'vue'
import { useRegistSwiperEmits, useSwiperModule, useSwiperToggleEnabled } from './utils'

const { class: propsClass, swiper, ...props } = defineProps<SwiperNavigationProps>()
const emit = defineEmits<NavigationEvents>()

const effectiveSwiper = computed(() => {
  return swiper ?? useSwiper()?.value
})
const { hasModule } = useSwiperModule(effectiveSwiper)
const { isCanPrev } = useSwiperToggleEnabled(effectiveSwiper)
const navRef = useTemplateRef('navigation')

const forwared = useForwardProps(props)

useRegistSwiperEmits({
  swiperRef: effectiveSwiper,
  emit,
  events: ['navigationHide', 'navigationPrev', 'navigationShow'],
})

watch(forwared, () => {
  effectiveSwiper.value.params.navigation = merge(
    {},
    effectiveSwiper.value.params.navigation,
    forwared.value,
  )
  effectiveSwiper.value.navigation.update()
})

onMounted(() => {
  if (effectiveSwiper.value && hasModule('Navigation') && navRef.value) {
    const options = merge(
      {},
      typeof effectiveSwiper.value.params.navigation === 'boolean'
        ? {}
        : effectiveSwiper.value.params.navigation,
      forwared.value,
      {
        enabled: true,
        prevEl: navRef.value,
      },
    )
    effectiveSwiper.value.params.navigation = options
    effectiveSwiper.value.navigation.init()
  }
})
</script>

<template>
  <div
    ref="navigation"
    :class="twMerge('rui-swiper-navigation_prev', propsClass)"
    :data-disabled="isCanPrev ? undefined : ''"
    data-scope="swiper"
    data-part="navigation-prev"
  >
    <slot v-bind="{ disabled: !isCanPrev }">
      <ChevronLeft />
    </slot>
  </div>
</template>
