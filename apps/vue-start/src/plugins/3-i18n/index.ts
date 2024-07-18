import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

let _i18n: any = null

function slavicRule(choice: number, choicesLength: number) {
  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}

export function getI18n() {
  if (_i18n === null) {
    _i18n = createI18n({
      legacy: false,
      pluralizationRules: {
        uk: slavicRule,
      },
      locale: import.meta.env.VITE_WEBSITE_LANGUAGE,
      fallbackLocale: import.meta.env.VITE_WEBSITE_FALLBACK_LANGUAGE,
      messages,
    })
  }

  return _i18n
}

export default function (app: App) {
  app.use(getI18n())
}
