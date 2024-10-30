<template>
    <div>
        <h2 class="pb-4 text-2xl font-medium">All Courses</h2>
        <div class="grid grid-cols-3 gap-4 items-stretch md:grid-cols-2 xs:grid-cols-1">
            <div v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses" :key="courseSlug">
                <RouterLink v-slot="{ navigate }" custom :to="path">
                    <CourseCard :title="title" :subtitle="subtitle" :thumbnail="thumbnail" @click="navigate" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CourseCard from '~/components/CourseCard.vue';
import { useCourses } from '~/composables/useCourses';

const { courses } = useCourses();
</script>
