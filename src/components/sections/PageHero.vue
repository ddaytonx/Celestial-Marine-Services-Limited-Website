<template>
    <section class="hero-section d-flex align-items-center text-white text-center" :class="customClass" :style="heroStyle">
        <div class="overlay"></div>
        <div class="container position-relative hero-content mx-auto" data-aos="fade-up">
            <h1 class="hero-title fw-bold mb-3 animate-fade-up">
                <slot name="title">{{ title }}</slot>
            </h1>
            <p v-if="subtitle" class="hero-subtitle mt-3 animate-fade-up delay-1">
                {{ subtitle }}
            </p>
            <p v-if="description" class="lead col-lg-8 mx-auto mb-4 animate-fade-up delay-1">
                {{ description }}
            </p>
            <div class="d-flex justify-content-center gap-3 mt-4 animate-fade-up delay-2">
                <RouterLink v-for="(btn, index) in buttons" :key="index" :to="btn.to" :class="['btn btn-lg px-4', btn.class]">
                    {{ btn.label }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PageHero',
    props: {
        title: { type: String, default: '' },
        subtitle: { type: String, default: '' },
        description: { type: String, default: '' },
        bgImage: { type: String, required: true },
        customClass: { type: String, default: '' },
        buttons: { type: Array, default: () => [] },
        useHomeOverlay: { type: Boolean, default: false },
    },
    computed: {
        heroStyle() {
            const bgPath = `url(${this.bgImage})`
            if (this.useHomeOverlay) {
                return {
                    // We use the shorthand but ensure the CSS class handles the 'fixed' part
                    background: `linear-gradient(rgba(101, 73, 32, 0.49), rgba(22, 15, 46, 0.8)), ${bgPath} center / cover no-repeat`,
                }
            }
            return {
                backgroundImage: bgPath,
            }
        },
    },
}
</script>

<style scoped>
.hero-section {
    position: relative;
    min-height: 600px;
    /* This creates the Parallax effect */
    background-attachment: fixed !important;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden; /* Keeps everything tidy */
}

/* Use 90vh specifically for Home if needed via customClass */
.height-90 {
    min-height: 90vh;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
}

.hero-content {
    max-width: 800px;
    z-index: 2;
}

.hero-title {
    font-size: 3.5rem;
    letter-spacing: 1px;
}

.hero-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 500px;
        background-attachment: scroll !important;
    }
    .hero-title {
        font-size: 2rem;
    }
}

.btn {
    font-size: 1rem;
    padding: 10px 28px;
    border-radius: 50px;
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
