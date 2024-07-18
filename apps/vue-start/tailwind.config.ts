import { preset } from '@turbo/tailwind'
import type { Config } from '@turbo/tailwind'

export default {
  presets: [preset],

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './layouts/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
    './node_modules/@turbo/ui/**/*.{ts,tsx,vue}',
    './node_modules/@turbo/core/**/*.{ts,tsx,vue}',
  ],
} satisfies Config
