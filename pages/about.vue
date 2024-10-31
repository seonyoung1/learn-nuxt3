<template>
    <div>
        <h2>About</h2>
        <p>설명~</p>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['admin-only'],
});
</script>
