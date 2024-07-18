import type { App } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'

export default function (app: App) {
  app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  })
}
