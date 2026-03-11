<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useExpense } from '../composables/useExpenses';
import AppButton from '../components/forms/AppButton.vue';
import AppInput from '../components/forms/AppInput.vue'
import AppHeader from '../components/layout/AppHeader.vue';

const router = useRouter();

const { addExpense } = useExpense();

const form = ref({
    title: '',
    value: '',
    category: '',
});

function submitForm() {
    addExpense(form.value)
    router.push('/')
}

</script>

<template>
    <AppHeader title="Adicionar Gasto" show-back @back="router.back()"/>
    <main>
        <section class="form-section">

            <h1>Registrar um novo gasto</h1>
            <form @submit.prevent="submitForm()" class="form">
                <AppInput 
                    v-model="form.title"
                    label="Título"
                    placeholder="Ex: Ifood"
                    required
                />
                <AppInput 
                    v-model="form.value"
                    label="Valor"
                    placeholder="Ex: 10,99"
                    required
                />
                <label for="categoria" class="label-category">Categoria: <span class="required">*</span></label>
                <select v-model="form.category" id="categoria" class="select-category">
                    <option value="comida">Comida</option>
                    <option value="transporte">Transporte</option>
                    <option value="outro">Outro</option>
                </select>
                <AppButton type="submit">Registrar</AppButton>
            </form>
        </section>
    </main>
</template>

<style scoped>
    .form-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        
    }

    .form-section h1 {
        text-align: center;
        margin: 0.5em 0;
    }

    .label-category {
        margin-right: 8px;
        font-size: 18px;
        font-weight: 600;
    }

    .required {
        color: red;
    }

    .select-category {
        padding: 0.3em 1em;
        border: 1px solid #659C07;
        border-radius: 8px;
    }

    .select-category option {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    button {
        margin-top: 1em;
    }

</style>