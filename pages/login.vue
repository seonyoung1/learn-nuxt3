<template>
    <div>
        <h1 class="text-3xl text-center pt-10">Login</h1>
        <FormLogin class="mx-auto w-[400px]" @success="handleLoginSuccess" />
    </div>
</template>
<script setup lang="ts">
const handleLoginSuccess = async () => {
    const { isAdmin } = useAuthUser();
    const redirect = isAdmin.value ? '/about' : '/';
    await navigateTo(redirect);
};
</script>
