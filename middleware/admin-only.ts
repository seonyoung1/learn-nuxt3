import { useAuthenticated } from '~/composables/auth/useAuthenticated';
import { useAdmin } from '~/composables/auth/useAdmin';

export default defineNuxtRouteMiddleware(() => {
    const isAuthenticated = useAuthenticated();
    const isAdmin = useAdmin();

    if (!isAuthenticated.value) {
        return navigateTo('/login');
    }
    if (!isAdmin) {
        return navigateTo('/');
    }
});
