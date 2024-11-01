<template>
    <form @submit.prevent="handleLoginSubmit">
        <div class="py-16">
            <div class="pb-4">
                <label for="userEmail" class="block">이메일</label>
                <input id="userEmail" v-model="form.email" type="text" class="border border-gray-600 px-4 py-2 w-full" />
            </div>
            <div class="pb-8">
                <label for="userPassword">비밀번호</label>
                <input id="userPassword" v-model="form.password" type="password" class="border border-gray-600 px-4 py-2 w-full" />
            </div>

            <div v-if="error" class="py-4 text-red text-center">{{ error.message }}</div>

            <button :disabled="loading" class="w-full px-4 py-2 bg-blue-800 text-white">로그인</button>
        </div>
    </form>
</template>
<script setup lang="ts">
import { useAuth } from '~/composables/auth/useAuth';

const emit = defineEmits<{
    success: [];
}>();
// const emit = defineEmits(['success']);

const { signIn } = useAuth();

const form = ref({
    email: '',
    password: '',
});
const error = ref<Error | null>(null);
const loading = ref(false);

const handleLoginSubmit = () => {
    try {
        error.value = null;
        loading.value = true;

        // login business logic
        signIn(form.value.email, form.value.password);

        emit('success');
    } catch (err: unknown) {
        if (err instanceof Error) {
            error.value = err;
        } else {
            throw Error;
        }
    } finally {
        loading.value = false;
    }
};
</script>
