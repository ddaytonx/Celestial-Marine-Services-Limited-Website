<template>
    <section class="cta-section text-center text-white d-flex align-items-center" :style="sectionStyle">
        <div class="overlay-dark"></div>
        <div class="container position-relative" data-aos="fade-up">
            <h3 class="fw-bold mb-3">
                <slot name="title">{{ title }}</slot>
            </h3>
            <p class="mb-4">
                <slot name="description">{{ description }}</slot>
            </p>
            <div class="d-flex justify-content-center gap-3 mt-4 animate-fade-up delay-2">
                <RouterLink v-for="(btn, index) in buttons" :key="index" :to="btn.to" :class="['btn btn-lg px-4', btn.class]">
                    {{ btn.label }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: { type: String, default: 'Ready to Work With Us?' },
    description: { type: String, default: 'Partner with us for reliable maritime engineering and technical solutions.' },
    buttonText: { type: String, default: 'Contact Us Today' },
    buttons: { type: Array, default: () => [] },
    bgImage: { type: String, default: '/assets/about-us-cta-section.jpg' },
})

const sectionStyle = computed(() => ({
    backgroundImage: `url(${props.bgImage})`,
}))
</script>

<style scoped>
.cta-section {
    min-height: 350px;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
}

.btn-secondary-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

@media (max-width: 768px) {
    .cta-section {
        background-attachment: scroll;
        min-height: 300px;
    }
}

.btn {
    font-size: 1rem;
    padding: 10px 28px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.btn-gold {
    border: none;
}
</style>
