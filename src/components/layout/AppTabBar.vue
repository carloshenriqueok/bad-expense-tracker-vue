<script setup>
</script>

<template>
    <footer class="tab-bar">
        <nav>
            <ul class="tab-list">
                <li class="tab-item"><span class="mdi mdi-home-outline"></span></li>
                <li class="tab-item"><span class="mdi mdi-food-outline"></span></li>
                <li class="tab-item"><span class="mdi mdi-train-car"></span></li>
                <li class="tab-item"><span class="mdi mdi-dots-horizontal"></span></li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.tab-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #008000;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.6);
}

.tab-list {
    display: flex;
    gap: 15vw;
    justify-content: center;
    padding: 15px;
}

.tab-item {
    font-size: 2rem;
    color: #fff;
    transition: all 0.3s;
}

.tab-item:active {
    transform: scale(0.90);
    color: #e6e5e5;
}
</style>