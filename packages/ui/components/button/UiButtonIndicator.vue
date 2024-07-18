<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PrimitiveProps } from 'radix-vue'
import { cn } from '@turbo/tailwind'
import type { ButtonVariants } from '.'
import { UiButton } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  indicator?: boolean | string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <UiButton
    :as="as"
    :as-child="asChild"
    :variant="variant"
    :size="size"
    :class="props.class"
  >
    <slot />
    <span
      v-if="indicator"
      :class="cn('absolute rounded-full p-0', {
        'bg-violet-400': variant === 'default',
        'bg-green-300': variant === 'secondary',
        'size-3 -right-1 -top-1': size === 'icon-sm',
        'size-4 -right-0.5 -top-0.5': size !== 'icon-sm',
      })"
    >
      {{ typeof indicator === 'string' ? indicator : '' }}
    </span>
  </UiButton>
</template>
