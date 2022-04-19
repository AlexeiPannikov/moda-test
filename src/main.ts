import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {clickOutside} from './directives/ClickOutside'

const app = createApp(App)
app.use(router)
app.directive('click-outside', clickOutside)
app.mount('#app')
