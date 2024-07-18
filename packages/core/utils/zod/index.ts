import i18next from 'i18next'
import { z } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { watch } from 'vue'

// Import your language translation files
import translationEn from 'zod-i18n-map/locales/en/zod.json'
import translationFr from 'zod-i18n-map/locales/fr/zod.json'

// TODO: update type to i18n vue type
export function zodInit(i18n: any) {
  // lng and resources key depend on your locale.
  i18next.init({
    lng: i18n.global.locale.value,
    resources: {
      en: {
        zod: translationEn,
        custom: {
          required: 'Required',
          invalid_phone_number: 'Invalid phone number',
          file_not_selected: 'File not selected',
          file_too_large: 'File too large',
          file_invalid_type: 'Invalid file type',
          rgpd_consent_required: 'Required',
          yes_no_required: 'Required',
          unknown_module_type: 'Unknown module type',
        },
      },
      fr: {
        zod: translationFr,
        custom: {
          required: 'Requis',
          invalid_phone_number: 'Numéro de téléphone invalide',
          file_not_selected: 'Aucun fichier sélectionné',
          file_too_large: 'Le fichier est trop volumineux',
          file_invalid_type: 'Le type de fichier est invalide',
          rgpd_consent_required: 'Requis',
          yes_no_required: 'Requis',
          unknown_module_type: 'Type de module inconnu',
        },
      },
    },
  })

  z.setErrorMap(makeZodI18nMap({ ns: ['zod', 'custom'] }))

  watch(i18n.global.locale, (newLocale) => {
    i18next.changeLanguage(String(newLocale))
  })
}
