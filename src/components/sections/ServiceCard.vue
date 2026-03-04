<template>
    <div class="service-card h-100 p-4">
        <div class="icon mb-3">{{ item.icon }}</div>
        <h5>{{ item.title }}</h5>
        <p class="text-muted">{{ item.desc }}</p>
    </div>
</template>

<script setup>
defineProps({
    item: Object,
})
</script>
