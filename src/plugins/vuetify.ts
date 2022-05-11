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
    'primary-darken': '#348AE9',
    'text-primary': "#000000",
    'text-secondary': "#7B7B7B",
    'tab-slider-hover': "#f2f2f2",
    'client-card-back': "#F5F5F5",
    green: '#14CC26',
    'green-darken': '#34BF41',
    warning: '#ff0000'
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
