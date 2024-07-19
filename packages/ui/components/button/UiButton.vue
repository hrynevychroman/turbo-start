<script setup lang="ts">
import { Icon } from '@gwlab/icons'
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@gwlab/tailwind'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  block?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as
    :as-child
    :class="cn(buttonVariants({ variant, size }), {
      'w-full': block,
    }, props.class)"
    :disabled="loading"
  >
    <Icon v-if="loading" icon="formulr:loader" width="1rem" height="1rem" class="me-2 animate-spin" />
    <slot />
  </Primitive>
</template>
