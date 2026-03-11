import { computed, ref } from 'vue';

const expenses = ref([]);

const STORAGE_KEY = 'expenses';

// const filtered = computed(() => {
//     if (filter.value === 'all') {
//         return expenses.value;
//     }
//     return expenses.value.filter((item) => item.category === filter.value);
// });

function loadStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored) {
        expenses.value = JSON.parse(stored);
    }
}

function saveStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses.value));
};

loadStorage();

export function useExpense(){
    const totalExp = computed(() => {
        return expenses.value.reduce((sum, item) => sum + Number(item.value.replace(',' , '.') || 0), 0);
    });

    function addExpense(expense) {
        const newExpense = {
            id: Date.now(),
            ...expense,
            createdAt: new Date().toISOString(),
        };
        expenses.value.unshift(newExpense);
        saveStorage();
        return newExpense;
    }

    function deleteExpense(id) {
        if(!confirm('Tem certeza que deseja excluir esse registro?')) {
            return
        }
        expenses.value = expenses.value.filter((item) => item.id !== id);
        saveStorage();
    };

    function clearAll() {
        if(!confirm('Tem certeza que deseja excluir tudo??')) {
            return
        }
        expenses.value = []
        saveStorage()
    }

    return {
        totalExp,
        addExpense,
        deleteExpense,
        clearAll,
        expenses,
    }
}