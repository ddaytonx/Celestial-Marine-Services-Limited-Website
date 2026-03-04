<template>
    <section class="hero-section text-white text-center d-flex align-items-center" :class="customClass" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="overlay"></div>
        <div class="container position-relative hero-content">
            <h1 class="display-3 fw-bold mb-3 animate-fade-up">{{ title }}</h1>
            <p class="lead col-lg-8 mx-auto mb-4 animate-fade-up delay-1">{{ description }}</p>

            <div class="d-flex justify-content-center gap-3 animate-fade-up delay-2">
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
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bgImage: {
            type: String,
            required: true,
        },
        customClass: {
            type: String,
            default: '',
        },
        buttons: {
            type: Array,
            default: () => [], // Array of objects: { label: 'Text', to: '/path', class: 'custom-btn-class' }
        },
    },
}
</script>

<style scoped>
.hero-section {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    min-height: 600px;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
}

/* ANIMATION */
.animate-fade-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 1s forwards;
}

.delay-1 {
    animation-delay: 0.3s;
}

.delay-2 {
    animation-delay: 0.6s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Include custom button style here if it's strictly used in heroes,
   or keep it global. Duplicated here to ensure it works standalone. */
.btn-secondary-custom {
    background: linear-gradient(45deg, #c6a75e, #e2c675);
    border: none;
    color: white;
    transition: 0.3s ease;
}

.btn-secondary-custom:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 500px;
    }
}
</style>
