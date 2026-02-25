<script lang="ts" setup></script>

<template>
  <div class="app-layout">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">© 2026 My Vue App</footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  padding: 1rem;
  background: #333;
}

.nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}

.main {
  flex: 1;
  padding: 2rem;
}

.footer {
  padding: 1rem;
  background: #f4f4f4;
  text-align: center;
}
</style>
