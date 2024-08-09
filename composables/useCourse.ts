import { useCourses } from '~/composables/useCourses';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
    course: Maybe<CourseWithPath>; // Course | null | undefined
    prevCourse: Maybe<CourseWithPath>;
    nextCourse: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CourseReturn => {
    const { courses } = useCourses();
    // const course = courses.find((course) => course.courseSlug === courseSlug);
    const index = courses.findIndex((course) => course.courseSlug === courseSlug);
    const course = courses[index];
    const prevCourse = index <= 0 ? null : courses[index - 1];
    const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
    // undefined 가 올수도 있음
    return {
        course,
        prevCourse,
        nextCourse
    };
};
