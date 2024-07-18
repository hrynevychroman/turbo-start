import type { Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries'
// import defaultTheme from 'tailwindcss/defaultTheme'
import animate from 'tailwindcss-animate'

export const screens = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
}

export const preset = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  // Defined inside each app
  content: [],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // Colors
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },

      // Typography
      // fontFamily: {
      //   sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      //   serif: ['Hedvig Letters Serif', ...defaultTheme.fontFamily.serif],
      // },

      fontSize: {
        'xxs': ['0.625rem', 'theme("lineHeight.snug")'],
        'sm': ['ac(0.875rem, 0.75rem)', 'theme("lineHeight.snug")'],
        'base': ['ac(1rem, 0.875rem)', 'theme("lineHeight.snug")'],
        'xl': ['ac(1.25rem, 1rem)', 'theme("lineHeight.snug")'],
        '2xl': ['ac(1.625rem, 1.125rem)', 'theme("lineHeight.snug")'],
      },

      letterSpacing: {
        tight: '-0.01em',
        wide: '0.01em',
      },

      // ARIA
      aria: {
        invalid: 'invalid="true"',
      },

      // Shadcn UI
      borderRadius: {
        bubble: '2.125rem',
        xl: 'calc(var(--radius) + 4px)',
        lg: 'calc(var(--radius) + 2px)',
        DEFAULT: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate, containerQueries],
} satisfies Config
