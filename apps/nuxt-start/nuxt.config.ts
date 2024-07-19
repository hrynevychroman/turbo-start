// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],

  // ESLint
  eslint: {
    config: {
      standalone: false,
    },
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: ['@gwlab/core/assets/index.css', { injectPosition: 'last' }],
    configPath: 'tailwind.config.ts',
  },

  // UI Components Auto Import
  components: {
    dirs: ['~/components/', { path: 'node_modules/@gwlab/ui/components', extensions: ['vue'], pathPrefix: false }],
  },
})
