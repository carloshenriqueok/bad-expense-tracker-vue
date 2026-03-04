<script setup>
defineProps({
    title: {
        type: String,
        default: 'Meu App',
    },

    showBack: Boolean
});

const emit = defineEmits(['back'])
</script>

<template>
    <header class="app-header">
        <button class="btn-back" v-if="showBack">
            <span class="mdi mdi-keyboard-backspace"></span>
        </button>
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped>

</style>