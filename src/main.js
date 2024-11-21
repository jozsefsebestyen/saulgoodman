import 'vuetify/styles'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// i18n
import { createI18n } from 'vue-i18n'
import messages from './locales'

// icons
import { fa } from "vuetify/iconsets/fa"
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css"
import "@fortawesome/fontawesome-free/css/all.css"

const i18n = createI18n({
  locale: 'hu',
  fallbackLocale: 'en',
  messages,
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light', // You can specify 'dark' here if needed
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
