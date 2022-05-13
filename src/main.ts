import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import router from "./router"
import Maska from 'maska'
import { createPinia } from 'pinia'

const app = createApp(App)

loadFonts()

app.use(vuetify)
app.use(router)
app.use(Maska)
app.use(createPinia())

app.mount('#app')