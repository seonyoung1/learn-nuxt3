// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/index.scss'],
    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        presets: [
            {
                from: 'vue-i18n',
                imports: ['useI18n'],
            },
        ],
    },
    modules: ['@pinia/nuxt'],
});
