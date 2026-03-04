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
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BottomBar from '@/components/layout/BottomBar.vue'
import TopBar from '@/components/layout/TopBar.vue'
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
