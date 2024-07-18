import { preset } from '@turbo/tailwind'
import type { Config } from '@turbo/tailwind'

export default {
  presets: [preset],

  content: [
    './**/*.{ts,tsx,vue}',
  ],
} satisfies Config
