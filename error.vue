<template>
    <div>
        <h1 class="py-10 text-5xl text-center">{{ error.statusCode }}</h1>
        <p class="text-center">{{ error.message }}</p>
        <h2 class="pt-10 pb-4 text-2xl text-center">error props</h2>
        <p class="text-center">{{ JSON.stringify(error) }}</p>
        <button class="bg-amber-300 px-4 py-2 mx-auto block mt-10" @click="handleError">Go Home</button>
    </div>
</template>
<script setup lang="ts">
defineProps({
    error: {
        type: Object,
        default: () => ({}),
    },
});

const handleError = () => clearError({ redirect: '/' });
</script>
