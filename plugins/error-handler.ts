export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('vue:error', (error) => {
        console.log('vue:error', error);

        if (error instanceof Error) {
            alert('error~~~');
        }
    });
});
