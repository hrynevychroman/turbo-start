<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'
import { Primitive, useForwardProps } from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@turbo/tailwind'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive v-bind="forwarded" :class="cn('relative flex h-8 min-w-40 max-w-72 cursor-pointer items-center gap-1 rounded-sm border border-violet-400 bg-violet-400/25 p-1 text-sm font-medium outline-none ring-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-ring data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class)">
    <slot />
  </Primitive>
</template>
