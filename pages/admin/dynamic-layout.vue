<template>
    <div>
        <h2>다이나믹페이지 - 동적으로 레이아웃 적용해보기</h2>
        <button class="h-10 bg-green-800 text-white rounded px-4 mr-2" @click="changeLayout('default')">Default layout</button>
        <button class="h-10 bg-purple-500 text-white rounded px-4" @click="changeLayout('admin')">Admin layout</button>
    </div>
</template>
<script setup lang="ts">
import type { LayoutKey } from '#build/types/layouts';

const changeLayout = (layout: LayoutKey) => {
    setPageLayout(layout);
};

definePageMeta({
    layout: false,
});
</script>
