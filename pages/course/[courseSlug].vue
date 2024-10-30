<template>
    <AppCard>
        <template #header>
            <h2 class="font-medium text-2xl pb-2">{{ course?.title }}</h2>
            <div class="flex items-center gap-2 pb-3">
                <p>{{ course?.rating }}</p>
                <span>&middot;</span>
                <p>{{ course?.reviewsCount }}개의 수강평</p>
                <span>&middot;</span>
                <p>{{ course?.studentCount }}명의 수강생</p>
                <a class="text-bold ml-auto text-blue-600 underline" :href="course?.reviewsUrl" target="_blank"> 수강평보기 </a>
            </div>
        </template>
        <div>
            <VideoPlayer :src="course?.video" />
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 h-10">
            <a :href="course?.inflearnUrl" target="_blank" class="h-full bg-blue-700 text-white rounded flex justify-center items-center">
                인프런에서 수강하기
            </a>
            <a :href="course?.gymcodingUrl" target="_blank" class="h-full bg-red-700 text-white rounded flex justify-center items-center">
                짐코딩 클럽에서 수강하기
            </a>
        </div>
        <div class="py-4 text-sm">
            {{ course?.content }}
        </div>
        <form class="mb-5" @submit.prevent>
            <button type="button" class="w-full py-2 border border-green-500 rounded" :class="completed ? 'bg-green-200' : ''" @click="completed = !completed">
                수강완료
            </button>
            <textarea v-model="memo" class="border border-green-500 px-4 py-2 mt-2 rounded w-full"></textarea>
        </form>
        <template #footer>
            <div class="flex items-center justify-between mb-8">
                <NuxtLink v-if="prevCourse" :to="prevCourse.path" class="border border-gray-600 rounded px-6 py-1.5">이전강의</NuxtLink>
                <NuxtLink v-if="nextCourse" :to="nextCourse.path" class="ml-auto border border-gray-600 rounded px-6 py-1.5">다음강의</NuxtLink>
            </div>
        </template>
    </AppCard>
</template>
<script setup lang="ts">
import { useRoute } from '#vue-router';
import { ref } from 'vue';
import { useCourse } from '~/composables/useCourse';

const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = useCourse(courseSlug);

definePageMeta({
    key: (route) => route.fullPath,
    title: 'learn nuxt',
    // keepalive: true,
    validate: (route) => {
        const courseSlug = route.params.courseSlug as string;
        const { course } = useCourse(courseSlug);
        if (!course) {
            throw createError({
                status: 404,
                statusMessage: 'Course not found',
                // fatal: true,
            });
        }
        return true;
    },
});

const completed = ref(false);
const memo = ref('');

// if (!course) {
//     throw createError({
//         status: 404,
//         statusMessage: 'Course not found',
//         // fatal: true,
//     });
// }
</script>
