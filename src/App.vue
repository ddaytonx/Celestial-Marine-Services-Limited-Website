<template>
  <div class="app-layout">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 24px;
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
