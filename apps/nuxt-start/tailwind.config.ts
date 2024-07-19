import { preset } from '@gwlab/tailwind'
import type { Config } from '@gwlab/tailwind'

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
    './node_modules/@gwlab/ui/**/*.{ts,tsx,vue}',
    './node_modules/@gwlab/core/**/*.{ts,tsx,vue}',
  ],
} satisfies Config
