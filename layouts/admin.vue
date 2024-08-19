<template>
    <div class="relative">
        <header class="h-12 w-full bg-green-950 flex items-center justify-between px-5 shadow-sm">
            <h1 class="text-white">Vue + Nuxt Admin</h1>
            <div class="nav">
                <NuxtLink to="/about" class="text-white">About</NuxtLink>
                <span class="text-sm text-gray-400 px-4 leading-4">|</span>
                <NuxtLink to="/admin" class="text-white">Admin</NuxtLink>
            </div>
        </header>
        <div class="max-w-7xl mx-auto p-6 mb-10">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.nav {
    .router-link-active {
        @apply text-pink-500;
    }
}
</style>
