<script setup>
/* FEATURES */
const features = [
    {
        icon: '⚙️',
        title: 'Technical Expertise',
        description: 'Extensive maritime engineering and technical consultancy services delivered by seasoned industry professionals.',
        delay: 100,
    },
    {
        icon: '🌍',
        title: 'Global Project Execution',
        description: 'Expert management of maritime operating processes with emphasis on safety, efficiency, and regulatory compliance.',
        delay: 200,
    },
    {
        icon: '🛠️',
        title: 'Tailored Marine Solutions',
        description: 'Customized solutions aligned with operational objectives, ensuring reliable and sustainable performance.',
        delay: 300,
    },
]

/* SERVICES */
const services = [
    {
        icon: '🚢',
        title: 'Marine Engineering',
        description: 'Advanced engineering solutions tailored to marine operations.',
        delay: 100,
    },
    {
        icon: '⚓',
        title: 'Project Management',
        description: 'End-to-end project oversight ensuring timely delivery.',
        delay: 200,
    },
    {
        icon: '📋',
        title: 'Technical Assessments',
        description: 'Independent audits, inspections, and certifications.',
        delay: 300,
    },
    {
        icon: '🛡️',
        title: 'Compliance & Advisory',
        description: 'Regulatory guidance and risk mitigation strategies.',
        delay: 400,
    },
]
</script>

<template>
    <!-- HERO -->
    <section class="hero-section d-flex align-items-center text-white text-center">
        <div class="container">
            <div class="hero-content mx-auto" data-aos="fade-up">
                <h1 class="hero-title">
                    Trusted Maritime <br />
                    <span class="text-gold">Technical & Project Experts</span>
                </h1>

                <p class="hero-subtitle mt-3">Technical solutions · Global project delivery · Strategic marine consulting</p>

                <div class="d-flex justify-content-center gap-3 mt-4">
                    <router-link to="/about" class="btn btn-gold"> About Us </router-link>
                    <router-link to="/services" class="btn btn-outline-light btn-rounded"> Our Services </router-link>
                </div>
            </div>
        </div>
    </section>

    <!-- WHAT SETS US APART -->
    <section class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="section-title mb-5">What Sets Us Apart</h2>

            <div class="row g-4">
                <div v-for="(item, index) in features" :key="index" class="col-md-4" data-aos="fade-up" :data-aos-delay="item.delay">
                    <div class="card custom-card h-100 p-4">
                        <div class="icon mb-3">{{ item.icon }}</div>
                        <h5>{{ item.title }}</h5>
                        <p class="text-muted">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED SERVICES -->
    <section class="py-5 featured-services text-white text-center">
        <div class="container">
            <h2 class="section-title-light mb-5">Featured Services</h2>

            <div class="row g-4">
                <div v-for="(service, index) in services" :key="index" class="col-md-3" data-aos="zoom-in" :data-aos-delay="service.delay">
                    <div class="service-card p-4 h-100">
                        <div class="icon mb-3">{{ service.icon }}</div>
                        <h6>{{ service.title }}</h6>
                        <p>{{ service.description }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <router-link to="/services" class="btn btn-gold"> View All Services </router-link>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section text-center text-white d-flex align-items-center">
        <div class="container" data-aos="fade-up">
            <h2 class="mb-4">Partner With Excellence on the Water</h2>
            <router-link to="/contact" class="btn btn-gold btn-lg"> Contact Our Team </router-link>
        </div>
    </section>
</template>

<style scoped>
/* HERO */
.hero-section {
    min-height: 90vh;
    background:
        linear-gradient(#6549207d, #160f2e),
        url('/assets/home-hero.jpg') center / cover no-repeat;
    /* linear-gradient(rgba(15, 30, 46, 0.75), rgba(15, 30, 46, 0.75)),url('/assets/home-hero.png') center / cover no-repeat; */
    background-attachment: fixed;
}

.hero-content {
    max-width: 750px;
}

.hero-title {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 1px;
}

.hero-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}

.text-gold {
    color: var(--app-gold);
}

/* SECTION TITLES */
.section-title,
.section-title-light {
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
}

.section-title::after,
.section-title-light::after {
    content: '';
    width: 60px;
    height: 3px;
    background: var(--app-gold);
    display: block;
    margin: 12px auto 0;
}

/* CARDS */
.custom-card {
    border: none;
    border-radius: 12px;
    transition: all 0.35s ease;
    box-shadow: var(--shadow-soft);
}

.custom-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* SERVICE CARDS */
.featured-services {
    background:
        linear-gradient(rgba(15, 30, 46, 0.85), rgba(15, 30, 46, 0.85)),
        url('/assets/home-sea-texture.jpg') center / cover no-repeat;
    background-attachment: fixed;
}

.service-card {
    background: rgba(255, 255, 255, 0.95);
    color: #1f2d3d;
    border-radius: 12px;
    transition: all 0.35s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* CTA */
.cta-section {
    min-height: 45vh;
    background:
        linear-gradient(rgba(15, 30, 46, 0.85), rgba(15, 30, 46, 0.85)),
        url('/assets/home-hero.png') center / cover no-repeat;
    background-attachment: fixed;
}

.cta-section h2 {
    font-size: 2.2rem;
    font-weight: 600;
}

/* BUTTONS */
.btn-gold {
    background: linear-gradient(135deg, var(--app-gold), var(--color-secondary-dark));
    color: #fff;
    border: none;
    padding: 10px 28px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-gold:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.btn-rounded {
    border-radius: 50px;
}

/* ICON */
.icon {
    font-size: 3.5rem;
    transition: transform 0.3s ease;
}

.custom-card:hover .icon,
.service-card:hover .icon {
    transform: scale(1.1);
}

/* MOBILE FIX */
@media (max-width: 768px) {
    .hero-section,
    .featured-services,
    .cta-section {
        background-attachment: scroll;
    }

    .hero-title {
        font-size: 2rem;
    }
}
</style>
