import { preset } from '@gwlab/tailwind'
import type { Config } from '@gwlab/tailwind'

export default {
  presets: [preset],

  content: [
    './components/**/*.{ts,tsx,vue}',
  ],
} satisfies Config
