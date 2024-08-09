<template>
    <div class="relative pt-[56.25%]">
        <iframe
            class="w-full h-full absolute left-0 top-0"
            width="100%"
            height="100%"
            :src="src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </div>
</template>
<script setup lang="ts">
interface Props {
    src?: string;
}
withDefaults(defineProps<Props>(), {
    src: 'https://www.youtube.com/embed/zmq2zu-UsRk'
});
</script>
