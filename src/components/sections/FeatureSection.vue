<template>
    <section class="py-5 bg-light reveal-section">
        <div class="container">
            <div v-if="title" class="text-center mb-5">
                <h2 class="fw-bold text-primary-custom">{{ title }}</h2>
            </div>

            <div class="row g-4">
                <div class="col-md-4" v-for="(item, i) in items" :key="i">
                    <div class="value-card h-100">
                        <div class="image-wrapper">
                            <img :src="item.image" :alt="item.title" />
                        </div>
                        <div class="p-4 text-center">
                            <h5 class="fw-bold text-gold-custom mb-3">
                                {{ item.title }}
                            </h5>
                            <p class="text-muted">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeatureSection',
    props: {
        title: { type: String, default: '' },
        items: { type: Array, required: true },
    },
}
</script>

<style scoped>
.value-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    transition: 0.4s ease;
}
.value-card:hover {
    transform: translateY(-10px);
}
.image-wrapper {
    overflow: hidden;
    height: 220px;
}
.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease;
}
.value-card:hover img {
    transform: scale(1.1);
}
</style>
