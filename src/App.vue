<template>
  <div class="app-layout">
    <AppNavbar />
    <main class="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
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
