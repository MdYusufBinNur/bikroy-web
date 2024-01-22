import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'


export default defineNuxtConfig({
    build: {
        transpile: ['vuetify', 'vue-i18n'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
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
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ],
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
