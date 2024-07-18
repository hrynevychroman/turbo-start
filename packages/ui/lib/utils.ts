import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export function convertEnumToValues<T extends Record<string, string>>(enumObject: T, prefix = '') {
  return Object.entries(enumObject).map(([, value]) => ({ value, label: `${prefix}.${value}` }))
}
