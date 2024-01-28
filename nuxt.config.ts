import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    build: {
        transpile: ['vuetify', 'vue-i18n'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        plugins: [],
        css: [
            '~/assets/css/main.css',
        ],
    },
    runtimeConfig: {
        public: {
            title: 'Bikroy',
            description: 'Bikroy',
            email: 'mdyusufbinnur@gmail.com',
            baseUrl: process.env.BASE_URL,
        },
    },
    devtools: {enabled: false},
})
