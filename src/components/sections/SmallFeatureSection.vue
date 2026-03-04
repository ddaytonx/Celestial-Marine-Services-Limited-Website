<template>
    <section class="process-section py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5 reveal-section">
                <h2 class="fw-bold text-primary-custom">{{ title }}</h2>
                <p v-if="description" class="text-muted">{{ description }}</p>
            </div>

            <div class="row g-4 text-center">
                <div class="col-lg-3 col-md-6" v-for="(item, i) in items" :key="i">
                    <div class="process-card reveal-section">
                        <div class="process-image">
                            <img :src="item.image" :alt="item.title" />
                        </div>
                        <h5 class="fw-bold mt-4 text-gold-custom">
                            {{ item.title }}
                        </h5>
                        <p class="text-muted mt-2">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SmallFeatureSection',
    props: {
        title: { type: String, required: true },
        description: { type: String, default: '' },
        items: { type: Array, required: true },
    },
}
</script>

<style scoped>
.process-card {
    background: white;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: 0.4s ease;
}
.process-card:hover {
    transform: translateY(-10px);
}
.process-image {
    height: 160px;
    overflow: hidden;
    border-radius: 15px;
}
.process-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
}
.process-card:hover img {
    transform: scale(1.1);
}
</style>
