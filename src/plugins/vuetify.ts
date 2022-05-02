// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify'
import * as directives from 'vuetify'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5f5f5',
    primary: '#499FFF',
    'text-primary': "#000000",
    'text-secondary': "#7B7B7B",
    'tab-slider-hover': "#f2f2f2",
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
