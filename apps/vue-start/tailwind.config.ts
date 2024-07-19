import { preset } from '@gwlab/tailwind'
import type { Config } from '@gwlab/tailwind'

export default {
  presets: [preset],

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './layouts/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
    './node_modules/@gwlab/ui/**/*.{ts,tsx,vue}',
    './node_modules/@gwlab/core/**/*.{ts,tsx,vue}',
  ],
} satisfies Config
