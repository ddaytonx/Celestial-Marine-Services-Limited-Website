<template>
  <div class="container mt-5">
    Home
    <button class="btn btn-primary" @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
</script>
