<template>
    <div>
        <h2>About</h2>
        <p>설명~</p>
        <div>{{ locale }}</div>
    </div>
</template>
<script setup lang="ts">
import { useDefaultLocale } from '~/composables/useDefaultLocale';

// definePageMeta({
//     middleware: ['admin-only'],
// });

const locale = useDefaultLocale();
</script>
