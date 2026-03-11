<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: [String, Number],
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    required: Boolean
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})
</script>

<template>
    <div class="app-input">
        <label class="label">
            {{ label }}
            <span v-if="required" class="required">*</span>
        </label>
        <input
            v-model="value"
            :type="type"
            :required="required"
            :placeholder="placeholder"
            class="input"
        />
    </div>
</template>

<style scoped>
.app-input {
    margin-bottom: 20px;
}

.label {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
}

.required {
    color: red;
}

.input {
    width: 100%;
    min-height: 20px;
    padding: 10px 16px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    transition: border-color 0.2s;
}

.input:focus {
    outline: none;
    border-color: #659C07;
}

</style>