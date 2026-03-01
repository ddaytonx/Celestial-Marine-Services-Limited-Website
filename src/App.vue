<template>
    <div class="app-layout">
        <TopBar />
        <AppNavbar />
        <main class="main">
            <router-view />
        </main>
        <AppFooter />
        <BottomBar />
    </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BottomBar from '@/components/BottomBar.vue'
import TopBar from '@/components/TopBar.vue'
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main {
    flex: 1;
}
</style>

<style>
:root {
    --blue-dark: #0f1e2e;
    --blue: #1f3a5f;
    --gold: #b89b5e;
    --white: #ffffff;
    --gray: #dcdcdc;
}
</style>
