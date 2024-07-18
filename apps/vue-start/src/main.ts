import { createApp } from 'vue'
import { registerPlugins } from '@core/utils/plugins'
import { zodInit } from '@turbo/core/utils'
import '@turbo/icons/setup'
import '@turbo/core/assets/index.css'
import App from './App.vue'
import { getI18n } from './plugins/3-i18n'

const i18n = getI18n()

zodInit(i18n)

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
