<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import type { PrimitiveProps } from 'radix-vue'
import { Icon } from '@turbo/icons'
import { cn } from '@turbo/tailwind'
import type { ButtonVariants } from '.'
import { UiButtonIndicator } from '.'

interface Props extends PrimitiveProps {
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  class?: HTMLAttributes['class']
  indicator?: boolean | string
  type?: 'edit' | 'delete' | 'save' | 'settings' | 'keyframes' | 'chevron' | 'add' | 'download' | 'upload' | 'chat' | 'more' | 'copy' | 'close'
  rotate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  size: 'icon-sm',
  variant: 'secondary',
  type: 'chevron',
})

const iconName = computed(() => {
  if (props.type === 'edit')
    return 'iconoir:edit-pencil'

  if (props.type === 'delete')
    return 'iconoir:trash'

  if (props.type === 'save')
    return 'iconoir:floppy-disk'

  if (props.type === 'settings')
    return 'iconoir:settings'

  if (props.type === 'keyframes' || props.type === 'copy')
    return 'iconoir:keyframes'

  if (props.type === 'chevron')
    return 'iconoir:nav-arrow-down'

  if (props.type === 'add')
    return 'iconoir:plus'

  if (props.type === 'download')
    return 'iconoir:download'

  if (props.type === 'upload')
    return 'iconoir:upload'

  if (props.type === 'chat')
    return 'iconoir:chat-lines'

  if (props.type === 'more')
    return 'iconoir:more-horiz'

  if (props.type === 'close')
    return 'iconoir:xmark'

  return 'iconoir:nav-arrow-down'
})
</script>

<template>
  <UiButtonIndicator
    :as
    :as-child
    :variant
    :size
    :indicator
    type="button"
    :class="cn('rounded-full bg-transparent bg-clip-padding text-violet-800 transition-all duration-300', {
      'bg-violet-400 text-white': indicator,
      'hover:text-violet-900 hover:bg-violet-400/10': variant === 'ghost',
      'border-4 border-violet-400/25 hover:bg-violet-400 hover:text-white group-hover/action:bg-violet-400 hover:border-transparent group-hover/action:border-transparent group-hover/action:text-white': variant !== 'ghost',
    }, props.class)"
  >
    <slot>
      <Icon
        :icon="iconName"
        :class="cn('transition-transform duration-300', {
          '-rotate-180': rotate,
          'scale-125': type === 'add',
        })"
      />
    </slot>
  </UiButtonIndicator>
</template>
