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
        <button class="btn-back" v-if="showBack" @click="$emit('back')">
            <span class="mdi mdi-keyboard-backspace"></span>
        </button>
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped>
.app-header {
    display: flex;
    gap: 1em;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #008000;
    padding: 1em;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

.app-header h1 {
    color: #fff;
    font-size: 1.8rem;
}

.btn-back {
    background-color: inherit;
    border: none;
    font-size: 1.5em;
    color: #fff;
}
</style>