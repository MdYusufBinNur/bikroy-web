import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify, ThemeDefinition} from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            },
        }
    })
    app.vueApp.use(vuetify)
})

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#252525',
        surface: '#EEECE8',
        // primary: '#6200EE',
        'primary-darken-1': '#262626',
        // secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: 'rgba(18,130,218,0.92)',
        success: '#4CAF50',
        warning: 'rgb(178,180,180)',
        primary: '#252525',
        accent: '#252525',
        secondary: '#FFFFFF',
        lighter: '#EEECE8',
        darker: '#E4DFD4',
    },
}

