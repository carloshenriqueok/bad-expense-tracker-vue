import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/HomeView.vue")
    },
    {
        path: '/adicionar',
        name: 'adicionar-gasto',
        component: () => import("../views/ExpenseFormView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;