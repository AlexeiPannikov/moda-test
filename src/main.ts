import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import router from "./router"

const app = createApp(App)

loadFonts()

app.use(vuetify)
app.use(router)

app.mount('#app')