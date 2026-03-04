<template>
    <section class="cta-section text-center text-white d-flex align-items-center" :style="bgStyle">
        <div class="container">
            <h2 class="mb-4">{{ title }}</h2>
            <router-link :to="to" class="btn btn-gold btn-lg">
                {{ buttonText }}
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    buttonText: String,
    to: String,
    bgImage: String,
})

const bgStyle = computed(() => ({
    background: `
        linear-gradient(rgba(15, 30, 46, 0.85), rgba(15, 30, 46, 0.85)),
        url(${props.bgImage}) center / cover no-repeat
    `,
}))
</script>
