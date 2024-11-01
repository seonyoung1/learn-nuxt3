export const useDefaultLocale = (fallback = 'en-US') => {
    const locale = ref(fallback);
    if (import.meta.server) {
        const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0];
        if (reqLocale) {
            locale.value = reqLocale;
        }
    } else if (process.client) {
        const navLang = navigator.language;
        if (navLang) {
            locale.value = navLang;
        }
    }
    return locale;
};
