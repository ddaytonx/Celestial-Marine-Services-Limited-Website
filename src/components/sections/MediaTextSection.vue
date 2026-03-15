<template>
    <section class="py-5 bg-light reveal-section" :class="customClass">
        <div class="container">
            <div class="row g-5 align-items-center" :class="{ 'flex-row-reverse': imageRight }">
                <div class="col-lg-6">
                    <img :src="image" :alt="imageAlt" class="img-fluid rounded-4 shadow-soft-custom hover-zoom" />
                </div>
                <div class="col-lg-6">
                    <h2 class="fw-bold text-primary-custom mb-4">
                        <slot name="title">{{ title }}</slot>
                    </h2>
                    <div class="content-wrapper">
                        <slot>
                            <p class="text-muted">{{ description }}</p>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useReveal } from '@/composables/useReveal'
import { onMounted } from 'vue'

export default {
    name: 'MediaTextSection',
    props: {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        image: { type: String, required: true },
        imageAlt: { type: String, default: 'Section Image' },
        imageRight: { type: Boolean, default: false },
        customClass: { type: String, default: '' },
    },
    setup() {
        const { revealOnScroll } = useReveal()
        onMounted(() => {
            revealOnScroll()
        })
    },
}
</script>

<style scoped>
.hover-zoom {
    transition: 0.5s ease;
}
.hover-zoom:hover {
    transform: scale(1.05);
}
.shadow-soft-custom {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}
</style>
