import { preset } from '@turbo/tailwind'
import type { Config } from '@turbo/tailwind'

export default {
  presets: [preset],

  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
    './node_modules/@turbo/ui/**/*.{ts,tsx,vue}',
    './node_modules/@turbo/core/**/*.{ts,tsx,vue}',
  ],
} satisfies Config
