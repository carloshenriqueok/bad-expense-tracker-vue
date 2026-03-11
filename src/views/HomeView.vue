<script setup>
import AppHeader from "../components/layout/AppHeader.vue"
import AppTabBar from "../components/layout/AppTabBar.vue"
import AppButton from "../components/forms/AppButton.vue"
import { useExpense } from "../composables/useExpenses"

const { expenses } = useExpense();
</script>

<template>
    <AppHeader title="Controle de gastos"/>
    <main>
        <section class="home-section" v-if="expenses.length > 0">
            <h1>Gastos totais do dia</h1>
            <ul class="actions-btn">
                <li>
                    <AppButton>Adicionar Gasto</AppButton>
                </li>
                <li>
                    <AppButton variant="danger">Limpar</AppButton>
                </li>
            </ul>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="exp in expenses" :key="exp.id">
                            <td>{{ exp.title }}</td>
                            <td>{{ exp.value }}</td>
                            <td>{{ exp.category }}</td>
                            <td>
                                <span class="mdi mdi-delete-outline"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="empty-section" v-else>
            <h1>Nenhum gasto registrado aqui.</h1>
            <AppButton>Adicionar Gasto</AppButton>
        </section>

        <AppTabBar />
    </main>
</template>

<style scoped>
.home-section h1{
    text-align: center;
}

.table-container {
    background-color: #fafafa;
    padding: 1em;
    border: 1px solid #e0e0e0;
    border-radius: 9px;
    width: 90%;
    margin: 2em auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
}

th {
    font-size: 20px;
    text-align: left;
    color: #666;
}

td {
    font-size: 18px;
}

.mdi-delete-outline {
    color: #ff5252;
    cursor: pointer;
    font-size: 1.2rem;
}

.actions-btn {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-top: 1.3em;
}

.empty-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}


.empty-section h1{
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 1em;
}


</style>