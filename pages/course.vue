<template>
    <div>
        <h2 class="font-medium text-lg">강의 로드맵</h2>
        <div class="border border-gray-600 py-4 px-6 rounded">
            <div v-for="(course, index) in courses" :key="course.courseSlug">
                <NuxtLink :to="course.path" :class="{ 'text-green-600': $route.params.courseSlug === course.courseSlug }"
                    >{{ index + 1 }}. {{ course.title }}</NuxtLink
                >
            </div>
        </div>
        <div>
            <NuxtPage />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCourses } from '~/composables/useCourses';

const { courses } = useCourses();
</script>
