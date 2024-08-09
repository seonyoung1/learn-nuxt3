<template>
    <div @click="$emit('click')" class="relative h-full rounded-xl shadow-md overflow-hidden cursor-pointer">
        <img class="block w-full h-auto" :src="thumbnail" alt="" />
        <div class="p-4">
            <p class="pb-1 font-medium">{{ title }}</p>
            <p class="text-sm">{{ subtitle }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    thumbnail: string;
    title: string;
    subtitle: string;
}

withDefaults(defineProps<Props>(), {
    thumbnail: '',
    title: '',
    subtitle: ''
});
defineEmits<{
    click: []; // parameter 가 있으면 id: string 식으로 적음
}>();
</script>
