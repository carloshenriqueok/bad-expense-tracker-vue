<script setup>
defineProps({
    type: {
        type: String,
        default: 'Botão',
    },
    variant: {
        type: String,
        default: 'primary',
    },

    disabled: Boolean
});
</script>

<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="['app-button', `variant-${variant}`]"
    >
    <slot></slot>
    </button>
</template>

<style scoped>
.app-button{
    width: 80%;
    padding: 12px 16px;
    border: none;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 15px;
    font-weight: 600;
}

.variant-primary {
    background-color: #008000;
    color: white;
    transition: transform 0.3s, background-color 0.3s;
}

.variant-primary:active {
    transform: scale(0.98);
    background-color: #0F4D0F;
    transition: 0.3s;
}

.variant-danger {
    background-color: rgb(192, 0, 0);
    transition: transform 0.3s, background-color 0.3s;
    color: white;
}

.variant-danger:active {
    transform: scale(0.98);
    background-color: rgb(136, 8, 8);
    transition: 0.3s;
}
</style>