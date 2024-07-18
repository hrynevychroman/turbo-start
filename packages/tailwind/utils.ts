import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { preset } from '.'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': Object.keys(preset.theme.extend.fontSize).map(
        key => `text-${key}`,
      ),
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
