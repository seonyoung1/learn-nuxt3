<template>
    <div class="max-w-5xl mx-auto py-5">
        <div>
            <slot name="header" />
        </div>
        <div>
            <slot />
        </div>
        <div v-if="$slots.footer">
            <slot name="footer" />
        </div>
    </div>
</template>
