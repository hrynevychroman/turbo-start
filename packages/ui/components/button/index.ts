import { type VariantProps, cva } from 'class-variance-authority'

export { default as UiButton } from './UiButton.vue'
export { default as UiActionButton } from './UiActionButton.vue'
export { default as UiButtonIndicator } from './UiButtonIndicator.vue'
export { default as UiFormButton } from './UiFormButton.vue'

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-green-300 text-black hover:bg-green-300/70',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-violet-400 text-white hover:bg-violet-400/80',
        tertiary:
          'bg-beige-400 text-flint-950 hover:bg-beige-400/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-br from-green-300 from-10% via-violet-400 via-40% to-green-300 to-90% bg-size-200 bg-pos-0 text-white transition-all duration-500 hover:bg-pos-100',
        danger: 'bg-crimson-200',
      },
      size: {
        'default': 'h-10 px-4 py-2',
        'xs': 'h-7 rounded px-2 text-xxs',
        'sm': 'h-9 rounded-md px-3',
        'lg': 'h-11 rounded-md px-8',
        'xl': 'h-12 rounded-md px-10',
        'icon': 'size-10 text-lg',
        'icon-sm': 'size-9 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
