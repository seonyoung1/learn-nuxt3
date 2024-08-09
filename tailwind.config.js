/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
    theme: {
        screens: {
            xl: { max: '1360px' },
            lg: { max: '1024px' },
            md: { max: '768px' },
            sm: { max: '640px' },
            xs: { max: '480px' }
        },
        extend: {}
    },
    plugins: []
};
