import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {clickOutside} from './directives/ClickOutside'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)
loadFonts()
app.use(vuetify)
app.use(router)
app.directive('click-outside', clickOutside)
app.mount('#app')
