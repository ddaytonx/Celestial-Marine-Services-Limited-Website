<template>
    <div class="top-bar">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="top-left">
                <span>📞 {{ contactData?.office?.phone }}</span>
                <span>✉ {{ contactData?.office?.email }}</span>
            </div>

            <div class="top-right">
                <a v-for="social in contactData?.social?.filter((s) => s.enabled)" :key="social.icon" :href="social.url" target="_blank" rel="noopener">
                    <i :class="['bi', social.icon]"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import contactDataJson from '@/data/contact.json'
const contactData = ref(contactDataJson)
</script>

<style scoped>
.top-bar {
    background: var(--bg-dark);
    color: var(--text-light);
    font-size: 13px;
    padding: 6px 0;
}

.top-left span {
    margin-right: 16px;
    white-space: nowrap;
}

.top-right a {
    color: var(--text-light);
    margin-left: 12px;
    text-decoration: none;
    transition: color 0.2s ease;
}

.top-right a:hover {
    color: var(--text-gold);
}
</style>
