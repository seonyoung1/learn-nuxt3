<template>
    <div class="relative">
        <header
            class="h-12 w-full bg-black flex items-center px-5 shadow-sm justify-between"
        >
            <h1 class="text-white">
                <NuxtLink to="/">Vue + Nuxt Mastery Class</NuxtLink>
            </h1>
            <div class="text-white flex items-center gap-2">
                <div>{{ $t('home') }}</div>
                <div>{{ $t('about') }}</div>
                <div>{{ $t('youtube') }}</div>
                <div>{{ $t('admin') }}</div>
                <div>|</div>
                <div class="text-sm">{{ selectedLanguageName }}</div>
                <div class="flex">
                    <button
                        v-for="{ code, name } in languages"
                        :key="code"
                        class="text-sm text-yellow-200"
                        :class="[$i18n.locale === code ? 'hidden' : 'block']"
                        @click="$i18n.locale = code"
                    >
                        {{ name }}
                    </button>
                </div>
            </div>
        </header>
        <div class="max-w-7xl mx-auto p-6">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { useI18n } from 'vue-i18n';

interface Languages {
    name: string;
    code: 'en' | 'ko';
}
const languages = ref<Languages[]>([
    { name: 'English', code: 'en' },
    { name: 'Korean', code: 'ko' },
]);

const { locale } = useI18n();
const selectedLanguageName = computed(
    () => languages.value.find((lang) => lang.code === locale.value)?.name,
);
</script>
