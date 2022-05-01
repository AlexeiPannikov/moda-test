import 'vuetify/styles'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)
const vuetify = createVuetify()

loadFonts()

app.use(vuetify)

app.mount('#app')