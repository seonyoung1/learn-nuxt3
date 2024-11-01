<template>
    <div>
        <h1 class="text-3xl text-center pt-10">Login</h1>
        <FormLogin class="mx-auto w-[400px]" @success="handleLoginSuccess" />
    </div>
</template>
<script setup lang="ts">
import { useAdmin } from '~/composables/auth/useAdmin';

const handleLoginSuccess = async () => {
    const isAdmin = useAdmin();
    const redirect = isAdmin.value ? '/about' : '/';
    await navigateTo(redirect);
};
</script>
